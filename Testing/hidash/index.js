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
    }
};
