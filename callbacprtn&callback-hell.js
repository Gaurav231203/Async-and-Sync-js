//==========================CALLBACK--FUNCTION=======================================
// ek function ko aap ek aur fucntion bhejo  uskay parameter mai , to wo  parameter wala function kahlata hai call back function
function profleOuter(username, callback)
{setTimeout(()=>{
   
    callback({username , age:22 , email:"gauri@gamai.com"})
},2000)
}
profleOuter("gaurav",function (data) {
    

})