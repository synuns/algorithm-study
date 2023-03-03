function solution(arr) {
    const sum = arr.reduce((acc, val) => acc + val, 0)
    return sum/arr.length;
}