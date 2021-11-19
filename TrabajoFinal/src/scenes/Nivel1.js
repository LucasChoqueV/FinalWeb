import Obstacule from "../../obstacules/Obstacule.js";
import Player from "../../Player/Player.js";

class Nivel1 extends Phaser.Scene{
    constructor(){
        super({
            key: "Nivel1"
        });
        this.velocityX = -300;
        this.obstaculesObject = [];
    }

    init(){
        console.log("Nivel 1 empezo");
    }

    create(){
        // create scene
        this.loadScene();

        // create portal
        this.portalNivel1 = this.physics.add.sprite(5500, 200, "portalGravity")
            .setScale(1.4)
            .setVelocityX(this.velocityX);

        // create player
        this.player = new Player({
            scene: this,
            x: 200,
            y: this.scale.height - 150,
            flipY: false,
            gravityY: 4000,
            isGravityInverted: false,
        }, this.input);

        // craete enemies
        this.loadObstacles();

        // create colision
        this.addColliders();
        
    }

    loadScene(){
        // create background
        this.background = this.physics.add.sprite(0, -45, "background");
        this.background.setOrigin(0, 0);
        this.background.setVelocityX(this.velocityX);

        // create floor
        this.walls = this.physics.add.staticGroup();
        this.walls.create(0, this.scale.height, "floor")
            .setOrigin(0, 1)
            .setSize(15000, 100);

        this.walls.refresh();
    }

    addColliders(){
        this.physics.add.collider([this.player, this.portalNivel1, this.background], this.walls);
        this.physics.add.collider(this.obstaculesObject, this.walls);
        this.physics.add.collider(this.player, this.obstaculesObject, () => {
            this.scene.restart();
        })

        this.physics.add.overlap(this.player, this.portalNivel1, () => {
            this.scene.start("Nivel2");
        })
    }

    update(){
        this.player.update();
    }

    loadObstacles(){
        api.fetchObstacles(1)
        .then(responseA => {
            responseA.forEach(obs => {
                this.obstaculesObject.push(new Obstacule({
                    scene: this,
                    x: obs.x_value,
                    y: obs.y_value,
                    spriteName: obs.spriteName,
                    flipY: false,
                    gravityY: 4000,
                    scale: 2.6,
                    size: {
                        x: 15,
                        y: 35
                    },
                    offset: {
                        x: 1,
                        y: 10
                    }
                }, this.input));
            });
        })
    }
}

export default Nivel1;