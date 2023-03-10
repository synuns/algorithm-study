function solution(X, Y) {
    let answer = '';
    const xDict = {};
    const yDict = {};
    let intersect = {};
    
    X.split('').forEach((val) => {
        xDict[val] = xDict[val] + 1 || 1;
    });
    Y.split('').forEach((val) => {
        yDict[val] = yDict[val] + 1 || 1;
    });
    
    Object.entries(xDict).forEach((val) => {
        const [key, value] = val;
        if(yDict[key]) intersect[key] = Math.min(value, yDict[key]);
    })
    
    if(Object.keys(intersect).length === 0) return "-1";
    
    intersect = Object.keys(intersect).sort().reduce(
      (arr, key) => { 
        arr.push([key, intersect[key]]);
        return arr;
      }, 
      []
    );
    
    answer = intersect.reduce((str, val) => {
        const [key, value] = val;
        str = key.repeat(value) + str;
        return str;
    }, '');
    
    if(answer[0] === "0") return "0";
    return answer;
}