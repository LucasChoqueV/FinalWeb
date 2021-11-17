class Bootloader extends Phaser.Scene {
    constructor() {
        super('Bootloader'); 
    }

    preload() {
        this.load.setPath('./assets/game/');
        this.load.image([
            "floor",
            "background"
        ])

        this.load.atlas("player", "../player/player.png", "../player/player_atlas.json");
        this.load.animation("playerAnim", "../player/player_anims.json");

        this.load.atlas("obstacule_3", "../obstacule_3/obstacule_3.png", "../obstacule_3/obstacule_3_atlas.json");
        this.load.animation("obstacule3Anim", "../obstacule_3/obstacule_3_anims.json");

        this.load.atlas("obstacule_2", "../obstacule_2/obstacule_2.png", "../obstacule_2/obstacule_2_atlas.json");
        this.load.animation("obstacule2Anim", "../obstacule_2/obstacule_2_anims.json");

        this.load.atlas("obstacule_1", "../obstacule_1/obstacule_1.png", "../obstacule_1/obstacule_1_atlas.json");
        this.load.animation("obstacule1Anim", "../obstacule_1/obstacule_1_anims.json");

        this.load.on('complete', () => {
            this.scene.start("Nivel1");
        });
    }

    create() {
    }
}
export default Bootloader;