/* global Phaser */

// Created by: Zaida Hammel
// Created on: April 2022
// This is the Phaser3 configuration file

const config = {
  type: Phaser.AUTO,
  width: 1920,
  height: 1080,
  backgroundColor: 0x5f6e7a,
};

const game = new Phaser.Game(config);
console.log(game);
