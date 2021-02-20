const acoesPet = [
    {
        type: 'list',
        name: 'acoes',
        message: 'Escolha uma opção:',
        choices: [
            {
                name: 'Cadastrar Novo Pet',
                value: 1,
            },
            {
                name: 'Listar todos os PETS cadastrados',
                value: 2,
            },
            {
                name: 'Buscar PET por nome',
                value: 3,
            }
        ]

    }
]

const buscarPet = [
    {
        type: 'input',
        name: 'buscar',
        message: 'Digite o nome do PET:',
        required: true
    }
]

const cadastroPet = [
    {
        type: 'input',
        name: 'nomeDoPet',
        message: 'Digite o nome do PET:',
        required: true
    },
    {
        type: 'input',
        name: 'racaPet',
        message: 'Digite a raça do PET:',
        required: true
    },
    {
        type: 'input',
        name: 'nomeDoDono',
        message: 'Digite o nome do dono:',
        required: true
    }
];

module.exports = {
    acoesPet,
    buscarPet,
    cadastroPet,
}