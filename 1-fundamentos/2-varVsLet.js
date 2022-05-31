let funcs = [];

// VAR EM LOOP
for (var i = 0; i < 10; i++) {
    console.log(i);
}
console.log('i='+i);
console.log('__________________________________________________________________');


for (var i = 0; i < 10; i++) {
    funcs.push(() => {console.log(i)});
}
funcs[2]();
funcs[7]();




// LET EM LOOP
for (let j = 0; j < 10; j++) {
    console.log(j);
}
// console.log('j='+j); !!!!ERRO!!!!!!
console.log('__________________________________________________________________');



funcs = [];
for (let i = 0; i < 10; i++) {
    funcs.push(() => {console.log(i)});
}
funcs[2]();
funcs[7]();
