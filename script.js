const cpfsCadastrados = [
    11111111111
];

document.getElementById("moradia").addEventListener("change", function (){
    const apt = document.getElementById("apartamentoDiv");
    const casa = document.getElementById("casaDiv");

    apt.style.display = "none";
    casa.style.display = "none";

    if (this.value === "apartamento") apt.style.display = "block";
    if (this.value === "casa") casa.style.display = "block";
})

document.getElementById("possuiQuintal").addEventListener("change", function (){
    const div = document.getElementById("quintalSeguroDiv");

    if (this.value === "sim") {
        div.style.display = "block";
    } else {
        div.style.display = "none";
    }
})


document.getElementById("formulario").addEventListener("submit", function(e) {

    let erros = [];

    const idade = document.getElementById("idade").value;
    const tel = document.getElementById("telefone").value;
    const cpf = document.getElementById("cpf").value;
    const moradia = document.getElementById("moradia").value;
    const permite = document.getElementById("permiteAnimais").value;
    const possuiQuintal = document.getElementById("possuiQuintal").value;
    const quintalSeguro = document.getElementById("quintalSeguro").value;
    const pet = document.getElementById("pet").value;
    const horas = document.getElementById("hora").value;
    const motivo = document.getElementById("mensagem").value.toLowerCase();
    const financeiro = document.getElementById("financeiro").value;
    const decisao = document.getElementById("decisao").value;

    if(idade < 18) erros.push("Tem que ter +18");

    const telNumeros = tel.replace(/\D/g, '');
    if (telNumeros.length < 8) {
        erros.push("Telefone inválido (mínimo 8 números)");
    }

    if (cpfsCadastrados.includes(cpf)) {
        erros.push("CPF já cadastrado.")
    }

    if (moradia === "apartamento"){
        if (permite !== "sim") {
            erros.push("Apartamento precisa permitir animais.");
        }
    }

    if (moradia === "casa") {
        if (possuiQuintal == "nao") {
            erros.push("Casa precisa ter quintal.");
        }

        if (possuiQuintal === "sim" && quintalSeguro !== "sim") {
            erros.push("O quintal precisa ser seguro.");
        }
    }

    if (horas > 8) {
        erros.push("O pet ficará mais de 8 horas sozinho! Justifique melhor.");
    }

    if (pet === "nao") {
        alert("A ONG poderá acompanhar sua adaptaão com o pet.");
    }

    const motivosInvalidos = ["quero", "porque sim"];
    if (motivosInvalidos.some(m => motivo.includes(m))) {
        erros.push("Motivo muito genérico.");
    }

    if (financeiro === "ruim") {
        erros.push("Condição financeira insuficiente.");
    }

    if (decisao === "hoje") {
        erros.push("Atenção: A sua decisão pode estar sendo impulsiva!");
    }

    if (!document.getElementById("termo").checked) {
        erros.push("Você precisa aceitar os termos");
    }

    if(erros.length > 0) {
        e.preventDefault(); 
        alert("Erros encontrados:\n" + erros.join("\n"));
    }
});
