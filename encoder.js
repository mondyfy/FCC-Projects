var text ="textttxrr";

var textArr = text.split('');
var twoArr = [];

textArr.forEach((element, index) => {
    var lastIndex = twoArr.length;
    if(index !== 0 && twoArr[lastIndex - 1] [0]=== element){
        twoArr[lastIndex - 1][1] += 1;
    } else {
        twoArr[lastIndex] = [element, 1]
    }
});

var finalText = "";
twoArr.forEach(t => {
    finalText += t[1] === 1 ? t[0] : t[1] + t[0]
});
console.log(finalText)