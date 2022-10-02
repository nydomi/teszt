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

let elem = 0;
let kepekSora = ["https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg", "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg","https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2022-08/220805-border-collie-play-mn-1100-82d2f1.jpg"];
function kutyik(){
    elem++;
    if(elem>2){
        elem=0;
    }
    document.kutyusKepe.kepek.src=kepekSora[elem];
    console.log(elem);
} 
function randomKepek(){
    let random = Math.floor(Math.random()*kepekSora.length);
    document.kutyusKepe.rdKepek.src=kepekSora[random];
    console.log(random);
}