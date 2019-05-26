// ENVIRONMENT
const config = {
    // window
    width: 500,
    height: 300,
    type: Phaser.AUTO,

    // action
    scene: {
        preload: preload,
        create: create,
        update: update
    },

    // window physics
    physics: {
        default: 'arcade',
        arcade: {
            // verticaly physics
            gravity: {
                y: 450
            }
        }
    }
}


// phaser framework
var game = new Phaser.Game(config)

// player image
let dude
// key action
let cursors


function preload() {
    // image source
    this.load.image('dude', 'image/dude.png')
}


function create() {
    // image player
    dude = this.physics.add.image(100, 100, 'dude')
    // allows sprites to collide with world bounds
    dude.body.collideWorldBounds = true;
    // key action 
    cursors = this.input.keyboard.createCursorKeys();
}

function update() {
    dude.setVelocityX(0)

    // up key action
    if (cursors.space.isDown) {
        dude.setVelocity(0, -300)
    }
  
    // right key action
    if (cursors.right.isDown) {
        dude.setVelocity(300, 0)

    }
    // left key action
    if (cursors.left.isDown) {
        dude.setVelocity(-300, 0)
    }

}