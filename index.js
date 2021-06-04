const crawler = require('./crawler')
const analyze = require('./analyze');

const crawl = new crawler('JuicyJay');

var posts;

function setPosts(post){
    
    posts = post;
}

async function main(){
    let ret =  crawl.loadComms(setPosts).then(() => {
     //   console.log(posts)
        return posts;
    });
    let response = await ret;
    for (let br of response){
        console.log(analyze.breakUpSentences(br));
    }
    
     
    analyze.newLines(response[12]);
    console.log(analyze.sentenceWordLength(response[0]));
    console.log(analyze.sizeOfWordsPerSentence('h\'y. wh\'ats. u\'p. y\'ou, ar\'e, a\', lo\'ser, je\'? a\'sd? as\'d!!!'));
    console.log(analyze.apostrophePerWord('h\'y. wh\'ats. up. y\'ou, ar\'e, a\', lo\'ser, je\'? a\'sd? as\'d!!!'));
}


main();
