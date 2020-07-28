const moment = require("moment");

let ano = moment().format("YY");
let mes = moment().format("MM");
let dia = moment().format("DD");


function ajustaDia(dia){
    
    if (dia == 01)
        dia = 1;
    if (dia == 02)
        dia = 2;
    if (dia == 03)
        dia = 3;
    if (dia == 04)
        dia = 4;
    if (dia == 05)
        dia = 5;
    if (dia == 06)
        dia = 6;
    if (dia == 07)
        dia = 7;
    if (dia == 08)
        dia = 8;
    if (dia == 09)
        dia = 9;

    else if (dia == 10)
        dia = 1;
    else if (dia == 20)
        dia = 2;
    else if (dia == 30)
        dia = 3;

    return dia;
}

function ajustaMes(mes){
    
    if (mes == 01)
        mes = 1;
    else if (mes == 02)
        mes = 2;
    else if (mes == 03)
        mes = 3;
    else if (mes == 04)
        mes = 4;
    else if (mes == 05)
        mes = 5;
    else if (mes == 06)
        mes = 6;
    else if (mes == 07)
        mes = 7;
    else if (mes == 08)
        mes = 8;
    else if (mes == 09)
        mes = 9;     
    else if (mes == 10)
        mes = 1;

    return mes;
}

function ajustaAno(ano){
    
    if (ano == 10)
        ano = 1;
    else if (ano == 20)
        ano = 2;
    else if (ano == 30)
        ano = 3;
    else if (ano == 40)
        ano = 4;
    else if (ano == 50)
        ano = 5;
    else if (ano == 60)
        ano = 6;
    else if (ano == 70)
        ano = 7;
    else if (ano == 80)
        ano = 8;
    else if (ano == 90)
        ano = 9;                        
    
    return ano;
    
}

let parametroN = ajustaDia(dia).toString() + ajustaMes(mes).toString() + ajustaAno(ano).toString();
parametroN = parseInt(parametroN) * 9;
console.log("Parametro N: " + parametroN);



