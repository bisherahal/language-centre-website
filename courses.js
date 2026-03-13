// ============================================================
// EDIT YOUR COURSES HERE
//
// OPTIONAL fields per course:
//   id           — unique ID used to match Google Sheets spot counts.
//                  Required when you have multiple groups of the same language.
//   subtitleEn / subtitleAr — shown under the name (e.g. "Group A · Morning")
//   popular      — shows a "Popular" badge
//   isService    — marks as a service (Translation), shows WhatsApp button
//
// TO ADD A SECOND GROUP: copy a block, change id, subtitle, teacher, spots.
// ============================================================
const courses = [
  {
    id: "english",
    flag: "🇬🇧", flagCode: "gb",
    nameEn: "English",
    nameAr: "الإنجليزية",
    descEn: "Master English for work, travel, and academic goals. IELTS preparation available.",
    descAr: "أتقن الإنجليزية للعمل والسفر والأهداف الأكاديمية. تحضير IELTS متاح.",
    levels: ["Kids (5-15 yrs)", "English", "IELTS & TOEFL", "Conversation"],
    levelsAr: ["أطفال (5-15 سنة)", "إنجليزية", "IELTS و TOEFL", "محادثة"],
    teacher: { initials: "SM", nameEn: "Sarah M.", nameAr: "سارة م.", expEn: "8 yrs exp.", expAr: "خبرة 8 سنوات", avatarColor: "#002395" },
    totalSpots: 8,
    takenSpots: 5,
    color: "blue",
    popular: true
  },
  {
    id: "french",
    flag: "🇫🇷", flagCode: "fr",
    nameEn: "French",
    nameAr: "الفرنسية",
    descEn: "Learn French for travel, culture, or DELF/DALF certification.",
    descAr: "تعلم الفرنسية للسفر أو الثقافة أو شهادة DELF/DALF.",
    levels: ["Kids (5-15 yrs)", "French", "DELF", "Peacekeeping (French)"],
    levelsAr: ["أطفال (5-15 سنة)", "فرنسية", "DELF", "تدريب حفظ السلام (فرنسي)"],
    teacher: { initials: "JL", nameEn: "Jean L.", nameAr: "جان ل.", expEn: "6 yrs exp.", expAr: "خبرة 6 سنوات", avatarColor: "#ED2939" },
    totalSpots: 8,
    takenSpots: 3,
    color: "indigo"
  },
  {
    id: "arabic",
    flag: "🇸🇦", flagCode: "sa",
    nameEn: "Arabic",
    nameAr: "العربية",
    descEn: "Modern Standard Arabic and Quranic Arabic for non-native speakers.",
    descAr: "العربية الفصحى والعربية القرآنية لغير الناطقين بها.",
    levels: ["Beginner", "Intermediate", "Advanced", "Quran Arabic"],
    levelsAr: ["مبتدئ", "متوسط", "متقدم", "عربية قرآنية"],
    teacher: { initials: "AM", nameEn: "Ahmad M.", nameAr: "أحمد م.", expEn: "10 yrs exp.", expAr: "خبرة 10 سنوات", avatarColor: "#16a34a" },
    totalSpots: 8,
    takenSpots: 2,
    color: "green"
  },
  {
    id: "spanish",
    flag: "🇪🇸", flagCode: "es",
    nameEn: "Spanish",
    nameAr: "الإسبانية",
    descEn: "Conversational and academic Spanish for all levels.",
    descAr: "الإسبانية المحادثاتية والأكاديمية لجميع المستويات.",
    levels: ["Beginner", "Intermediate", "Advanced"],
    levelsAr: ["مبتدئ", "متوسط", "متقدم"],
    teacher: { initials: "CR", nameEn: "Carlos R.", nameAr: "كارلوس ر.", expEn: "5 yrs exp.", expAr: "خبرة 5 سنوات", avatarColor: "#ca8a04" },
    totalSpots: 8,
    takenSpots: 6,
    color: "yellow"
  },
  {
    id: "italian",
    flag: "🇮🇹", flagCode: "it",
    nameEn: "Italian",
    nameAr: "الإيطالية",
    descEn: "Learn Italian for travel, culture, or business.",
    descAr: "تعلم الإيطالية للسفر أو الثقافة أو الأعمال.",
    levels: ["Beginner", "Intermediate"],
    levelsAr: ["مبتدئ", "متوسط"],
    teacher: { initials: "LB", nameEn: "Laura B.", nameAr: "لورا ب.", expEn: "5 yrs exp.", expAr: "خبرة 5 سنوات", avatarColor: "#dc2626" },
    totalSpots: 8,
    takenSpots: 4,
    color: "red"
  },
  {
    id: "dutch",
    flag: "🇳🇱", flagCode: "nl",
    nameEn: "Dutch",
    nameAr: "الهولندية",
    descEn: "Dutch language courses for immigration, work, or study in the Netherlands.",
    descAr: "دورات الهولندية للهجرة أو العمل أو الدراسة في هولندا.",
    levels: ["Beginner", "Intermediate"],
    levelsAr: ["مبتدئ", "متوسط"],
    teacher: { initials: "MV", nameEn: "Mark V.", nameAr: "مارك ف.", expEn: "4 yrs exp.", expAr: "خبرة 4 سنوات", avatarColor: "#ea7c18" },
    totalSpots: 8,
    takenSpots: 1,
    color: "orange"
  },
  {
    id: "translation",
    flag: "🌍",
    nameEn: "Translation",
    nameAr: "الترجمة",
    descEn: "Certified professional translation for legal, medical, academic, and business documents.",
    descAr: "ترجمة احترافية معتمدة للوثائق القانونية والطبية والأكاديمية والتجارية.",
    levels: ["All language pairs", "Certified docs", "Business"],
    levelsAr: ["جميع اللغات", "وثائق معتمدة", "أعمال"],
    teacher: { initials: "HC", nameEn: "Hexagon Team", nameAr: "فريق إكزاكون", expEn: "Expert translators", expAr: "مترجمون متخصصون", avatarColor: "#0d9488" },
    totalSpots: null,
    takenSpots: null,
    color: "teal",
    isService: true
  }
];

const colorMap = {
  blue:   { border: "border-blue-200",   text: "text-blue-700",   badge: "bg-blue-100",   bar: "#002395" },
  indigo: { border: "border-indigo-200", text: "text-indigo-700", badge: "bg-indigo-100", bar: "#4f46e5" },
  green:  { border: "border-green-200",  text: "text-green-700",  badge: "bg-green-100",  bar: "#16a34a" },
  yellow: { border: "border-yellow-200", text: "text-yellow-700", badge: "bg-yellow-100", bar: "#ca8a04" },
  red:    { border: "border-red-200",    text: "text-red-700",    badge: "bg-red-100",    bar: "#dc2626" },
  orange: { border: "border-orange-200", text: "text-orange-700", badge: "bg-orange-100", bar: "#ea7c18" },
  purple: { border: "border-purple-200", text: "text-purple-700", badge: "bg-purple-100", bar: "#7c3aed" },
  teal:   { border: "border-teal-200",   text: "text-teal-700",   badge: "bg-teal-100",   bar: "#0d9488" }
};

const WHATSAPP_NUMBER = "962796831961";

// Returns an <img> flag for courses with a flagCode, emoji fallback otherwise
function flagImg(course, size = "card") {
  if (!course.flagCode) return `<span class="text-4xl">${course.flag}</span>`;
  const dim = size === "hero" ? "w-16 h-11" : size === "schedule" ? "w-7 h-5" : "w-10 h-7";
  return `<img src="https://flagcdn.com/w80/${course.flagCode}.png" alt="${course.nameEn}" class="${dim} object-cover rounded-sm shadow-sm" />`;
}

// ============================================================
// GOOGLE CALENDAR — class schedule
// ============================================================
const GOOGLE_CALENDAR_ID      = "centrehexagon@gmail.com";
const GOOGLE_CALENDAR_API_KEY = "AIzaSyDJgMXba4cXhp5PSSXUxvReyKOXKi8baMk";

// ============================================================
// GOOGLE APPS SCRIPT — instant spot counts + enrollment saves
// Setup (one time, ~10 min):
//   1. Go to script.google.com → New project → paste the code from
//      google-apps-script.gs → save → Deploy → New deployment
//      → Web app → Execute as "Me" → Anyone can access → Deploy
//   2. Copy the web app URL and paste it below
// ============================================================
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwus4Gyn1876BG_ohT6bQwz2CDlpJuFBd8voHW2eyC2riYD_v4BL1NLQIqiCGyZB9S3bQ/exec"
let _cachedScheduleEvents = null;
let _activeFilter = "all";

// ============================================================
// SPOT COUNTS — reads instantly from Google Apps Script (no cache delay)
// ============================================================
// Shared aggregation used by both index.html and course.html
// Sheet rows like "english-a" + "english-b" are summed into the "english" course card
function applySpotCounts(spots) {
  if (!Array.isArray(spots)) return false;
  const aggregated = {};
  spots.forEach(({ id, taken, total }) => {
    if (isNaN(taken) || isNaN(total)) return;
    const sheetId = String(id).toLowerCase();
    const course = courses.find(c => {
      const cid = (c.id || c.nameEn.toLowerCase());
      return cid === sheetId || sheetId.startsWith(cid + "-");
    });
    if (!course) return;
    const key = course.id || course.nameEn.toLowerCase();
    if (!aggregated[key]) aggregated[key] = { course, taken: 0, total: 0 };
    aggregated[key].taken += parseInt(taken, 10);
    aggregated[key].total += parseInt(total, 10);
  });
  let changed = false;
  Object.values(aggregated).forEach(({ course, taken, total }) => {
    course.takenSpots = taken;
    course.totalSpots = total;
    changed = true;
  });
  return changed;
}

async function fetchSpotCounts() {
  if (GOOGLE_SCRIPT_URL.startsWith("[")) return;
  try {
    const res = await fetch(GOOGLE_SCRIPT_URL);
    if (!res.ok) return;
    const spots = await res.json();
    const changed = applySpotCounts(spots);
    if (changed && _cachedScheduleEvents !== null) {
      renderSchedule(_cachedScheduleEvents);
    }
  } catch {
    // Silently fall back to hardcoded values
  }
}

// ============================================================
// FILTER
// ============================================================
function filterCourses(lang) {
  _activeFilter = lang;

  document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.classList.toggle("active-filter", btn.dataset.filter === lang);
  });

  document.querySelectorAll("#courses-grid > div[data-lang]").forEach(card => {
    card.style.display = (lang === "all" || card.dataset.lang === lang) ? "" : "none";
  });
}

// ============================================================
// COURSE CARDS
// ============================================================
function buildCourseCards() {
  const grid = document.getElementById("courses-grid");
  if (!grid) return;

  grid.innerHTML = courses.map((course) => {
    const c = colorMap[course.color] || colorMap.blue;

    const popularBadge = course.popular
      ? `<span class="absolute top-3 right-3 bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-0.5 rounded-full">
           <span class="lang-en">Popular</span><span class="lang-ar">الأكثر طلباً</span>
         </span>`
      : "";

    const subtitleHTML = (course.subtitleEn || course.subtitleAr)
      ? `<div class="text-xs mt-0.5 ${c.text} font-medium">
           <span class="lang-en">${course.subtitleEn || ""}</span>
           <span class="lang-ar">${course.subtitleAr || ""}</span>
         </div>`
      : "";

    const actionBtn = course.isService
      ? `<a href="https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello, I need a translation quote.')}" target="_blank"
           class="mt-auto flex items-center justify-center gap-1.5 bg-green-500 hover:bg-green-600 text-white text-xs font-bold px-3 py-2.5 rounded-xl transition-colors w-full">
          <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          <span class="lang-en">Get Free Quote</span>
          <span class="lang-ar">احصل على عرض مجاني</span>
        </a>`
      : `<a href="course.html?id=${course.id}"
           class="mt-auto flex items-center justify-center gap-1.5 text-white text-xs font-bold px-3 py-2.5 rounded-xl transition-colors w-full cursor-pointer"
           style="background:#002395" onmouseover="this.style.background='#001a6e'" onmouseout="this.style.background='#002395'">
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/></svg>
          <span class="lang-en">View & Enroll</span>
          <span class="lang-ar">عرض والتسجيل</span>
        </a>`;

    return `
      <div class="relative bg-white rounded-2xl p-5 shadow-sm card-hover border ${c.border} flex flex-col gap-3" data-lang="${course.nameEn.toLowerCase()}">
        ${popularBadge}
        <div class="flex items-center gap-3">
          <div class="shrink-0">${flagImg(course, 'card')}</div>
          <div>
            <h3 class="font-bold text-gray-900 text-base leading-tight">
              <span class="lang-en">${course.nameEn}</span>
              <span class="lang-ar">${course.nameAr}</span>
            </h3>
            ${subtitleHTML}
          </div>
        </div>

        <p class="text-gray-500 text-xs leading-relaxed">
          <span class="lang-en">${course.descEn}</span>
          <span class="lang-ar">${course.descAr}</span>
        </p>

        <div class="flex items-center gap-2 bg-gray-50 rounded-xl px-3 py-2">
          <div class="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0"
               style="background:${course.teacher.avatarColor}">${course.teacher.initials}</div>
          <div>
            <div class="text-xs font-semibold text-gray-800">
              <span class="lang-en">${course.teacher.nameEn}</span>
              <span class="lang-ar">${course.teacher.nameAr}</span>
            </div>
            <div class="text-xs text-gray-400">
              <span class="lang-en">${course.teacher.expEn}</span>
              <span class="lang-ar">${course.teacher.expAr}</span>
            </div>
          </div>
        </div>

        ${actionBtn}
      </div>`;
  }).join("");
}

// ============================================================
// ENROLLMENT MODAL
// ============================================================
function openEnrollModal(courseIndex) {
  const course = courses[courseIndex];
  const isRTL = document.getElementById("html-root").getAttribute("dir") === "rtl";
  const modal = document.getElementById("enroll-modal");

  // Reset to form state (hide success, show form)
  document.getElementById("enroll-form-body").classList.remove("hidden");
  document.getElementById("enroll-success").classList.add("hidden");

  // Set title
  const courseName = isRTL ? course.nameAr : course.nameEn;
  const subtitle = isRTL ? (course.subtitleAr || "") : (course.subtitleEn || "");
  document.getElementById("modal-title").textContent =
    isRTL ? `التسجيل في ${courseName}` : `Enroll in ${courseName}`;
  const subtitleEl = document.getElementById("modal-subtitle");
  subtitleEl.textContent = subtitle;
  subtitleEl.classList.toggle("hidden", !subtitle);

  // Fill level options
  const levels = isRTL ? course.levelsAr : course.levels;
  document.getElementById("enroll-level").innerHTML =
    levels.map(l => `<option value="${l}">${l}</option>`).join("");

  // Reset submit button
  const btn = document.getElementById("enroll-submit-btn");
  btn.disabled = false;
  btn.innerHTML = `<span class="lang-en">Submit Registration</span><span class="lang-ar">إرسال التسجيل</span>`;

  // Clear fields
  ["enroll-name","enroll-phone","enroll-email","enroll-notes"].forEach(id => {
    document.getElementById(id).value = "";
  });

  modal.dataset.courseIndex = courseIndex;
  modal.classList.remove("hidden");
  modal.classList.add("flex");
  document.body.style.overflow = "hidden";
}

function closeEnrollModal() {
  const modal = document.getElementById("enroll-modal");
  modal.classList.add("hidden");
  modal.classList.remove("flex");
  document.body.style.overflow = "";
}

function submitEnrollment() {
  const modal = document.getElementById("enroll-modal");
  const courseIndex = modal.dataset.courseIndex;
  const course = courses[courseIndex];
  const isRTL = document.getElementById("html-root").getAttribute("dir") === "rtl";

  const name     = document.getElementById("enroll-name").value.trim();
  const phone    = document.getElementById("enroll-phone").value.trim();
  const email    = document.getElementById("enroll-email").value.trim();
  const level    = document.getElementById("enroll-level").value;
  const schedule = document.getElementById("enroll-schedule").value;
  const notes    = document.getElementById("enroll-notes").value.trim();

  if (!name || !phone) {
    alert(isRTL ? "يرجى إدخال الاسم ورقم الهاتف" : "Please enter your name and phone number.");
    return;
  }

  // Show loading state
  const btn = document.getElementById("enroll-submit-btn");
  btn.disabled = true;
  btn.innerHTML = `<span class="lang-en">Sending…</span><span class="lang-ar">جارٍ الإرسال…</span>`;

  // Find the exact spot row ID so Apps Script can increment the right row
  const spotMatch = (typeof findLevelSpots === "function") ? findLevelSpots(course.id, level) : null;
  const spotId = spotMatch ? spotMatch.id : (course.id || course.nameEn);

  const payload = {
    name, phone, email,
    course: course.nameEn,
    courseId: spotId,
    subtitle: course.subtitleEn || "",
    level, schedule, notes,
    date: new Date().toISOString(),
    lang: isRTL ? "ar" : "en"
  };

  // Send to Google Apps Script — no-cors so we can't read the response,
  // but data IS saved. Show success immediately (optimistic).
  if (!GOOGLE_SCRIPT_URL.startsWith("[")) {
    fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    }).catch(() => {});
  }

  // Show success state
  document.getElementById("enroll-form-body").classList.add("hidden");
  document.getElementById("enroll-success").classList.remove("hidden");

  // 🎉 Confetti burst (no external library)
  _launchConfetti();
}

function _launchConfetti() {
  const canvas = document.createElement("canvas");
  canvas.style.cssText = "position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:9999";
  document.body.appendChild(canvas);
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const colors = ["#002395","#ED2939","#ffffff","#f59e0b","#10b981","#8b5cf6"];
  const pieces = Array.from({ length: 150 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height - canvas.height,
    w: 8 + Math.random() * 8,
    h: 5 + Math.random() * 5,
    color: colors[Math.floor(Math.random() * colors.length)],
    vx: (Math.random() - 0.5) * 4,
    vy: 2 + Math.random() * 4,
    angle: Math.random() * 360,
    spin: (Math.random() - 0.5) * 6
  }));

  let frame;
  const start = performance.now();
  function draw(now) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    pieces.forEach(p => {
      p.x += p.vx; p.y += p.vy; p.angle += p.spin;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.angle * Math.PI / 180);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      ctx.restore();
    });
    if (now - start < 3000) {
      frame = requestAnimationFrame(draw);
    } else {
      cancelAnimationFrame(frame);
      canvas.remove();
    }
  }
  requestAnimationFrame(draw);
}

// ============================================================
// UPCOMING CLASSES — Google Calendar integration
// ============================================================
function renderSchedule(events) {
  const container = document.getElementById("schedule-grid");
  if (!container) return;

  const isRTL = document.getElementById("html-root").getAttribute("dir") === "rtl";
  const locale = isRTL ? "ar-JO" : "en-GB";
  const dayNamesEn = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
  const dayNamesAr = ["الأحد","الاثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"];

  if (!events || events.length === 0) {
    container.innerHTML = `
      <div class="text-center py-10 text-gray-400 text-sm">
        <span class="lang-en">No upcoming classes scheduled. <a href="https://wa.me/${WHATSAPP_NUMBER}" target="_blank" class="underline text-[#002395]">Contact us</a> to find available times.</span>
        <span class="lang-ar">لا توجد دروس قادمة. <a href="https://wa.me/${WHATSAPP_NUMBER}" target="_blank" class="underline text-[#002395]">تواصل معنا</a> لمعرفة المواعيد المتاحة.</span>
      </div>`;
    return;
  }

  // Group events by title so recurring classes appear as one row
  const groups = {};
  events.forEach(ev => {
    const key = ev.summary || "Unknown";
    if (!groups[key]) groups[key] = [];
    groups[key].push(ev);
  });

  container.innerHTML = Object.entries(groups).map(([title, groupEvents], groupIndex) => {
    groupEvents.sort((a, b) =>
      new Date(a.start?.dateTime || a.start?.date) - new Date(b.start?.dateTime || b.start?.date)
    );

    const course = courses.find(c => title.toLowerCase().includes(c.nameEn.toLowerCase()) && !c.isService) || null;
    const courseIndex = course ? courses.indexOf(course) : -1;

    const levelMatch = title.match(/[-–]\s*([^|]+)/);
    const level = levelMatch ? levelMatch[1].trim() : "";
    const timeOfDayMatch = title.match(/\|\s*(.+)$/);
    const timeOfDay = timeOfDayMatch ? timeOfDayMatch[1].trim() : "";

    const next = groupEvents[0];
    const nextStart = new Date(next.start?.dateTime || next.start?.date);
    const nextDateStr = nextStart.toLocaleDateString(locale, { weekday: "short", day: "numeric", month: "short" });
    const nextTimeStr = next.start?.dateTime
      ? nextStart.toLocaleTimeString(locale, { hour: "2-digit", minute: "2-digit" }) : "";

    let durationStr = "";
    if (next.start?.dateTime && next.end?.dateTime) {
      const mins = Math.round((new Date(next.end.dateTime) - nextStart) / 60000);
      const hrs = Math.floor(mins / 60);
      const rem = mins % 60;
      durationStr = hrs > 0 ? `${hrs}h${rem > 0 ? ` ${rem}m` : ""}` : `${mins}m`;
    }

    const uniqueDayIdx = [...new Set(groupEvents.map(e => new Date(e.start?.dateTime || e.start?.date).getDay()))].sort();
    const daysEn = uniqueDayIdx.map(d => dayNamesEn[d]).join(" · ");
    const daysAr = uniqueDayIdx.map(d => dayNamesAr[d]).join(" · ");

    const flagHtml = course ? flagImg(course, 'schedule') : `<span class="text-2xl">📅</span>`;
    const nameEn = course?.nameEn || title;
    const nameAr = course?.nameAr || title;

    let spotsHTML = "";
    if (course?.totalSpots !== null && course?.totalSpots !== undefined) {
      const available = course.totalSpots - course.takenSpots;
      const pct = Math.round((course.takenSpots / course.totalSpots) * 100);
      const spotsColor = available <= 2 ? "#ED2939" : available <= 4 ? "#f59e0b" : "#16a34a";
      spotsHTML = `
        <div class="flex items-center gap-3">
          <div class="flex-1 bg-gray-100 rounded-full h-2">
            <div class="h-2 rounded-full" style="width:${pct}%;background:${spotsColor}"></div>
          </div>
          <span class="text-xs font-bold whitespace-nowrap" style="color:${spotsColor}">
            <span class="lang-en">${available} of ${course.totalSpots} spots left${available <= 2 ? " — Almost full!" : ""}</span>
            <span class="lang-ar">${available} من ${course.totalSpots} أماكن متبقية${available <= 2 ? " — يكاد يمتلئ!" : ""}</span>
          </span>
        </div>`;
    }

    const teacherHTML = course ? `
      <div class="flex items-center gap-3 bg-gray-50 rounded-xl px-3 py-2.5">
        <div class="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0"
             style="background:${course.teacher.avatarColor}">${course.teacher.initials}</div>
        <div>
          <div class="text-xs font-bold text-gray-800">
            <span class="lang-en">${course.teacher.nameEn}</span>
            <span class="lang-ar">${course.teacher.nameAr}</span>
          </div>
          <div class="text-xs text-gray-400">
            <span class="lang-en">${course.teacher.expEn}</span>
            <span class="lang-ar">${course.teacher.expAr}</span>
          </div>
        </div>
      </div>` : "";

    const datesList = groupEvents.map(ev => {
      const d = new Date(ev.start?.dateTime || ev.start?.date);
      const ds = d.toLocaleDateString(locale, { weekday: "long", day: "numeric", month: "long" });
      const ts = ev.start?.dateTime ? d.toLocaleTimeString(locale, { hour: "2-digit", minute: "2-digit" }) : "";
      return `<div class="text-xs text-gray-600 py-1.5 border-b border-gray-100 last:border-0 flex justify-between">
        <span>${ds}</span>${ts ? `<span class="text-gray-400">${ts}</span>` : ""}
      </div>`;
    }).join("");

    const enrollBtn = courseIndex >= 0
      ? `<button onclick="event.stopPropagation();openEnrollModal(${courseIndex})"
           class="shrink-0 text-xs font-bold px-4 py-2 rounded-xl text-white transition-colors"
           style="background:#002395" onmouseover="this.style.background='#001a6e'" onmouseout="this.style.background='#002395'">
           <span class="lang-en">Enroll</span><span class="lang-ar">سجّل</span>
         </button>`
      : `<a href="https://wa.me/${WHATSAPP_NUMBER}" target="_blank" onclick="event.stopPropagation()"
           class="shrink-0 text-xs font-bold px-4 py-2 rounded-xl bg-green-500 hover:bg-green-600 text-white transition-colors">
           <span class="lang-en">Inquire</span><span class="lang-ar">استفسر</span>
         </a>`;

    return `
      <div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden" id="scard-${groupIndex}">
        <div class="flex items-center gap-4 px-5 py-4 cursor-pointer select-none hover:bg-gray-50 transition-colors"
             onclick="toggleScheduleCard(${groupIndex})">
          <div class="shrink-0 flex items-center">${flagHtml}</div>
          <div class="flex-1 min-w-0">
            <div class="font-bold text-gray-900 text-sm leading-snug">
              <span class="lang-en">${nameEn}${level ? ` – ${level}` : ""}${timeOfDay ? `<span class="font-normal text-gray-400"> · ${timeOfDay}</span>` : ""}</span>
              <span class="lang-ar">${nameAr}${level ? ` – ${level}` : ""}</span>
            </div>
            <div class="text-gray-400 text-xs mt-0.5">
              📅 ${nextDateStr}${nextTimeStr ? ` · ${nextTimeStr}` : ""}
              ${daysEn ? `<span class="lang-en"> · ${daysEn}</span>` : ""}
              ${daysAr ? `<span class="lang-ar"> · ${daysAr}</span>` : ""}
            </div>
          </div>
          <div class="flex items-center gap-2 shrink-0">
            ${enrollBtn}
            <svg class="w-4 h-4 text-gray-400 transition-transform schedule-chevron" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
            </svg>
          </div>
        </div>

        <div class="schedule-details hidden border-t border-gray-100 px-5 pb-5">
          <div class="pt-4 flex flex-col gap-4">
            ${course ? `<p class="text-xs text-gray-500 leading-relaxed">
              <span class="lang-en">${course.descEn}</span>
              <span class="lang-ar">${course.descAr}</span>
            </p>` : ""}

            <div class="flex flex-wrap gap-2">
              ${daysEn ? `<div class="bg-blue-50 rounded-xl px-3 py-2">
                <div class="text-gray-400 text-xs mb-0.5"><span class="lang-en">Class days</span><span class="lang-ar">أيام الدراسة</span></div>
                <div class="font-semibold text-gray-800 text-xs">
                  <span class="lang-en">${daysEn}</span><span class="lang-ar">${daysAr}</span>
                </div>
              </div>` : ""}
              ${durationStr ? `<div class="bg-blue-50 rounded-xl px-3 py-2">
                <div class="text-gray-400 text-xs mb-0.5"><span class="lang-en">Per session</span><span class="lang-ar">مدة الجلسة</span></div>
                <div class="font-semibold text-gray-800 text-xs">${durationStr}</div>
              </div>` : ""}
              <div class="bg-blue-50 rounded-xl px-3 py-2">
                <div class="text-gray-400 text-xs mb-0.5"><span class="lang-en">Sessions ahead</span><span class="lang-ar">جلسات قادمة</span></div>
                <div class="font-semibold text-gray-800 text-xs">${groupEvents.length}</div>
              </div>
            </div>

            ${teacherHTML}
            ${spotsHTML}

            <div>
              <div class="text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wide">
                <span class="lang-en">All upcoming sessions</span><span class="lang-ar">جميع الجلسات القادمة</span>
              </div>
              <div class="bg-gray-50 rounded-xl px-4 py-1">${datesList}</div>
            </div>
          </div>
        </div>
      </div>`;
  }).join("");
}

function toggleScheduleCard(index) {
  const card = document.getElementById(`scard-${index}`);
  if (!card) return;
  const details = card.querySelector(".schedule-details");
  const chevron = card.querySelector(".schedule-chevron");
  const isOpen = !details.classList.contains("hidden");
  details.classList.toggle("hidden", isOpen);
  chevron.style.transform = isOpen ? "" : "rotate(180deg)";
}

async function fetchUpcomingClasses() {
  const container = document.getElementById("schedule-grid");
  if (!container) return;

  if (GOOGLE_CALENDAR_ID.startsWith("[") || GOOGLE_CALENDAR_API_KEY.startsWith("[")) {
    container.innerHTML = `
      <div class="text-center py-10 text-gray-400 text-sm">
        <span class="lang-en">Schedule coming soon. <a href="https://wa.me/${WHATSAPP_NUMBER}" target="_blank" class="underline text-[#002395]">WhatsApp us</a> to ask about available times.</span>
        <span class="lang-ar">الجدول قادم قريباً. <a href="https://wa.me/${WHATSAPP_NUMBER}" target="_blank" class="underline text-[#002395]">واتساب</a> لمعرفة المواعيد المتاحة.</span>
      </div>`;
    return;
  }

  container.innerHTML = `
    <div class="text-center py-10 text-gray-400 text-sm">
      <span class="lang-en">Loading schedule…</span>
      <span class="lang-ar">جارٍ تحميل الجدول…</span>
    </div>`;

  try {
    const now = new Date().toISOString();
    const future = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString();
    const url = `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(GOOGLE_CALENDAR_ID)}/events?timeMin=${now}&timeMax=${future}&maxResults=20&singleEvents=true&orderBy=startTime&key=${GOOGLE_CALENDAR_API_KEY}`;

    const res = await fetch(url);
    if (!res.ok) throw new Error(`Calendar API error: ${res.status}`);

    const data = await res.json();
    _cachedScheduleEvents = data.items || [];
    renderSchedule(_cachedScheduleEvents);
  } catch {
    container.innerHTML = `
      <div class="text-center py-10 text-gray-400 text-sm">
        <span class="lang-en">Could not load schedule. <a href="https://wa.me/${WHATSAPP_NUMBER}" target="_blank" class="underline text-[#002395]">Contact us on WhatsApp</a> for available times.</span>
        <span class="lang-ar">تعذّر تحميل الجدول. <a href="https://wa.me/${WHATSAPP_NUMBER}" target="_blank" class="underline text-[#002395]">تواصل معنا على واتساب</a> لمعرفة المواعيد.</span>
      </div>`;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  buildCourseCards();
  fetchUpcomingClasses();
  fetchSpotCounts();

  document.getElementById("enroll-modal").addEventListener("click", function(e) {
    if (e.target === this) closeEnrollModal();
  });

  const observer = new MutationObserver(() => {
    buildCourseCards();
    filterCourses(_activeFilter);
    if (_cachedScheduleEvents !== null) renderSchedule(_cachedScheduleEvents);
  });
  observer.observe(document.getElementById("html-root"), { attributes: true, attributeFilter: ["dir"] });
});
