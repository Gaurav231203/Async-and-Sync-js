//==========================CALLBACK--FUNCTION=======================================
// ek function ko aap ek aur fucntion bhejo  uskay parameter mai , to wo  parameter wala function kahlata hai call back function
function profleOuter(username, callback)
{ console.log("fetching profile data.....")

    setTimeout(()=>{
   
    callback(
        { _id: 1234, 
            username ,
             age:22 ,
              email:"gauri@gamai.com"}
            )
},2000)


};
function sarePostlekarAaao(id,callback) {
    console.log("fetching all data........")
    setTimeout(() =>{
        callback({
            _id: id,
            post:["hey heloo"]
        })

    },3000)
    
};
function savedPostNikalo(id, callback){
    console.log("fetcehing saved data")
    setTimeout(()=>{
        callback({
            _id: id,
            saved:[1,2,3,4,56]
        })

    },3000)
}


profleOuter("gaurav", function (data) {
    console.log(data)


  sarePostlekarAaao(data._id, function(posts) {
    console.log(posts)


    savedPostNikalo(data._id, function(saved){
        console.log(saved)
    })

  });
});