// Load in all of our images

var loadCounter = 0;
var totalImg = 0;
var x = 1;

var enemy1 = new Image();
totalImg++;
enemy1.onload = function() {
  loadCounter++;
}
enemy1.src = 'images/enemy1.png';


var enemy2 = new Image();
totalImg++;
enemy2.onload = function() {
  loadCounter++;
}
enemy2.src = 'images/enemy2.png';


var enemy3 = new Image();
totalImg++;
enemy3.onload = function() {
  loadCounter++;
}
enemy3.src = 'images/enemy3.png';


var cannon = new Image();
totalImg++;
cannon.onload = function() {
  loadCounter++;
}
cannon.src = 'images/player.png';


var cannon_ball = new Image();
totalImg++;
cannon_ball.onload = function() {
  loadCounter++;
}
cannon_ball.src = 'images/bullet.png';


var explosion = new Image();
totalImg++;
explosion.onload = function() {
  loadCounter++;
}
explosion.src = 'images/explosion.png';


var crosshair = new Image();
totalImg++;
crosshair.onload = function() {
  loadCounter++;
}
crosshair.src = 'images/crosshair.png';


// function for randomly generating position
// Returns a random integer between min (included) and max (included)
// Using Math.round() will give you a non-uniform distribution!
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Score multiplier, so you get bonuses for multiple hits
var multiplier = 1;


//Create our actors and their FSMs
var gun = new Actor({
  height: 100,
  width: 80,
  x: 360,
  y: 400,
  img: cannon
}); 


var sight = new Actor({
  height: 50,
  width: 50,
  x: 175,
  y: 125,
  img: crosshair
}); 


var bullet = new Actor({
  height: 30,
  width: 30,
  x: gun.x,
  y: gun.y,
  img: null
}); 


var target1 = new Actor({
  height: 120,
  width: 160,
  x: getRandomIntInclusive(0,600),
  y: getRandomIntInclusive(0,400),
  img: enemy1
}); 


var target2 = new Actor({
  height: 120,
  width: 160,
  x: getRandomIntInclusive(0,600),
  y: getRandomIntInclusive(0,400),
  img: enemy1
}); 


var target3 = new Actor({
  height: 90,
  width: 150,
  x: getRandomIntInclusive(0,600),
  y: getRandomIntInclusive(0,400),
  img: enemy2
}); 


var target4 = new Actor({
  height: 90,
  width: 150,
  x: getRandomIntInclusive(0,600),
  y: getRandomIntInclusive(0,400),
  img: enemy2
}); 


var target5 = new Actor({
  height: 120,
  width: 150,
  x: getRandomIntInclusive(0,600),
  y: getRandomIntInclusive(0,400),
  img: enemy3
}); 


var target6 = new Actor({
  height: 120,
  width: 150,
  x: getRandomIntInclusive(0,600),
  y: getRandomIntInclusive(0,400),
  img: enemy3
}); 


gun.setFSM('start', { 
    'start': { }
});


targetFSM1 = {
    'ready': {
        'message': {
            predicate: function(event, actor){ 
                return event.message == "boom" },
            actions: [{ func: Actions.changeImg,
                        params: { img: explosion }},
                      { func: function(event, params, actor){
                             var score_ele = document.getElementById("score");
                             var score = parseInt(score_ele.innerHTML) + (100 * multiplier);
                             score_ele.innerHTML = "" + score;},
                      },
                      { func: function(event, params, actor){
                          multiplier += 1;
                          setTimeout(function(){ 
                              multiplier -= 1;
                          }, 1000);
                          setTimeout(function(){ 
                              actor.parent.directDispatch({type: 'tick'}, actor);
                          }, 300);
                      }}],
            endState: 'exploded'
        }
    },

    'exploded': {
        'tick': {
            actions: [{ func: Actions.changeImg,
                        params: { img: enemy1 }},
                      { func: function(event, params, actor){
                            var coords =  { targetAbsoluteX: getRandomIntInclusive(0,600),
                                            targetAbsoluteY: getRandomIntInclusive(0,400) };
                            Actions.moveTo(event, coords, actor); 
                        },
                      }],
            endState: 'ready'
        }
    }
};


targetFSM2 = {
    'ready': {
        'message': {
            predicate: function(event, actor){ 
                return event.message == "boom" },
            actions: [{ func: Actions.changeImg,
                        params: { img: explosion }},
                      { func: function(event, params, actor){
                             var score_ele = document.getElementById("score");
                             var score = parseInt(score_ele.innerHTML) + (100 * multiplier);
                             score_ele.innerHTML = "" + score;},
                      },
                      { func: function(event, params, actor){
                          multiplier += 1;
                          setTimeout(function(){ 
                              multiplier -= 1;
                          }, 1000);
                          setTimeout(function(){ 
                              actor.parent.directDispatch({type: 'tick'}, actor);
                          }, 300);
                      }}],
            endState: 'exploded'
        }
    },

    'exploded': {
        'tick': {
            actions: [{ func: Actions.changeImg,
                        params: { img: enemy2 }},
                      { func: function(event, params, actor){
                            var coords =  { targetAbsoluteX: getRandomIntInclusive(0,600),
                                            targetAbsoluteY: getRandomIntInclusive(0,400) };
                            Actions.moveTo(event, coords, actor); 
                        },
                      }],
            endState: 'ready'
        }
    }
};


targetFSM3 = {
    'ready': {
        'message': {
            predicate: function(event, actor){ 
                return event.message == "boom" },
            actions: [{ func: Actions.changeImg,
                        params: { img: explosion }},
                      { func: function(event, params, actor){
                             var score_ele = document.getElementById("score");
                             var score = parseInt(score_ele.innerHTML) + (100 * multiplier);
                             score_ele.innerHTML = "" + score;},
                      },
                      { func: function(event, params, actor){
                          multiplier += 1;
                          setTimeout(function(){ 
                              multiplier -= 1;
                          }, 1000);
                          setTimeout(function(){ 
                              actor.parent.directDispatch({type: 'tick'}, actor);
                          }, 300);
                      }}],
            endState: 'exploded'
        }
    },

    'exploded': {
        'tick': {
            actions: [{ func: Actions.changeImg,
                        params: { img: enemy3 }},
                      { func: function(event, params, actor){
                            var coords =  { targetAbsoluteX: getRandomIntInclusive(0,600),
                                            targetAbsoluteY: getRandomIntInclusive(0,400) };
                            Actions.moveTo(event, coords, actor); 
                        },
                      }],
            endState: 'ready'
        }
    }
};
target1.setFSM('ready', targetFSM1);
target2.setFSM('ready', targetFSM1);
target3.setFSM('ready', targetFSM2);
target4.setFSM('ready', targetFSM2);
target5.setFSM('ready', targetFSM3);
target6.setFSM('ready', targetFSM3);


bullet.setFSM('start', { 
    'start': {
        'buttonpress': {
            predicate: function(event, actor){ 
                return event.target.id == "fire" },
            actions: [{ func: Actions.changeImg,
                        params: { img: cannon_ball }},
                      { func: Actions.runAnim,
                        params: { movingActor: bullet,
                                  targetActor: sight,
                                  duration: 1000,
                                  passOverMessage: "boom",
                                  endMessage: "hit"}}
                        ],
            endState: "start",
        },
        "message": {
            predicate: function(event, actor){ 
                return event.message == "hit" },
            actions: [{ func: Actions.moveTo,
                        params: { targetAbsoluteX: bullet.x,
                                  targetAbsoluteY: bullet.y }}],
            endState: "start",
        },
        "animstart": {
            actions: [{ func: Actions.changeImg,
                        params: { img: cannon_ball }}], 
            endState: "start"
        },
        "animmove": {
            actions: [{ func: Actions.followEventPosition }],
            endState: "start"
        },
        "animend": {
            actions: [{ func: Actions.followEventPosition },
                      { func: Actions.changeImg },
                      { func: Actions.moveTo,
                        params: { targetAbsoluteX: bullet.x,
                                  targetAbsoluteY: bullet.y }}],
            endState: "start"
        }
    }
});


sight.setFSM('unfocused', { 
    'unfocused': {
        "mousedown": {
            actions: [{ func: Actions.getDragFocus }],
            endState: "focused"
        }
    },
    
    'focused': {
        "dragmove": {
            actions: [{ func: Actions.followEventPosition }],
            endState: "focused"
        },
        "dragend": {
            actions: [{ func: Actions.dropDragFocus  },
                      { func: Actions.changeImg,
                        params: { img: crosshair }}],
            endState: "unfocused"
        }
    }
});


//When the DOM has loaded, actually setup our game

window.onload = function() { 
  var game = new Game(document.getElementById("game"));
  game.addActor(target1);
  game.addActor(target2);
  game.addActor(target3);
  game.addActor(target4);
  game.addActor(target5);
  game.addActor(target6);
  game.addActor(bullet);
  game.addActor(gun);
  game.addActor(sight);

  document.getElementById("fire").addEventListener("click", function(event) {
 
    event = _.clone(event);
    event.type = "buttonpress";
    game.dispatchToAll(event);
  });
  
    // 创建各个方向条件判断初始变量
   
    var left = false;
    var right = false;
    var top = false;
    var bottom = false;
 
    //当按下对应方向键时，对应变量为true
    
    document.onkeydown = function(ev){
      var oEvent = ev || event;
      var keyCode = oEvent.keyCode;

      switch(keyCode){
        case 32: document.getElementById("fire").click(); break;
        case 37: left = true; break;
        case 38: top = true; break;
        case 39: right = true; break;
        case 40: bottom = true; break;
      }
    };
 
    //设置一个定时
    
    setInterval(function(){
 
      //当其中一个条件为true时，则执行当前函数（移动对应方向）
      
      if(left){
          if(gun.x>10) {gun.x -= 10; bullet.x = gun.x;}
        }else if(top){
          if(gun.y>10) {gun.y -= 10; bullet.y = gun.y;}
        }else if(right){
           if(gun.x<700) {gun.x += 10; bullet.x = gun.x;}
        }else if(bottom){
           if(gun.y<400) {gun.y += 10; bullet.y = gun.y;}
        }
      },100)

      //执行完后，所有对应变量恢复为false，保持静止不动
      
    document.onkeyup = function(ev){
      var oEvent = ev || event;
      var keyCode = oEvent.keyCode;
 
      switch(keyCode){
        case 37: left = false; break;
        case 38: top = false; break;
        case 39: right = false; break;
        case 40: bottom = false; break;
        }
      }

  //Wait for all of the imaages to load in before we start the game
  var runGame = function() {
    if (loadCounter >= totalImg)
      game.run();
    else
      setTimeout(function() { runGame() }, 200);
  }
  runGame();
};
