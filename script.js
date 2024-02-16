let bici = document.querySelector("img");
let imagenes = ["./images/1_Plegable.jpg","./images/benelliRaceKing.jpg","./images/hibrida.jpg","./images/ninos.jpg","./images/VenzoFrida.jpg","./images/VolkswagenHighkube.jpg"];
let num=0;

function adelante(){
    num++;
    if(num>=imagenes.length){
        num=0
        bici.src=imagenes[num]
    }else{
        bici.src=imagenes[num]
    }
};

function atras(){
    num--;
    if(num<0){
        num=imagenes.length-1;
        bici.src=imagenes[num]
    }else{
        bici.src=imagenes[num]
    }
};

