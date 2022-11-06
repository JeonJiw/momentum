const dday = document.querySelector("#dday");
const ddayDiv = document.querySelector("#dday-div");
const ddayForm = document.querySelector("#dday-form");
const ddayInput = ddayForm.querySelector("input");

function setDate(event) {
  event.preventDefault();
  const DDAY = ddayInput.value;
  dday.classList.remove(HIDDEN_CLASSNAME);
  setInterval(getTime(DDAY), 1000);
}

function getTime(DDAY) {
  ddayForm.classList.add(HIDDEN_CLASSNAME);
  const date = new Date();
  const eveDate = new Date(DDAY);
  const timeGap = eveDate - date;
  const days = String(Math.floor(timeGap / 1000 / 60 / 60 / 24)).padStart(
    2,
    "0"
  );
  const hoursD = String(Math.floor((timeGap / 1000 / 60 / 60) % 24)).padStart(
    2,
    "0"
  );
  const minutesD = String(Math.floor((timeGap / 1000 / 60) % 60)).padStart(
    2,
    "0"
  );
  //const seconds = String(Math.floor((timeGap / 1000) % 60)).padStart(2, "0");

  dday.innerText = `${days}d ${hoursD}h ${minutesD}m left`;
  ddayDiv.querySelector("span").innerText = `D-day : ${DDAY}`;
}

ddayForm.addEventListener("submit", setDate);
