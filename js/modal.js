function validation(){
    if(document.getElementById('form-nome').value == '' || document.getElementById('form-nome').value.match(/\d/g) != null){
        alert("Digite o campo de nome corretamente")
        return false;
    } else if(document.getElementById('form-cpf').value.match(/^[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}$/) == null ){
        alert("Digite o campo CPF corretamente")
        return false;
    }   else if(document.getElementById('celular').value.match(/^\([0-9]{2}\) [0-9]{5}\-[0-9]{4}$/) == null ){
        alert("Digite o campo celular corretamente")
        return false;
    } else if(document.getElementById('data_nascimento').value.match(/(^\d{4})[-](\d{2})[-](\d{2})$/) == null){
        alert("Digite o campo data de nascimento corretamente")
        return false;
    } else if(document.getElementById('form-logradouro').value == ''){
        alert("Digite o campo logradouro corretamente")
        return false;
    } else if(document.getElementById('form-bairro').value == ''){
        alert("Digite o campo bairro corretamente")
        return false;
    } else if(document.getElementById('form-complemento').value == ''){
        alert("Digite o campo complemento corretamente")
        return false;
    } else if(document.getElementById('numero').value.match(/(^\d{1,})\w$/g) == null){
        alert("Digite o campo numero corretamente")
        return false
    } else if(document.getElementById('cep').value.match(/^[0-9]{5}\-?[0-9]{3}$/) == null){
        alert("Digite o campo CEP corretamente")
        return false
    } else if(document.getElementById('cidade').value == ''){
        alert("Digite o campo cidade corretamente")
        return false
    } else if (document.getElementById('uf').value == '') {
        alert("Digite o campo cidade corretamente")
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

        var nome = document.getElementById('form-nome').value;
        var cpf_paciente = document.getElementById('form-cpf').value;
        var telefone = document.getElementById('celular').value;
        var data_nascimento = document.getElementById('data_nascimento').value;
        var sexo = document.getElementById('sexo_masculino').checked ? 'Masculino' : 'Feminino';
        var logradouro = document.getElementById('form-logradouro').value;
        var bairro = document.getElementById('form-bairro').value;
        var numero = document.getElementById('numero').value;
        var complemento = document.getElementById('form-complemento').value;
        var cep = document.getElementById('cep').value;
        var cidade = document.getElementById('cidade').value;
        var uf = document.getElementById('uf').value;
        var email = document.getElementById('email').value;
        var senha = document.getElementById('senha1').value;

        const data = {
            cpf_paciente,
            nome,
            telefone,
            data_nascimento,
            sexo,
            email,
            senha,
            logradouro,
            bairro,
            numero,
            complemento,
            cep,
            cidade,
            uf
        };

        try {
            handleSubmitForm(data);

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

            setTimeout(() => {
                history.back();
            }, 2500)
            
        } catch (err) {
            console.log(err);
        }

    }

});

function handleSubmitForm(data) {

    axios({
        method: 'post',
        url: 'http://localhost:3333/cadastro-paciente',
        data: data,
    }).then(response => {
        console.log(response);
    }).catch(error => {
        console.log(error);
    })
} 



