function solution(keymap, targets) {
    const result = [];
    const keys = {};
    for(key of keymap){
        for(let i=0; i<key.length; i++){
            if(!keys[key[i]] || keys[key[i]] > i){
                keys[key[i]] = i+1;
            }
        }
    }
    console.log(keys);
    for(let i=0; i<targets.length; i++){
        result.push(0);
        for(let j=0; j<targets[i].length; j++){
            if(targets[i][j] in keys){
                result[i] += keys[targets[i][j]];
            } else {
                result[i] = -1;
                break;
            }
            
        }
    }
    return result;
}