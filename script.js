

let x = +prompt('Enter number')
let y = +prompt('Enter number')

if(!isNaN(x) && !isNaN(y)) {

if (x > 0 && y > 0) {
  console.log('I')
}
if (x < 0 && y > 0) {
  console.log('II')
}
if (x < 0 && y < 0) {
  console.log('III')
}
if (x > 0 && y < 0) {
  console.log('IV')
} 

}else{
    console.log('Error')
}