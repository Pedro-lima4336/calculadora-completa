// This is a JavaScript file

window.onload = function(){
   const valor1 = document.querySelector("#valor1");

   const valor2 = document.querySelector("#valor2");

   const somar = document.querySelector("#somar");

   const multiplicar = document.querySelector("#multiplicar");

   const subtrair = document.querySelector("#subtrair");

   const divisao = document.querySelector("#divisao");

   somar.addEventListener("click", function(){
   let resultado = parseFloat(valor1.value) + parseFloat(valor2.value);
   document.querySelector("#result").value = resultado;
   });
  multiplicar.addEventListener("click", function(){
   let resultado = parseFloat(valor1.value) * parseFloat(valor2.value);
   document.querySelector("#result").value = resultado;
   });
   subtrair.addEventListener("click", function(){
   let resultado = parseFloat(valor1.value) - parseFloat(valor2.value);
   document.querySelector("#result").value = resultado;
   });
   divisao.addEventListener("click", function(){
   let resultado = parseFloat(valor1.value) / parseFloat(valor2.value);
   document.querySelector("#result").value = resultado;
   });
  }