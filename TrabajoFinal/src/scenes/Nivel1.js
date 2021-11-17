import Obstacule from "../../obstacules/Obstacule.js";
import Player from "../../Player/Player.js";
import { obstacules } from "../../obstacules/ObstaculeList.js";
class Nivel1 extends Phaser.Scene{
    constructor(){
        super({
            key: "Nivel1"
        });

        this.obstaculesObject = [];
    }

    init(){
        console.log("Nivel 1 empezo");
    }

    create(){

        this.background = this.add.sprite(0, -50, "background")
            .setOrigin(0, 0);
        this.physics.world.enable(this.background);
        // add walls, creo un grupo de fisicas estaticas
        this.walls = this.physics.add.staticGroup();
        this.walls.create(0, this.scale.height, "floor")
            .setOrigin(0, 1)
            .setSize(15000, 100);
        this.walls.refresh();

        this.player = new Player({
            scene: this,
            x: 200,
            y: this.scale.height - 150
        }, this.input);

        obstacules.forEach(obs => {
            this.obstaculesObject.push(new Obstacule({
                scene: this,
                x: obs.x,
                y: obs.y,
                spriteName: obs.spriteName
            }, this.input));
        });

        this.physics.add.collider(this.player, this.walls);
        this.physics.add.collider(this.obstaculesObject, this.walls);
        this.physics.add.collider(this.background, this.walls);
    }

    update(){
        this.player.update();
        this.obstaculesObject.forEach(obs => {
            obs.update();
        })
        this.background.body.setVelocityX(-80);
    }
}

export default Nivel1;