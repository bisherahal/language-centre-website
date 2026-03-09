// ============================================================
// EDIT YOUR COURSES HERE
// Add/remove languages and update prices as needed
// ============================================================
const courses = [
  {
    flag: "🇬🇧",
    nameEn: "English",
    nameAr: "الإنجليزية",
    levels: ["Beginner", "Intermediate", "Advanced", "Business", "IELTS Prep"],
    levelsAr: ["مبتدئ", "متوسط", "متقدم", "أعمال", "تحضير IELTS"],
    color: "blue",
    popular: true
  },
  {
    flag: "🇫🇷",
    nameEn: "French",
    nameAr: "الفرنسية",
    levels: ["Beginner", "Intermediate", "Advanced", "DELF Prep"],
    levelsAr: ["مبتدئ", "متوسط", "متقدم", "تحضير DELF"],
    color: "indigo"
  },
  {
    flag: "🇸🇦",
    nameEn: "Arabic",
    nameAr: "العربية",
    levels: ["Beginner", "Intermediate", "Advanced", "Quran Arabic"],
    levelsAr: ["مبتدئ", "متوسط", "متقدم", "عربية قرآنية"],
    color: "green"
  },
  {
    flag: "🇪🇸",
    nameEn: "Spanish",
    nameAr: "الإسبانية",
    levels: ["Beginner", "Intermediate", "Advanced"],
    levelsAr: ["مبتدئ", "متوسط", "متقدم"],
    color: "yellow"
  },
  {
    flag: "🇮🇹",
    nameEn: "Italian",
    nameAr: "الإيطالية",
    levels: ["Beginner", "Intermediate"],
    levelsAr: ["مبتدئ", "متوسط"],
    color: "red"
  },
  {
    flag: "🇳🇱",
    nameEn: "Dutch",
    nameAr: "الهولندية",
    levels: ["Beginner", "Intermediate"],
    levelsAr: ["مبتدئ", "متوسط"],
    color: "orange"
  },
  {
    flag: "🇮🇱",
    nameEn: "Hebrew",
    nameAr: "العبرية",
    levels: ["Beginner", "Intermediate"],
    levelsAr: ["مبتدئ", "متوسط"],
    color: "purple"
  },
  {
    flag: "🌍",
    nameEn: "Translation",
    nameAr: "الترجمة",
    levels: ["All language pairs", "Certified docs", "Business"],
    levelsAr: ["جميع اللغات", "وثائق معتمدة", "أعمال"],
    color: "teal",
    isService: true
  }
];

const colorMap = {
  blue:   { bg: "bg-blue-50",   border: "border-blue-100",   text: "text-blue-700",   badge: "bg-blue-100" },
  indigo: { bg: "bg-indigo-50", border: "border-indigo-100", text: "text-indigo-700", badge: "bg-indigo-100" },
  green:  { bg: "bg-green-50",  border: "border-green-100",  text: "text-green-700",  badge: "bg-green-100" },
  yellow: { bg: "bg-yellow-50", border: "border-yellow-100", text: "text-yellow-700", badge: "bg-yellow-100" },
  red:    { bg: "bg-red-50",    border: "border-red-100",    text: "text-red-700",    badge: "bg-red-100" },
  orange: { bg: "bg-orange-50", border: "border-orange-100", text: "text-orange-700", badge: "bg-orange-100" },
  purple: { bg: "bg-purple-50", border: "border-purple-100", text: "text-purple-700", badge: "bg-purple-100" },
  teal:   { bg: "bg-teal-50",   border: "border-teal-100",   text: "text-teal-700",   badge: "bg-teal-100" }
};

const WHATSAPP_NUMBER = "962796831961";

function buildCourseCards() {
  const grid = document.getElementById("courses-grid");
  if (!grid) return;

  grid.innerHTML = courses.map(course => {
    const c = colorMap[course.color] || colorMap.blue;
    const waMsg = encodeURIComponent(`Hello, I'm interested in the ${course.nameEn} course. Can you give me more info?`);
    const popularBadge = course.popular
      ? `<span class="absolute top-3 right-3 bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-0.5 rounded-full">
           <span class="lang-en">Popular</span><span class="lang-ar">الأكثر طلباً</span>
         </span>`
      : "";

    const levelItems = course.levels.map((l, i) =>
      `<li class="flex items-center gap-1.5 text-gray-500 text-xs">
        <span class="w-1.5 h-1.5 rounded-full ${c.badge.replace('bg-','bg-')} inline-block"></span>
        <span class="lang-en">${l}</span>
        <span class="lang-ar">${course.levelsAr[i] || l}</span>
      </li>`
    ).join("");

    return `
      <div class="relative bg-white rounded-2xl p-5 shadow-sm card-hover border ${c.border} flex flex-col gap-3">
        ${popularBadge}
        <div class="text-4xl">${course.flag}</div>
        <div>
          <h3 class="font-bold text-gray-900 text-base">
            <span class="lang-en">${course.nameEn}</span>
            <span class="lang-ar">${course.nameAr}</span>
          </h3>
          <span class="${c.text} text-xs font-medium ${c.badge} px-2 py-0.5 rounded-full mt-1 inline-block">
            <span class="lang-en">${course.levels.length} levels</span>
            <span class="lang-ar">${course.levels.length} مستويات</span>
          </span>
        </div>
        <ul class="space-y-1">${levelItems}</ul>
        <a href="https://wa.me/${WHATSAPP_NUMBER}?text=${waMsg}" target="_blank"
           class="mt-auto flex items-center justify-center gap-1.5 bg-green-500 hover:bg-green-600 text-white text-xs font-bold px-3 py-2 rounded-xl transition-colors">
          <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          <span class="lang-en">Inquire</span>
          <span class="lang-ar">استفسر</span>
        </a>
      </div>`;
  }).join("");
}

document.addEventListener("DOMContentLoaded", buildCourseCards);
