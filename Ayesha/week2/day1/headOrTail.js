let  coinFlip = () => {
    if(Math.floor(Math.random() * 2) == 0){
        return console.log('tails')
    }
    else 
    return console.log('heads')
}
coinFlip()