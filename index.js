function calcularIMC(){
    var peso = document.getElementById('peso').value
    var altura = document.getElementById('altura').value/100
    console.log(altura)

    var imc = peso/(altura * altura)
    console.log(imc)

    var text = ""
    if (imc < 18.5){
        text = "Abaixo do Peso"
    }else if(imc < 24.9){
        text = "Peso Normal"
    }else if(imc < 29.9){
        text = "Pré-obesidade"
    }else if(imc < 34.9){
        text = "Obesidade de Grau 1"
    }else if(imc < 39.9){
        text = "Obesidade de Grau 2"
    }else if(imc > 40){
        text = "Obesidade de Grau 3 "
    }
    document.getElementById('resultado').innerText = text
}


