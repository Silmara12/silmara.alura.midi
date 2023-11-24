function tocaSomAplausos(){
    document.querySelector("#som_tecla_aplausos").play();
    }
function tocaSomVaia(){
    document.querySelector("#som_tecla_vaia").play();
}
function tocaSomRisada(){
    document.querySelector("#som_tecla_risada").play();
}   

function tocaSomErrado(){
    document.querySelector("#som_tecla_errado").play();
} 
function tocaSomGrilo(){
    document.querySelector("#som_tecla_grilo").play();
}

function tocaSomDinheiro(){
        document.querySelector("#som_tecla_dinheiro").play();      
}
    
function tocaSomTambores(){
    document.querySelector("#som_tecla_tambores").play();
}
function tocaSomTrombeta(){
    document.querySelector("#som_tecla_trombeta").play();
}

function tocaSomVitoria(){
    document.querySelector("#som_tecla_vitoria").play();
}

const listaDeTeclas = document.querySelectorAll(".tecla");   
listaDeTeclas[0].onclick = tocaSomAplausos;
listaDeTeclas[1].onclick = tocaSomVaia;
listaDeTeclas[2].onclick = tocaSomRisada;
listaDeTeclas[3].onclick = tocaSomErrado;
listaDeTeclas[4].onclick = tocaSomGrilo;
listaDeTeclas[5].onclick = tocaSomTambores;
listaDeTeclas[6].onclick = tocaSomTrombeta;
listaDeTeclas[7].onclick = tocaSomDinheiro;
listaDeTeclas[8].onclick = tocaSomVitoria;