function attachEventsListeners() {
  let $buttons = [...document.querySelectorAll("[value=Convert]")];

  $buttons.forEach((button) => {
    if (button.id === "daysBtn") {
      button.addEventListener("click", convertFromDays);
    } else if (button.id === "hoursBtn") {
      button.addEventListener("click", convertFromHours);
    } else if (button.id === "minutesBtn") {
      button.addEventListener("click", convertFromMinutes);
    } else if (button.id === "secondsBtn") {
      button.addEventListener("click", convertFromSeconds);
    }
  });

  function convertFromDays() {

    let $valueToConvert = document.getElementById("days");

    let resultHours = $valueToConvert.value * 24;
    let $hoursResult = document.getElementById("hours");
    $hoursResult.value = resultHours;

    let resultMinutes = $valueToConvert.value * 1440;
    let $minutesResult = document.getElementById("minutes");
    $minutesResult.value = resultMinutes;

    let resultSeconds = $valueToConvert.value * 86400;
    let $secondsResult = document.getElementById("seconds");
    $secondsResult.value = resultSeconds;
  }

  function convertFromHours() {
    let $valueToConvert = document.getElementById("hours");

    let resultDays = $valueToConvert.value / 24;
    let $daysResult = document.getElementById("days");
    $daysResult.value = resultDays;

    let resultMinutes = $valueToConvert.value * 60;
    let $minutesResult = document.getElementById("minutes");
    $minutesResult.value = resultMinutes;

    let resultSeconds = $valueToConvert.value * 3600;
    let $secondsResult = document.getElementById("seconds");
    $secondsResult.value = resultSeconds;
  }

  function convertFromMinutes() {
    let $valueToConvert = document.getElementById("minutes");

    let resultDays = $valueToConvert.value / 1440;
    let $daysResult = document.getElementById("days");
    $daysResult.value = resultDays;

    let resultHours = $valueToConvert.value / 60;
    let $hoursResult = document.getElementById("hours");
    $hoursResult.value = resultHours;

    let resultSeconds = $valueToConvert.value * 60;
    let $secondsResult = document.getElementById("seconds");
    $secondsResult.value = resultSeconds;
  }

  function convertFromSeconds() {
    let $valueToConvert = document.getElementById("seconds");

    let resultDays = $valueToConvert.value / 86400;
    let $daysResult = document.getElementById("days");
    $daysResult.value = resultDays;

    let resultHours = $valueToConvert.value / 3600;
    let $hoursResult = document.getElementById("hours");
    $hoursResult.value = resultHours;

    let resultMinutes = $valueToConvert.value / 60;
    let $minutesResult = document.getElementById("minutes");
    $minutesResult.value = resultMinutes;
  }
}
