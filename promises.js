//Promise kya hai

//Promise ek object hai jo represent karta hai kisi asynchronous kaam ka future result — matlab "abhi result nahi hai, lekin promise hai ke ya to milega (success) ya fail hoga (error) baad mein."

// matlab  hum ek promise  banate ho jo ki do states main se ek satate mai jaa skta hai or yaa  to wo resolve hoya ya fir reject hoga but hume nahi pata ki wo ky hoga , but humain dono kay liye code likhna padta hai


let prom =  new Promise ( function(resove,reject){
    setTimeout(() => {
      let ran =  Math.floor(Math.random()*10);
        if (ran> 5) resove("resolved with " + ran );
        
        else resove( "rejected with " + ran);
        
    }, 300);
});

prom
.then(function(val){
    console.log(val);

}).catch(function(val){
  console.log(val);
  console.log(val)
})