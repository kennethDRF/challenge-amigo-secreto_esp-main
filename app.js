// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

const inputAmigo = document.getElementById("amigo");
const resultadoAmigoSecreto = document.getElementById("resultado");
const listaAmigos = document.getElementById("listaAmigos");

function limpiarInput (input) {
  input.value=''
}

function actualizarListaAmigos() {
  listaAmigos.innerHTML = "";
  for (let amigo = 0; amigo < amigos.length; amigo++) {
    listaAmigos.innerHTML += `<li>${amigos[amigo]}</li>`;
  }
}

function agregarAmigo() {
  let amigo = inputAmigo.value;
  
  if (amigo == "") {
    alert("Por favor, inserte un nombre.");
    return;
  }

  amigos.push(amigo);
  limpiarInput (inputAmigo);
  actualizarListaAmigos();
}
