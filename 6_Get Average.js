// defined x array
// fine all of the array's length average from for loop
//output average 

function Get_average (a){
    var Total=0;
    for(var i=0; i<a.length; i++){
        Total += a[i];  
    }
    average= Total / a.length
    return average
}

var a = [13, 5, 19, 220, 3, 15, 110, 220];
console.log(Get_average(a));
