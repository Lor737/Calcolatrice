var risultato = 0;
var uno = document.getElementById("id1");
var due = document.getElementById("id2");
var tre = document.getElementById("id3");
var quattro = document.getElementById("id4");
var cinque = document.getElementById("id5");
var sei = document.getElementById("id6");
var sette = document.getElementById("id7");
var otto = document.getElementById("id8");
var nove = document.getElementById("id9");
var zero = document.getElementById("id0");
var punto = document.getElementById("idv");
var divisione = document.getElementById("idd");
var moltiplicazione = document.getElementById("idm");
var sottrazione = document.getElementById("ids");
var addizione = document.getElementById("ida");
var cancella = document.getElementById("ide");
var uguale = document.getElementById("idu");

var stringa_calcolo = "";
var stringa_calcolo_1 = "";
var numero = "";
var numero2 = "";
var punto_stringa = 0;
var numeri_array = [];
var cifre = 0;
var numero_completo_1 = 0;
var numero_completo = "";
var testo_calcolatrice = document.getElementById("output");
testo_calcolatrice.innerHTML = "0";

  jQuery(".t1").click(function()
  {
    if(testo_calcolatrice.innerHTML == "0")       {testo_calcolatrice.innerHTML = "1";}
    else if (testo_calcolatrice.innerHTML != "0") {testo_calcolatrice.innerHTML += "1";}
    stringa_calcolo = stringa_calcolo + "1";
    console.log("1");

  });
  jQuery(".t2").click(function()
  {
    if(testo_calcolatrice.innerHTML == "0")       {testo_calcolatrice.innerHTML = "2";}
    else if (testo_calcolatrice.innerHTML != "0") {testo_calcolatrice.innerHTML += "2";}
    stringa_calcolo = stringa_calcolo + "2";
    console.log("2");
  });
  jQuery(".t3").click(function()
  {
    if(testo_calcolatrice.innerHTML == "0")       {testo_calcolatrice.innerHTML = "3";}
    else if (testo_calcolatrice.innerHTML != "0") {testo_calcolatrice.innerHTML += "3";}
    stringa_calcolo = stringa_calcolo + "3";
    console.log("3");
  });
  jQuery(".t4").click(function()
  {
    if(testo_calcolatrice.innerHTML == "0")       {testo_calcolatrice.innerHTML = "4";}
    else if (testo_calcolatrice.innerHTML != "0") {testo_calcolatrice.innerHTML += "4";}
    stringa_calcolo = stringa_calcolo + "4";
    console.log("4");
  });
  jQuery(".t5").click(function()
  {
    if(testo_calcolatrice.innerHTML == "0")       {testo_calcolatrice.innerHTML = "5";}
    else if (testo_calcolatrice.innerHTML != "0") {testo_calcolatrice.innerHTML += "5";}
    stringa_calcolo = stringa_calcolo + "5";
    console.log("5");
  });
  jQuery(".t6").click(function()
  {
    if(testo_calcolatrice.innerHTML == "0")       {testo_calcolatrice.innerHTML = "6";}
    else if (testo_calcolatrice.innerHTML != "0") {testo_calcolatrice.innerHTML += "6";}
    stringa_calcolo = stringa_calcolo + "6";
    console.log("6");
  });
  jQuery(".t7").click(function()
  {
    if(testo_calcolatrice.innerHTML == "0")       {testo_calcolatrice.innerHTML = "7";}
    else if (testo_calcolatrice.innerHTML != "0") {testo_calcolatrice.innerHTML += "7";}
    stringa_calcolo = stringa_calcolo + "7";
    console.log("7");
  });
  jQuery(".t8").click(function()
  {
    if(testo_calcolatrice.innerHTML == "0")       {testo_calcolatrice.innerHTML = "8";}
    else if (testo_calcolatrice.innerHTML != "0") {testo_calcolatrice.innerHTML += "8";}
    stringa_calcolo = stringa_calcolo + "8";
    console.log("8");
  });
  jQuery(".t9").click(function()
  {
    if(testo_calcolatrice.innerHTML == "0")       {testo_calcolatrice.innerHTML = "9";}
    else if (testo_calcolatrice.innerHTML != "0") {testo_calcolatrice.innerHTML += "9";}
    stringa_calcolo = stringa_calcolo + "9";
    console.log("9");
  });
  jQuery(".t0").click(function()
  {
    if(testo_calcolatrice.innerHTML == "0")       {testo_calcolatrice.innerHTML = "0";}
    else if (testo_calcolatrice.innerHTML != "0") {testo_calcolatrice.innerHTML += "0";}
    stringa_calcolo = stringa_calcolo + "0";
    console.log("0");
  });
  jQuery(".tv").click(function()
  {
    numero = stringa_calcolo.substring(stringa_calcolo.length-1,stringa_calcolo.length);
    if (numero != "+" && numero != "-" && numero != "x" && numero != "÷" && numero != "." && stringa_calcolo.length != 0)
    {
      punto_stringa += 1;
      console.log("punto: " + punto_stringa);
      if (punto_stringa == 0 || punto_stringa == 1)
      {
        stringa_calcolo = stringa_calcolo + ".";
        testo_calcolatrice.innerHTML += ".";
        console.log(".");
      }
    }
    numero = "";
  });

//______________________________________________________

  jQuery(".ta").click(function()
  {

    numero = stringa_calcolo.substring(stringa_calcolo.length-1,stringa_calcolo.length);
    if (numero != "+" && numero != "-" && numero != "x" && numero != "÷" && numero != "." && stringa_calcolo.length != 0)
    {
      stringa_calcolo = stringa_calcolo + "+";
      testo_calcolatrice.innerHTML += "+";
    }
    punto_stringa = 0;
    numero = "";
    console.log("+");
  });
  jQuery(".ts").click(function()
  {
    numero = stringa_calcolo.substring(stringa_calcolo.length-1,stringa_calcolo.length);
    if (numero != "+" && numero != "-" && numero != "x" && numero != "÷" && numero != "." && stringa_calcolo.length != 0)
    {
      stringa_calcolo = stringa_calcolo + "-";
      testo_calcolatrice.innerHTML += "-";
    }
    punto_stringa = 0;
    numero = "";
    console.log("-");
  });
  jQuery(".tm").click(function()
  {
    numero = stringa_calcolo.substring(stringa_calcolo.length-1,stringa_calcolo.length);
    if (numero != "+" && numero != "-" && numero != "x" && numero != "÷" && numero != "." && stringa_calcolo.length != 0)
    {
      stringa_calcolo = stringa_calcolo + "x";
      testo_calcolatrice.innerHTML += "x";
    }
    punto_stringa = 0;
    numero = "";
    console.log("*");
  });
  jQuery(".td").click(function()
  {
    numero = stringa_calcolo.substring(stringa_calcolo.length-1,stringa_calcolo.length);
    if (numero != "+" && numero != "-" && numero != "x" && numero != "÷" && numero != "." && stringa_calcolo.length != 0)
    {
      stringa_calcolo = stringa_calcolo + "÷";
      testo_calcolatrice.innerHTML += "÷";
    }
    punto_stringa = 0;
    numero = "";
    console.log("÷");
  });
  jQuery(".c").click(function()
  {
    uno.disabled = false;
    due.disabled = false;
    tre.disabled = false;
    quattro.disabled = false; 
    cinque.disabled = false; 
    sei.disabled = false; 
    sette.disabled = false; 
    otto.disabled = false; 
    nove.disabled = false; 
    zero.disabled = false; 
    punto.disabled = false;
    divisione.disabled = false;
    moltiplicazione.disabled = false; 
    sottrazione.disabled = false; 
    addizione.disabled = false;
    cancella.disabled = false;
    uguale.disabled = false;
    testo_calcolatrice.innerHTML = "0";
    stringa_calcolo = "";
    numero_completo = "";
    numero = "";
    punto_stringa = 0;
    risultato = 0;
    numeri_array = [];
    console.log("prossima operazione");
  });
  jQuery(".de").click(function()
  {
    for (var i=0;i<stringa_calcolo.length-1;i++)
    {
      numero = stringa_calcolo.substring(i,i+1);
      stringa_calcolo_1 += numero;
    }
    stringa_calcolo = stringa_calcolo_1;
    testo_calcolatrice.innerHTML = stringa_calcolo;
    console.log("stringa_calcolo: " + stringa_calcolo)
    stringa_calcolo_1 = "";
    numero = "";
  });
//____________________________________________________________________________________________

  jQuery(".tu").click(function()
  {
    stringa_calcolo = stringa_calcolo + "|";
    console.log("stringa_calcolo: " + stringa_calcolo);
    for (var i=0;i<stringa_calcolo.length;i++)
    {
      numero = stringa_calcolo.substring(i,i+1);
      cifre += 1;
      if (numero == "+" || numero == "-" || numero == "x" || numero == "÷" || numero == "|")
      {
        
        numero_completo = stringa_calcolo.substring((i+1)-cifre,i);
        numeri_array.push(parseFloat(numero_completo));
        numeri_array.push(numero);
        cifre = 0;
      }
    }
    console.log("numeri_array: " + numeri_array);
    risultato = numeri_array[0];
            /*
    Ragionamento per stringa_calcolo.substring((i+1)-cifre,i);
    5 i=0 cifre=1
    4 i=1 cifre=2
    6 i=2 cifre=3
    7 i=3 cifre=4
    + i=4 cifre=5
    3 i=5 cifre=1
    6 i=6 cifre=2
    8 i=7 cifre=3
    i=8 cifre=4
        */

  //_______________________________________________________________________________________________

    for (var i=0;i<numeri_array.length;i++)
    {
      if (numeri_array[i] == "+")
      {
        risultato += numeri_array[i+1]; 
        numeri_array[i+1] = risultato;
      }
      if (numeri_array[i] == "-")
      {
        risultato -= numeri_array[i+1]; 
        numeri_array[i+1] = risultato;
      }
      if (numeri_array[i] == "x")
      {
        risultato *= numeri_array[i+1];
        numeri_array[i+1] = risultato; 
      }
      if (numeri_array[i] == "÷")
      {
        risultato /= numeri_array[i+1]; 
        numeri_array[i+1] = risultato;
      }
    }
    console.log("risultato: " + risultato);
    testo_calcolatrice.innerHTML = risultato;
    uno.disabled = true;
    due.disabled = true;
    tre.disabled = true;
    quattro.disabled = true; 
    cinque.disabled = true; 
    sei.disabled = true;
    sette.disabled = true; 
    otto.disabled = true; 
    nove.disabled = true; 
    zero.disabled = true; 
    punto.disabled = true;
    divisione.disabled = true;
    moltiplicazione.disabled = true; 
    sottrazione.disabled = true;
    addizione.disabled = true;
    cancella.disabled = true;
    uguale.disabled = true;
    /*
    3    +   5   -   4
    i=0 i=1 i=2 i=3 i=4
    risultato = 3
    i = 1
    risultato += numeri_array[2]
    risultato +=  5
    numeri_array[2] = risultato
    i = 3
    risultato -= numeri_array[4]
    risultato -=  4
    numeri_array[4] = risultato
    */
  });
 