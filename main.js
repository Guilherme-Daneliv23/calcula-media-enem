const areasDoConhecimento = document.querySelectorAll('.area-do-conhecimento');
const botao = document.getElementById("botao");
const exibeMedia = document.getElementById("media");
const exibeAprovacao = document.querySelector('.calcula-media');

const faculdades = new Array(
    `Matemática`,
    `Turismo`,
    `Agronomia`,
    `Enfermagem`,
    `Engenharia Civil`,
    `Pisicologia`,
    `Medicina`
);

const notasCorte = new Array(
    550.53,
    565.28,
    610.33,
    620,
    700,
    732.50,
    754.78
);

botao.onclick = function ()   {
    calculaMedia();
    botao.disabled = true;
    alert("Notas de corte podem ter valores incompatíveis com a realidade!");
    console.log("Notas de corte podem ter valores incompatíveis com a realidade!");
};

function calculaMedia(){
    let soma = 0;
    for(let i = 0; i < areasDoConhecimento.length; i++)   {
        const nota = parseInt(areasDoConhecimento[i].value);
        soma = soma + nota;
    };
    const media = soma / 5;
    exibeMedia.innerHTML = media;
    verificaUniversidade(media);
};

function verificaUniversidade(x) {
    for(let i = 0; i < faculdades.length; i++)  {
        if(x > notasCorte[i]) {
            let exibeFaculdades = document.createElement("span");
            let texto = document.createTextNode(faculdades[i]);
            exibeFaculdades.appendChild(texto);
            // body.appendChild(exibeFaculdades);
            exibeAprovacao.appendChild(exibeFaculdades);
        };
    };
};
