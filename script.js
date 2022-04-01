for(i=1; i<=100; i++){
    if(i%15==0){  //if the remainder of a number divided by 15 remainder of 0 then output FizzBuzz.
        console.log("FizzBuzz");
    } else if (i%5==0){ //if the remainder of a number divided by 5 remainder of 0 then output Buzz.
        console.log("Buzz"); 
    } else if(i%3==0){  //if the remainder of a number divided by 3 remainder of 0 then output Fizz.
        console.log("Fizz"); 
    } else{
        console.log(i) 
    }
}   