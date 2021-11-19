import Bootloader from './Bootloader.js';
import Nivel1 from './scenes/Nivel1.js';
import Nivel2 from './scenes/Nivel2.js';

const config = {
    title: "TrabajoFinal",
    version: "0.0.1",
    type: Phaser.AUTO,
    scale: {
        parent: "phaser_container",
        width: 800,
        height: 500,
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    backgroundColor: "#f9ca24",
    pixelArt: true,
    physics: {
        default: "arcade",
        "arcade": {
            gravity: {
                y: 0,
                x: 0
            },
            debug: true
        }
    },
    scene: [
        Bootloader,
        Nivel1,
        Nivel2
    ]
};

new Phaser.Game(config);