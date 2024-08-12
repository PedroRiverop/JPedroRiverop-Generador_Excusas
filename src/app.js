/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
window.onload = function() {
  //write your code here
  let primeraParte = "Un ";
  let adjetivo = [
    "doble cabeza ",
    "nuclear ",
    "enojado ",
    "solitario ",
    "loco ",
    "brillante ",
    "apestoso ",
    "lento ",
    "viejo "
  ];
  let sustantivo = [
    "corredor ",
    "mapache ",
    "perro ",
    "comerciante ",
    "conductor ",
    "comediante "
  ];
  let accion = [
    "tomó mi ",
    "arrojó mi ",
    "gritó a mi ",
    "pateó mi ",
    "robó mi ",
    "quemó mi ",
    "mordió mi ",
    "golpeó mi "
  ];
  let posesion = [
    "dedo del pie ",
    "coche ",
    "reloj ",
    "zapato ",
    "cartera ",
    "camisa ",
    "llaves ",
    "computadora ",
    "teléfono ",
    "sándwich "
  ];
  let lugar = [
    "en la calle",
    "en mi casa",
    "en mi entrada",
    "frente a la oficina",
    "cerca del centro comercial",
    "cerca del baño",
    "en la estación de autobuses"
  ];

  let indiceAdjetivo = Math.floor(Math.random() * adjetivo.length);
  let indiceSustantivo = Math.floor(Math.random() * sustantivo.length);
  let indiceAccion = Math.floor(Math.random() * accion.length);
  let indicePosesion = Math.floor(Math.random() * posesion.length);
  let indiceLugar = Math.floor(Math.random() * lugar.length);

  let excusa =
    primeraParte +
    adjetivo[indiceAdjetivo] +
    sustantivo[indiceSustantivo] +
    accion[indiceAccion] +
    posesion[indicePosesion] +
    lugar[indiceLugar] +
    ".";
  document.getElementById("excuse").innerHTML = excusa;
};
