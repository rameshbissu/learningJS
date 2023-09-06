// Date

const months = [
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
    "December",
];
const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturtday",
];

// const date = new Date();
// set date manually
const date = new Date('4/12/2023');

const month = date.getMonth();
console.log(months[month]);

const day = date.getDay();
console.log(days[day]);

console.log(date.getDate())
console.log(date.getFullYear())


const sentence = `${days[day]}, ${date.getDate()} ${months[month]} ${date.getFullYear()}`
console.log(sentence)

document.body.innerHTML = `<h2>You are at : ${sentence}</h2>`
