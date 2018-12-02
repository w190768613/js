# js_stateMachine js有限状态机
无后台，点击 index.html 运行

## 通过有限状态机FSM，实现一个游戏引擎，并创建一个简单的游戏
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


