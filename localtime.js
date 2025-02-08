function updateUserTime() {
  const now = new Date(); // Get the current local date and time
  const options = {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true, // Use 12-hour format (set to false for 24-hour format)
  };
  const timeString = new Intl.DateTimeFormat('en-US', options).format(now);
  // Update the text inside the <span> element with the current local time
  document.getElementById('user-time').textContent = timeString;
}
setInterval(updateUserTime, 1000);
updateUserTime();
