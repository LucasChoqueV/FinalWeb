class Obstacule extends Phaser.GameObjects.Sprite {
    constructor(config){
        super(config.scene, config.x, config.y);
        this.scene = config.scene;
        this.scene.physics.world.enable(this);
        this.scene.add.existing(this);
        this.previousMovement = "run";
        this.spriteName = config.spriteName;
        this.actualAnimation = config.spriteName + "_run";
        this.body.setSize(15, 45);
        this.body.setOffset(1, 0);
        this.setScale(2.6);
        this.anims.play(this.actualAnimation);
    }

    update(){
        this.body.setVelocityX(-80);
    }
}

export default Obstacule;