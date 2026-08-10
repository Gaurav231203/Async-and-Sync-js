//==========================SYNCHRONOUS**JAVASCRIPT========================================
//"Synchronous execution means code runs sequentially, one line at a time, and each operation must complete before the next one starts.
//but kabhi kbahar cases ase aaate hai jah apr apka code wait krta hai  or utni der mai baki ka code execute  ho jata hai..
//==================================Asynchronous**JAVASCRIPT==================================
//Asynchronous ka matlab hai — kuch operations background mein chalte hain, aur unka result baad mein, jab ready ho tab handle hota hai — bina baaki code ko rokte hue.


function Aftersometime(fnc) {
    // fnc ek function hai jo hum baad mein run karna chahte hain

    setTimeout(
        fnc, 
        Math.floor(Math.random() * 10) * 4000
    );

    // Math.random() → 0 se 1 ke beech random number deta hai
    // Example: 0.73
    //
    // Math.random() * 10 → 0 se 10 ke beech number
    // Example: 7.3
    //
    // Math.floor(7.3) → 7
    //
    // 7 * 4000 → 28000 milliseconds
    // 28000 ms = 28 seconds
    //
    // setTimeout(fnc, 28000)
    // matlab fnc function 28 seconds baad chalega
}


Aftersometime(function() {

    //ise bolte hai callabck function
    //ek function ko aap ek aur fucntion bhejo  uskay parameter mai , to wo  parameter wala function kahlata hai call back function

    // Ye function Aftersometime() ko diya gaya hai
    // Lekin ye function immediately run nahi hoga.
    // Ye fnc parameter ke andar store ho jayega.

    console.log("hey");

    // Jab setTimeout ka time complete hoga,
    // tab ye line chalegi → "hey" print hoga

});