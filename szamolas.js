console.log("ITT VAGYOK");

function hengerSzam(){
    let a = parseInt(document.henger.sugar.value);
    let b = parseInt(document.henger.magassag.value);
    let terfogat = a*a*Math.PI*b;
    console.log(terfogat);
    alert(terfogat)

}


function bankSzam(){
    
    let penzSzam =   parseFloat(document.bank.money.value);
    let kamatSzam =parseFloat( document.bank.kamat.value);
    let honapSzam = parseFloat(document.bank.honap.value);
    let penzEretk = penzSzam*Math.pow(1+kamatSzam/100,honapSzam/12);
    console.log("Honapszam: "+honapSzam);
    console.log(penzEretk);


}

