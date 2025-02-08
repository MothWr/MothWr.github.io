function updateTime() {
  const now = new Date();
  const timeZone = 'Australia/Perth';
  const options = {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
    timeZone: timeZone
  };
  const timeString = new Intl.DateTimeFormat('en-US', options).format(now);
  // Update the text inside the <span> within <p>
  document.getElementById('current-time').textContent = timeString;
}
// Update time every second
setInterval(updateTime, 1000);
// Call updateTime initially to show the time right away
updateTime();