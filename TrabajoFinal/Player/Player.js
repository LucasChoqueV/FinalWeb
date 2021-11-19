class Player extends Phaser.GameObjects.Sprite{
    constructor(config){
        super(config.scene, config.x, config.y);
        this.scene = config.scene;
        this.scene.physics.world.enable(this);
        this.scene.add.existing(this);
        this.previousMovement = "run";
        this.spriteName = "player";
        this.actualAnimation = "player_run";
        this.body.setSize(35, 95);
        this.body.setOffset(0, -1);
        this.setScale(1.7);
        this.anims.play(this.actualAnimation);
        this.movement = this.scene.input.keyboard.createCursorKeys();
        this.isJumping = false;
    }

    update(){
        if (!this.isJumping){
            if (this.previousMovement !== "run"){
                this.previousMovement = "run";
                this.anims.play("player_run");
            }
        }
        if(Phaser.Input.Keyboard.JustDown(this.movement.up) && !this.isJumping){
            this.isJumping = true;
            this.body.setVelocityY(-900);
            if (this.previousMovement !== "jump"){
                this.previousMovement = "jump";
                this.anims.play("player_jump");
            }
        }else if (this.body.blocked.down){ // aqui se pregunta si el cuerpo esta tocando el piso
            this.isJumping = false;
        }
        
    }
}

export default Player;