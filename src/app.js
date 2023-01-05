function popupTime() {
  if (event.target.value.length > 0) {
    let zoneSelected = event.target.value;
    let zoneTime = moment()
      .tz(`${zoneSelected}`)
      .format(`dddd Do MMMM YYYY, hh:mm A`);
    alert(`In the timezone '${zoneSelected}', it is ${zoneTime}`);
  }
}

let timezonesSelect = document.querySelector(`#drop-down`);
timezonesSelect.addEventListener("change", popupTime);
