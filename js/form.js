class Form {
    constructor(){
      this.button = createButton('Play');
      this.input = createInput("").attribute("PlaceHolder","Name"); 
      this.title = createElement('h1');
      this.greeting = createElement('h1'); 
    }
    
    display(){
background(23,24,133)
        this.title.html("Shrey's Marathon");
        this.title.position(displayWidth/2-50,displayHeight/2-200);

        this.input.position(displayWidth/2-20,displayHeight/2+40);

        this.button.position(displayWidth/2-20,displayHeight/2+70);

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();

            //playerCount = playerCount+1;
            playerCount+=1;
            console.log(playerCount)

            player.name = this.input.value();
            player.index= playerCount;
            player.updateCount();
            player.updatePlayerName();

            this.greeting.html("Hello "+player.name);
            this.greeting.position(displayWidth/2,displayHeight-200);
        })

    }
}