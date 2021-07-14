# k번째 수

<br/>

## **📝문제 설명**

<br/>

배열 array의 i번째 숫자부터 j번째 숫자까지 자르고 정렬했을 때, k번째에 있는 수를 구하려 합니다.

예를 들어 array가 [1, 5, 2, 6, 3, 7, 4], i = 2, j = 5, k = 3이라면

1. array의 2번째부터 5번째까지 자르면 [5, 2, 6, 3]입니다.
2. 1에서 나온 배열을 정렬하면 [2, 3, 5, 6]입니다.
3. 2에서 나온 배열의 3번째 숫자는 5입니다.

배열 array, [i, j, k]를 원소로 가진 2차원 배열 commands가 매개변수로 주어질 때, commands의 모든 원소에 대해 앞서 설명한 연산을 적용했을 때 나온 결과를 배열에 담아 return 하도록 solution 함수를 작성해주세요.

<br/>

### **⚠제한사항**

<br/>

- array의 길이는 1 이상 100 이하입니다.
- array의 각 원소는 1 이상 100 이하입니다.
- commands의 길이는 1 이상 50 이하입니다.
- commands의 각 원소는 길이가 3입니다.

<br/>

### **입출력 예**

<br/>

array |	commands |	return
------|----------|---------
[1, 5, 2, 6, 3, 7, 4] |	[[2, 5, 3], [4, 4, 1], [1, 7, 3]] |	[5, 6, 3]

<br/>

## **🧐CODE REVIEW**

<br/>

### **🧾나의 풀이**

<br/>

```python
def solution(array, commands):
    answer = []
    for x, y, z in commands:
        cut_array = sorted(array[x-1:y])
        answer.append(cut_array[z-1])
            
    return answer
```

> for에 필요한 세개의 변수를 모두 받아 list slicing을 통해 매우 쉽게 풀 수 있었던 문제

<br/>

### **😱pythonic한 한줄 코드😱**

<br/>

```python
def solution(array, commands):
    return list(map(lambda x:sorted(array[x[0]-1:x[1]])[x[2]-1], commands))
```

> 처음보면 매우 낯설게 느껴지는 답안이다. 그이유는 lambda 때문이다. 다양한 예시를 접하면 어렵지 않게 이해할 수 있다.<br/>
> 기본적인 형태는 `lambda argument(s): expression`의 형태인데 예를 들면 `(lambda x: x*2)(12)` 이런식의 표현이 가능하다. 위의 경우는 map함수를 이용해서 lambda에 commands의 인자값이 하나씩 입력된다.

<br/>

1. lambda식을 익히는 pythonic한 한줄 코딩이 가능하다!

## 📚참고 사이트

<br/>

- **[Python Lambda(w3school)]**<br/>
https://www.w3schools.com/python/python_lambda.asp

- **[Lambda Functions with Practical Examples in Python]**<br/>
https://towardsdatascience.com/lambda-functions-with-practical-examples-in-python-45934f3653a8
