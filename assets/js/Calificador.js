/*=============================================================
    License: Commons Attribution 3.0

    http://creativecommons.org/licenses/by/3.0/

    100% Free To use For Personal And Commercial Use.
   
    ========================================================  */

// Las siguientes variables son los bancos de preguntas y respuestas
var radioB= ["cenit", "taza", "cambialo", "vendra", "album", "dirigemelo","reloj", "aficion", "azul", "Guion"];
var radioAnswers=["op2","op2","op1","op1","op2","op1","op2","op1","op2","op2"];
////////////////////////////////////////////////////
var ddQuestions= ['dd1','dd2','dd3','dd4','dd5','dd6','dd7'];
var ddAnswers = ['Sobrino',"Antipática","Maestro","Indecente","Comprar","Causas","Convexa"];
///////////////////////////////////////////////////
var DADQuestions=['ddoA1','ddoA2','ddoA3','ddoA4','ddoA5','ddoA6','ddoA7','ddoA8','ddoA9','ddoA10',];
var DADAnswers= ['has','haz','as','ha','a','ah','Asia','hacia','hasta','asta',];
function Calificar1() {// Función que se manda a llamar al momento de presionar calificar 
    var calificacion = 0;
    if (validarExamen1()) {
        calificacion = calificarRadioButtons()*10;
        alert('Su puntuacion final es de: '+calificacion.toFixed(1)+'/10.0');
        if (calificacion == 10) {
            document.getElementById("btnActi2").textContent="Al ejercicio";
            document.getElementById("btnActi2").disabled = false; 
            document.getElementById("btnActi1").textContent="Completado con 10";
            document.getElementById("btnActi1").disabled = true; 
        }
    }
    else{
        alert("Por favor, responda todas las preguntas para poder ser calificado.")
    }
}
function Calificar2() {// Función que se manda a llamar al momento de presionar calificar 
    var calificacion = 0;
    if (validarExamen2()) {
        calificacion = calificarDropDown()*10
        alert('Su puntuacion final es de: '+calificacion.toFixed(1)+'/10.0');
        if (calificacion == 10) {
            document.getElementById("btnActi3").textContent="Al ejercicio";
            document.getElementById("btnActi3").disabled = false; 
            document.getElementById("btnActi2").textContent="Completado con 10";
            document.getElementById("btnActi2").disabled = true; 
        }
    }
    else{
        alert("Por favor, responda todas las preguntas para poder ser calificado.")
    }
}
function Calificar3() {// Función que se manda a llamar al momento de presionar calificar 
    var calificacion = 0;
    if (validarExamen3()) {
        calificacion = calificarDragAndDrop()*10;
        alert('Su puntuacion final es de: '+calificacion.toFixed(1)+'/10.0');
        if (calificacion == 10) {
            document.getElementById("btnActi3").textContent="Completado con 10";
            document.getElementById("btnActi3").disabled = true; 
        }
    }
    else{
        alert("Por favor, responda todas las preguntas para poder ser calificado.")
    }
}
function validarExamen1(){ // Función que valida que el examen haya sido resuelto en su totalidad
    try {
        for (let index = 0; index < radioB.length; index++) {
            var seleccion = document.querySelector('input[name='+radioB[index]+']:checked').value;
        }
        return true;
    } catch (e) {
  
        return false;
        
    }
   
}
function validarExamen2(){
    try {
        for (let index2 = 0; index2 < ddQuestions.length; index2++) {
            var combo = document.getElementById(ddQuestions[index2]);
            var selected = combo.options[combo.selectedIndex].text;
            if (selected == "") {
                return false;
            }
        }
        return true;
    } catch (e) {
        return false;
    }
}

function validarExamen3(){
    try {
        for (let index3 = 0; index3 < DADQuestions.length; index3++) {
            var div = document.getElementById(DADQuestions[index3]);
            if (div.textContent == "") {
                return false;
            }
        }
        return true;
    } catch (e) {
        return false;
    }
}
function calificarRadioButtons() {// Función que califica el ejercicio que utiliza RB (Uso de tilde)
    var calificacionRB= 0;
    for (let index = 0; index < radioB.length; index++) {
        var seleccion = document.querySelector('input[name='+radioB[index]+']:checked').value;
        if (seleccion == radioAnswers[index]) {
            calificacionRB +=1;
        }
    }
    return calificacionRB/(radioB.length);
}
function calificarDropDown(){// Función que califica el ejercicio que utiliza elementos DD (Antónimos)
    var correctas= 0;
    for (let index = 0; index < ddQuestions.length; index++) {
        var combo = document.getElementById(ddQuestions[index]);
        var selected = combo.options[combo.selectedIndex].text;   
        if (selected == ddAnswers[index]) {
            correctas +=1;
        }     
    }

    return correctas/(ddQuestions.length);
}
function calificarDragAndDrop(){// Función que califica el ejercicio que utiliza D&D (Parónimos)
    var correctas= 0;
    for (let index = 0; index < DADAnswers.length; index++) {
        var span = document.getElementById(DADAnswers[index]);
        var div = document.getElementById(DADQuestions[index]).contains(span);
        if (div) {
            correctas+=1;
        }
    }

    return correctas/(DADQuestions.length);
}