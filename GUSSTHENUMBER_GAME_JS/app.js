const maxNo = 100;
const minNo = 1;
const resultNo = Math.floor(Math.random()*(maxNo-minNo+1)+minNo);
let  guessNo = document.querySelector("#gussNo");
let feedback = document.querySelector(".msg");
let button =document.querySelector("#pressBtn");
let resetBtn = document.querySelector("#resetBtn");
console.log(resultNo);

function checkNo(){
    if(guessNo.value == " "){
      feedback.innerText = "Please Enter A Number!";
    }else if(guessNo.value == resultNo){
    feedback.innerText ="Congratulations! you have guess the Numer "+guessNo.value+"correctly!"
    resetBtn.style.display="inline";
  

    resetBtn.addEventListener("click",function(){
      feedback .innerHTML = "";
      guessNo.value = " ";
      resetBtn.style.display ="none";
       
     });
       
 
    }else if(guessNo.value > resultNo){
      feedback.innerText =" Too hight! try guessing a lower number";
    
    }else if(guessNo.value < resultNo){
      feedback.innerText =" Too low! try guessing a higher number";
    
    }
}




button.addEventListener("click",checkNo);



   