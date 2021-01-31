function validation(){
    if(document.getElementById('form-nome').value == '' || document.getElementById('form-nome').value.match(/\d/g) != null){
        alert("Digite o campo de nome corretamente")
        return false;
    } else if(document.getElementById('form-cpf').value.match(/^[0-9]{11}$/) == null ){
        alert("Digite o campo CPF corretamente")
        return false;
    } else if(document.getElementById('DataNasc').value.match(/(^\d{4})[-](\d{2})[-](\d{2})$/) == null){
        alert("Digite o campo data de nascimento corretamente")
        return false;
    } else if(document.getElementById('form-rua').value == ''){
        alert("Digite o campo rua corretamente")
        return false;
    } else if(document.getElementById('numero').value.match(/(^\d{1,})\w$/g) == null){
        alert("Digite o campo numero corretamente")
        return false
    } else if(document.getElementById('CEP').value.match(/^[0-9]{8}$/) == null){
        alert("Digite o campo CEP corretamente")
        return false
    } else if(document.getElementById('convenio').value == ''){
        alert("Digite o campo convenio corretamente")
        return false
    } else if(document.getElementById('email').value.match(/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/gi) == null){
        alert("Digite o campo de email corretamente")
        return false
    } else if(document.getElementById('senha1').value != document.getElementById('senha2').value){
        alert("As senha digitadas não batem")
        return false
    }else if(document.getElementById('senha1').value == '' || document.getElementById('senha2').value == ''){
        alert("Digite os campos de senha corretamente")
        return false
    } else{
        return true;
    }

}


$('.botao-cadastrar').click(function(){
    event.preventDefault();

    if(validation()){
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
    
    }

    })




