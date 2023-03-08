function solution(t, p) {
    let answer = 0;
    const sublength = p.length;
    for(let i=0; i< t.length - sublength + 1; i++){
        const substr = t.slice(i, i+sublength);
        if(Number(substr) <= Number(p)) answer++;
    }
    return answer;
}