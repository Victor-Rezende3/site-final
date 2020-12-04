   let resultado = document.querySelector("#resultado");
   function adicao(){
    let input_num1 = document.querySelector('#num1');
    let input_num2 = document.querySelector('#num2');
    resultado = (input_num1.value*1) + (input_num2.value*1);
    resposta.innerHTML=`O resultado e: ${resultado}`;
   }      

   

   function subtracao(){
    let input_num1 = document.querySelector('#num1');
    let input_num2 = document.querySelector('#num2');
    resultado = (input_num1.value) - (input_num2.value);
    resposta.innerHTML=`O resultado e: ${resultado}`;
       
       
   }
   
   function divisao(){
    let input_num1 = document.querySelector('#num1');
    let input_num2 = document.querySelector('#num2');
    resultado = (input_num1.value) / (input_num2.value);
    resposta.innerHTML=`O resultado e: ${resultado}`;
       
   }
   
   function multiplicacao(){
    let input_num1 = document.querySelector('#num1');
    let input_num2 = document.querySelector('#num2');
    resultado = (input_num1.value) * (input_num2.value);
    resposta.innerHTML=`O resultado e: ${resultado}`;

   }
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   /*function operacao(){
    let input_num1 = document.querySelector('#num1');
    let input_num2 = document.querySelector('#num2');
    //let resultado = document.createElement('h1');

    
    let button_adicao = document.querySelector('#adicao')
    let button_subtracao = document.querySelector('#subtracao')
    let button_divisao = document.querySelector('#divisao')
    let button_multiplicacao = document.querySelector('#multiplicacao')
    
        if(button_adicao){
            resultado = num1 + num2;

            if(input_num1.value==0 || input_num2.value==0){
                alert('Campo vazio!')
            }
            else{
            let text = document.createTextNode(`${resultado}`);
            let h1 = document.querySelector('#resultado');
            //h1.innerHTML="";
            //h1.appendChild(text);
            
            }        
        }
        
        else if(button_subtracao){
           

            if(input_num1.value==0 || input_num2.value==0){
                alert('Campo vazio!')
            }
            else{
            let resultado = (input_num1.value) - (input_num2.value);
            let meuh1 = document.createElement('h1')
            let text = document.createTextNode(`${resultado}`);
            resultado.appendChild(text)
            h1.appendChild(resultado)
            

            //let h1 = document.querySelector('#resultado');
            //h1.innerHTML="";
            //h1.appendChild(text);
            
            }        
        }
       
        else if(button_divisao){
            resultado = num1 * num2;

            if(input_num1.value==0 || input_num2.value==0){
                alert('Campo vazio!')
            }
            else{
            let text = document.createTextNode(`${resultado}`);
            let h1 = document.querySelector('#resultado');
            //h1.innerHTML="";
            //h1.appendChild(text);
            
            }        
        }
        
        
        
        else if(button_multiplicacao){
            resultado == (input_num1.value) * (input_num2.value);
            
            if(input_num1.value==0 || input_num2.value==0){
                alert('Campo vazio!')
            }
            else{
            let text = document.createTextNode(`${resultado}`);
            let h1 = document.querySelector('#resultado');
            //h1.innerHTML="";
            //h1.appendChild(text);
            
            }        
        }
    
    
}

*/
