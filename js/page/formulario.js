$(function() {
    $('#form').submit(function(e) {

        e.preventDefault();
        var Name = $('input[Name=Nome]').val();
        var Telefone = $('input[Name=Telefone]').val();
        var Email = $('input[Name=Email]').val();


        if (checkName(Name) == false) {
            applyInvalidField($('input[Name=Nome]'));
        }

        if (checkTelefone(Telefone) == false) {
            applyInvalidField($('input[Name=Telefone]'));
        }

        if (checkEmail(Email) == false) {
            applyInvalidField($('input[Name=Email]'));
        } else {
            alert('Formulário enviado com sucesso');
        }

    });
    // bug preenchimento automatico (.focus)
    $('input[type=text]').focus(function() {
        resetInvalidField($(this));
    });
    // melhorar RegExp
    function checkName(Name) {
        if (Name == ' ') {
            return false;
        }
        var contar = Name.split(' ').length;
        var splitStr = Name.split(' ');

        if (contar >= 2) {
            for (var i = 0; i < contar; i++) {
                if (splitStr[i].match(/^[A-Za-z]{1,}[A-Za-z]{1,}$/)) {

                } else {
                    return false;
                }
            }
        } else {
            return false;
        }
    }
    // melhorar RegExp
    function checkTelefone(Telefone) {
        if (Telefone == ' ') {
            return false;
        }
        if (Telefone.match(/^[0-9]{11}$/) == null) {
            return false;
        }
    }
    // melhorar RegExp
    function checkEmail(Email) {
        if (Email == ' ') {
            return false;
        }

        if (Email.match(/^([a-z0-9-_]{1,})+@+([a-z.]{1,})$/) == null) {
            return false;
        }

    }

    function applyInvalidField(el) {
        el.css('color', 'red');
        el.css('border', '2px solid red');
        el.val('invalid camp');
    }

    function resetInvalidField(el) {
        el.css('color', 'gray');
        el.css('border', '1px solid gray');
        el.val('');
    }

});