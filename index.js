
let arr = [22,27,16,2,18,6];
let for_length = arr.length;

let min;

document.getElementById("Mybtn").onclick = function() {Sort()};

for (let i = 0; i<for_length-1; i++){

    min = arr[i];
    console.log(min);
    for(let j = i; j<for_length; j++){

        if(min > arr[j]){
            min = arr[j];
            arr[j] = arr[i];
            arr[i] = min;
        }


    }
    document.write(arr);
    document.write("<br>");
}




function Sort(){

    for (let i = 0; i<for_length-1; i++){

        min = arr[i];
        console.log(min);
        for(let j = i; j<for_length; j++){
    
            if(min > arr[j]){
                min = arr[j];
                arr[j] = arr[i];
                arr[i] = min;
            }
    
    
        }
        document.write(arr);
        document.write("<br>");
    }


}


