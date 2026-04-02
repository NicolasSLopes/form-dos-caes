document.getElementById("formulario").addEventListener("submit",function(e){
    let erros = []

    let idade = document.getElementById("idade").value; 
    if(idade < 18) erros.push("Tem que ter +18")

    const tel = document.getElementById("telefone").value
    if(tel.length < 8) erros.push("O telefone deve ter no minimo 8 numeros.")

    if(erros.length > 0){
        e.preventDefault(); 
        alert("Erros encontrados:\n" + erros.join("\n"));
    }
});

const tipoMoradia = document.getElementById("moradia");
tipoMoradia.addEventListener("change", function() {
    const apartamentoDiv = document.getElementById("apartamentoDiv");
    const casaDiv = document.getElementById("casaDiv");

    if(this.value === "apartamento"){
        apartamentoDiv.style.display = "block";
        casaDiv.style.display = "none";
    } else if(this.value === "casa") {
        casaDiv.style.display = "block";
        apartamentoDiv.style.display = "none";
    } else {
        apartamentoDiv.style.display = "none";
        casaDiv.style.display = "none";
    }
})