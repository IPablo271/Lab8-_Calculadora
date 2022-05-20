const cube = (a) => a*a*a
const square =(a) => a*a

const suma =(a,b) => a+b
const resta =(a,b) =>a-b
const multiplicacion =(a,b) => a*b
const division =(a,b) => a/b
var modulo=function(n,m){
    var remain=n%m
    return Math.floor(remain >=0 ? remain:remain+m)
}
export {square,cube,suma,resta,multiplicacion,division,modulo}