# algorithm-study
코딩 테스트 문제 풀이 및 알고리즘 공부 저장소입니다.

문제 풀이를 하면서 본인의 문제풀이 방법을 해설하고 배웠던 것들을 기록하기 위해 markdown형식으로 작성했습니다.

알고리즘 트레이닝 사이트에 특성에 따라 작성 형식을 `form.md`에 작성하였습니다. `form.md` 파일은 문제 설명, 직접 작성한 풀이, 다른 사람의 풀이, 해설, 배운점, 참고사이트로 구성하였습니다.

## **repository 구조**

**프로그래머스**

```zsh
# 프로그래머스 문제풀이 작성 형식
./programmers/form.md
# 프로그래머스 문제풀이 작성
./programmers/level${num}/${problem_name}.md
```

**codewars**

```zsh
# codewars kata form
./codewars/form.md
# codewars kata
./codewars/${num}kyu/${kata_name}.md
```
*kata is problem

**백준 알고리즘**

```zsh
# 백준 알고리즘 문제풀이 작성 형식
./baekjoon/form.md
# 각 문제들의 색인
./baekjoon/index.md
# 준 알고리즘 문제풀이 작성
./baekjoon/problem/{problem_num}_{problem_name}.md
```
*백준 알고리즘의 문제들은 구분이 없기 때문에 문제에서 사용하는 알고리즘의 분류에 따라 index.md 파일에 작성합니다.*

## **파일과 커밋 형식**

모든 문제 풀이는 각 문제풀이 사이트마다 미리 작성해둔 [form.md](./programmers/form.md) 파일을 참고하여 작성합니다.

해외 사이트 영어 문제들은 모두 영어공부를 위해 영어로 작성했습니다. 작성자의 영어실력에 한계가 느껴질 수 있습니다.

- 문제풀이한 파일과 index 파일이 존재하는 경우 index 파일을 함께 커밋합니다.
- 문제 하나당 커밋을 한번씩 생성합니다.
- 커밋 메시지는 다음과 같습니다. 
  `git commit -m "[site] problems lang"`
- site는 문제 풀이 사이트, problems는 문제별 구분이 가능하도록 문제의 이름을 작성합니다.

```zsh
//커밋 메시지 예시
[baekjoon] 1248 js
[programmers] level2/가장큰수 js
```

## **알고리즘 트레이닝 사이트**

**국내**

- **프로그래머스**<br/>
https://programmers.co.kr/

- **Baekjoon Online Judge(백준알고리즘)**<br/>
https://www.acmicpc.net/

**해외**

- **코드워즈**<br/>
https://www.codewars.com/

- **릿코드**<br/>
https://leetcode.com/