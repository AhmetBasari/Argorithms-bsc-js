// defined x array
// fine all of the array's length average from for loop
//output average 

function Get_average (arr){
    var Total=0;
    for(var i=0; i<arr.length; i++){
        Total += arr[i];  
    }
    average= Total / arr.length
    return average
}

var a = [13, 5, 19, 220, 3, 15, 110, 220];
console.log(Get_average(a));