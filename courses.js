// ============================================================
// EDIT YOUR COURSES HERE
// Update teacher names, spots taken, and descriptions
// ============================================================
const courses = [
  {
    flag: "🇬🇧",
    nameEn: "English",
    nameAr: "الإنجليزية",
    descEn: "Master English for work, travel, and academic goals. IELTS preparation available.",
    descAr: "أتقن الإنجليزية للعمل والسفر والأهداف الأكاديمية. تحضير IELTS متاح.",
    levels: ["Beginner", "Intermediate", "Advanced", "Business", "IELTS Prep"],
    levelsAr: ["مبتدئ", "متوسط", "متقدم", "أعمال", "تحضير IELTS"],
    teacher: { initials: "SM", nameEn: "Sarah M.", nameAr: "سارة م.", expEn: "8 yrs exp.", expAr: "خبرة 8 سنوات", avatarColor: "#002395" },
    totalSpots: 8,
    takenSpots: 5,
    color: "blue",
    popular: true
  },
  {
    flag: "🇫🇷",
    nameEn: "French",
    nameAr: "الفرنسية",
    descEn: "Learn French for travel, culture, or DELF/DALF certification.",
    descAr: "تعلم الفرنسية للسفر أو الثقافة أو شهادة DELF/DALF.",
    levels: ["Beginner", "Intermediate", "Advanced", "DELF Prep"],
    levelsAr: ["مبتدئ", "متوسط", "متقدم", "تحضير DELF"],
    teacher: { initials: "JL", nameEn: "Jean L.", nameAr: "جان ل.", expEn: "6 yrs exp.", expAr: "خبرة 6 سنوات", avatarColor: "#ED2939" },
    totalSpots: 8,
    takenSpots: 3,
    color: "indigo"
  },
  {
    flag: "🇸🇦",
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
    flag: "🇪🇸",
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
    flag: "🇮🇹",
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
    flag: "🇳🇱",
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
    flag: "🇮🇱",
    nameEn: "Hebrew",
    nameAr: "العبرية",
    descEn: "Hebrew language courses for all purposes and levels.",
    descAr: "دورات اللغة العبرية لجميع الأغراض والمستويات.",
    levels: ["Beginner", "Intermediate"],
    levelsAr: ["مبتدئ", "متوسط"],
    teacher: { initials: "DR", nameEn: "David R.", nameAr: "ديفيد ر.", expEn: "6 yrs exp.", expAr: "خبرة 6 سنوات", avatarColor: "#7c3aed" },
    totalSpots: 8,
    takenSpots: 2,
    color: "purple"
  },
  {
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

function buildCourseCards() {
  const grid = document.getElementById("courses-grid");
  if (!grid) return;

  grid.innerHTML = courses.map((course, index) => {
    const c = colorMap[course.color] || colorMap.blue;

    const popularBadge = course.popular
      ? `<span class="absolute top-3 right-3 bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-0.5 rounded-full">
           <span class="lang-en">Popular</span><span class="lang-ar">الأكثر طلباً</span>
         </span>`
      : "";

    // Spots indicator
    let spotsHTML = "";
    if (course.totalSpots !== null) {
      const available = course.totalSpots - course.takenSpots;
      const pct = Math.round((course.takenSpots / course.totalSpots) * 100);
      const spotsColor = available <= 2 ? "#ED2939" : available <= 4 ? "#f59e0b" : "#16a34a";
      spotsHTML = `
        <div class="mt-1">
          <div class="flex justify-between items-center mb-1">
            <span class="text-xs text-gray-500">
              <span class="lang-en">${available} of ${course.totalSpots} spots left</span>
              <span class="lang-ar">${available} من ${course.totalSpots} أماكن متبقية</span>
            </span>
            <span class="text-xs font-bold" style="color:${spotsColor}">
              ${available <= 2 ? '<span class="lang-en">Almost full!</span><span class="lang-ar">يكاد يمتلئ!</span>' : ''}
            </span>
          </div>
          <div class="w-full bg-gray-100 rounded-full h-1.5">
            <div class="h-1.5 rounded-full transition-all" style="width:${pct}%; background:${spotsColor}"></div>
          </div>
        </div>`;
    }

    const actionBtn = course.isService
      ? `<a href="https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello, I need a translation quote.')}" target="_blank"
           class="mt-auto flex items-center justify-center gap-1.5 bg-green-500 hover:bg-green-600 text-white text-xs font-bold px-3 py-2.5 rounded-xl transition-colors w-full">
          <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          <span class="lang-en">Get Free Quote</span>
          <span class="lang-ar">احصل على عرض مجاني</span>
        </a>`
      : `<button onclick="openEnrollModal(${index})"
           class="mt-auto flex items-center justify-center gap-1.5 text-white text-xs font-bold px-3 py-2.5 rounded-xl transition-colors w-full"
           style="background:#002395" onmouseover="this.style.background='#001a6e'" onmouseout="this.style.background='#002395'">
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/></svg>
          <span class="lang-en">Enroll Now</span>
          <span class="lang-ar">سجّل الآن</span>
        </button>`;

    return `
      <div class="relative bg-white rounded-2xl p-5 shadow-sm card-hover border ${c.border} flex flex-col gap-3">
        ${popularBadge}
        <div class="flex items-center gap-3">
          <div class="text-4xl">${course.flag}</div>
          <div>
            <h3 class="font-bold text-gray-900 text-base leading-tight">
              <span class="lang-en">${course.nameEn}</span>
              <span class="lang-ar">${course.nameAr}</span>
            </h3>
            <span class="${c.text} text-xs font-medium ${c.badge} px-2 py-0.5 rounded-full inline-block mt-0.5">
              <span class="lang-en">${course.levels.length} levels</span>
              <span class="lang-ar">${course.levels.length} مستويات</span>
            </span>
          </div>
        </div>

        <p class="text-gray-500 text-xs leading-relaxed">
          <span class="lang-en">${course.descEn}</span>
          <span class="lang-ar">${course.descAr}</span>
        </p>

        <!-- Teacher -->
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

        ${spotsHTML}
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
  const title = document.getElementById("modal-title");
  const levelSelect = document.getElementById("enroll-level");

  title.textContent = isRTL ? `التسجيل في ${course.nameAr}` : `Enroll in ${course.nameEn}`;

  // Fill level options
  const levels = isRTL ? course.levelsAr : course.levels;
  levelSelect.innerHTML = levels.map(l => `<option value="${l}">${l}</option>`).join("");

  // Store course index for submit
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
  const courseIndex = document.getElementById("enroll-modal").dataset.courseIndex;
  const course = courses[courseIndex];
  const isRTL = document.getElementById("html-root").getAttribute("dir") === "rtl";

  const name = document.getElementById("enroll-name").value.trim();
  const email = document.getElementById("enroll-email").value.trim();
  const level = document.getElementById("enroll-level").value;
  const schedule = document.getElementById("enroll-schedule").value;
  const notes = document.getElementById("enroll-notes").value.trim();

  if (!name || !email) {
    alert(isRTL ? "يرجى إدخال الاسم والبريد الإلكتروني" : "Please enter your name and email address.");
    return;
  }

  const msg = isRTL
    ? `مرحباً، أريد التسجيل في دورة ${course.nameAr}.\n\nالاسم: ${name}\nالبريد الإلكتروني: ${email}\nالمستوى: ${level}\nالجدول المفضل: ${schedule}${notes ? `\nملاحظات: ${notes}` : ""}`
    : `Hello, I'd like to enroll in the ${course.nameEn} course.\n\nName: ${name}\nEmail: ${email}\nLevel: ${level}\nPreferred Schedule: ${schedule}${notes ? `\nNotes: ${notes}` : ""}`;

  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank");
  closeEnrollModal();
}

document.addEventListener("DOMContentLoaded", () => {
  buildCourseCards();

  // Close modal on backdrop click
  document.getElementById("enroll-modal").addEventListener("click", function(e) {
    if (e.target === this) closeEnrollModal();
  });

  // Re-render cards when language toggles
  const observer = new MutationObserver(() => buildCourseCards());
  observer.observe(document.getElementById("html-root"), { attributes: true, attributeFilter: ["dir"] });
});
