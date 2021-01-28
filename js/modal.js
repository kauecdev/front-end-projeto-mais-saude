$('.botao-cadastrar').click(function(){
    event.preventDefault();


    $('.modal-cliente').modal({
        fadeDuration: 100,
        escapeClose: false,
        clickClose: true,
        showClose: false
    })

    $('.modal-cliente').css( "background-color", "#DF1F1F");
    $('.modal-cliente p').css( "background-color", " #DF1F1F");
    $('.modal-cliente p').css( "color", "white");
    $('.modal-cliente p').css( "font-size", "40px");
    $('.modal-cliente p').css( "font-family", "Nunito");
    $('.modal-cliente p').css( "width", "80%");
    $('.modal-cliente p').css( "margin", "auto");
    $('.modal-cliente p').css( "padding-top", "5%");
    $('.modal-cliente p').css( "font-weight", "600");
    $('.modal-cliente').css( "height", "60%");
    $('.modal-cliente').css( "display", "flex");
    $('.modal-cliente').css( "flex-direction", "row");
    $('.modal-cliente').css( "align-itens", "center");
    $('.modal-cliente').css( "justify-content", "center");
    $('.modal-cliente').css( "text-align", "center");
    $('.modal-cliente').css( "padding-top", "5%");
    $('.modal-cliente').css( "border-radius", "5%");

    $('.img-cadastro').css("background-color", "#DF1F1F")

})