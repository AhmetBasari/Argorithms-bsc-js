// give the array
// find  maximum value of the array

function give_max_array(arr){
    var max = arr[0]
    for( var i=0; i< arr.length; i++){
        if(arr[i] > max){
            max= arr[i]
        }
    }
    return max
}
var i=[-15, -4, -8, -11, -2, -111]
console.log(give_max_array(i))


// i=0 => arr(-15) => -15
// i=1 => arr(-4)  => -4
// i=2 => arr(-8)  => -4
// i=3 => arr(-11) => -4
// i=4 => arr(-2)  => -2
// i=5 => arr(-111)=> -2

