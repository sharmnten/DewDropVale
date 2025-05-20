import kaplay from "kaplay";
import "kaplay/global"; // uncomment if you want to use without the k. prefix
kaplay({
    debugKey: "p",

})



for(let i = 0; i < width()/128; i++) {
    for(let j = 0; j < height()/128; j++) {
        add([
            rect(128, 128),
            pos(i*128, j*128),
            color(0, 255, 0),
            area(),
            state("untilled", ["untilled", "tilled", "watered"]),
            "tile"
        ])
    }
}
onClick("tile", (tile) => {
    if( Math.abs( tile.pos.x - player.pos.x) >100 || Math.abs( tile.pos.y - player.pos.y) > 100) {
      return  
    }
    tile.color = rgb(255, 0, 0)
})
onMousePress("right", (tile) => {
    if( Math.abs( (tile.pos.x - player.pos.x) >100 || Math.abs( tile.pos.y - player.pos.y) > 100)&& tile.state == "tilled") {
      return  
    }
    tile.color = rgb(0, 0, 255)
    
});


const player = add([
    rect(50, 100),
    color(0, 0, 0),
    pos(100, 100),
    area(),
    anchor("center"),
])


//movement
onKeyDown("s", () => {
    player.move(0, 100)
})
onKeyDown("w", () => {
    player.move(0, -100)
})
onKeyDown("d", () => {
    player.move(100, 0)
})
onKeyDown("a", () => {
    player.move(-100, 0)
})