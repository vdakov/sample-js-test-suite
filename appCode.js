// INITIAL IMPLEMENTATION OF getDayOfWeek() before testing - Meant to illustrate what the test suite does
//
// *Please note that this implementation is just meant to be a sample implementation to illustrate the testing
// and is not meant as an in-depth implementation examining dates according to different calendar systems and the like*   
// 
// 
//function getDayOfWeek() {
//   const dateStr = document.getElementById("date-input").value;
//   console.log(dateStr)
//   let [day, month, year] = dateStr.split(/\.|-|\//); // split the input string into day, month, and year components
//   const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//   const t = [0, 3, 2, 5, 0, 3, 5, 1, 4, 6, 2, 4]
  
//   monthIndex= parseInt(month);
//   if (monthIndex < 3) {
//     year -= 1;
//   }
//   const dayOfWeekIndex = (year + parseInt(year/4) - parseInt(year/100) + t[monthIndex - 1] + day) % 7;

//   alert("The day of the week is " + daysOfWeek[dayOfWeekIndex]);
// }

function getDayOfWeek() {
  const dateStr = document.getElementById("date-input").value;
  const fakeAlert = document.getElementById("fakeAlert");
  
  try{
    let dayOfTheWeek = calculateDayOfWeek(dateStr)
    fakeAlert.innerText = "The day of the week is " + dayOfTheWeek
    fakeAlert.style.display = "block";
  }catch(e){
    fakeAlert.innerText = e.message
    fakeAlert.style.display = "block";
  }





}


function calculateDayOfWeek(dateStr) {

  if(dateStr === null) throw new Error("Null value is not accepted")
  if(dateStr.length < 10) throw new Error("Input is too short!")


  let [day, month, year] = []

  if (/\d{2}\.\d{2}\.\d{4}/.test(dateStr)) {
    [day, month, year] = dateStr.split('.');
  } else if (/\d{2}-\d{2}-\d{4}/.test(dateStr)) {
    [day, month, year] = dateStr.split('-');
  } else if (/\d{2}\/\d{2}\/\d{4}/.test(dateStr)) {
    [day, month, year] = dateStr.split('/');
  } else {
    throw new Error('Invalid date format. Please use DD.MM.YYYY, DD-MM-YYYY or DD/MM/YYYY.');
  }
  

  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const monthsWithThirtyDays = [4, 6, 9, 11]
  const t = [0, 3, 2, 5, 0, 3, 5, 1, 4, 6, 2, 4]
  
  monthIndex= parseInt(month);
  year = parseInt(year)
  day = parseInt(day)

  if(monthIndex < 1 || monthIndex > 12) throw new Error('Invalid Month Format');
  if(day < 1 || day > 31) throw new Error('Invalid Day Format');
  if(year < 1 || year > 9999 ) throw new Error('Invalid Year Format');

  //february
  if(monthIndex === 2 && day > 28 && !isLeapYear(year) || monthIndex === 2 && day > 29 && isLeapYear(year) ) throw new Error('Invalid February Date')
  //any 30-day month
  if(monthsWithThirtyDays.includes(monthIndex) && day > 30) throw new Error('These Months Only Have 30 Days Silly :)') 
  

  if (monthIndex < 3) {
    year -= 1;
  }
  const dayOfWeekIndex = (year + parseInt(year/4) - parseInt(year/100) + parseInt(year/400) + t[monthIndex - 1] + day) % 7;

  return daysOfWeek[dayOfWeekIndex]

}

function isLeapYear(year){
  return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}

function clearInput() {
  document.getElementById("date-input").value = "";
}


function closeAlert() {
  const fakeAlert = document.getElementById("fakeAlert");
  fakeAlert.style.display = "none";

}

function closeButton(){
  clearInput()
  closeAlert()
}

module.exports = {
  getDayOfWeek,
  calculateDayOfWeek,
  isLeapYear
};