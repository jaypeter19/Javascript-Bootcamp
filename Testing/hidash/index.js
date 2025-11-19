module.exports = {
    forEach(arr, fn) {
        // ForEach function implemented using regular FOR LOOP
        // for (let i = 0; i < arr.length; i++) {
        //     const value = arr[i];
        //     fn(value, i);
        // }

        // ForEach function implemented using FOR IN LOOP
        for (let index in arr) {
            fn(arr[index], index);
        }
    },
    map(arr, fn) {
        const result = []
        for (let i = 1; i < arr.length; i++) {
            result.push(fn(arr[i], i));
        }
        return result;
    }
};
