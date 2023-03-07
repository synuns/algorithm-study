# [unrated] 바탕화면 정리 - 161990 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/161990) 

### 성능 요약

메모리: 33.5 MB, 시간: 0.27 ms

### 구분

코딩테스트 연습 > 연습문제

### 채점결과

<br/>정확성: 100.0<br/>합계: 100.0 / 100.0

### 문제 설명

<p>코딩테스트를 준비하는 머쓱이는 프로그래머스에서 문제를 풀고 나중에 다시 코드를 보면서 공부하려고 작성한 코드를 컴퓨터 바탕화면에 아무 위치에나 저장해 둡니다. 저장한 코드가 많아지면서 머쓱이는 본인의 컴퓨터 바탕화면이 너무 지저분하다고 생각했습니다. 프로그래머스에서 작성했던 코드는 그 문제에 가서 다시 볼 수 있기 때문에 저장해 둔 파일들을 전부 삭제하기로 했습니다.</p>

<p>컴퓨터 바탕화면은 각 칸이 정사각형인 격자판입니다. 이때 컴퓨터 바탕화면의 상태를 나타낸 문자열 배열 <code>wallpaper</code>가 주어집니다. 파일들은 바탕화면의 격자칸에 위치하고 바탕화면의 격자점들은 바탕화면의 가장 왼쪽 위를 (0, 0)으로 시작해 (세로 좌표, 가로 좌표)로 표현합니다. 빈칸은 ".", 파일이 있는 칸은 "#"의 값을 가집니다. 드래그를 하면 파일들을 선택할 수 있고, 선택된 파일들을 삭제할 수 있습니다. 머쓱이는 최소한의 이동거리를 갖는 한 번의 드래그로 모든 파일을 선택해서 한 번에 지우려고 하며 드래그로 파일들을 선택하는 방법은 다음과 같습니다.</p>

<ul>
<li><p>드래그는 바탕화면의 격자점 S(<code>lux</code>, <code>luy</code>)를 마우스 왼쪽 버튼으로 클릭한 상태로 격자점 E(<code>rdx</code>, <code>rdy</code>)로 이동한 뒤 마우스 왼쪽 버튼을 떼는 행동입니다. 이때, "<strong>점 S에서 점 E로 드래그한다</strong>"고 표현하고 점 S와 점 E를 각각 드래그의 시작점, 끝점이라고 표현합니다.</p></li>
<li><p>점 S(<code>lux</code>, <code>luy</code>)에서 점 E(<code>rdx</code>, <code>rdy</code>)로 드래그를 할 때, "<strong>드래그 한 거리</strong>"는 |<code>rdx</code> - <code>lux</code>| + |<code>rdy</code> - <code>luy</code>|로 정의합니다.</p></li>
<li><p>점 S에서 점 E로 드래그를 하면 바탕화면에서 두 격자점을 각각 왼쪽 위, 오른쪽 아래로 하는 직사각형 내부에 있는 모든 파일이 선택됩니다.</p></li>
</ul>

<p>예를 들어 <code>wallpaper</code> = [".#...", "..#..", "...#."]인 바탕화면을 그림으로 나타내면 다음과 같습니다.<br>
<img src="https://grepp-programmers.s3.ap-northeast-2.amazonaws.com/files/production/ec8b3f44-17e9-4044-8117-fad0f1f4402f/eg1.png" title="" alt="eg1.png"><br>
이러한 바탕화면에서 다음 그림과 같이 S(0, 1)에서 E(3, 4)로 드래그하면  세 개의 파일이 모두 선택되므로  드래그 한 거리 (3 - 0) + (4 - 1) = 6을 최솟값으로 모든 파일을 선택 가능합니다.<br>
<img src="https://grepp-programmers.s3.ap-northeast-2.amazonaws.com/files/production/e69e8776-4e56-4abb-b2a7-3dc695620ef4/eg1-2.png" title="" alt="eg1-2.png"><br>
(0, 0)에서 (3, 5)로 드래그해도 모든 파일을 선택할 수 있지만 이때 드래그 한 거리는 (3 - 0) + (5 - 0) = 8이고 이전의 방법보다 거리가 늘어납니다.</p>

<p>머쓱이의 컴퓨터 바탕화면의 상태를 나타내는 문자열 배열 <code>wallpaper</code>가 매개변수로 주어질 때 바탕화면의 파일들을 한 번에 삭제하기 위해 최소한의 이동거리를 갖는 드래그의 시작점과 끝점을 담은 정수 배열을 return하는 <code>solution</code> 함수를 작성해 주세요. 드래그의 시작점이 (<code>lux</code>, <code>luy</code>), 끝점이 (<code>rdx</code>, <code>rdy</code>)라면 정수 배열 [<code>lux</code>, <code>luy</code>, <code>rdx</code>, <code>rdy</code>]를 return하면 됩니다.</p>

<hr>

<h4>제한사항</h4>

<ul>
<li> 1 ≤ <code>wallpaper</code>의 길이 ≤ 50</li>
<li>1 ≤ <code>wallpaper[i]</code>의 길이 ≤ 50

<ul>
<li><code>wallpaper</code>의 모든 원소의 길이는 동일합니다.</li>
</ul></li>
<li><code>wallpaper[i][j]</code>는 바탕화면에서 <code>i + 1</code>행 <code>j + 1</code>열에 해당하는 칸의 상태를 나타냅니다.</li>
<li><code>wallpaper[i][j]</code>는 "#" 또는 "."의 값만 가집니다.</li>
<li>바탕화면에는 적어도 하나의 파일이 있습니다.</li>
<li>드래그 시작점 (<code>lux</code>, <code>luy</code>)와 끝점 (<code>rdx</code>, <code>rdy</code>)는 <code>lux</code> &lt; <code>rdx</code>, <code>luy</code> &lt; <code>rdy</code>를 만족해야 합니다.</li>
</ul>

<hr>

<h4>입출력 예</h4>
<table class="table">
        <thead><tr>
<th>wallpaper</th>
<th>result</th>
</tr>
</thead>
        <tbody><tr>
<td>[".#...", "..#..", "...#."]</td>
<td>[0, 1, 3, 4]</td>
</tr>
<tr>
<td>["..........", ".....#....", "......##..", "...##.....", "....#....."]</td>
<td>[1, 3, 5, 8]</td>
</tr>
<tr>
<td>[".##...##.", "#..#.#..#", "#...#...#", ".#.....#.", "..#...#..", "...#.#...", "....#...."]</td>
<td>[0, 0, 7, 9]</td>
</tr>
<tr>
<td>["..", "#."]</td>
<td>[1, 0, 2, 1]</td>
</tr>
</tbody>
      </table>
<hr>

<h4>입출력 예 설명</h4>

<p>입출력 예 #1</p>

<ul>
<li>문제 설명의 예시와 같은 예제입니다. (0, 1)에서 (3, 4)로 드래그 하면 모든 파일을 선택할 수 있고 드래그 한 거리는 6이었고, 6보다 적은 거리로 모든 파일을 선택하는 방법은 없습니다. 따라서 [0, 1, 3, 4]를 return합니다.</li>
</ul>

<p>입출력 예 #2</p>

<ul>
<li><p>예제 2번의 바탕화면은 다음과 같습니다.</p>

<p><img src="https://grepp-programmers.s3.ap-northeast-2.amazonaws.com/files/production/8bf4e2ba-1700-4231-a6ed-c18455919928/eg2.png" title="" alt="eg2.png"></p>

<p>(1, 3)에서 (5, 8)로 드래그하면 모든 파일을 선택할 수 있고 이보다 적은 이동거리로 모든 파일을 선택하는 방법은 없습니다. 따라서 가장 적은 이동의 드래그로 모든 파일을 선택하는 방법인 [1, 3, 5, 8]을 return합니다.</p></li>
</ul>

<p>입출력 예 #3</p>

<ul>
<li><p>예제 3번의 바탕화면은 다음과 같습니다.</p>

<p><img src="https://grepp-programmers.s3.ap-northeast-2.amazonaws.com/files/production/7cc308f7-b8d7-482e-9e06-18bc1133aea0/eg3.png" title="" alt="eg3.png"></p>

<p>모든 파일을 선택하기 위해선 바탕화면의 가장 왼쪽 위 (0, 0)에서 가장 오른쪽 아래 (7, 9)로 드래그 해야만 합니다. 따라서 [0, 0, 7, 9]를 return합니다.</p></li>
</ul>

<p>입출력 예 #4</p>

<ul>
<li><p>예제 4번의 바탕화면은 다음과 같이 2행 1열에만 아이콘이 있습니다.</p>

<p><img src="https://grepp-programmers.s3.ap-northeast-2.amazonaws.com/files/production/5f726562-04dd-4056-8dd7-e58d1519f6ec/eg4.png" title="" alt="eg4.png"></p>

<p>이를 드래그로 선택하기 위해서는 그 칸의 왼쪽 위 (1, 0)에서 오른쪽 아래 (2, 1)로 드래그 하면 됩니다. (1, 0)에서 (2, 2)로 드래그 해도 아이콘을 선택할 수 있지만 이전보다 이동거리가 늘어납니다. 따라서 [1, 0, 2, 1]을 return합니다.</p></li>
</ul>


> 출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges