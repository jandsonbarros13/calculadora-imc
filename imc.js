const calcular = document.getElementById('calcular')

function imc() {
  var nome = document.getElementById("nome").value
  var altura = document.getElementById("altura").value
  var peso = document.getElementById("peso").value
  var resultado = document.getElementById("resultado")
  var IMC = peso / (altura * altura)

  if (nome !== '' && altura !== '' && peso !== '') {
    let classificacao = ""
    if (IMC < 18.5) {
      classificacao = 'abaixo do peso'
    } else if (IMC > 18.5 && IMC <= 30) {
      classificacao = 'peso ideal'
    } else {
      classificacao = 'acima do peso'
    }
    resultado.textContent = `Ola ${nome} sua altura e ${altura} seu peso e ${peso} e seu imc e ${IMC.toFixed(2)} ${classificacao}`

  } else {
    resultado.textContent = 'Preencha todos os campos'
  }
}

calcular.addEventListener('click', imc)