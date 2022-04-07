function rev(n){
    n=n+'';
    return n.split('').reverse().join('');

}
const n = prompt('reverse a number : ');

document.write(rev(n));