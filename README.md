# js
codes about js

# 1. js_doodle 涂鸦

无后台，直接点击 index.html 运行。

### 模仿Google Doodle, 编写一个绘图库，并创建自己的涂鸦
doodle-library.js：编写的js绘图库  
utils.js：实用功能集合  
index.html：一个涂鸦实例


# 2. js_slidingBlock 滑块拼图

无后台，直接点击 index.html 运行

### 思路
1）将图片分为4x4个滑块，删除右下角的一块  
2）产生一个随机数n，随机移动滑块n次产生谜题，并记录移动路径  
3）记录步数，完成拼图后与n比较，给出分数  
4）通过记录的移动路径，反向移动滑块，提供解题演示  
5）重置当前谜题，或开始新游戏


# 3. js_stateMachine js有限状态机
无后台，点击 index.html 运行

### 通过有限状态机FSM，实现一个游戏引擎，并创建一个简单的游戏
game.js - 游戏引擎
actor.js - 包含actor的信息及其FSM
actions.js - 包含用于FSM的预定义操作

### 游戏引擎
●游戏由Game对象定义，该对象使用Canvas的状态机对游戏建模  
●游戏由多个actor组成，每个actor都有自己的状态机  
●对象处理输入和事件调度，当canvas接收输入时，它需要将事件传递给指定的actor

### actor对象
●每个actor都包含图像和位置信息，并且可以绘制自身  
●每个actor都定义了有限状态机，当事件被传递给actor时，它将根据状态机决定是否采取行动
