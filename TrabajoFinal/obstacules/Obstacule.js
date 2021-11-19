class Obstacule extends Phaser.GameObjects.Sprite {
    constructor(config){
        super(config.scene, config.x, config.y);
        this.scene = config.scene;
        this.scene.physics.world.enable(this);
        this.scene.add.existing(this);
        this.previousMovement = "run";
        this.spriteName = config.spriteName;
        this.actualAnimation = config.spriteName + "_run";
        this.body.setSize(15, 25);
        this.body.setOffset(1, 20);
        this.setScale(2.6);
        this.anims.play(this.actualAnimation);
    }

    update(){
        this.body.setVelocityX(-150);
    }
}

export default Obstacule;