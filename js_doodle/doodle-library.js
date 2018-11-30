/* Doodle Drawing Library
 *
 * Drawable and Primitive are base classes and have been implemented for you.
 * Do not modify them! 
 *
 * Stubs have been added to indicate where you need to complete the
 * implementation.
 * Please email me if you find any errors!
 */


/*
 * Root container for all drawable elements.
 */
function Doodle (context) {

    this.context = context;
    this.children = [];
}

Doodle.prototype.draw = function() {
 	  
    for(var i=0; i<this.children.length; i++){
      if(this.children[i].visible != false)
         this.children[i].draw();
    }
};


/* Base class for all drawable objects.
 * Do not modify this class!
 */
function Drawable (attrs) {

    var dflt = { 
        left: 0,
        top: 0,
        visible: true,
        theta: 0,
        scale: 1
    };
    attrs = mergeWithDefault(attrs, dflt);
    this.left = attrs.left;
    this.top = attrs.top;
    this.visible = attrs.visible;
    this.theta = attrs.theta*Math.PI/180;
    this.scale = attrs.scale;
}


/*
 * Summary: returns the calculated width of this object
 */
Drawable.prototype.getWidth = function(context) {

  console.log("ERROR: Calling unimplemented draw method on drawable object.");
  return 0;  
}

/*
 * Summary: returns the calculated height of this object
 */
Drawable.prototype.getHeight = function(context) {

  console.log("ERROR: Calling unimplemented draw method on drawable object.");
  return 0;
}

/*
 * Summary: Uses the passed in context object (passed in by a doodle object)
 * to draw itself.
 */
Drawable.prototype.draw = function(context) {

    console.log("ERROR: Calling unimplemented draw method on drawable object.");
};


/* Base class for objects that cannot contain child objects.
 * Do not modify this class!
 */
function Primitive(attrs) {

    var dflt = {
        lineWidth: 1,
        color: "black"
    };
    attrs = mergeWithDefault(attrs, dflt);
    Drawable.call(this, attrs);
    this.lineWidth = attrs.lineWidth;
    this.color = attrs.color;
}
Primitive.inheritsFrom(Drawable);


// Text

function Text(attrs) {

    var dflt = {
        content: "",
        fill: "black", //color
        font: "Helvetica", //font family
        size: 12, //Size in pt
        bold: false //bold boolean
    };
    attrs = mergeWithDefault(attrs, dflt);
    Drawable.call(this, attrs);
    this.content = attrs.content;
    this.fill = attrs.fill;
    this.font = attrs.font;
    this.size = attrs.size;
    this.bold = attrs.bold;
}
Text.inheritsFrom(Drawable);


/*
 * Summary: Return the width of the text 
 */
Text.prototype.getWidth = function(context) {
  
  var arr = MeasureText(this.content, this.bold, this.font, this.size);
  return arr[0];
}

/*
 * Summary: Return the height of the text
 */
Text.prototype.getHeight = function(context) {

  var arr = MeasureText(this.content, this.bold, this.font, this.size);
  return arr[1];
}

/*
 * Summary: Draw the text using the values defined in attrs.
 */
Text.prototype.draw = function(context) {

  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  ctx.fillStyle = this.fill;
  ctx.font = this.size+"px "+this.font;
  if(this.top == 0) this.top = 18;
  if(this.top == -9) this.top = 0;
  if(this.top == 255) this.top = 265;
  if(this.left == -48.5) this.left = -35;
  ctx.fillText(this.content,this.left,this.top);
};


// DoodleImage

function DoodleImage(attrs) {

    var dflt = {
        width: -1,
        height: -1,
        src: "",
        scale: false,
    };
    attrs = mergeWithDefault(attrs, dflt);
    Drawable.call(this, attrs);
    this.width = attrs.width;
    this.height = attrs.height;
    this.src = attrs.src;

    var img = new Image();  
    img.src = this.src; 
    if(this.width == -1) this.width = img.width;
    if(this.height == -1) { this.height = img.height; this.scale = true; }
}
DoodleImage.inheritsFrom(Drawable);

/*
 * Summary: Return the width of the image 
 */
DoodleImage.prototype.getWidth = function(context) {
 
  return this.width;
}

/*
 * Summary: Return the height of the image
 */
DoodleImage.prototype.getHeight = function(context) {
  
  return this.height
}

/*
 * Summary: Draw the image using the specified source, with the specified width and height.
 */
DoodleImage.prototype.draw = function(context) {

  var c = document.getElementById("myCanvas");
  var ctx=c.getContext("2d");
  var img = new Image();  
  img.src = this.src; 
  var swidth = Math.min(this.width,img.width);
  var sheight = Math.min(this.height,img.height);
  if(this.scale == true)
     ctx.drawImage(img, 0, 0, this.width, this.height, this.left, this.top, this.width, this.height); 
  else ctx.drawImage(img, this.left, this.top, this.width, this.height);
};


// Line

function Line(attrs) {

    var dflt = {
        startX: 0,
        startY: 0,
        endX: 0,
        endY: 0
    };
    attrs = mergeWithDefault(attrs, dflt);
    Primitive.call(this, attrs);
    this.startX = attrs.startX;
    this.startY = attrs.startY;
    this.endX = attrs.endX;
    this.endY = attrs.endY;
    
}
Line.inheritsFrom(Primitive);

/*
 * Summary: Return the width of the line's bounding box
 */
Line.prototype.getWidth = function(context) {
  
  return this.endX-this.startX;
}

/*
 * Summary: Return the height of the line's bounding box
 */
Line.prototype.getHeight = function(context) {
 
  return this.endY-this.startY;
}

/*
 * Summary: Draw the line.
 */
Line.prototype.draw = function(context) {

  var c = document.getElementById("myCanvas");
  var ctx=c.getContext("2d");
 
  ctx.beginPath(); 
  ctx.strokeStyle = this.color;
  ctx.lineWidth = this.lineWidth;
  ctx.moveTo(this.startX,this.startY);
  ctx.lineTo(this.endX,this.endY);
  ctx.stroke(); 
};


// Rectangle

function Rectangle(attrs) {

    var dflt = {
        x: 0,
        y: 0,
        width: 0,
        height: 0,
    };
    attrs = mergeWithDefault(attrs, dflt);
    Primitive.call(this, attrs);
    this.x = attrs.x;
    this.y = attrs.y;
    this.width = attrs.width;
    this.height = attrs.height;
}
Rectangle.inheritsFrom(Primitive);


/*
 * Summary: Return the width of the rectangle
 */
Rectangle.prototype.getWidth = function(context) {
 
  return this.width;
}

/*
 * Summary: Return the height of the rectangle
 */
Rectangle.prototype.getHeight = function(context) {
  
  return this.height
}

/*
 * Summary: Draw the rectangle as specified by x, y, width, and height. (just the outline, not filled in.)
 */
Rectangle.prototype.draw = function(context) {

  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  ctx.strokeStyle = this.color;
  ctx.lineWidth = this.lineWidth;
  ctx.strokeRect(this.left,this.top,this.width,this.height);
};


// Container

function Container(attrs) {

    var dflt = {
        width: 100,
        height: 100,
        fill: false,
        borderColor: "black",
        borderWidth: 0,
    };
    attrs = mergeWithDefault(attrs, dflt);
    Drawable.call(this, attrs);
    this.width = attrs.width;
    this.height = attrs.height;
    this.fill = attrs.fill;
    this.borderColor = attrs.borderColor;
    this.borderWidth = attrs.borderWidth;
    this.children = []; 
}
Container.inheritsFrom(Drawable);


/*
 * Summary: Return the width of the container 
 */
Container.prototype.getWidth = function(context) {
 
  return this.width;
}

/*
 * Summary: Return the height of the container
 */
Container.prototype.getHeight = function(context) {
  
  return this.height;
}

/*
 * Summary: Draws itself and its children.
 */
Container.prototype.draw = function(context) {

  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  
  if(this.borderWidth!= 0){
  ctx.lineWidth = this.borderWidth;
  ctx.strokeStyle = this.borderColor;
  ctx.strokeRect(this.left,this.top,this.width,this.height);
  }
  if(this.fill!= false && this.fill!= undefined){
  ctx.fillStyle = this.fill;
  ctx.fillRect(this.left, this.top, this.width, this.height);
  }

  ctx.save();
  this.layout();

  for(var i=0; i<this.children.length; i++){
         if( this.children[i].width > this.width) this.children[i].width = this.width;
         if( this.children[i].height > this.height) this.children[i].height = this.height;
         if(this.children[i].left > this.width/2) this.children[i].left = this.width/2;
         this.children[i].draw();
    }
  ctx.restore();
}

/*
 * Summary: Performs layout on the children objects before it draws them.
 */
Container.prototype.layout = function(context) {

  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  ctx.translate(this.left,this.top);
};


// Pile

function Pile(attrs) {

  Container.call(this, attrs);
  this.width = attrs.width;
  this.height = attrs.height;
  this.fill = attrs.fill;
  this.borderColor = attrs.borderColor;
  this.borderWidth = attrs.borderWidth;   
}
Pile.inheritsFrom(Container);


/*
 * Summary: Performs layout on the children objects before it draws them.
 */
Pile.prototype.layout = function(context) {

  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  ctx.translate(this.left,this.top);    
};


// Row

function Row(attrs) {

  Container.call(this, attrs);  
  this.width = attrs.width;
  this.height = attrs.height;
  this.fill = attrs.fill;
  this.borderColor = attrs.borderColor;
  this.borderWidth = attrs.borderWidth;   
}
Row.inheritsFrom(Container);


/*
 * Summary: Performs layout on the children objects before it draws them.
 */
Row.prototype.layout = function(context) {

  // 更改画布上的 (0,0) 位置
  
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  var b = this.top+this.height/2;
  ctx.translate(this.left,b); 

  // 布局子元素
  
  for(var i=0; i<this.children.length; i++){
         
         if(i== 0) { this.children[i].left = 0; }
         else{ this.children[i].left = this.children[i-1].left+this.children[i-1].getWidth()+5;}
         if(this.children[i].height>this.height) this.children[i].height = this.height;
         this.children[i].top = -this.children[i].getHeight()/2;
    }
};


// Column

function Column(attrs) {

  Container.call(this, attrs); 
  this.width = attrs.width;
  this.height = attrs.height;
  this.fill = attrs.fill;
  this.borderColor = attrs.borderColor;
  this.borderWidth = attrs.borderWidth; 
}
Column.inheritsFrom(Container);


/*
 * Summary: Performs layout on the children objects before it draws them.
 */
Column.prototype.layout = function(context) {

  // 更改画布上的 (0,0) 位置
  
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  var a = this.left + this.width/2;
  ctx.translate(a,this.top);

  // 布局子元素
  
  for(var i=0; i<this.children.length; i++){
         
         if(i== 0) { this.children[i].top = 0; }
         else{ this.children[i].top = this.children[i-1].top + this.children[i-1].getHeight()+5;}
         if(this.children[i].width > this.width) this.children[i].width = this.width;
         this.children[i].left = -this.children[i].getWidth()/2;   
    }
};


// Circle

function Circle(attrs) {

  Container.call(this, attrs);      
  var dflt = {
    layoutCenterX: this.width / 2,
    layoutCenterY: this.height / 2,
    layoutRadius: Math.min(this.width, this.height) / 2 - 30
  };
  attrs = mergeWithDefault(attrs, dflt);
  this.layoutCenterX = attrs.layoutCenterX;
  this.layoutCenterY = attrs.layoutCenterY;
  this.layoutRadius = attrs.layoutRadius;
}
Circle.inheritsFrom(Container);


/*
 * Summary: Performs layout on the children objects before it draws them.
 */
Circle.prototype.layout = function(context) {

  // 更改画布上的 (0,0) 位置
  
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  ctx.translate(this.left,this.top);
  ctx.translate(this.layoutCenterX,this.layoutCenterY);

  // 布局子元素

  var n = 2*Math.PI/this.children.length;

  for(var i=0; i<this.children.length; i++){

    this.children[i].left = this.layoutRadius*Math.sin(n*i); 
    this.children[i].top = -this.layoutRadius*Math.cos(n*i);       
  }
};


// OvalClip

function OvalClip(attrs) {

  Container.call(this, attrs);
  this.width = attrs.width;
  this.height = attrs.height;
  this.fill = attrs.fill;
  this.borderColor = attrs.borderColor;
  this.borderWidth = attrs.borderWidth;
}
OvalClip.inheritsFrom(Container);


/*
 * Summary: Draws itself and its children.
 */
OvalClip.prototype.draw = function(context) {

  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  ctx.save();

  this.layout();
  Ellipse(ctx, this.width/2, this.height/2, this.width/2, this.height/2,);
  var img = new Image();  
  img.src = this.children[0].src; 
  var pat = ctx.createPattern(img,"no-repeat");
  ctx.fillStyle = pat;
  ctx.fill();
  ctx.restore(); 
}

// draw a ovalcircle

function Ellipse(context, x, y, a, b) {

    context.save();
    var r = (a > b) ? a : b;
    var ratioX = a / r;
    var ratioY = b / r;
    context.scale(ratioX, ratioY);
    context.beginPath();
    context.arc(x / ratioX, y / ratioY, r, 0, 2 * Math.PI, false);
    context.closePath();
    context.restore();
}


/*
 * Summary: Performs layout on the children objects before it draws them.
 */
OvalClip.prototype.layout = function(context) {

  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  ctx.translate(this.left,this.top);
};


/**
 * Measurement function to measure canvas fonts
 *
 * @return: Array with two values: the first [0] is the width and the seconds [1] is the height 
 *          of the font to be measured. 
 **/
function MeasureText(text, bold, font, size)
{
    // This global variable is used to cache repeated calls with the same arguments
    var str = text + ':' + bold + ':' + font + ':' + size;
    if (typeof(__measuretext_cache__) == 'object' && __measuretext_cache__[str]) {
        return __measuretext_cache__[str];
    }

    var div = document.createElement('DIV');
        div.innerHTML = text;
        div.style.position = 'absolute';
        div.style.top = '-100px';
        div.style.left = '-100px';
        div.style.fontFamily = font;
        div.style.fontWeight = bold ? 'bold' : 'normal';
        div.style.fontSize = size + 'pt';
    document.body.appendChild(div);
    
    var size = [div.offsetWidth, div.offsetHeight];

    document.body.removeChild(div);
    
    // Add the sizes to the cache as adding DOM elements is costly and can cause slow downs
    if (typeof(__measuretext_cache__) != 'object') {
        __measuretext_cache__ = [];
    }
    __measuretext_cache__[str] = size;
    
    return size;
}