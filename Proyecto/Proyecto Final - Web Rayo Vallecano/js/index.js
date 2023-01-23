//document.getElementById('menuMob').style.width='0px';
document.getElementById('menuMob').style.display='none';


function toggleMenu(){
    //let ancho=document.getElementById('menuMob').style.width;
    let disp=document.getElementById('menuMob').style.display;

    if(disp=='none'){
        document.getElementById('menuMob').style.display='flex';
        /*
        setTimeout(()=>{
            document.getElementById('menuMob').style.width='150px';
        },15);
        */
    }else{
        document.getElementById('menuMob').style.display='none';
        /*
        document.getElementById('menuMob').style.width='0px';
        setTimeout(()=>{
            document.getElementById('menuMob').style.display='none';
        },500);
        */
    }
}

function loadCamisetas(){
    for(let i=0;i<camisetas.length;i++){
        var bloqueCami=document.createElement('div');
        bloqueCami.classList.add('bloqueCamiseta');

        var imageCami=document.createElement('img');
        imageCami.src='./img/'+camisetas[i].imagen;
        imageCami.classList.add('imagenCamiseta');
        bloqueCami.appendChild(imageCami);

        var textoCami=document.createElement('div');
        textoCami.innerHTML=camisetas[i].texto_superior+'<br>'+camisetas[i].texto_inferior;
        bloqueCami.appendChild(textoCami);

        var botonCami=document.createElement('a');
        botonCami.classList.add('botonCamiseta');
        botonCami.href=camisetas[i].enlace;
        botonCami.innerHTML='Comprar';
        bloqueCami.appendChild(botonCami);

        document.getElementById('listaCamisetas').appendChild(bloqueCami);

    }
    
}


var camisetas=[
    {
        "texto_superior":"Equipación Local Jugador",
        "texto_inferior":"Temporada 2022/2023",
        "imagen":"Camiseta_Rayo_local.jpg",
        "enlace":"http://www.tiendarayovallecano.es/"
    },
    {
        "texto_superior":"Equipación Local Portero",
        "texto_inferior":"Temporada 2022/2023",
        "imagen":"Camiseta_Rayo_portero_local.jpg",
        "enlace":"http://www.tiendarayovallecano.es/"
    },
    {
        "texto_superior":"Equipación Visitante Jugador",
        "texto_inferior":"Temporada 2022/2023",
        "imagen":"Camiseta_Rayo_alternativa_olas.jpg",
        "enlace":"http://www.tiendarayovallecano.es/"
    }
];

