function generateAuthID(email,studentCode){
    // extract part before 
    let username=""
    for(let i=0;i<email.length;i++){
        if(email=="@") break
        username+=email[i]
    }

    // concatenate with Student Code 

    let Combined = username+studentCode;

    //remove vowel

    let withoutVowels="";
    for(let i=0 ;i<Combined.length;i++){
        let char =Combined[i]
        if(char!=="a" && char !=="e" && char!=="i" && char !=="o" && char !=="u"){
            withoutVowels+=char
        }
    }

    //remove prime number 

    function isPrime(num){
        if(num<=1) return false
        let count=0
        for(let i=1;i<=num;i++){
            if (num%i==0){
                count+=1
            }
        }

        return count==2
    }

    let withoutPrimes=""
    let primeFound=false

    for (let i=0;i<withoutVowels.length;i++){
        let char=withoutVowels[i]
        if(char>="0" && char<="9"){
            if(isPrime(Number(char))){
                primeFound=true
                continue
            }
        }
        withoutPrimes+=char
    }

    if(!primeFound){
        withoutPrimes+='1'
    }

    // even index character
    let filtered=""
    for(let i=1;i<withoutPrimes.length;i+=2){
        filtered+=withoutPrimes[i]
    }

    // character to number 

    function charToNum(c){
        if(c>='a' && c<='z'){
            return (c.charCodeAt(0)-96).toString()
        }
        if(c>='0' && c<='9'){
            return c
        }
        return "27"
    }

    let authID=""
    for (let i=0 ;i<filtered.length;i++){
        authID+=charToNum(filtered[i])
    }

    return authID
}

let res= generateAuthID("sohbanahmad42@gmail.com","ft35_278");
console.log(res)