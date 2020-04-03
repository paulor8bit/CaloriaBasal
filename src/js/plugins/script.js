
function adcionalinha (saida) { 
let elemento_pai = document.body
let titulo = document.createElement('p')
let texto  = document.createTextNode(saida)
titulo.appendChild(texto)
elemento_pai.appendChild(titulo)
    
}

let botaoAdicionar = document.querySelector("#adcionar")
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault()
    let form = document.querySelector("#form-adiciona")
    let peso = form.peso.value
    let altura = form.altura.value
    let idade = form.idade.value
    let caloria = 0 
    let imc = 0
    let ideal = 0 
    ideal = (((altura*altura)*24.9)/10000).toFixed(2)
    imc = ((peso/(altura*altura))*10000).toFixed(2)
    caloria = (66+(13.7*peso)+(5*altura)-(6.8*idade)).toFixed(2)

    adcionalinha(`Sua caloria basal é de ${caloria} kcal
    com um IMC de ${imc}, Sendo um peso máximo de ${ideal} KG
    `)
  
    
})

// <!-- Adcionar IMC  e peso ideal -->
//  <!-- IMC	Resultado
// Menos do que 18,5	Abaixo do peso
// Entre 18,5 e 24,9	Peso normal
// Entre 25 e 29,9	Sobrepeso
// Entre 30 e 34,9	Obesidade grau 1
// Entre 35 e 39,9	Obesidade grau 2
// Mais do que 40	Obesidade grau 3 -->