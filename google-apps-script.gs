// ============================================================
// HEXAGON CENTRE — Google Apps Script
// Handles two things:
//   GET  → returns live spot counts from "Hexagon Spots" sheet
//   POST → saves student enrollment to "Leads" sheet
//
// HOW TO DEPLOY (one time, ~5 min):
//   1. Open your Google Sheet → Extensions → Apps Script
//   2. Delete all existing code, paste this entire file
//   3. Click Save (floppy disk icon)
//   4. Click Deploy → New deployment
//   5. Type: Web app
//   6. Execute as: Me
//   7. Who has access: Anyone
//   8. Click Deploy → Authorize → Allow
//   9. Copy the Web App URL
//  10. Paste it in courses.js as GOOGLE_SCRIPT_URL
//
// SHEET SETUP:
//   Sheet 1 named "Hexagon Spots":
//     Row 1: CourseId | TakenSpots | TotalSpots
//     Rows 2+: one row per course (use the id from courses.js)
//     Example:  english-a | 5 | 8
//               english-b | 2 | 8
//               french    | 3 | 8
//               arabic    | 2 | 8
//               spanish   | 6 | 8
//               italian   | 4 | 8
//               dutch     | 1 | 8
//               translation | 0 | 0
//
//   Sheet 2 named "Leads":
//     Row 1: Date | Name | Phone | Email | Course | CourseId | Subtitle | Level | Schedule | Notes | Lang
//     (This sheet is created automatically on first enrollment)
// ============================================================

function doGet() {
  try {
    const ss    = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getSheetByName("Hexagon Spots");

    if (!sheet) {
      return jsonResponse({ error: "Sheet 'Hexagon Spots' not found" });
    }

    const data = sheet.getDataRange().getValues();
    const spots = [];

    // Skip header row (index 0)
    for (let i = 1; i < data.length; i++) {
      const row = data[i];
      if (!row[0]) continue; // skip empty rows
      spots.push({
        id:    String(row[0]).trim(),
        taken: Number(row[1]) || 0,
        total: Number(row[2]) || 0
      });
    }

    return jsonResponse(spots);
  } catch (e) {
    return jsonResponse({ error: e.message });
  }
}

function doPost(e) {
  try {
    const payload = JSON.parse(e.postData.contents);
    const ss      = SpreadsheetApp.getActiveSpreadsheet();

    // Auto-create Leads sheet if it doesn't exist
    let leads = ss.getSheetByName("Leads");
    if (!leads) {
      leads = ss.insertSheet("Leads");
      leads.appendRow([
        "Date", "Name", "Phone", "Email",
        "Course", "CourseId", "Subtitle",
        "Level", "Schedule", "Notes", "Lang"
      ]);
    }

    leads.appendRow([
      payload.date     || new Date().toISOString(),
      payload.name     || "",
      payload.phone    || "",
      payload.email    || "",
      payload.course   || "",
      payload.courseId || "",
      payload.subtitle || "",
      payload.level    || "",
      payload.schedule || "",
      payload.notes    || "",
      payload.lang     || "en"
    ]);

    return jsonResponse({ status: "ok" });
  } catch (e) {
    return jsonResponse({ error: e.message });
  }
}

function jsonResponse(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}
