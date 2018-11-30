/* 
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
Title : Sliding Block Puzzle
Author : Janus
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
*/

var empty;      // 记录canvas的数量（网格数），也是空canvas的编号
var moveSteps;  // 玩家移动滑块的数步
var steps;      // 解决问题的最佳步数

var recordArray=new Array();  // 记录打乱滑块时每一步的移动


/**
 * Creates the canvas and show divided image in canvas
 * 
 * @Param  {img} the image used to be background
 * 
 * @return undefined
 */
function createTiles(img){

   var mbox = document.getElementById("wrap");
   empty = 16;   // 确定网格数
  
   // 创建empty个canvas，并让它们显示图片的一部分（最后一个除外）
   
   for (var i = 1; i <= 16; i++) {

        var cvs = document.createElement("canvas");
        cvs.id = "cvs" + i;
        cvs.style.order = i;
        cvs.addEventListener("click", tileClicked)
        mbox.appendChild(cvs);

        // 让canvas显示图片的一部分（最后一个除外）

        if(i != empty){

            var ctx = cvs.getContext("2d");
            ctx.drawImage(img, img.width * ((i-1)% 4) / 4, img.height * Math.floor((i-1) / 4) / 4, img.width / 4, img.height / 4, 
        	  0, 0, cvs.width, cvs.height);
       }
    }
}


/**
 * when canvas is clicked, if it is moveable, then exchange it with the empty canvas, and judge if it succeeds
 *  
 * @param event
 * 
 * @return undefined
 */
function tileClicked(event){
 
  // 获取当前滑块的左上角坐标
  
  var item = event.target;
  var top1 = item.getBoundingClientRect().top, left1= item.getBoundingClientRect().left;  
  
  // 获取空滑块的左上角坐标
 
  var emt = document.getElementById("cvs" + empty);
  var top2 = emt.getBoundingClientRect().top, left2 = emt.getBoundingClientRect().left;

 // 如果当前滑块可以移动，交换当前滑块与空滑块，并检查是否成功
  
  if( (top1==top2 && Math.abs(left1-left2) == 200) || (left1==left2 && Math.abs(top1-top2) == 150)){

    // 交换滑块

    var order1 = item.style.order;
    item.style.order =  emt.style.order;
    emt.style.order = order1;

    // 记录移动步数

    moveSteps++;

    // 判断拼图是否成功（通过检查每个canvas的编号是否等于order值）

   for (var i = 1; i <= 16; i++) {

        var cvs = document.getElementById("cvs" + i);

        if(cvs.style.order != i) break;

        // 若拼图成功，显示"You Win !" 和 步数，隐藏拼图和restart,newgame,solveme 按钮

        if (i == 16) {

        	var image = document.getElementById("imagebox");
	        var youwin = document.getElementById("youwin");
            var info = document.getElementById("steps");
            var footer = document.getElementById("footer");

            footer.style.display="none";
	        image.style.display = "block";
	        youwin.style.display = "block";

	        image.addEventListener("click",youwinClicked);

            info.innerHTML = "你的步数：" + moveSteps + "</br> 最佳步数：" + Math.min(steps,moveSteps);
        }
    }
  }
}


/**
 * 
 * Shuffle up the tiles in the beginning of the game
 * 
 */
function shuffleTiles(){

    // 确定标准移动步数，并将玩家移动步数清零

    steps = Math.floor(Math.random()*10+1);
    moveSteps = 0;

    var emt = document.getElementById("cvs" + empty);
    var single;  // single记录每步移动的滑块编号


    // 确定每步如何移动
   
    for (var i = 1; i <= steps; i++) {

    
    var top2 = emt.getBoundingClientRect().top, left2 = emt.getBoundingClientRect().left;
    
    // 找到一个可以移动的滑块
    
    do{
        do {single = Math.floor(Math.random()*16+1);}
        while(single == emt.style.order);
     	var item = document.getElementById("cvs" + single);
        var top1 = item.getBoundingClientRect().top, left1= item.getBoundingClientRect().left;
     }
    while(!( (top1==top2 && Math.abs(left1-left2) == 200) || (left1==left2 && Math.abs(top1-top2) == 150) ));
 
    // 将移动的滑块的编号记录到recordArray中

     recordArray.push(single);
    
    // 交换canvas的order，以移动滑块
    
    var order1 = item.style.order;
    item.style.order =  emt.style.order;
    emt.style.order = order1;
    }
}


/**
 * 
 * make the tiles back to their original position
 * 
 */
function backtoRight(){

    // 改变order,使滑块回到正确位置

	for (var i = 1; i <= 16; i++) {

        var item = document.getElementById("cvs" + i);
        item.style.order = i;
    }
}


/**
 * 
 * when the restart button id clicked, back to last puzzle
 * 
 */
function restartClicked(){

    // 首先让拼图回到正确状态
    
	backtoRight();

    var emt = document.getElementById("cvs" + empty);

    // 按照recordArray的记录，移动滑块，重现上一个谜题
    
	for (var i = 0; i <= recordArray.length-1; i++) {

        var item = document.getElementById("cvs" + recordArray[i]);
        var order1 = item.style.order;
        item.style.order =  emt.style.order;
        emt.style.order = order1;
    }
}


/**
 * 
 * when the newgame button id clicked, start a new puzzle
 * 
 */
function newgameClicked(){

    // 首先让拼图回到正确状态

	backtoRight();

    // 清空recordArray数组
    
	recordArray.splice(0,recordArray.length)

    // 打乱拼图
    
	shuffleTiles();
}


/**
 * 
 * when the solveme button id clicked, solve the puzzle step by step
 * 
 */
function solvemeClicked(){

    // 让谜题回到题目最初的状态

    restartClicked();

    var emt = document.getElementById("cvs" + empty);
   
     
    var x=recordArray.length-1;

    // 设置定时器，每隔1s做一次移动，直至拼图成功
    
    var itv = setInterval(function(){
       
        var item = document.getElementById("cvs" +recordArray[x]);
        var order1 = item.style.order;
        item.style.order =  emt.style.order;
        emt.style.order = order1;
        x--;

        // 若谜题已被解决，清除定时器
        if(x==-1) clearInterval(itv);
        },1000);

}


/**
 * 
 * when the interface of youwin is clicked, start a new puzzle
 * 
 */
function youwinClicked(event){

    // 隐藏YouWin，并显示restart,newgame,solveme 按钮
	
	var image = document.getElementById("imagebox");
	image.style.display="none";
    var footer = document.getElementById("footer");
    footer.style.display="block";

    // 清空recordArray数组
	
	recordArray.splice(0,recordArray.length);

    // 打乱拼图，重新创建谜题
    
	shuffleTiles();
}


/**
 * 
 * when start button is clicked, start the game
 * 
 */
function start(){
	
	var image = document.getElementById("imagebox");
	var start = document.getElementById("start");
    var footer = document.getElementById("footer");

    // 设置图片
    
	var img = new Image();  
    img.src = "image/1.jpg"; 

    image.removeChild(start);
    image.style.display="none";

    // 创建拼图并打乱，同时显示restart,newgame,solveme 按钮
    
	createTiles(img);
    shuffleTiles();
	footer.style.display="block";
}
