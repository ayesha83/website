let arr = [1,2,3,4,5,6,7,8,9,10]
for(let i = 0; i < 10; i ++ ){
    if ((arr[i]%2) == 0 ){
        return console.log(`even ${arr[i]}`)
    }
    else {
        return console.log(`odd ${arr[i]}`)
    }
    return console.log(arr[i])
}
