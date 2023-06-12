//Questão 1
function ehPrimo(number) {
    if (number < 2) {
      return false;
    }
  
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
  
    return true;
  }
  
  function verificarPrimo() {
    var inputNumber = prompt('Digite um número:');
    var number = parseInt(inputNumber);
  
      if (ehPrimo(number)) {
        alert(number + ' é um número primo.');
      } else {
        alert(number + ' não é um número primo.');
      }
  }

  verificarPrimo();

  //Questão 2
  function validarSenha() {
    var senha = prompt('Digite sua senha:');
    var possuiMaiuscula = /[A-Z]/.test(senha);
    var possuiMinuscula = /[a-z]/.test(senha);
    var possuiNumero = /\d/.test(senha);
    var possuiTamanhoMinimo = senha.length >= 8;
  
    if (possuiMaiuscula && possuiMinuscula && possuiNumero && possuiTamanhoMinimo) {
      alert('Parabéns sua senha é válida.');
    } else {
      alert('ERRO! Esta senha não é válida.');
    }
  }

  validarSenha();

  //Questão 3
  function calcularFatorial(numero) {
    if (numero === 0 || numero === 1) {
      return 1;
    } else {
      let fatorial = 1;
      for (let i = 2; i <= numero; i++) {
        fatorial *= i;
      }
      return fatorial;
    }
  }
  
  function verificarFatorial() {
    var numero = parseInt(prompt('Digite um número para calcular seu fatorial:'));
    var fatorial = calcularFatorial(numero);
    alert(`O fatorial de ${numero} é ${fatorial}`);
  }

  verificarFatorial();

  //Questão 4
  function verificarQuadrado() {
    var numero = prompt("Informe um número para verificar se é ou não um quadrado perfeito:");
    var raizQuadrada = Math.sqrt(numero);
    if (Math.floor(raizQuadrada) === raizQuadrada) {
      alert("O número é um quadrado perfeito!");
    } else {
      alert("O número não é um quadrado perfeito.");
    }
  }

  verificarQuadrado();
  
