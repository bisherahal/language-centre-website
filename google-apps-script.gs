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

// action=spots (default) → spot counts
// action=reviews         → reviews from "Reviews" sheet
// action=gallery         → photos from "Gallery" sheet
function doGet(e) {
  const action = (e && e.parameter && e.parameter.action) || "spots";
  if (action === "reviews") return doGetReviews();
  if (action === "gallery") return doGetGallery();
  return doGetSpots();
}

function doGetSpots() {
  try {
    const ss    = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getSheetByName("Hexagon Spots");
    if (!sheet) return jsonResponse({ error: "Sheet 'Hexagon Spots' not found" });

    const data = sheet.getDataRange().getValues();
    const spots = [];
    for (let i = 1; i < data.length; i++) {
      const row = data[i];
      if (!row[0]) continue;
      spots.push({ id: String(row[0]).trim(), taken: Number(row[1]) || 0, total: Number(row[2]) || 0 });
    }
    return jsonResponse(spots);
  } catch (e) {
    return jsonResponse({ error: e.message });
  }
}

// ============================================================
// REVIEWS — reads from "Reviews" sheet
//
// SHEET SETUP — create a sheet named "Reviews":
//   Row 1 (header): Name | Initials | Color | Stars | Text
//   Rows 2+: one review per row
//   Example:
//     Bakr Abu Rumman | BA | #002395 | 5 | مركز مميز من كل النواحي...
//     Alia Tamer      | AT | #7c3aed | 5 | احلى و احسن مركز...
//
// Color: any hex color for the avatar background
// Stars: number 1-5
// To add a new review: just paste a new row — it appears on the website instantly
// ============================================================
function doGetReviews() {
  try {
    const ss    = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getSheetByName("Reviews");
    if (!sheet) return jsonResponse([]);

    const data = sheet.getDataRange().getValues();
    const reviews = [];
    for (let i = 1; i < data.length; i++) {
      const [name, initials, color, stars, text] = data[i];
      if (!name || !text) continue;
      reviews.push({
        name:     String(name).trim(),
        initials: String(initials || name.split(" ").map(w=>w[0]).join("").slice(0,2)).trim().toUpperCase(),
        color:    String(color || "#002395").trim(),
        stars:    Number(stars) || 5,
        text:     String(text).trim()
      });
    }
    return jsonResponse(reviews);
  } catch (e) {
    return jsonResponse({ error: e.message });
  }
}

// ============================================================
// GALLERY — reads from "Gallery" sheet
//
// SHEET SETUP — create a sheet named "Gallery":
//   Row 1 (header): ImageURL | Caption
//   Rows 2+: one photo per row
//   Example:
//     https://drive.google.com/thumbnail?id=ABC123&sz=w800 | English Class — March 2026
//     https://drive.google.com/thumbnail?id=XYZ456&sz=w800 | French Beginner Group
//
// ImageURL: Google Drive thumbnail link (see instructions in website)
// Caption: optional text shown on hover
// To add a photo: paste a new row — it appears on the website instantly
// ============================================================
function doGetGallery() {
  try {
    const ss    = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getSheetByName("Gallery");
    if (!sheet) return jsonResponse([]);

    const data = sheet.getDataRange().getValues();
    const photos = [];
    for (let i = 1; i < data.length; i++) {
      const [url, caption] = data[i];
      if (!url) continue;
      photos.push({
        url:     String(url).trim(),
        caption: String(caption || "").trim()
      });
    }
    return jsonResponse(photos);
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

// ============================================================
// CALENDAR BULK CREATOR
// Reads "Schedule" sheet and creates all events in Google Calendar.
//
// SHEET SETUP — create a sheet named "Schedule" with these columns:
//   A: Language    e.g.  French
//   B: Level       e.g.  A1/1
//   C: TimeLabel   e.g.  Morning   (shown on website card)
//   D: Days        e.g.  Mon,Wed   (comma-separated, English 3-letter)
//   E: StartTime   e.g.  10:00     (24h format)
//   F: DurationMins e.g. 90
//   G: FirstDate   e.g.  2026-03-16
//   H: LastDate    e.g.  2026-06-30
//
// HOW TO RUN:
//   1. Fill in the Schedule sheet (one row per course group)
//   2. Open Apps Script → select createCalendarEvents → click Run
//   3. First run: it will ask for Calendar permission → Allow
//   4. Done — all events appear in your Google Calendar
//
// SAFE TO RE-RUN: it skips events that already exist (same title + date)
// ============================================================

const CALENDAR_ID = "centrehexagon@gmail.com"; // Your calendar email

function createCalendarEvents() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName("Schedule");
  if (!sheet) { Logger.log("❌ No sheet named 'Schedule' found."); return; }

  const cal = CalendarApp.getCalendarById(CALENDAR_ID);
  if (!cal) { Logger.log("❌ Calendar not found: " + CALENDAR_ID); return; }

  const dayMap = { Sun:0, Mon:1, Tue:2, Wed:3, Thu:4, Fri:5, Sat:6 };
  const data = sheet.getDataRange().getValues();

  let created = 0, skipped = 0;

  for (let i = 1; i < data.length; i++) {
    const [language, level, timeLabel, daysStr, startTimeStr, durationMins, firstDateVal, lastDateVal] = data[i];
    if (!language || !level || !firstDateVal || !lastDateVal) continue;

    const title = `${language} - ${level} | ${timeLabel || "Class"}`;
    const days = String(daysStr).split(",").map(d => dayMap[d.trim()]).filter(d => d !== undefined);
    const [hh, mm] = String(startTimeStr).split(":").map(Number);
    const dur = Number(durationMins) || 60;

    const firstDate = new Date(firstDateVal);
    const lastDate  = new Date(lastDateVal);

    // Walk from firstDate to lastDate, creating an event on each matching weekday
    const cursor = new Date(firstDate);
    while (cursor <= lastDate) {
      if (days.includes(cursor.getDay())) {
        const start = new Date(cursor);
        start.setHours(hh, mm, 0, 0);
        const end = new Date(start.getTime() + dur * 60000);

        // Check if event already exists (same title, same start time)
        const existing = cal.getEvents(start, end, { search: title });
        if (existing.length === 0) {
          cal.createEvent(title, start, end);
          created++;
        } else {
          skipped++;
        }
      }
      cursor.setDate(cursor.getDate() + 1);
    }
  }

  Logger.log(`✅ Done — Created: ${created}, Skipped (already exist): ${skipped}`);
  SpreadsheetApp.getUi().alert(`✅ Done!\nCreated: ${created} events\nSkipped: ${skipped} (already existed)`);
}

function jsonResponse(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}
