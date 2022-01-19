const dolphinsAve = (96 + 108 + 89) / 3
const Koalas = (88 + 91 + 110) / 3

console.log(dolphinsAve)
console.log(Koalas)

if (dolphinsAve <= 100 || Koalas <= 100) {
    console.log("noone wins because of minimum score")
} else {
    if (dolphinsAve > Koalas) {
        console.log("Dolphins win!")
    } else if
        (Koalas > dolphinsAve) {
        console.log("Koalas win!")
    }
    else {
        console.log("it's a draw, noone wins")
    }
}

/////////////////////////////////////////////////////
//another way of qualifying a team for a trophy, a team 
//must have minimum 100 point to qualify, even if the 
//team wins (here you'll see the "&&" being put into the code
/////////////////////////////////////////////////////
if (dolphinsAve > Koalas && dolphinsAve >= 100) {
    console.log("Dolphins win!")
} else if
    (Koalas > dolphinsAve && Koalas >= 100) {
    console.log("Koalas win!")
}
else {
    console.log("it's a draw, noone wins")
}
