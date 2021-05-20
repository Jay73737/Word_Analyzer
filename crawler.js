

const snoowrap = require('snoowrap');
//const { builtinModules } = require('node:module');





class Crawler {
    
    constructor(username) {
       this.mainGuy = new snoowrap({
            userAgent: 'Sentence_Analyze',
            clientId: 'xfpJp6P3TpEM_w',
            clientSecret: 'dY6u73NLJISHvsJe5ZPn2QcZNZHsHg',
            username: 'JuicyJay',
            password: 'Lacr0ssE7'
          });
          
        this.lookupName = username;
    }
    

   async loadComms(value) {


        let list = this.mainGuy.getUser(this.lookupName).getComments()
        let comments = await list;
        let temp = [];
        
        for (var i = 0; i < comments.length; i++) {
            temp.push(comments[i].body)
                
        }

            
        

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

     let res = await temp;
     value(res);
     return res;
    }
    
}
module.exports = Crawler;








