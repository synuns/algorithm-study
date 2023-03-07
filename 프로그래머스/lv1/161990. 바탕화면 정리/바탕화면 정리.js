function solution(wallpaper) {
    const min = { x: wallpaper.length, y: wallpaper[0].length };
    const max = { x: 0, y: 0 };
    
    for(let x=0; x<wallpaper.length; x++) {
        for(let y=0; y<wallpaper[x].length; y++) {
            if(wallpaper[x][y] === '#') {
                if(min.x > x) min.x = x;
                if(min.y > y) min.y = y;
                if(max.x < x) max.x = x;
                if(max.y < y) max.y = y;
            }
        }
    }
    
    return [min.x, min.y, max.x + 1, max.y + 1];
}