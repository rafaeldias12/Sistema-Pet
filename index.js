const inquirer = require ('inquirer');
const {acoesPet, buscarPet, cadastroPet} = require ('./perguntas/perguntas');
const fs = require ('fs')

// Método Construtor para novos PET
function MeuPet (identificador, NomePet, raca, nomeDoDono){
    this.identificador = identificador;
    this.NomeDoPet = NomePet;
    this.raca = raca;
    this.nomeDoDono = nomeDoDono;
};

//Ações para o Usuário Escolher
function acoes () {inquirer.prompt(acoesPet).then(acoesGeral => {
    const acoes = acoesGeral.acoes;
    
    if(acoes === 3){
        buscarPetNome()
    }
    if(acoes === 1){
        salvar()
    }
})};

//Salvar os dados cadastrados
function salvar (){
    inquirer.prompt(cadastroPet).then(arquivo => {
        const dados = new MeuPet (1, arquivo.nomeDoPet, arquivo.racaPet, arquivo.nomeDoDono)
        const salvarDados = fs.appendFileSync('dadosPet.json', JSON.stringify(dados), 'utf-8', acoes)
     
    })
};

//Gerador de Id's
function geradorId(){

};


//Buscar Pets
function buscarPetNome (){
    
};







