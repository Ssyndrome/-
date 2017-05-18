   function bubbleSort() {
            let arr = [5, 1, 3, 2]
            let len = arr.length;
            for (let i = 0; i < len; i++) {
                console.warn(arr[i])
                for (let j = 0; j < len - 1 - i; j++) { //代表遍历的次数，arr[i]每执行一个循环，会自动排序一次，所以已经排序好的数据会被忽略。
                    console.log(arr[j])
                    if (arr[j] > arr[j + 1]) {
                        let temp = arr[j + 1]; //以第一个循环为例，将索引1的值赋值给变量temp（新声明一个变量来做存储）
                        arr[j + 1] = arr[j]; //然后将索引0的值赋值给索引1（将索引值小的变量赋值给索引值大的变量）
                        arr[j] = temp; //将temp赋值给索引0（最后将存储的值赋值给索引值较小的变量）
                        console.info(arr)
                    }
                }
            }
            return arr;

        }
        bubbleSort();