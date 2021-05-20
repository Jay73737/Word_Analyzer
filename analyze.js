



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
/*   if (splitString.length > 1){
       periodLoc = splitString[index].indexOf('.')
       exclLoc = splitString[index].indexOf('!')
       questLoc = splitString[index].indexOf('?')
   }
  // console.log('kkkk ' + temp)
   
   var symbol
   if (periodLoc > 0){
       symbol = '.';
   }else if (exclLoc > 0){
       symbol = '!';
   }else if (questLoc > 0) {
       symbol = '?';
   } else {
       results.push(comment);
       return results;
   }
       
   if ((periodLoc > 0)|| (exclLoc > 0) || (questLoc > 0)){ 
       splitString = temp.split('.');
       temp = 
       console.log('if ' + splitString)
       if (containsPuncArr(splitString)){
           
           var tString = splitString
           var t = ""
           for (var i = 0; i < tString.length; i++){
               console.log(tString)
               
               if (containsPunc(tString[i])){
                   
                   for (var j = 0; j < tString.length; j++){
                       
                       if (!containsPunc(tString[j])){
                           
                           results.push(tString[j])
                           tString.splice(j,1);
                           if ((j > 0) && (tString.length > 1))
                               j--;
                           
                       }
                   }
                   t = ""
                   
                   
                   
                 //  results.push(breakUpSentences(tString[i]))
                   
                   
                   
                   console.log('isfdsf ' + tString)                        
                   
               } else {
                   console.log('else: ' + tString)
                   results.push(tString[i])
                   tString.splice(i, 1)

                   console.log('else: ' + tString[i])
                   i=0
                   
                   
               }
               for(var k = 0; k < tString.length; k++){
                   t += tString[k]
               }
               temp = t;
               
               
           } 
          
           
       } else {
           t = ""
           for(var k = 0; k < splitString.length; k++){
               if (splitString[k] != "")
                   t += splitString[k];
           }
           temp = t;
       }
   } else {results.push(comment)
      return results }

      
} 
 
results.push(temp)
return results;*/



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



const sizeOfWordsPerSentence = (sentence) => {
    let iterated = sentence.split(' ')
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