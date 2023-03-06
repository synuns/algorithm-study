# 문제 제목

## **📝문제 설명**

### **⚠제한사항**

### **입출력 예**

## **🧐CODE REVIEW**

### **😫나의 오답 풀이**

### **🧾나의 풀이**

```js
function solution(topping) {
    let answer = 0;
    for(let i = 0; i < topping.length; i++) {
        const chulsu = new Set(topping.slice(0, i));
        const brother = new Set(topping.slice(i));
        if(chulsu.size === brother.size) answer++;
    }
    return answer;
}
```

#### **📝해설**

```js
```

#### **😅개선점**

1. `for i in range():` 

### **다른 풀이**

```js
```

#### **📝해설**

```js
```

### **🔖정리**

1. 배운점

## 📚참고 사이트

- **🔗문제 링크**<br/>
사이트 주소

- **[제목]**<br/>
사이트 주소
