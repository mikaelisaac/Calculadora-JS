$(function(){
    var v1, v2, oper;

    $("input[name=btn]").click( function(){
        $("#result").val($("#result").val() + $(this).val());
    });

    $("input[name=c]").click( function(){
        var len = $("#result").val().length;

        var valor = $("#result").val();

        valor = valor.replace(valor.charAt(len - 1),"");

        $("#result").val(valor);
    });

    $("input[name=ce]").click( function(){
        $("#result").val("");
        $("#oper").text("");
    });

    $("input[name=soma]").click( function(){
        if($("#result").val() != ""){
            v1 = parseFloat($("#result").val());
            
            $("#result").val("");
            oper = "soma";

            $("#oper").text($(this).val());
        } else {
            alert("Insira um valor para realizar a operação!");
        };
    });

    $("input[name=subt]").click( function(){
        if($("#result").val() != ""){
            v1 = parseFloat($("#result").val());
            
            $("#result").val("");
            oper = "subt";

            $("#oper").text($(this).val());
        } else {
            alert("Insira um valor para realizar a operação!");
        };
    });

    $("input[name=mult]").click( function(){
        if($("#result").val() != ""){
            v1 = parseFloat($("#result").val());
            
            $("#result").val("");
            oper = "mult";

            $("#oper").text($(this).val());
        } else {
            alert("Insira um valor para realizar a operação!");
        };
    });

    $("input[name=divi]").click( function(){
        if($("#result").val() != ""){
            v1 = parseFloat($("#result").val());
            
            $("#result").val("");
            oper = "divi";

            $("#oper").text($(this).val());
        } else {
            alert("Insira um valor para realizar a operação!");
        };
    });

    $("input[name=igual]").click( function(){
        if($("#result").val() != ""){
            v2 = parseFloat($("#result").val());
            
            $("#oper").text("");
            
            if(oper == "soma"){
                $("#result").val(v1 + v2);
            } else if(oper == "subt"){
                $("#result").val(v1 - v2);   
            } else if(oper == "mult"){
                $("#result").val(v1 * v2);   
            } else{
                $("#result").val(v1 / v2);   
            }
        } else {
            alert("Insira um segundo valor para realizar a operação!");
        };
    });
});