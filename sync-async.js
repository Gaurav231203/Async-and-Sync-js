//==========================SYNCHRONOUS**JAVASCRIPT========================================
//"Synchronous execution means code runs sequentially, one line at a time, and each operation must complete before the next one starts.
//but kabhi kbahar cases ase aaate hai jah apr apka code wait krta hai  or utni der mai baki ka code execute  ho jata hai..
//==================================Asynchronous**JAVASCRIPT==================================
//Asynchronous ka matlab hai — kuch operations background mein chalte hain, aur unka result baad mein, jab ready ho tab handle hota hai — bina baaki code ko rokte hue.


function Aftersometime( val){
    setTimeout(()=>{
        console.log(val);
    },Math.floor(Math.random()*10)*1000);

}
Aftersometime(10);