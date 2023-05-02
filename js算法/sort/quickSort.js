function quickSort(arr){
  if(arr.length<2){
    return arr
  }

  let poivt = arr[0]
  let left = []
  let right = []
  for(let i=1;i<arr.length;i++){
    if(arr[i]<poivt){
      left.push(arr[i])
    }else{
      right.push(arr[i])
    }
  }
  return quickSort(left).concat(poivt,quickSort(right))
}

// -------------------------原地--------------------

function partition(arr,start,end){
  let init = start
  let poivt = arr[start]
  start++
  
  while(start<end){
    while(arr[start]<poivt){
      start++
      console.log(start)
      console.log(arr[start])
      console.log(arr[start]<poivt)
    }

    while(arr[end]>poivt){
      end--
    }

    if(start<end){
      [arr[start],arr[end]] = [arr[end],arr[start]]
      start++
      end--
    }
  }
  [arr[init],arr[start-1]] = [arr[start-1],arr[init]]
  return start
}

function quickSort1(arr,start,end){
  if(start<end){
    let poivt = partition(arr,start,end)
    quickSort1(arr,start,poivt-1)
    quickSort1(arr,poivt,end)
  }
  return arr
}


let arr = [134,54,23,12,3423,544,2123]
// console.log(quickSort(arr))
console.log(quickSort1(arr,0,arr.length-1))