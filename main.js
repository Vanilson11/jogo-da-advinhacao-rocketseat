let randomNumber = Math.round(Math.random() * 10);
const screen1 = document.querySelector('.screen1');
const screen2 = document.querySelector('.screen2');
const screen3 = document.querySelector('.screen3');
let xTentativas = document.querySelector('#xTentativas');
const btnTry = document.querySelector('#btnTry');
const btnReset = document.querySelector('#btnReset');
let xAttemps = 0;
console.log(randomNumber)

btnTry.addEventListener("click", handleTryClick);
btnReset.addEventListener("click", handleResetClick);

document.addEventListener("keydown", (e) => {
  if(e.key === 'Enter' && screen1.classList.contains('hide')){
    handleResetClick();
  }
});

function handleTryClick(event){
  event.preventDefault()
  const inputNumber = document.querySelector('#inputNumber');

  if(isNaN(inputNumber.value)){
    alert('Digite apenas números.');
  } else if(inputNumber.value == '' || 
    Number(inputNumber.value) < 0 || 
    Number(inputNumber.value) > 10){
      alert('Por favor, digite um número entre 0 e 10');
  }
  
  if(Number(inputNumber.value) == randomNumber){
    toggleScreen();
    screen2.querySelector('h2').innerText = `Você acertou em ${xAttemps + 1} tentativas.`
  }
  
  xAttemps++
  xTentativas.textContent = parseInt(xTentativas.textContent) - 1;

  if(parseInt(xTentativas.textContent) < 1){
    screen2.querySelector('h2').innerText = `Você ultrapassou o número de tentativas!`
    toggleScreen()
  }

  inputNumber.value = ''
  inputNumber.focus();
}

function handleResetClick(){
  toggleScreen();
  xAttemps = 0;
  randomNumber = Math.round(Math.random() * 10);
  xTentativas.textContent = 5;
}

function toggleScreen(){
  screen1.classList.toggle('hide');
  screen2.classList.toggle('hide');
}