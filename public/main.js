var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', {preload: preload, create: create, update:update});

function preload(){
  game.load.image('horse', '/img/alex-bisleys_horsy_5.png');
  game.load.image('atari', '/img/atari_fujilogo.png');
  game.load.image('cat', '/img/catastrophi.png');
  game.load.atlasJSONHash('bot', '/img/running_bot.png', '/img/running_bot.json');
}
var s1;
function create(){
  var bot = game.add.sprite(500, 400, 'bot');
  bot.animations.add('run');
  bot.animations.play('run', 15, true);

  tween = game.add.tween(bot);
  tween.to({x:0}, 3000);
  tween.start();

  s1 = game.add.sprite(20,30, 'horse');
  s1.anchor.setTo(0);
  var s2 = game.add.sprite(400,30, 'atari');
  s2.scale.setTo(.6);
  var s3 = game.add.sprite(400,300, 'cat');
  s3.scale.setTo(.6);

  game.physics.enable(s1, Phaser.Physics.ARCADE);
  game.physics.enable(s2, Phaser.Physics.ARCADE);
  game.physics.enable(s3, Phaser.Physics.ARCADE);

  s1.body.velocity.x = 150;
  //s2.body.velocity.y = 350;
  s3.body.velocity.x = 150;
  s3.body.velocity.y = 150;

  var text = " I \n AM \n AWESOME!";
  var style = { font: "65px Arial", fill: "#ff0044", align: "center" };
  game.add.text(game.world.centerX-300, 0, text, style);

  var tween = game.add.tween(s2);
  tween.to({x:600}, 1000);
  tween.start();
}

function update(){
  if(game.physics.arcade.distanceToPointer(s1, game.input.activePointer) > 8)
    {
      game.physics.arcade.moveToPointer(s1, 300);
    }else{
      s1.body.velocity.set(0);
    }
}