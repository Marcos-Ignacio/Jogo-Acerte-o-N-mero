var numeroSecreto = parseInt(Math.random() * 11);
var chances = 5;
var chance = 0;
function Chutar() {
  var resultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);

  if (chance >= chances) return;

  if (chute == numeroSecreto) {
    resultado.innerHTML = "Parabéns você acertou";
    chance = 0;
  } else if (chute > 10 || chute < 0) {
    resultado.innerHTML = "Só vale os números de 0 à 10";
  } else {
    chance++;
    if (chance >= chances) {
      resultado.innerHTML =
        "Suas chances acabaram.<br/> O número secreto era " + numeroSecreto;
    } else {
      resultado.innerHTML = `Errou, Você tem mais ${chances - chance} chances`;
    }
  }
}

function Reset() {
  chance = 0;
  resultado.innerHTML = "";
}
