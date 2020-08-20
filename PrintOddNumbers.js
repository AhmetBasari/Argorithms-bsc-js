// write a function that takes array as an argument 
// For loop from 0 the length of the array (the argument)
// print the value

function print_Array(arr){
    for( var i=0; i< arr.length; i++){
        console.log(arr[i])
    }
}
var X=[1,4,2,12]
print_Array(X)
var test = [2, 15, 'Rotterdam', 25, true, 0]
print_Array(test)

// i=0 => 1 ... arr[0] = 1
// i=1 => 4 ... arr[1] = 4
// i=2 => 2 ... arr[2] = 2
// i=3 => 12 ... arr[3] = 12
// i=4 => the for loop stops
