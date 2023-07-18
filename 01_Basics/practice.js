for(let i = 2; i < 10;i++){
    let count = 1;
    for(let j = 2; j < i;j++){
        if(i % j == 0){
            count++
        }
    }
    if(count == 1){
        console.log(i)
    }
}

// let message = function showMessage(){
//     let message = "Hello, javascript"
//     console.log(message)
// }



