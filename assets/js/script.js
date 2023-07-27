import 'whatwg-fetch';

const buttonChangeImg = document.querySelector('.change-img')
const dateInHtml = document.querySelector('.date')
const timeInHtml = document.querySelector('.time')

const NAME_DAY_OF_WEEK  = ['Sun', 'Mon', 'Tues', 'Weds', 'Thurs', 'Fri', 'Sat']
const NAME_MONTH = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
        'August', 'September', 'October', 'November','December']

const dateUpdate = () => {
    const date = new Date()
    dateInHtml.textContent = `${NAME_DAY_OF_WEEK[date.getDay()]} 
    ${date.getDate()} 
    ${NAME_MONTH[date.getMonth()]}`
}

const timeUpdate = () => {
    const date = new Date()
    const hours = date.getHours() > 10 ? date.getHours() : '0' + date.getHours()
    const minutes = date.getMinutes() > 10 ? date.getMinutes() : '0' + date.getMinutes()
    const seconds = date.getSeconds() > 10 ? date.getSeconds() : '0' + date.getSeconds()
    timeInHtml.textContent = `${hours}:${minutes}:${seconds}`
}

const imgUpdate = () => {

}

setInterval(timeUpdate, 1000)
dateUpdate()
timeUpdate()


var isPalindrome = function(s) {
    s.toLowerCase()
    
};