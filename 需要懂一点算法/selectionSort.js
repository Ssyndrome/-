function selectionSort() {
    let arr = [3, 5, 1, 5, 0, 2, 23, 12];
    let len = arr.length;
    console.log(arr.length + 's')
    let minIndex, temp;
    for (let i = 0; i < len - 1; i++) { //估计有人问，为何要减一，答案一会出来
        minIndex = i;
        console.warn(arr[i])
        for (let j = i + 1; j < len; j++) { //为啥又要加一
            console.info(arr[j])
            if (arr[j] < arr[minIndex]) { //在这个循环里里，我们知道在第一次循环中，arr[j]是5，arr[minIndex]是3，第一次循环是5大于3，第二次循环1小于3，这时arr[mminIndex]是1，第三次循环5大于1，第四次循环0小于1，第五次第六次循环不成立。
                //这时arr[minIndex]是0
                minIndex = j;
            }
        }
        temp = arr[i]; //arr[i]是3赋予temp
        arr[i] = arr[minIndex]; //arr[minIndex]是1
        arr[minIndex] = temp; //3赋予arr[minIndex]，其实就是交换以下
        console.log(arr)
    }
    return arr;
}
let a = selectionSort();
console.log(a)