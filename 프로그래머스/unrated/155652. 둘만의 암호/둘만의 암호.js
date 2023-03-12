function solution(s, skip, index) {
    let answer = '';
    const dict = [];
    for(let w = 97; w < 123; w++){
        const word = String.fromCharCode(w);
        if(skip.indexOf(word) > -1) continue;
        dict.push(word);
    }
    console.log(dict);
    answer = s.split("").reduce((acc, val, idx) => {
        acc += dict[(dict.indexOf(val)+index) % dict.length];
        return acc;
    }, '')
    return answer;
}