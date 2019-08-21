function generalizedGCD(num, arr)
{
    let gcd = (a, b) => a ? gcd(b % a, a) : b;
    let lcm = (a, b) => a * b / gcd(a, b);
    return arr.reduce(gcd);
}


//console.log();

console.log(generalizedGCD(1,[2,3,4,5,6]));
console.log(generalizedGCD(1,[10,15]));
