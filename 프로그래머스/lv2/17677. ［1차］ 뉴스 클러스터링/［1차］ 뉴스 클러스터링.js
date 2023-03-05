const MULTI_VALUE = 65536;

// 소문자 판별
function isLowerCase(char) {
    const code = char.charCodeAt();
    return 97 <= code && code <= 122;
}

// 2문자씩 잘라서 집합 생성
function createTwoCharSet(arr) {
    return arr.reduce((acc, _, idx, arr) => {
        if(arr[idx+1] && isLowerCase(arr[idx]) && isLowerCase(arr[idx+1])) {
            const word = arr[idx] + arr[idx+1];
            acc[word] = acc[word] + 1 || 1;
        }
        return acc;
    }, {});
}

// Object의 value 합
function sumOfValues(obj) {
    return Object.values(obj).reduce((acc, val) => acc + val, 0);
}

function solution(str1, str2) {
    let _str1 = str1.toLowerCase();
    let _str2 = str2.toLowerCase();
    if(_str1 === _str2) return MULTI_VALUE;
    
    _str1 = _str1.split('');
    _str2 = _str2.split('');
    
    const set1 = createTwoCharSet(_str1);
    const set2 = createTwoCharSet(_str2);
    
    // 교집합 계산
    const intersection = {};
    for (const [key, value] of Object.entries(set1)) {
      if(set2[key]) {
          intersection[key] = Math.min(value, set2[key]);
      }
    }
    
    // 합집합 계산 : A + B - 교집합
    const sumOfSets = {};
    for (const [key, value] of Object.entries(set1)) {
        sumOfSets[key] = sumOfSets[key] + value || value;
    }
    for (const [key, value] of Object.entries(set2)) {
        sumOfSets[key] = sumOfSets[key] + value || value;
    }
    for (const [key, value] of Object.entries(intersection)) {
        sumOfSets[key] -= value;
    }
    
    return Math.floor(sumOfValues(intersection) / sumOfValues(sumOfSets) * 65536);
}