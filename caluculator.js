let showValues = document.getElementById('show-values');
let left = '',right = '',evaluator = '';
function clearScreen() {
  showValues.innerText = 0;
}
function clearLastElement(){
  let length = showValues.innerText.length;
  showValues.innerText = showValues.innerText.slice(0, length-1)
  if(length <= 1){
    showValues.innerText = 0;
  }
}


let firstRowValues = document.querySelector('#first-row-container').addEventListener('click', function(event) {
  if(event.target.className === 'calc-button') {
    if(event.target.innerText === "/"){
      evaluator = event.target.innerText
      left = showValues.innerText;
      showValues.innerText = 0;
    }
  }
})

let secondRowValues = document.querySelector('#second-row-container').addEventListener('click', function(event) {
  if(event.target.className === 'calc-button') {
    if(event.target.innerText === "*"){
      evaluator = event.target.innerText
      left = showValues.innerText;
      showValues.innerText = 0;
    }
    else{
      showValues.innerText += event.target.innerText;
    }
  }
})

let thirdRowValues = document.querySelector('#third-row-container').addEventListener('click', function(event) {
  if(event.target.innerText === "-"){
    evaluator = event.target.innerText
    left = showValues.innerText;
    showValues.innerText = 0;
  }
  else{
    showValues.innerText += event.target.innerText;
  }
})

let fourthRowValues = document.querySelector('#fourth-row-container').addEventListener('click', function(event) {
  if(event.target.innerText === "+"){
    evaluator = event.target.innerText
    left = showValues.innerText;
    showValues.innerText = 0;
  }
  else{
    showValues.innerText += event.target.innerText;
  }
})

let fifthRowValues = document.querySelector('#fifth-row-container').addEventListener('click', function(event) {
  if(event.target.innerText === "="){
    right = showValues.innerText;
    if(evaluator == '+'){
      showValues.innerText = parseInt(left) + parseInt(right);
    }
    else if(evaluator == '-'){
      showValues.innerText = parseInt(left) - parseInt(right);
    }
    else if(evaluator == '*'){
      showValues.innerText = parseInt(left) * parseInt(right);
    }
    else if(evaluator == '/'){
      showValues.innerText = (parseInt(left) / parseInt(right)).toFixed(4);
    }
  }
  else{
    showValues.innerText += event.target.innerText;
  }
})

