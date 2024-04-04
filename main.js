$(document).ready(function() {
    db.init(inicializarSelecao);
});

function inicializarSelecao() {
    var select = $('#slc-termos');
    $.each(db.data, function(index, item) {
        select.append($('<option>', {
            value: item.id,
            text: item.titulo
        }));
    });

    // Disparar evento de mudança para exibir a descrição do primeiro item por padrão
    select.trigger('change');
}

$('#slc-termos').change(function() {
    var id = $(this).val();
    var item = db.data.find(function(item) {
        return item.id == id;
    });
    $('#descricao').html('<h2>' + item.titulo + '</h2><p>' + item.descricao + '</p>');
});