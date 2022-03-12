function outer(){
    var a = "this is outer function variable a";
    function inner(){
        var b = "this is the inner function variable b";
        document.write(a + "<br>");
        document.write(b + "<br>");
    }

    inner();
}

outer();