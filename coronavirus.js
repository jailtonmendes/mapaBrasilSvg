"use strict"

let DB = [
    {
        "uf": "Brasil",
        "suspeitos": "100",
        "confirmados": "50",
        "mortes": "5"
    }
];

const showData = ( data ) => {
    const panel = `
        <div class='estado'>
            ${data.uf}
        </div>
        <div class='card suspeitos'>
            <div class='numeros'><div class='spinner blue'></div></div>
            <div class='titulos'> SUSPEITOS </div>
        </div>
        <div class='card confirmados'>
            <div class='numeros'><div class='spinner gold'></div></div>
            <div class='titulos'> CONFIRMADOS </div>
        </div>
        <div class='card mortes'>
            <div class='numeros'><div class='spinner red'></div></div>
            <div class='titulos'> MORTES </div>
        </div>
    `;

    const $container = document.createElement ('div');
    $container.innerHTML = panel;

    const $info = document.getElementById ('info');
    // $info.removeChild($info.firstChild)
    $info.appendChild ($container);
};

const getCoronaBrasil = async () => {
    const url = 'https://covid19-brazil-api.now.sh/api/report/v1/brazil';
    const getApi = await fetch (url);
    const json = await getApi.json();
    const brasil = await {
        "uf": "Brasil",
        "suspeitos": json.data.cases,
        "confirmados": json.data.confirmed,
        "mortes": json.data.deaths
    }

    showData(brasil)
}
// const getCoronaState = async() => {

// }

showData( DB[0]);
getCoronaBrasil();