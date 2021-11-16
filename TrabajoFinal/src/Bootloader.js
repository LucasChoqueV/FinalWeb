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

        this.load.on('complete', () => {
            this.scene.start("Nivel1");
        });
    }

    create() {
    }
}
export default Bootloader;