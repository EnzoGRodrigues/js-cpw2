
/**
 * Recebe um array com os nomes de pessoas e retorna um array invertido
 *
 * @param {*} people : Um array contendo um conjunto de nomes
 * @returns Um array com os nomes invertidos
 */
function invert(people) {

    let nomes = []

    for (let i = people.length - 1; i >= 0; i--) {
        console.log(people[i]);
        nomes.push(people[i]);
    }

    // TODO
    // 1) Peça ao usuário para digitar vários nomes. Exiba na tela
    // todos os nomes digitados, porém de maneira invertida (do último para o primeiro).
    // Uma dica, você pode utilizar a função prompt para permitir que o usuário digite os
    // nomes dos usuários.

    return nomes;
}

/**
 * Essa função recebe um array de notas e retorna uma média
 *
 * @param {*} grades : Um array de notas
 * @returns Uma média a partir do array de notas
 */
function mean(grades) {


    let notas = 0;

    for (let i = 0; i < grades.length; i++) {
        notas += grades[i];
    }

    notas = notas / 3;

    // TODO
    // 2) Faça um programa que leia o nome e as três notas de uma disciplina de um aluno e ao final escreva
    // o nome do aluno, sua média e se ele foi aprovado, sabendo-se que a média para aprovação é igual
    // ou superior a 7.

    return notas;
}

/**
 * Função recebe uma média e informa textualmente se um estudante está aprovado ou não
 *
 * @param {*} mean : Um número que representa uma média
 * @returns Uma string dizendo se um estudante está aprovado ou não
 */
function isApproved(mean) {

    let notas = mean;

    if (mean.isArray) {

        notas = 0;

        for (let i = 0; i < mean.length; i++) {
            notas += mean[i];
        }
        notas = notas / 3;
    }

    let str = "";

    if (notas >= 7) {
        str = "aprovado";
    } else if (notas < 7) {
        str = "reprovado";
    }

    // TODO
    // 2.1) Faça um programa que leia o nome e as três notas de uma disciplina de um aluno e ao final escreva
    // o nome do aluno, sua média e se ele foi aprovado, sabendo-se que a média para aprovação é igual
    // ou superior a 7.

    return str;
}

/**
 * Recebe uma data no formato de string e transforma em um formato textual
 *
 * @param {*} strDate : Uma string no formato de data
 * @returns Uma descrição da data informada
 */
function wide(strDate) {

    if (/^\d{2}-\d{2}-\d{4}$/.test(strDate)) {
        strDate = "";
    }

    if (strDate !== "") {
        let meses = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro",
            "novembro", "dezembro"];
        let dia = strDate.split("/")[0];
        let mes = parseInt(strDate.split("/")[1]);
        mes = meses[mes - 1];
        let ano = strDate.split("/")[2];
        strDate = dia + " de " + mes + " de " + ano;
    }

    // TODO
    // 3) Faça um script que receba uma data no formato “dd/mm/aaaa” e escreva a data por extenso,
    // por exemplo, de "03/03/2022" para "03 de março de 2022". Dica: use a função
    // “split” de uma string que quebra a string em pedaços dado um separador como argumento da função.
    // Nesse caso, o separador é a barra (/) da data.

    return strDate;
}

// Trecho utilizado pelos testes
exports._test = {
    invert: invert,
    mean: mean,
    isApproved: isApproved,
    wide: wide
}
