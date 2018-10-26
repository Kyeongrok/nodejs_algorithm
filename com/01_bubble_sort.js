const bubbleSort = (arr) =>{

    for(let fi = 0 ; fi < arr.length - 1; fi++){
        for(let bi = fi + 1 ; bi < arr.length; bi++){

            if (arr[fi] > arr[bi]) {
                let temp = arr[fi];
                arr[fi] = arr[bi];
                arr[bi] = temp;
            }

        }
    }
    return arr;
}

const arr = [7, 3, 2, 9];
const result = bubbleSort(arr);
console.log(result);
