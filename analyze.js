



const containsPunc =  (comment) => {
    return ((comment.indexOf('.') > 0) || (comment.indexOf('?') > 0) || (comment.indexOf('!') > 0))

}

const containsPuncArr = (comment) => {
    for (var i = 0; i < comment.length; i++) {
        if ((comment[i].indexOf('.') > 0) || (comment[i].indexOf('?') > 0) || (comment[i].indexOf('!') > 0)) {
            return true
        }

    }
    return false
}
function removeEmptyArr(arr){
    for(var i = 0; i < arr.length; i++){
        if (arr[i] === ""){
            var temp = arr;
            temp.splice(i, 1)
            return temp;
        }
    }
}

const newLines = (comment) => {
    var temp = comment;
    var count = 0;
    var indx = 0;
    while(temp.indexOf("\n", indx) >= 0){
        indx = temp.indexOf("\n",indx) + 1;
        count++;
    }
    return count;
}

const breakUpSentences = (comment) => {

    var temp = comment.substring(0);
    var splitString = []
    while (containsPunc(temp) || containsPuncArr(splitString)) {

        while (containsPunc(temp)) {
            temp = temp.replace('.', '~')
            temp = temp.replace('?', '~')
            temp = temp.replace('!', '~')
        }
        splitString = temp.split('~')
        return removeEmptyArr(splitString);
    }
    return comment;
}


const upvoteRatio = (comment) => {

}


//determines the different sentence lengths
const sentenceWordLength = (comment) => {
    var senLength = 0;
    var num = 0;
    let sentences = breakUpSentences(comment);
    for (var i = 0; i < sentences.length; i++) {
        if (sentences[i].length > 0){
            let iter = sentences[i].split(' ');
            senLength += iter.length
            num++;
        }
    }
    return senLength / num;
}

function replaceAllBlank(comment, character, replacement) {
    var temp = comment;
    while(temp.indexOf(character) >= 0)
        temp = temp.replace(character, replacement);
    return temp;
}

function trimNonWords(comment){
    var temp = comment;
    temp = replaceAllBlank(temp, '.', '');
    temp = replaceAllBlank(temp, ',', '');
    temp = replaceAllBlank(temp, '?', '');
    temp = replaceAllBlank(temp, '\"', '');
    temp = replaceAllBlank(temp, '!', '');
    temp = replaceAllBlank(temp, '/', '');
    temp = replaceAllBlank(temp, '(', '');
    temp = replaceAllBlank(temp, ')', '');
    temp = replaceAllBlank(temp, ';', '');
    temp = replaceAllBlank(temp, ':', '');
    temp = replaceAllBlank(temp, '#', '');
    temp = replaceAllBlank(temp, '=', '');
    temp = replaceAllBlank(temp, '-', '');
    temp = replaceAllBlank(temp, '$', '');
    temp = replaceAllBlank(temp, ']', '');
    temp = replaceAllBlank(temp, '[', '');
    temp = replaceAllBlank(temp, '&', '');
    temp = replaceAllBlank(temp, '^', '');
    temp = replaceAllBlank(temp, '%', '');
    temp = replaceAllBlank(temp, '@', '');
    temp = replaceAllBlank(temp, '~', '');
    temp = replaceAllBlank(temp, '+', '');
    temp = replaceAllBlank(temp, '<', '');
    temp = replaceAllBlank(temp, '>', '');
    return temp;
}


const sizeOfWordsPerSentence = (sentence) => {
    let iterated = trimNonWords(sentence);
    iterated = iterated.split(' ');
    var total = 0;
    var num = 0;
    for (var i = 0; i < iterated.length; i++) {
        var ln = iterated[i];
        var l = ln.length
        if (l > 0) {
            total += l;
            num++;
        }
    }
    
        return total / num
        
    
}

const apostrophePerWord = (comment) => {
    var iterated = comment.split(' ');
    var total = 0
    for (let tmp of iterated){
        if (tmp.indexOf('\'') >= 0){
            total++;
        }
    }
    return total/iterated.length
}




const commentCharLength = (comment) => {
    return comment.length;
}

const numberOfWordsPerComment = (comment) => {
    let sentences = breakUpSentences(comment);
    var amount = 0;
    var words = 0;
    var totals = []
    for (sent of sentences) {
        var temp = sentenceWordLength(sent)
        words += temp
        amount++;
    }
    return words / amount
}




//May be useless, who knows
const properPunctuationRatio = (comment) => {
    let numChars = commentCharLength(comment);
    var commas = 0;
    var apost = 0;
    var parenth = 0;
    var quotes = 0;
    /*  var colon = 0;
      var semiColon = 0;*/

    for (var i = 0; i < comment.length; i++) {
        switch (comment[i]) {
            case ',': {
                commas++;
                break;
            }
            case '\'': {
                apost++;
                break;
            } 
            case '\"': {
                quotes++;
                break;
            }
            case '(': {
                parenth++;
                break;
            }
            case ')': {
                parenth++;
                break;
            }
            default: break;
        }
    }
    return numChars/(apost + quotes + parenth + comma)
}


exports.properPunctuationRatio = properPunctuationRatio
exports.sentenceWordLength = sentenceWordLength
exports.sizeOfWordsPerSentence = sizeOfWordsPerSentence
exports.containsPuncArr = containsPuncArr
exports.breakUpSentences = breakUpSentences
exports.commentCharLength = commentCharLength
exports.numberOfWordsPerComment = numberOfWordsPerComment
exports.containsPunc = containsPunc

exports.newLines = newLines
exports.apostrophePerWord = apostrophePerWord