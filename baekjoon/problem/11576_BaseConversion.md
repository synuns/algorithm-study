# [11576] Base Conversion

<br/>

## **📝문제**

<br/>

타임머신을 개발하는 정이는 오랜 노력 끝에 타임머신을 개발하는데 성공하였다. 미래가 궁금한 정이는 자신이 개발한 타임머신을 이용하여 500년 후의 세계로 여행을 떠나게 되었다. 500년 후의 세계에서도 프로그래밍을 하고 싶었던 정이는 백준 사이트에 접속하여 문제를 풀기로 하였다. 그러나 미래세계는 A진법을 사용하고 있었고, B진법을 사용하던 정이는 문제를 풀 수가 없었다. 뛰어난 프로그래머였던 정이는 A진법으로 나타낸 숫자를 B진법으로 변환시켜주는 프로그램을 작성하기로 하였다. 

N진법이란, 한 자리에서 숫자를 표현할 때 쓸 수 있는 숫자의 가짓수가 N이라는 뜻이다. 예를 들어 N은 17일 때 한 자릿수에서 사용할 수 있는 수는 0, 1, 2, ... , 16으로 총 17가지가 된다.

<br/>

### **입력**

<br/>

입력의 첫 줄에는 미래세계에서 사용하는 진법 A와 정이가 사용하는 진법 B가 공백을 구분으로 주어진다. A와 B는 모두 2이상 30이하의 자연수다.

입력의 두 번째 줄에는 A진법으로 나타낸 숫자의 자리수의 개수 m(1 ≤ m ≤ 25)이 주어진다. 세 번째 줄에는 A진법을 이루고 있는 숫자 m개가 공백을 구분으로 높은 자릿수부터 차례대로 주어진다. 각 숫자는 0이상 A미만임이 보장된다. 또한 수가 0으로 시작하는 경우는 존재하지 않는다.

A진법으로 나타낸 수를 10진법으로 변환하였을 때의 값은 양의 정수이며 220보다 작다.

<br/>

### **출력**

<br/>

입력으로 주어진 A진법으로 나타낸 수를 B진법으로 변환하여 출력한다.

<br/>

### **예제입출력**

<br/>

<div style="column-count:2; ">
  <div>

**예제 입력1**

```
17 8
2
2 16
```

  </div>
  <div>

**예제 출력1**

```
6 2
```

<br/>

  </div>
</div>

<br/>

### **출처**

<br/>

https://www.acmicpc.net/problem/11576

<br/>

## **🧐CODE REVIEW**
***

<br/>

### **🧾나의 풀이**

<br/>

```python
import sys

a_system, b_system = list(map(int, sys.stdin.readline().strip().split()))
digit = int(input())
a_number = list(map(int, sys.stdin.readline().strip().split()))[:digit]
decimal = 0
b_number = []

for i in range(digit):
    decimal += a_number[i] * (a_system ** (digit - i - 1))

while decimal > 0:
    decimal, denom = divmod(decimal, b_system)
    b_number.append(denom)

b_number.reverse()
print(*b_number)
```

<br/>

결과	| 메모리(KB) |	시간(ms) |	언어 |	코드 길이(B)
:----:|:-----:|:-----:|:-----:|:--------:
맞았습니다!! |	29200	| 76 |	Python 3 | 419

<br/>

#### **📝해설**

<br/>

**알고리즘**
```
1. a진법 숫자를 10진법으로 변환한다.
  1.1 각 자리수와 자리값을 a진법에 맞춰서 곱하고
    (a_number[i] * (a_system ** (digit - i - 1))) 
    전부 더한다.
2. 10진법으로 변환한 숫자를 b진법으로 변환한다.
  2.1 10진법 수를 b로 나눠서 나머지는 list에 추가해준다.
  2.2 역순으로 출력해준다.
```

<br/>

### **다른 풀이**

<br/>

```python
a, b = map(int, input().split())
n = int(input())
arr = list(map(int,input().split()))
num = 0
for i,x in enumerate(arr):
    num+=(a**(n-i-1))*x
res=[]

while num>=b:
    res.append(num%b)
    num= num//b
res.append(num)
res.reverse()
print(*res)
```

<br/>

아이디 |	문제	| 문제 제목 |	결과	| 메모리(KB) |	시간(ms) |	언어 |	코드 길이(B) 
:-----:|:-----:|:---------:|:-----:|:-----:|:-----:|:----:|:--------:
lemonlime	| 11576 |	Base | Conversion |	맞았습니다!! |	29056	| 56 |	Python 3 |	247

<br/>

#### **📝해설**

<br/>

enumerate를 이용해서 풀이한게 색다르게 느껴져서 가져왔다.

enumerate를 이용하면 index와 index에 해당하는 값을 한번에 가져오기가 편하다.

<br/>