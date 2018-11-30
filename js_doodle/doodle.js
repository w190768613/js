window.onload = function () {

  var canvas = document.getElementById("myCanvas");
  var content = canvas.getContext("2d");
  var doodle = new Doodle(content);

  
  // 背景
  
  var oval = new OvalClip({ 

    width: 1024,
    height: 300,
    left: 0,
    top: 0,
    borderWidth: 4,
  });
 
  var img = new DoodleImage({
          src: "images/fish.png",
          left: 0,
          top: 20,
      });

  oval.children.push(img);
  doodle.children.push(oval);


  // 字母 L
  
  var img1 = new DoodleImage({
          src: "images/b1.png",
          left: 50,
          top: 100,
          width: 30,
          height: 30
      });

  var img2 = new DoodleImage({
          src: "images/b1.png",
          left: 50,
          top: 130,
          width: 30,
          height: 30
      });

  var img3 = new DoodleImage({
          src: "images/b1.png",
          left: 50,
          top: 160,
          width: 30,
          height: 30
      });

  var img4 = new DoodleImage({
          src: "images/b1.png",
          left: 50,
          top: 190,
          width: 30,
          height: 30
      });

  var img5 = new DoodleImage({
          src: "images/b1.png",
          left: 80,
          top: 190,
          width: 30,
          height: 30
      });

  var img6 = new DoodleImage({
          src: "images/b1.png",
          left: 110,
          top: 190,
          width: 30,
          height: 30
      });

 doodle.children.push(img1);
 doodle.children.push(img2);
 doodle.children.push(img3);
 doodle.children.push(img4);
 doodle.children.push(img5);
 doodle.children.push(img6);


 // 字母 O
 
 var img2 = new DoodleImage({
          src: "images/b2.png",
          left: 140,
          top: 120,
          width:100,
          height:100
      });

doodle.children.push(img2);


// 字母 V

var img1 = new DoodleImage({
          src: "images/b1.png",
          left: 230,
          top: 100,
          width: 30,
          height: 30
      });

  var img2 = new DoodleImage({
          src: "images/b1.png",
          left: 250,
          top: 145,
          width: 30,
          height: 30
      });

  var img3 = new DoodleImage({
          src: "images/b1.png",
          left: 270,
          top: 190,
          width: 30,
          height: 30
      });

  var img4 = new DoodleImage({
          src: "images/b1.png",
          left: 290,
          top: 145,
          width: 30,
          height: 30
      });

  var img5 = new DoodleImage({
          src: "images/b1.png",
          left: 310,
          top: 100,
          width: 30,
          height: 30
      });

 doodle.children.push(img1);
 doodle.children.push(img2);
 doodle.children.push(img3);
 doodle.children.push(img4);
 doodle.children.push(img5);


// 字母 E

var img1 = new DoodleImage({
          src: "images/b1.png",
          left: 350,
          top: 100,
          width: 30,
          height: 30
      });

  var img2 = new DoodleImage({
          src: "images/b1.png",
          left: 390,
          top: 100,
          width: 30,
          height: 30
      });

  var img3 = new DoodleImage({
          src: "images/b1.png",
          left: 430,
          top: 100,
          width: 30,
          height: 30
      });

  var img4 = new DoodleImage({
          src: "images/b1.png",
          left: 350,
          top: 145,
          width: 30,
          height: 30
      });

  var img5 = new DoodleImage({
          src: "images/b1.png",
          left: 390,
          top: 145,
          width: 30,
          height: 30
      });

  var img6 = new DoodleImage({
          src: "images/b1.png",
          left: 430,
          top: 145,
          width: 30,
          height: 30
      });

  var img7 = new DoodleImage({
          src: "images/b1.png",
          left: 350,
          top: 190,
          width: 30,
          height: 30
      });

  var img8 = new DoodleImage({
          src: "images/b1.png",
          left: 390,
          top: 190,
          width: 30,
          height: 30
      });

  var img9 = new DoodleImage({
          src: "images/b1.png",
          left: 430,
          top: 190,
          width: 30,
          height: 30
      });

 doodle.children.push(img1);
 doodle.children.push(img2);
 doodle.children.push(img3);
 doodle.children.push(img4);
 doodle.children.push(img5);
 doodle.children.push(img6);
 doodle.children.push(img7);
 doodle.children.push(img8);
 doodle.children.push(img9);


// 符号 &

 var text = new Text({ left: 460, top: 190, size:80, fill:"#3366FF", content: "&" });

doodle.children.push(text);


// 字母 P

var img2 = new DoodleImage({
          src: "images/p.png",
          left: 490,
          top: 90,
          width: 120,
          height: 130
      });

doodle.children.push(img2);


// 字母 E

var img1 = new DoodleImage({
          src: "images/b1.png",
          left: 610,
          top: 100,
          width: 20,
          height: 20
      });

  var img2 = new DoodleImage({
          src: "images/b1.png",
          left: 610,
          top: 125,
          width: 20,
          height: 20
      });

  var img3 = new DoodleImage({
          src: "images/b1.png",
          left: 610,
          top: 150,
          width: 20,
          height: 20
      });

  var img4 = new DoodleImage({
          src: "images/b1.png",
          left: 610,
          top: 175,
          width: 20,
          height: 20
      });

  var img5 = new DoodleImage({
          src: "images/b1.png",
          left: 610,
          top: 200,
          width: 20,
          height: 20
      });

  var img6 = new DoodleImage({
          src: "images/b1.png",
          left: 640,
          top: 100,
          width: 20,
          height: 20
      });

  var img7 = new DoodleImage({
          src: "images/b1.png",
          left: 670,
          top: 100,
          width: 20,
          height: 20
      });

  var img8 = new DoodleImage({
          src: "images/b1.png",
          left: 640,
          top: 150,
          width: 20,
          height: 20
      });

  var img9 = new DoodleImage({
          src: "images/b1.png",
          left: 670,
          top: 150,
          width: 20,
          height: 20
      });

var img10 = new DoodleImage({
          src: "images/b1.png",
          left: 640,
          top: 200,
          width: 20,
          height: 20
      });

  var img11 = new DoodleImage({
          src: "images/b1.png",
          left: 670,
          top: 200,
          width: 20,
          height: 20
      });

 doodle.children.push(img1);
 doodle.children.push(img2);
 doodle.children.push(img3);
 doodle.children.push(img4);
 doodle.children.push(img5);
 doodle.children.push(img6);
 doodle.children.push(img7);
 doodle.children.push(img8);
 doodle.children.push(img9);
 doodle.children.push(img10);
 //doodle.children.push(img11);


// 字母 A

var img1 = new DoodleImage({
          src: "images/b1.png",
          left: 680,
          top: 190,
          width: 30,
          height: 30
      });

  var img2 = new DoodleImage({
          src: "images/b1.png",
          left: 700,
          top: 145,
          width: 30,
          height: 30
      });

  var img3 = new DoodleImage({
          src: "images/b1.png",
          left: 720,
          top: 100,
          width: 30,
          height: 30
      });

  var img4 = new DoodleImage({
          src: "images/b1.png",
          left: 740,
          top: 145,
          width: 30,
          height: 30
      });

  var img5 = new DoodleImage({
          src: "images/b1.png",
          left: 760,
          top: 190,
          width: 30,
          height: 30
      });

 doodle.children.push(img1);
 doodle.children.push(img2);
 doodle.children.push(img3);
 doodle.children.push(img4);
 doodle.children.push(img5);


// 字母 C

var img2 = new DoodleImage({
          src: "images/c.png",
          left: 780,
          top: 90,
          width: 120,
          height: 130
      });

doodle.children.push(img2);


// 字母 E

var img1 = new DoodleImage({
          src: "images/b1.png",
          left: 900,
          top: 100,
          width: 20,
          height: 20
      });

  var img2 = new DoodleImage({
          src: "images/b1.png",
          left: 900,
          top: 125,
          width: 20,
          height: 20
      });

  var img3 = new DoodleImage({
          src: "images/b1.png",
          left: 900,
          top: 150,
          width: 20,
          height: 20
      });

  var img4 = new DoodleImage({
          src: "images/b1.png",
          left: 900,
          top: 175,
          width: 20,
          height: 20
      });

  var img5 = new DoodleImage({
          src: "images/b1.png",
          left: 900,
          top: 200,
          width: 20,
          height: 20
      });

  var img6 = new DoodleImage({
          src: "images/b1.png",
          left: 930,
          top: 100,
          width: 20,
          height: 20
      });

  var img7 = new DoodleImage({
          src: "images/b1.png",
          left: 930,
          top: 150,
          width: 20,
          height: 20
      });

  var img8 = new DoodleImage({
          src: "images/b1.png",
          left: 930,
          top: 200,
          width: 20,
          height: 20
      });

  var img9 = new DoodleImage({
          src: "images/b1.png",
          left: 960,
          top: 100,
          width: 20,
          height: 20
      });

var img10 = new DoodleImage({
          src: "images/b1.png",
          left: 960,
          top: 150,
          width: 20,
          height: 20
      });

  var img11 = new DoodleImage({
          src: "images/b1.png",
          left: 960,
          top: 200,
          width: 20,
          height: 20
      });

 doodle.children.push(img1);
 doodle.children.push(img2);
 doodle.children.push(img3);
 doodle.children.push(img4);
 doodle.children.push(img5);
 doodle.children.push(img6);
 doodle.children.push(img7);
 doodle.children.push(img8);
 doodle.children.push(img9);
 doodle.children.push(img10);
 doodle.children.push(img11);
 
  doodle.draw();
 };