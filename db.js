$(document).ready(function() {
    // Quando o documento estiver pronto, inicializa o banco de dados e a seleção
    db.init(inicializarSelecao);
});

// Função para inicializar a seleção com os dados do banco de dados
function inicializarSelecao() {
    var select = $('#slc-termos'); // Seleciona o elemento select pelo seu ID
    $.each(db.data, function(index, item) {
        // Para cada item no banco de dados, adiciona uma opção ao select
        select.append($('<option>', {
            value: item.id,
            text: item.titulo
        }));
    });

    // Dispara o evento de mudança para exibir a descrição do primeiro item por padrão
    select.trigger('change');
}

// Evento change do select
$('#slc-termos').change(function() {
    var id = $(this).val(); // Obtém o valor selecionado no select
    // Encontra o item no banco de dados com o ID selecionado
    var item = db.data.find(function(item) {
        return item.id == id;
    });
    // Atualiza a descrição com o título e a descrição do item selecionado
    $('#descricao').html('<h2>' + item.titulo + '</h2><p>' + item.descricao + '</p>');
});

var db = {}; // Objeto para o banco de dados

// Inicialização do banco de dados
db.init = function(callback) {
    // Simulação de dados do JSON
    var dados = [
        // Array de objetos com IDs, títulos e descrições 
        {
            "id": 1,
            "titulo": "O que é JavaScript",
            "descricao": "JavaScript é uma linguagem de programação que permite implementar funcionalidades mais complexas em páginas web. Desde o momento em que a página web é exibida no navegador, JavaScript é usado para tornar a página mais responsiva, interativa e dinâmica."
        },
        {
            "id": 2,
            "titulo": "Statement 'for'",
            "descricao": "O statement 'for' cria um loop que consiste em três expressões opcionais, dentro de parênteses e separadas por ponto e vírgula, seguidas por uma declaração ou uma sequência de declarações executadas em sequência."
        },
        {
            "id": 3,
            "titulo": "Funções em JavaScript",
            "descricao": "Uma função em JavaScript é um bloco de código projetado para realizar uma tarefa específica. Uma função é executada quando 'algo' a invoca (chama)."
        },
        {
            "id": 4,
            "titulo": "Objetos em JavaScript",
            "descricao": "JavaScript é uma linguagem baseada em objetos. Um objeto é uma coleção de propriedades, e uma propriedade é uma associação entre um nome (ou chave) e um valor."
        },
        {
            "id": 5,
            "titulo": "Eventos em JavaScript",
            "descricao": "Eventos em JavaScript são ações que ocorrem no navegador, como clique do mouse, pressionamento de teclas, carregamento da página, entre outros. Esses eventos podem ser manipulados com funções JavaScript para executar determinadas ações."
        },
        {
            "id": 6,
            "titulo": "Operadores em JavaScript",
            "descricao": "Operadores em JavaScript são símbolos que realizam operações em operandos, como adição, subtração, multiplicação, divisão, comparação, entre outros. Eles podem ser usados ​​para realizar cálculos matemáticos, comparações de valores e manipulação de dados."
        },
        {
            "id": 7,
            "titulo": "Arrays em JavaScript",
            "descricao": "Arrays em JavaScript são objetos que permitem armazenar vários valores em uma única variável. Eles são usados para armazenar coleções de dados, como uma lista de itens, e oferecem métodos para manipular esses dados, como adicionar, remover e acessar elementos."
        },
        {
            "id": 8,
            "titulo": "Métodos de String em JavaScript",
            "descricao": "Métodos de String em JavaScript são funções que podem ser aplicadas a objetos do tipo string para realizar operações como busca, substituição, concatenação, entre outras. Esses métodos permitem manipular e transformar strings de várias maneiras."
        },
        {
            "id": 9,
            "titulo": "Condições em JavaScript",
            "descricao": "Condições em JavaScript são usadas para executar diferentes ações com base em diferentes condições. Elas permitem que o código tome decisões e execute blocos de código específicos com base em expressões booleanas, como verdadeiro ou falso."
        },
        {
            "id": 10,
            "titulo": "Loops em JavaScript",
            "descricao": "Loops em JavaScript são estruturas de controle que permitem repetir a execução de um bloco de código várias vezes. Eles são usados para automatizar tarefas repetitivas e iterar sobre coleções de dados, como arrays, executando uma determinada ação para cada elemento."
        }
    ];
    
    // Chamada da função de callback passando os dados do JSON
    db.data = dados;
    if(callback) {
        callback();
    }
};