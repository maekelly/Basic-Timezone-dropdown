function popupTime() {
  if (event.target.value === "philippines") {
    let phTime = moment()
      .tz(`Asia/Manila`)
      .format(`dddd Do MMMM YYYY, hh:mm A`);
    alert(`It is ${phTime} in The Philippines`);
  }
  if (event.target.value === "scotland") {
    let scTime = moment()
      .tz(`Europe/London`)
      .format(`dddd Do MMMM YYYY, hh:mm A`);
    alert(`It is ${scTime} in Scotland`);
  }
  if (event.target.value === "uae") {
    let uaeTime = moment()
      .tz(`Asia/Dubai`)
      .format(`dddd Do MMMM YYYY, hh:mm A`);
    alert(`It is ${uaeTime} in The UAE`);
  }
}

let timezonesSelect = document.querySelector(`#drop-down`);
timezonesSelect.addEventListener("change", popupTime);
