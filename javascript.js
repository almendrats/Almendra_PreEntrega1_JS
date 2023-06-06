// ¿Qué es el proyecto? Una calculadora de BMI que no te deje probarla si no metes una edad may

// Alert para saludar y dar bienvenida + disclaimer
alert("Hola! Calculemos tu BMI!"); 
alert("Recuerda que el BMI no debe ser tu única referencia de salud. Consulta a tu médico y no es recomendada esta calculadora si eres menor de edad"); 

// Pedimos info de la persona!!
 function obtenerInputUser(promptMessage) {
    let userInput = prompt(promptMessage);
    return userInput;
  }
  

// Incorporando un loop? para q no me deje entrar hasta poner edad válida...no supe qué otro loop crear 
  let edadValida = true;
  while (edadValida) {
    let name = obtenerInputUser("Dime tu nombre:");
    let age = parseInt(obtenerInputUser("Dime tu edad:"));
  
    // Ahora revisamos si el user es +18
    if (age >= 18) {
      let gender = obtenerInputUser("Decime tu género (varon/mujer):");
      let weight = parseFloat(obtenerInputUser("Por favor, pon tu peso en kilogramos:"));
      let height = parseFloat(obtenerInputUser("Por favor, pon tu altura en cm:"));
  
      // Vamos al cálculo
      let bmi = calculateBMI(weight, height);
  
      // Condicionando el estado del peso 
      let tipoPeso = obtenerTipoPeso(bmi);

      // Creamos y armamos funcion de cálculo 
function calculateBMI(weight, height) {
    // Conversión de cm a m
    let alturaMetro = height / 100;
    
    // cálculo propio BMI
    let bmi = weight / (alturaMetro * alturaMetro);
    
    return bmi;
  }
  
  // Función de estado del peso
  function obtenerTipoPeso(bmi) {
    if (bmi < 18.5) {
      return "Infrapeso";
    } else if (bmi >= 18.5 && bmi < 25) {
      return "Peso Normal/Saludable";
    } else {
      return "Sobre peso";
    }
  }
  
  // Alert con resultados + salto de línea
      let message = "Nombre: " + name + "\n" +
                    "Edad: " + age + "\n" +
                    "Genero: " + gender + "\n" +
                    "BMI: " + bmi + "\n" +
                    "Tipo de Peso: " + tipoPeso;
      alert(message);
    } else {
      alert("Uy! eres menor de edad. Esta página no es para ti.");
    }

  }

// notas: me quedé pensando cómo incorporar para q me deje hacer un nuevo intento o limpiar página
// también creo q pude haberlo puesto para q no deje entrar varones (?) ya que podría modificar la estructura general para ser página fit de mujeres, pero quedaba muy forra jajaja
// ayudita tmb para redondear el decimal, se me va muy grande
 
  