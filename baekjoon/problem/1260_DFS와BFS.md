# [1260] DFS와 BFS

## **📝문제**

그래프를 DFS로 탐색한 결과와 BFS로 탐색한 결과를 출력하는 프로그램을 작성하시오. 단, 방문할 수 있는 정점이 여러 개인 경우에는 정점 번호가 작은 것을 먼저 방문하고, 더 이상 방문할 수 있는 점이 없는 경우 종료한다. 정점 번호는 1번부터 N번까지이다.

### **입력**

첫째 줄에 정점의 개수 N(1 ≤ N ≤ 1,000), 간선의 개수 M(1 ≤ M ≤ 10,000), 탐색을 시작할 정점의 번호 V가 주어진다. 다음 M개의 줄에는 간선이 연결하는 두 정점의 번호가 주어진다. 어떤 두 정점 사이에 여러 개의 간선이 있을 수 있다. 입력으로 주어지는 간선은 양방향이다.

### **출력**

첫째 줄에 DFS를 수행한 결과를, 그 다음 줄에는 BFS를 수행한 결과를 출력한다. V부터 방문된 점을 순서대로 출력하면 된다.

### **예제입출력**

**예제 입력1**

```
4 5 1
1 2
1 3
1 4
2 4
3 4
```

**예제 출력1**

```
1 2 4 3
1 2 3 4
```

**예제 입력2**

```
5 5 3
5 4
5 2
1 2
3 4
3 1
```

**예제 출력2**

```
3 1 2 5 4
3 1 4 2 5
```

**예제 입력3**

```
1000 1 1000
999 1000
```

**예제 출력3**

```
1000 999
1000 999
```

### **출처**

https://www.acmicpc.net/problem/1260

## **🧐CODE REVIEW**

### **🧾나의 풀이**
~~내 풀이라고하기에는 조금 부끄럽다~~

```python
from collections import deque


def DFS(graph, root):
    visited = []
    stack = [root]
    while stack:
        node = stack.pop()
        if node not in visited:
            visited.append(node)
            if node in graph:
                temp = list(set(graph[node]) - set(visited))
                temp.sort(reverse=True)
                stack += temp
    return " ".join(map(str, visited))


def BFS(graph, root):
    visited = []
    queue = deque([root])
    while queue:
        node = queue.popleft()
        if node not in visited:
            visited.append(node)
            if node in graph:
                temp = list(set(graph[node]) - set(visited))
                temp.sort()
                queue += temp
    return " ".join(map(str, visited))


node, edge, start = map(int, input().split())
graph = {}


for _ in range(edge):
    a, b = map(int, input().split())
    if a not in graph:
        graph[a] = [b]
    elif b not in graph[a]:
        graph[a].append(b)
    if b not in graph:
        graph[b] = [a]
    elif a not in graph[b]:
        graph[b].append(a)

print(DFS(graph, start))
print(BFS(graph, start))

```

|     결과     | 메모리(KB) | 시간(ms) |   언어   | 코드 길이(B) |
| :----------: | :--------: | :------: | :------: | :----------: |
| 맞았습니다!! |   32444    |   708    | Python 3 |     1140     |

#### **📝해설**

1. **인접리스트를 만드는 방식**

    앞에서 동일하게 인접리스트를 사용해 풀이한 [ABCDE](./problem/13023_ABCDE.md) 문제의 경우에는 list의 index가 0부터 시작하는 것에 맞춰서 문제의 index 입력값도 0부터 시작했기 때문에 list의 형태로 풀이할 수 있었다. 

    하지만 이 문제의 경우에는 index 입력값이 1부터 시작하기 때문에 list를 이용해 인접리스트를 구성한다면 `-1`씩 빼주고 -1을 빼준 것을 감안하고 풀이한뒤 답을 출력할 때 다시 `+1` 해주는 것이 필요하다. 완전 복잡하다. 

    ```python
   node, edge, start = map(int, input().split())
   graph = [[] for _ in range(node)]

   for _ in range(edge):
       a, b = map(int, input().split())
       graph[a-1].append(b-1)
       graph[b-1].append(a-1)
    ```

    문제의 입력값 방식을 따를 수 있다면 그에 맞춰서 풀이하는 것이 더 좋은 방식이다. 그래서 `dictionary {}` 자료형을 이용해서 인접리스트를 만들어 준다면 입력값을 변형시키지 않더라도 쉽게 풀이할 수 있다.

    ```python
   node, edge, start = map(int, input().split())
   graph = {}

   for _ in range(edge):
       a, b = map(int, input().split())
       if a not in graph:
           graph[a] = [b]
       elif b not in graph[a]:
           graph[a].append(b)
       if b not in graph:
           graph[b] = [a]
       elif a not in graph[b]:
           graph[b].append(a)
    ```

2. **DFS와 BFS**

    기본적으로 **BFS는 QUEUE**를 사용하고 **DFS는 STACK**을 사용하는 풀이 방법이라고 생각하면 된다. 물론 재귀함수를 사용하더라도 stack의 처리 순서와 동일하기 때문에 DFS를 구현할 수 있다.

    파이썬에서 **스택**은 `list` 자료형의 `append()`와 `pop()`으로 구현가능하며 **큐**는 list 자료형의 append()와 pop(0)을 이용해도 되지만 pop(0)은 상당히 비효율적이기 때문에 `collections.deque` object를 이용해서 pop(0)과 동일한 기능을 하지만 더 효율적인 `popleft()`를 이용한다.

    풀이에서도 동일하게 DFS는 스택을 사용했고 BFS는 deque를 이용해 큐를 구현하여 풀이했다.

    여기서 주의해야 할 점이 한가지 있는데 dfs와 bfs 함수의 차이점을 살펴보면 각각 자료형에 인자를 추가하기전에 sort()하는 절차가 있는데 여기서 dfs는 `reverse=True`옵션을 주어서 거꾸로 정렬해준다. 
    
    그 이유는 자료형의 처리 순서와 문제에서 먼저 처리하는 조건을 잘 생각해보면 된다. stack은 쌓여있는 형태로 나중에 들어온 것을 먼저 처리하는 선입후출 (FILO)의 형태이다. 그런데 문제에서는 작은 수를 먼저 처리해야하는 조건이 있기 때문에 stack의 선입후출 방식에 맞춰서 거꾸로 정렬하여 추가해주는 것이다. 

### **🔖정리**

1. BFS는 스택 DFS는 큐
2. 파이썬에서 큐는 deque를 사용하자

## 📚참고 사이트

> **[튜나 개발일기] 깊이 우선 탐색(DFS) 과 너비 우선 탐색(BFS)**<br/>
> https://devuna.tistory.com/32<br/>
> BFS와 DFS에 대해서도 너무 잘 설명되어있느데 코드 스타일이 너무 깔끔하고 이해하기 쉽게 풀이해놓아서 정말 놀랐던 글이다. 코드를 거의 따라 친 것 같다.

