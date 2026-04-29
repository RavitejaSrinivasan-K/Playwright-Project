//STRING


var str = "Javascript programming"

//Length - Property
console.log(str.length-1)


//SLICE - Based on starting index between ending index +1
var str = "Javascript programming"

console.log(str.slice(0, 10))
console.log(str.slice(11, 22))
console.log(str.slice(-22, -11))


//SUB STRING
console.log(str.substring(0, 10))
console.log(str.substring(11, 50))
console.log(str.substring(-22, -11))


//REPLACE
var str = "Java with Selenium , Javascript with Playwright"
console.log(str.replace("Java" , "Type"))

//REPLACE ALL
console.log(str.replaceAll("Java" , "type"))



//UPPER CASE
var str = "JavaScript"
console.log(str.toUpperCase())

//LOWERCASE
var str = "PLAYWRiGHT"
console.log(str.toLowerCase())


//TRIM
var str = "   javascript  with  playwright   "
console.log(str.trim())
console.log(str.trimEnd())
console.log(str.trimStart())


//CONCAT
var str1 = "javascript "
var str2 = "programming "
var str3 = "language "

console.log(str1.concat(str2 , str3))


//BOOLEAN TYPE
var str = "Playwright Automation"

//includes
console.log(str.includes("Auto"))

//starts with
console.log(str.startsWith('P'))

//ends with
console.log(str.endsWith('n'))


//INDEX OF
var str = "javascript with playwright"

console.log(str.indexOf("z"))

//LAST INDEX OF
console.log(str.lastIndexOf('a'))

//CHAR AT
console.log(str.charAt(100))


//REPEAT
var str = "javascript -> "
console.log(str.repeat(4))




