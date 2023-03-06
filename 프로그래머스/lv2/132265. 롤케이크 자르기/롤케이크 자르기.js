function solution(topping) {
    let answer = 0;
    const toppingMap = new Map();
    topping.forEach((val, idx) => {
        if(toppingMap.has(val)) {
            const _val = toppingMap.get(val);
            _val.number++;
            toppingMap.set(val, _val);
        } else {
            toppingMap.set(val, { number: 1 , visited: false });
        }
    });
    let [chulsu, brother] = [0, toppingMap.size];
    topping.forEach((val, idx) => {
        const valInfo = toppingMap.get(val);
        if(!valInfo.visited) {
            chulsu++;
            valInfo.visited = true;
        }
        valInfo.number--;
        if(valInfo.number === 0){
            brother--;
        }
        toppingMap.set(val, valInfo);
        if(chulsu === brother) answer++;
    })
    return answer;
}