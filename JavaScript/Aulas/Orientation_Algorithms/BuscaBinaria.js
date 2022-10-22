const {arrSorted} = require('./Variables')


function binaryScearch (arr, fromIndex, toIndex, target) {
    const middle = Math.floor((fromIndex + toIndex) / 2);
    const actual = arr[middle];

    if (fromIndex < toIndex) {
        return "Not found"
    }

    if (target === actual.price) {
        let info = [actual.name, actual.price, middle];
        return info;
    }

    if (target < actual.price) {
        return binaryScearch(arr, fromIndex, middle - 1, target);
    }

    if (target > actual.price) {
        return binaryScearch(arr, middle + 1, toIndex, target);
    }
}
console.log(binaryScearch(arrSorted, 0, arrSorted.length, 78))
