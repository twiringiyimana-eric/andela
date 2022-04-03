const firstArray= [10,11,12,13,14,15,16,17,18,19];
const newArray = [];

function primeSort(array){
    for(let i= 2; i <= array.length-1;i++){
        firstArray[i] % 2 !== 0 ? newArray.push(firstArray[i]) :" ";
    }

    return newArray;

}

console.log(primeSort(primeArray));