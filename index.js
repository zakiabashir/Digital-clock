#! /usr/bin/env node
function clock() {
    var days = ["Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "thursday",
        "Friday",
        "Saturday"];
    var months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];
    var hrs = document.getElementById("hours");
    var min = document.getElementById("minutes");
    var sec = document.getElementById("seconds");
    var period = document.getElementById("ampm");
    var date = document.getElementById("ddmmyy");
    var day = document.getElementById("dd");
    var time = new Date();
    console.log(time);
    var h = time.getHours();
    var m = time.getMinutes();
    var s = time.getSeconds();
    var d = time.getDay();
    var dd = time.getDate();
    var mm = time.getMonth();
    var yy = time.getFullYear();
    var ampm = h >= 12 ? "PM" : "AM";
    if (h > 12) {
        h = h - 12;
    }
    if (h == 0) {
        h = 12;
    }
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    hrs.innerHTML = h;
    min.innerHTML = m;
    sec.innerHTML = s;
    period.innerHTML = ampm;
    day.innerHTML = days[d];
    date.innerHTML = months[mm] + " " + dd + ", " + yy;
}
setInterval(clock, 1000);
//  function clock() {
//     let days :string[]= [
//       "SUNDAY",
//       "MONDAY",
//       "TUESDAY",
//       "WEDNESDAY",
//       "THURSDAY",
//       "FRIDAY",
//       "SATURDAY",
//     ];
//     let months: string[] = [
//       "JANUARY",
//       "FEBUARY",
//       "MARCH",
//       "APRIL",
//       "MAY",
//       "JUNE",
//       "JULY",
//       "AUGUST",
//       "SEPTEMBER",
//       "OCTOBER",
//       "NOVEMBER",
//       "DECEMBER",
//     ];
//     let hrs: any = document.getElementById("hours");
//     let mins: any = document.getElementById("minutes");
//     let sec: any = document.getElementById("seconds");
//     let period: any = document.getElementById("pmam");
//     let date: any = document.getElementById("ddmmyy");
//     let day: any = document.getElementById("dd");
//     let time = new Date();
//     let h: number | string = time.getHours();
//     let m: number | string = time.getMinutes();
//     let s: number | string = time.getSeconds();
//     let d = time.getDay();
//     let dd = time.getDate();
//     let mm = time.getMonth();
//     let yy = time.getFullYear();
//     if (h > 12) {
//       h = h - 12;
//     }
//     if (h == 0) {
//       h = 12;
//     }
//     let ampm = h > 12?"PM":"AM";
//     h = h < 10 ? "0" + h : h;
//     m = m < 10 ? "0" + m : m;
//     s = s < 10 ? "0" + s : s;
//     hrs.innerHTML = h;
//     mins.innerHTML = m;
//     sec.innerHTML = s;
//     period.innerHTML = ampm;
//     day.innerHTML = days[d];
//     date.innerHTML = months[mm] + " " + dd + ", " + yy;
//   }
//   setInterval(clock, 1000);
