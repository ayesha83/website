// const pressGrindBeans = () =>{
//     console.log("grinding for 20 seconds");
// }

// pressGrindBeans();

// let coffeeIsGrinding = false

// let pressGrindBeans = ()  => {

//     if (coffeeIsGrinding == true) {

//         console.log('stopping the grind')

//     } else {
//         console.log("grinding is about to begin")
//         coffeeIsGrinding = true
//     }
// }

// pressGrindBeans()

// let coffeeOrder = (size, type) => {
//     console.log(`you are having ${size} ml of ${type}`)
// }
// coffeeOrder(50,'coke')

// let accountNumber = 3232323
// let cashWithdrawl = (ammount,accNum) => {
//     console.log(`you have withdrawn ${ammount} from account ${accNum}`)
// }

// cashWithdrawl(300,accountNumber)


// let addUp = (num1,num2) => {
//     return num1 + num2
// }
// addUp(7,3)
// console.log(addUp(7,3))

//////calculating temperature in fahrenheit

// let nineFifth = (celcius) => {
//     return celcius *(9/5)
// }

// let getfahrenheit = (celcius) => {
//     return nineFifth(celcius) + 32
// }

// console.log(`temperature in Fahrenheit is ${getfahrenheit(45)} F ` )


// let fahrenheitConvert = (fah) => {
//     return fah - 32
// }
// let getCelcius = (fah) => {
//     return fahrenheitConvert(fah) * (5/9)
// }

// console.log(`temperature in Celcius ${getCelcius(44)} C`)


// let cheeseSandwich = (option) => {
//     console.log('here is your cheese sandwich')

// }

// let jamSandwich = (option) => {
//     console.log('here is your jam sandwich')

// }

// let tomatoSandwich = (option) => {
//     console.log('here is your tomato sandwich')

// }

// let butterSandwich = (option) => {
//     console.log('here is your butter sandwich')

// }

// let saladSandwich = (option) => {


// }
// let option1 = cheeseSandwich
// let option2 = jamSandwich
// let option3 = tomatoSandwich
// let option4 = butterSandwich
// let option5 = saladSandwich

//  let choice = 'option'
//  console.log(`which filling would you like to have? `)

//  if (choice == 'option1'){
//     cheeseSandwich(option)
//  }
//  else if (choice == 'option2'){
//      jamSandwich(option)
//  }
// else if (choice == 'option3'){
//     tomatoSandwich(option)
// }
// else if (choice == 'option4'){
//     butterSandwich(option)
// }
// else {
//     saladSandwich(option)
// }


//// cash machine problem

let totalBalance = 500
let pinNumber = 1234


let cashWithdrawlAccepted = (pin) => {
    console.log(`your balance is ${totalBalance}`)
}
let cashWithdrawlRejected = (pin) => {
    console.log('you dont have enough money')
}
let cashWithdrawl = (pin) => {
if (pin == pinNumber){
    cashWithdrawlAccepted(pin)
    }
else {
    cashWithdrawlRejected()
}
}
cashWithdrawl(1234)