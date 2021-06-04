const crawler = require('./crawler')
const analyze = require('./analyze');

const crawl = new crawler('JuicyJay');

var posts, scr;

function setPosts(post, score){
    scr = score
    posts = post;
}

async function main(){
    let ret, val =  crawl.loadComms(setPosts).then(() => {
     //   console.log(posts)
        return posts, scr;
    });
    let response = await ret;
 //   let scores = await val;
    for (let br in response){
        console.log(analyze.breakUpSentences(br));
    }
    
     
    analyze.upvoteRatio(scores);
    console.log(analyze.sentenceWordLength(response[0]));
    console.log(analyze.sizeOfWordsPerSentence('h\'y. wh\'ats. u\'p. y\'ou, ar\'e, a\', lo\'ser, je\'? a\'sd? as\'d!!!'));
    console.log(analyze.apostrophePerWord('h\'y. wh\'ats. up. y\'ou, ar\'e, a\', lo\'ser, je\'? a\'sd? as\'d!!!'));
}


main();
