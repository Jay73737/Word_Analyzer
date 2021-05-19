const reddit = require('./index.js');
const snoowrap = require('snoowrap');
const { Comment } = require('snoowrap');

const mainGuy = new snoowrap({
    userAgent: 'Sentence_Analyze',
    clientId: 'xfpJp6P3TpEM_w',
    clientSecret: 'dY6u73NLJISHvsJe5ZPn2QcZNZHsHg',
    username: 'JuicyJay',
    password: 'Lacr0ssE7'
  });


function loadComms(user){
    let list = []
   let comments = []
         mainGuy.getUser(user).getComments().then(function(value) {
             list = value;
             for(var i = 0; i < list.length; i++){
                comments.push(list[i].body)
                console.log(comments[i])
             }

             return list;
         })
    
  /*  const comm = mainGuy.getUser('JuicyJay').getComments()
    comm.then(function() {
        console.log(comm.body)
    }, function() {
        console.log('sdfsd')
    }).then(function() {return 'ffff'})
    
    console.log(comm.list(Comment.))
    for (var i = 0; i < comm.list; i++){
        const comm = mainGuy.getUser('JuicyJay').getComments().then(console.log)
}
*/
}




