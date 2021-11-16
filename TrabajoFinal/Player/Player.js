class Player extends Phaser.GameObjects.Sprite{
    constructor(config){
        super(config.scene, config.x, config.y);
        this.scene = config.scene;
        this.scene.physics.world.enable(this);
        this.scene.add.existing(this);
        this.previousMovement = "run";
        this.spriteName = "player";
        this.actualAnimation = "player_run";
        this.body.setSize(35, 80);
        this.body.setOffset(0, -1);
        this.setScale(1.7);
        this.anims.play(this.actualAnimation);
    }

    update(){
        this.body.setVelocityX(0);
        if (this.previousMovement !== "run"){
            this.previousMovement = "run";
            this.anims.play(this.actualAnimation);
        }
    }
}

export default Player;