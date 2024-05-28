//fundamentals of js
// arrays and objects
// function return
// async js coding
//for each mao filter find indexof

var arr = [1, 2, 3, 4];

arr.forEach(function (val) {
    console.log(val + " " + "hello");
})


var ans = arr.map(function (val) {
    return 1 + val;
})
console.log(ans);

var filter = arr.filter(function (val) {
    if (val >= 3) { return true; }
    else return false;
})

console.log(filter);

var find = arr.find(function (val) {
    if (val === 2) return val;
})

console.log(find);

var index = arr.indexOf(4);
console.log(index
);

//object
var obj = {
    name: "sandesh",
    age: 25
}

// Object.freeze(obj);
obj.age = 12;

function abcd() {
    return 12;
}




var fun = abcd();

//async js
//line by line code chale isey kahte hai synchronus
//jo bhi code async nature ka ho , usey side stack mein bhej do and agle code ko chalao jo bhi sync nature ka ho, jabhi saara sync code chal jaye, tab check karlo ki async code complete hua ya nhi and agar wo complete hua ho to usey main stack mein laao and chala do
async function abc2(){
   // var blov = await fetch(`https://api.sampleapis.com/beers/ale`);
    var ans = await blov.json();

    console.log(ans);
}

abc2();


