const billTotalInput = document.getElementById('billTotalInput')
const tipInput = document.getElementById('tipInput')
const numberOfPeople = document.getElementById('numberOfPeople')
const perPersonTotal = document.getElementById('perPersonTotal')


const calculateBill = () => {
  // const calc = (billTotalInput.value * (tipInput.value / 100)) / numberOfPeople.innerText

  const bill = Number(billTotalInput.value)
  
  const tipPercentage = Number(tipInput.value / 100)
  

  const tipAmount = bill * tipPercentage
  
  const total = bill + tipAmount
  
  const AmountPerPerson = Number(total/numberOfPeople.innerText)

  perPersonTotal.innerHTML = `$${AmountPerPerson.toFixed(2)}`


}

const increasePeople = () => {
  numberOfPeople.innerText++
  calculateBill()
}

const decreasePeople = () => {
  if (numberOfPeople.innerText > 1) {
    numberOfPeople.innerText--
  }else{
    throw 'Hey, you cannot have less than one person'
  }
  calculateBill()
}