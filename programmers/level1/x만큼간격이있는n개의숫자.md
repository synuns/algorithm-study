# x만큼 간격이 있는 n개의 숫자

## **📝문제 설명**

함수 solution은 정수 x와 자연수 n을 입력 받아, x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트를 리턴해야 합니다. 다음 제한 조건을 보고, 조건을 만족하는 함수, solution을 완성해주세요.

### **⚠제한사항**

- x는 -10000000 이상, 10000000 이하인 정수입니다.
- n은 1000 이하인 자연수입니다.

### **입출력 예**

| x   | n   | answer       |
| --- | --- | ------------ |
| 2   | 5   | [2,4,6,8,10] |
| 4   | 3   | [4,8,12]     |
| -4  | 2   | [-4, -8]     |

## **🧐CODE REVIEW**

### **🧾나의 풀이**

```js
function solution(x, n) {
    answer = [x];
    for(let i = 1; i < n; i++){
        answer.push(answer[i-1] + x)
    }
    return answer;
}
```

### **Hyunyoung Cho , - , 김성훈 , - , - 외 33 명 풀이**

```js
function solution(x, n) {
    return Array(n).fill(x).map((v, i) => (i + 1) * v)
}
```

#### **📝해설**

n개의 배열을 만들고 x로 채운 다음 인덱스에 따라 곱셉

fill을 이용한 참신한 풀이

## 📚참고 사이트

- **🔗문제 링크**<br/>
https://school.programmers.co.kr/learn/courses/30/lessons/12954
