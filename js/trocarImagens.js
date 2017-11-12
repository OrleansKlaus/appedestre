
function trocar(aux){
    var lo = $('.carousel')
    lo.flickity("remove", $(".carousel-cell"));
    var corpo = '';
    if (aux == 'calcada'){
        console.log(aux)
        corpo = '<div class="carousel-cell carousel-cell-img-buraco">'
        corpo +='<span class="colorstrip">Buraco na Calçada</span>'
        corpo += '</div>'
        corpo += '<div class="carousel-cell carousel-cell-img-desnivel">'
        corpo += '<span class="colorstrip">Desnível na Calçada</span>'
        corpo += '</div>'
        corpo +=  '<div class="carousel-cell carousel-cell-img-entulho">' 
        corpo += '<span class="colorstrip">Calçada com entulho</span>'
        corpo += '</div>'
        corpo += '<div class="carousel-cell carousel-cell-img-acessib">'
        corpo += '<span class="colorstrip">Falta de acessibilidade</span>'
        corpo += '</div>'
        corpo += '<div class="carousel-cell carousel-cell-img-mato">'
        corpo += '<span class="colorstrip">Mato na calçada</span>'
        corpo += '</div>'
        corpo += '<div class="carousel-cell carousel-cell-img-poste">'
        corpo += '<span class="colorstrip">Poste na calçada</span>'
        corpo += '</div>'
    }
    if (aux == 'acidente'){
        console.log(aux)
        
        corpo = '<div class="carousel-cell img-preocupacao-carro">'
        corpo += '<span class="colorstrip">Acidente de carro</span>'
        corpo += '</div>'
        corpo += '<div class="carousel-cell img-carro-queimado">'
        corpo += '<span class="colorstrip">Carro queimado na via</span>'
        corpo += '</div>'
    }
    if (aux == 'na_via'){
        console.log(aux)
        corpo = '<div class="carousel-cell carousel-cell-img-FaixadePedestre">'
        corpo +='<span class="colorstrip">Inclusão de faixa de pedestre</span>'
        corpo += '</div>'
        corpo += '<div class="carousel-cell carousel-cell-img-PlacaDanificada">'
        corpo += '  <span class="colorstrip">Placa danificada</span>'
        corpo += '</div>'
    }
    console.log(corpo)
    lo.flickity("insert", $(corpo))
    lo.flickity('resize')
    //$('#carousel_foto').html(corpo).flickity();
}