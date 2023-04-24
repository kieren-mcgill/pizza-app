
export const makeDate = (timestamp) => {
  function addZero(i) {
    if (i < 10) {i = "0" + i}
    return i;
  }

  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const newDate = new Date(timestamp)
  return newDate.getDate() + " " + monthNames[newDate.getMonth()] + " " + newDate.getFullYear() + " " + addZero(newDate.getHours()) + ":" + addZero(newDate.getMinutes())
}