
const calcular = document.getElementById('calcular');

function imc(){
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if (nome !== '' && altura !== '' && peso !== ''){       
       const resultadoIMC = ( peso / (altura * altura)).toFixed(1)   
       let classificacao = '';

       if (resultadoIMC < 18.5){
           classificacao = 'abaixo do peso.'; 
                   }
           else if (resultadoIMC < 25 ){
            classificacao = 'no peso ideal. Parabéns!';
                   }
           else if (resultadoIMC < 30 ){
            classificacao = 'levemente acima do peso. Cuidado!';  
                   }
           else if (resultadoIMC < 35 ){
            classificacao = 'com obesidade grau I.';  
                   }
           else if (resultadoIMC < 40 ){
            classificacao = 'com obesidade grau II.';  
                   }
           else{
            classificacao = 'com obesidade grau III. Cuidado!!!';                             
                   }
           resultado.textContent = `${nome} seu resultado IMC é ${resultadoIMC}, você esta ${classificacao}`   
    }else{
       resultado.textContent = 'Preencha todos os campos obrigatórios!';
    }
}
calcular.addEventListener('click', imc);


