function rot13(str) {

    var codeA = "A".charCodeAt(0);
    var codeN = "N".charCodeAt(0);
    var codeZ = "Z".charCodeAt(0);
    var newArr = [];
    
    for(var i =0; i<str.length; i++){
        var code = str.charCodeAt(i);
        if(code>=codeA && code<=codeZ){
            if(code>=codeN)
                newArr.push(String.fromCharCode(code-13));
            else
                newArr.push(String.fromCharCode(code+13));
        }else{
            newArr.push(str[i]);}
        }
         return newArr.join("");
    }