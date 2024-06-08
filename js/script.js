const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
let randomNumber = Math.round(Math.random() * 10)

let xAttempts = 1

function handleTryClick(event) {
  event.preventDefault();

  const inputNumber = document.querySelector("#inputNumber")

  if (Number(inputNumber.value) == randomNumber) {
    screen1.classList.add('hide')
    screen2.classList.remove('hide')
    document.querySelector(".screen2 h2").innerText = `Acertou em ${xAttempts} tentativa(s)`
  }
  // console.log(inputNumber.value);
  // console.log(xAttempts);
  // console.log(randomNumber);

  inputNumber.value = ""
  xAttempts++
  randomNumber = Math.round(Math.random() * 10)
}

function handleResetClick() {
  screen1.classList.remove('hide')
  screen2.classList.add('hide')

  xAttempts = 1
}

btnTry.addEventListener('click', handleTryClick);
btnReset.addEventListener('click', handleResetClick);
document.addEventListener('keydown', function(e) {
  if (e.key == 'Enter' && screen1.classList.contains('hide')) {
    handleResetClick()
  }
})