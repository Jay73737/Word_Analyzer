

const snoowrap = require('snoowrap');
//const { builtinModules } = require('node:module');





class Crawler {
    
    constructor(username) {
       this.mainGuy = new snoowrap({
            userAgent: 'Sentence_Analyze',
            clientId: 't-s457eG5h63rg',
            clientSecret: 'b82SSIvgbz6ZKmyG7oj3Nm7Fed7D3g',
            username: 'Is_it_them_bot',
            password: 'Is1tTh3mB0+'
          });
          
        this.lookupName = username;
    }


    

   async loadComms(value) {


        let list = this.mainGuy.getUser(this.lookupName).getComments()
        let comments = await list;
        let votes = [];
        let temp = [];
        
        for (var i = 0; i < comments.length; i++) {
            temp.push(comments[i].body)
            votes.push((comments[i]).score)
                
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
     let score = await votes;
     value(res);
     return res, score;
    }
    
}
module.exports = Crawler;








