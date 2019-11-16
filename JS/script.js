
 //conta botão
   
 
 
 
 

 
 
 
 
 
 function botao(){
        var pl1 = document.getElementById("placeholder1").value;//$("#placeholder1").val()
    var pl2 = document.getElementById("placeholder2").value//$("#placeholder2").val()
    var pl3 = document.getElementById("placeholder4").value//$("#placeholder2").val()
    var categoria = document.getElementById("placeholder5").value
    var n = pl2 * 100 
    var p = n / pl1
    var j = p.toFixed(2) + '%'
    var r = j + pl3 
    var teste = pl3.typeof
    if (teste == Number){
        window.alert(`${pl2} Não é um valor valido`)
    }
    document.getElementById("placeholder3").value = j;//$("#placeholder2").val(j)
    if(p > 20){ 
    document.getElementById("test").innerHTML = `${pl3} você teve um gasto de ${j} da sua renda com ${categoria}, você esta sendo consumista! <a href="dicas.html">Clique aqui para conhecer dicas que vão ajudar a controlar seus gastos.</a>
    `
    }
 
    else{
     document.getElementById("test").innerHTML = `${pl3} você não esta sendo consumista, o meio ambiente agradece, parabéns!!!`   
    }
     
    
    if(pl1 == ""){
        document.getElementById("test").innerHTML = ""
        document.getElementById("placeholder3").value = ""
    }
    




    
    //conferir se todos os campos estão preenchidos;
    if(pl1 == ""){
        window.alert("preencha todos os campos!")
      
    }

       
    
       }
       //limpar display
   function clearDisplay(){
       document.getElementById('placeholder1').value = ''; 
       document.getElementById('placeholder2').value = '';
       document.getElementById('placeholder3').value = ''; 
       document.getElementById('placeholder4').value = '';   
       document.getElementById("test").innerHTML = "";
    }
    
 








    $(function() {
        var esportes = [
          "Natação",
          "Futebol",
          "Vôlei",
          "Basquete"
        ];
        $("#esporte" ).autocomplete({
          source: esportes
        });
      });