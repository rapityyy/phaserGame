import Phaser from 'phaser';

// Phaser game configuration object
const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create
    }
};

// Create a new Phaser game
const game = new Phaser.Game(config);

// Preload assets
function preload() {
    // Load an image asset
    this.load.image('background', 'assets/background.png');
    this.load.image('character', 'assets/character.png');
}

// Create game objects
function create() {
    // Set up the background
    this.add.image(400, 300, 'background');

    // Create the character sprite in the middle of the screen
    const character = this.add.sprite(400, 300, 'character');
    character.setOrigin(0.5); // Set the origin to the center of the sprite
}
