function recursivCounter(counter){
    console.log(counter)
    if(counter != 0){
        return recursivCounter(counter-1)
    }
}
console.log(recursivCounter(10));