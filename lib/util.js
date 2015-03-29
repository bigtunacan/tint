function findButtonRegion(game){
    if(game.input.mousePointer.isDown){
        if(!window.text_bot) {
           text_top =  game.add.text(20, 20, "", { font: "30px Arial", fill: "#ff0044", align: "center" });
           text_bot =  game.add.text(200, 200, "", { font: "30px Arial", fill: "#ff0044", align: "center" });
        }

        //if(start_x === null || start_x === "undefined"){
        if(!start_x){
           start_x = game.input.mousePointer.x;
           start_y = game.input.mousePointer.y;
           
           text_top.x = start_x;
           text_top.y = start_y;
           text_top.text = text_top.x.toString() + ", " + text_top.y.toString();
        }
        
        var width  = start_x - game.input.mousePointer.x;
        var height = start_y - game.input.mousePointer.y;
        text_bot.x = game.input.mousePointer.x;
        text_bot.y = game.input.mousePointer.y;
        
        text_bot.text = (-width).toString() + ", " + (-height).toString();
       
        graphics.beginFill(0x00FF00, 1);
        graphics.drawRect(start_x, start_y, -width, -height);
        graphics.endFill();
        
        
    }else{
        graphics.clear();
        start_x = null;
        start_y = null;
        
    }
}