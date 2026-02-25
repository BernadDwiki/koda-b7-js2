let jumBel = 500000;
let jumBelFinal;
if(jumBel < 500000){
    jumBelFinal = jumBel;
}else if (jumBel >= 500000 && jumBel <= 1000000){
    jumBelFinal = jumBel - (0.05 * jumBel);
} else if (jumBel > 1000000){
    jumBelFinal = jumBel - (0.1 * jumBel);
}
console.log("Total belanja anda adalah "+jumBelFinal);
