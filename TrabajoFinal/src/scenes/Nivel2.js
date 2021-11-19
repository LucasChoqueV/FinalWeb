import Player from "../../Player/Player.js";
import Obstacule from "../../obstacules/Obstacule.js";

class Nivel2 extends Phaser.Scene{
    constructor(){
        super({
            key: "Nivel2"
        });
        this.velocityX = -300;
        this.obstaculesObject = [];
    }

    init(){
        console.log("Nivel 2 start");
    }

    create(){
        // create scene
        this.loadScene();

        // create portal

        // create player
        this.player = new Player({
            scene: this,
            x: 200,
            y: this.scale.height - 150,
            flipY: true,
            gravityY: -4000,
            isGravityInverted: true,
        }, this.input);

        // create enemies
        this.loadObstacles();

        //create colliders
        this.addColliders();
    }

    loadScene(){
        this.background = this.physics.add.sprite(0, -20, "background2")
            .setOrigin(0, 0)
            .setVelocityX(this.velocityX);

        this.walls = this.physics.add.staticGroup();
        this.walls.create(0, this.scale.height, "invisible-floor")
        .setOrigin(0, 0)
        .setSize(15000, 100);

        this.walls.create(0, 0, "floor2")
            .setOrigin(0, 0)
            .setSize(15000, 60);
        this.walls.refresh();
    }

    addColliders(){
        this.physics.add.collider([this.player, this.background], this.walls);
        this.physics.add.collider(this.obstaculesObject, this.walls);
        this.physics.add.collider(this.player, this.obstaculesObject, () => {
            this.scene.restart();
        })
    }

    update(){
        this.player.update();
    }

    loadObstacles(){
        api.fetchObstacles(2)
        .then(responseA => {
            responseA.forEach(obs => {
                let gravityY = -4000;
                let flipX = false;
                let flipY = true;
                if (obs.spriteName === 'obstacule_5'){
                    gravityY = 0;
                    flipX = true;
                    flipY = false;
                }
                this.obstaculesObject.push(new Obstacule({
                    scene: this,
                    x: obs.x_value,
                    y: obs.y_value,
                    spriteName: obs.spriteName,
                    flipY: flipY,
                    flipX: flipX,
                    gravityY: gravityY,
                    scale: 3.4,
                    size: {
                        x: 10,
                        y: 15
                    },
                    offset: {
                        x: 5,
                        y: 0
                    }

                }, this.input));
            });
        })
    }
}

export default Nivel2;