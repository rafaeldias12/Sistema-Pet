const inquirer = require ('inquirer');
const {acoesPet, buscarPet, cadastroPet} = require ('./perguntas/perguntas');
const fs = require ('fs')
const arquivoJ = require ('./dadosPet.json')
let baseVinda = []
baseVinda = JSON.parse(fs.readFileSync('dadosPet.json', 'utf-8'));
acoes();


//Primeira letra Maiuscula
String.prototype.capitalize = function() {
	return this.charAt(0).toUpperCase() + this.substr(1);
};

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
    
    if(acoes === 1){
        salvar();
    };
    if(acoes === 2){
        listarPet();
    };
    if(acoes === 3){
        buscarPetNome();
    };
})};


//Salvar os dados cadastrados
function salvar (){
    inquirer.prompt(cadastroPet).then(arquivo => {
        let dados = new MeuPet (arquivoJ[arquivoJ.length-1].identificador +1, arquivo.nomeDoPet.trim().capitalize(),arquivo.racaPet.trim().capitalize(), arquivo.nomeDoDono.trim().capitalize())
        baseVinda.push(dados);
        fs.writeFileSync('dadosPet.json', JSON.stringify(baseVinda), null, 2);  
    });
};

//Listar todos os Pets cadastrados
function listarPet(){
    console.table(baseVinda);  
    acoes()
}

//Buscar Pets
function buscarPetNome (){
    inquirer.prompt(buscarPet).then(arquivo => {
        const acoes = arquivo.buscar.trim().capitalize();
        if (baseVinda.find( buscaPet => buscaPet.NomeDoPet === acoes)){
            const result = baseVinda.find( buscaPet => buscaPet.NomeDoPet === acoes );
            console.table(result);
        }else{
            console.log('Pet não localizado na base de dados!');
        }; 
    });
};

