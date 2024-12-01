
var i = 0;
var demo = "";
var auth = "";
function qute() {
    var i = Math.floor(Math.random() * 5) + 1;
    if (i === 1) {
        console.log(i);
        demo = '"It\'s not what happens to you, but how you react to it that matters."';
        auth ="--Epictetus"
    } else if (i === 2) {
        console.log(i);
        demo = '"You miss 100% of the shots you don\'t take."';
        auth ="--Wayne Gretzy"
    } else if (i === 3) {
        console.log(i);
        demo = '"The best revenge is massive success."';
        auth ="--Frank Sinatra"
    } else if (i === 4) {
        console.log(i);
        demo = '"Resentment is like drinking poison and waiting for your enemies to die."';
        auth ="--Nelson Mandela"
    } else if (i === 5) {
        console.log(i);
        demo = '"Do not take life too seriously. You will not get out alive."';
        auth ="--Elbert Hubbard"
    }

    document.getElementById("demo").innerHTML = demo;
    document.getElementById("auth").innerHTML = auth;
    
    if (i < 5) {
        i++;
    } else {
        i = 1;
    }
}