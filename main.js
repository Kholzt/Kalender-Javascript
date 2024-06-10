const monthsName = [
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "Desember",
];
const dayName = [
  "Senin",
  "Selasa",
  "Rabu",
  "Kamis",
  "Jumat",
  "Sabtu",
  "Minggu",
];

const kalenderEl = document.querySelector("#kalender");
const title = document.querySelector("#title");
let dinamicYear = new Date().getFullYear();
let dinamicMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();
let currentMonth = new Date().getMonth();
let currentDay = new Date().getDate();

function kalender() {
  let firstDayOfMonth = new Date(dinamicYear, dinamicMonth, 1).getDay() - 1;
  const lastDateOfMonth = new Date(dinamicYear, dinamicMonth + 1, 0).getDate();
  const lastDayOfMonth = new Date(dinamicYear, dinamicMonth + 1, 0).getDay();
  const lastDayOfLastMonth = new Date(dinamicYear, dinamicMonth, 0).getDate();
  if (firstDayOfMonth < 0) {
    firstDayOfMonth = 6;
  }
  title.textContent = monthsName[dinamicMonth] + " " + dinamicYear;
  let html = ``;
  // add day name
  for (let i = 0; i < 7; i++) {
    html += `<div class="item day">${dayName[i]}</div>`;
  }

  console.log(firstDayOfMonth);
  // Add empty divs for days of the previous month
  for (let i = firstDayOfMonth; i > 0; i--) {
    html += `<div class="item inactive">${lastDayOfLastMonth - i + 1}</div>`;
  }

  // Add divs for each day of the current month
  for (let day = 1; day <= lastDateOfMonth; day++) {
    let classActive = "";
    if (
      currentYear == dinamicYear &&
      currentMonth == dinamicMonth &&
      currentDay == day
    ) {
      classActive = "active";
    }
    html += `<div onclick="showModal()" class="item ${classActive}">${day}</div>`;
  }
  console.log(lastDayOfMonth, dinamicMonth, dinamicYear);
  for (let i = 1; i <= 7 - lastDayOfMonth; i++) {
    html += `<div class="item inactive">${i}</div>`;
  }
  html += "</div>";
  kalenderEl.innerHTML = html;
}
function previousMonth() {
  dinamicMonth--;
  if (dinamicMonth < 0) {
    dinamicMonth = 11;
    dinamicYear--;
  }
  kalender();
}
function nextMonth() {
  dinamicMonth++;
  if (dinamicMonth > 11) {
    dinamicMonth = 0;
    dinamicYear++;
  }
  kalender();
}
kalender();
function showModal() {
  //   const modal = document.querySelector("#modal");
  //   modal.classList.remove("hide");
  //   modal.classList.add("show");
}

const modal = document.querySelector("#modal");
modal.addEventListener("click", function () {
  if (event.target === modal) {
    closeModal();
  }
});

function closeModal() {
  modal.classList.add("hide");
  modal.classList.remove("show");
}
