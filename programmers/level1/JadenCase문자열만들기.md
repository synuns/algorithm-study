# JadenCase 문자열 만들기

## **📝문제 설명**

JadenCase란 모든 단어의 첫 문자가 대문자이고, 그 외의 알파벳은 소문자인 문자열입니다. 단, 첫 문자가 알파벳이 아닐 때에는 이어지는 알파벳은 소문자로 쓰면 됩니다. (첫 번째 입출력 예 참고)
문자열 s가 주어졌을 때, s를 JadenCase로 바꾼 문자열을 리턴하는 함수, solution을 완성해주세요.

### **⚠제한사항**

s는 길이 1 이상 200 이하인 문자열입니다.
s는 알파벳과 숫자, 공백문자(" ")로 이루어져 있습니다.
숫자는 단어의 첫 문자로만 나옵니다.
숫자로만 이루어진 단어는 없습니다.
공백문자가 연속해서 나올 수 있습니다.

### **입출력 예**

| s                       | return                  |
| ----------------------- | ----------------------- |
| "3people unFollowed me" | "3people Unfollowed Me" |
| "for the last week"     | "For The Last Week"     |

## **🧐CODE REVIEW**

### **😫나의 오답 풀이1**

```js
function solution(s) {
    let answer = "";
    const splitS = s.toLowerCase().split(" ");
    for(let i=0; i < splitS.length; i++){
        splitS[i][0] = splitS[i][0].toUpperCase();
    }
    return splitS.join(" ");
}
```

#### **📝해설**

자바스크립트의 기괴한 특성으로 당황했던 풀이.

자바스크립트의 string은 원시타입으로 불변성을 가지고 있기 때문에

index로 접근해서 변경이 불가능했다.

```js
splitS[i][0] = splitS[i][0].toUpperCase();
```

### **😫나의 오답 풀이2**

```js
function solution(s) {
    let answer = "";
    const splitS = s.toLowerCase().split(" ");
    for(let i=0; i < splitS.length; i++){
        splitS[i] = splitS[i][0].toUpperCase() + splitS[i].substring(1);
    }
    return splitS.join(" ");
}
```

#### **📝해설**

예외케이스를 처리 못해줘서 런타임 에러가 발생했다.

공백이 여러개가 들어오는 경우가 있기 때문에 `split`을 사용하지 않고 풀어보자

### **🧾나의 풀이**

```js
function solution(s) {
    const _s = s.toLowerCase();
    let answer = "";
    for(let i=0; i < _s.length; i++){
        if(i === 0 || _s[i-1] === " "){
            answer += _s[i].toUpperCase();
        }else{
            answer += _s[i];
        }
    }
    return answer;
}
```

#### **📝해설**

테스트케이스에서 공백이 여러개 들어가는 경우도 포함하기 때문에
`split`을 사용해서 풀면 안되는 문제이다.

아예 처음부터 lowercase로 전부 만들어준 다음에
문자 앞부분만 uppercase로 만들어주는 식으로 풀이하는 게 빠르다.

```js
if(i === 0 || _s[i-1] === " "){
    answer += _s[i].toUpperCase();
}else{
    answer += _s[i];
}
```

문자열의 제일 앞부분이거나 앞 문자가 공백이면 uppercase로 바꿔주는 식으로 풀이했다.

### **다른 풀이**

```js
function solution(s) {
    return s.split(" ").map(v => v.charAt(0).toUpperCase() + v.substring(1).toLowerCase()).join(" ");
}
```

#### **📝해설**

```
return s.toLowerCase().split(" ").map(v => v[0].toUpperCase() + v.substring(1)).join(" "); 이거는 왜 안돼나요??
```

한줄 풀이는 맘에 안들긴하지만 split을 쓰고도 여러 공백을 처리할 수 있는 방법을 제시해준 풀이.

`index`를 이용해서 접근하면 여러개의 공백을 split했을 때 빈 문자열이 생겨서 undefined가 런타임 에러가 나지만,
`charAt`을 사용하면 `빈 문자열`을 리턴해서 런타임 에러를 피해갈 수 있다..

### **🔖정리**

1. string의 index 접근과 charAt의 차이점
2. string

## 📚참고 사이트

- **🔗문제 링크**<br/>
https://school.programmers.co.kr/learn/courses/30/lessons/12951

- **[string.charAt(i) vs string[i]]**<br/>
https://thisthat.dev/string-char-at-vs-string-bracket-notation/

- **[String.prototype.substring()]**<br/>
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring