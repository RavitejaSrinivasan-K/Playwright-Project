function selectDate(n){
const today = new Date()
today.setDate(today.getDate() + n)

return {
    day : today.getDate() ,
    month : today.getMonth() + 1,
    year : today.getFullYear()
}

}

const {day , month , year } = selectDate(5)
console.log(day, month, year)