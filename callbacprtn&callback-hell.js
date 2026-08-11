//==========================CALLBACK--FUNCTION=======================================
// ek function ko aap ek aur fucntion bhejo  uskay parameter mai , to wo  parameter wala function kahlata hai call back function
function profleOuter(username, callback)
{setTimeout(()=>{
   
    callback(
        { _id: 1234, 
            username ,
             age:22 ,
              email:"gauri@gamai.com"}
            )
},2000)
console.log("fetching profile data.....")


};
function sarePostlekarAaao(id,callback) {
    setTimeout(() =>{
        callback({
            _id: id,
            post:["hey heloo"]
        })

    },3000)
    
}


profleOuter("gaurav", function (data) {
    console.log(data)
  sarePostlekarAaao(data._id, function(posts) {
    console.log(posts)

  });
});