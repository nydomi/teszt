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

function fizetesEmeles(){
    let fizetes =parseFloat( document.fizet.haviFizetes.value);
    
    if(fizetes>=10000){
        fizetes=fizetes*1.25;
        document.getElementById('eredmeny').innerHTML="A fizetésed " + fizetes + "-re nőtt"
    }
    else{
        document.getElementById('eredmeny').innerHTML="Nem nőtt az egyeleged";
    }
}

function hatter(hatterSzin){
    switch(hatterSzin){
        case 'piros':
            document.body.style.backgroundColor="red";
            break;
        case 'sarga':
            document.body.style.backgroundColor="yellow";
            break;
        case 'feher':
            document.body.style.backgroundColor="white";
            break;
        default:
            document.body.style.backgroundColor="gray";
    }
}

