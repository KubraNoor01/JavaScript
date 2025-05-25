// 2. Write a function to check even/odd numbers

function evenOdd(){
    let num=prompt("enter the num:");
    if(num > 0){
if(num%2==0){
        console.log("the num : ", num , "even");
            }else{
                console.log("the num : ", num , "odd");
            }
    }else{
        console.log("inalid output")
    }
    
}
evenOdd();