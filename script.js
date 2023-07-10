alert("Uyqingiz kelmasa, qo'ylar sonini sanaymiz")
let sheep = +prompt("Qo'ylar sonini kiriting")
while(isNaN(sheep) || sheep==0){
    sheep = +prompt("Qaytadan urinib ko'ring")
}
//
let son = " ta qo'y"
for (let i = 1; i<=sheep; i++) {
 son = i + son
console.log(son);
son = " ta qo'y"}
