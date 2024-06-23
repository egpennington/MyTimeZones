function updateTime() {
  let d = new Date();

  const anchor = d.toLocaleString('default', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZone: 'America/Anchorage',
  });

  const elPaso = d.toLocaleString('default', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZone: 'America/Denver',
  });

  const cleve = d.toLocaleString('default', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZone: 'America/New_York',
  });

  const seoul = d.toLocaleString('default', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZone: 'Asia/Seoul',
  });

  document.getElementById('alaska-el').innerHTML = anchor;
  document.getElementById('elPaso-el').innerHTML = elPaso;
  document.getElementById('cleve-el').innerHTML = cleve;
  document.getElementById('seoul-el').innerHTML = seoul;
}

// Initial call to update the time
updateTime();

// Update the time every second
setInterval(updateTime, 1000);
