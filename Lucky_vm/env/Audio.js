// Audio 对象 
Audio = function Audio(){};
framevm.toolsFunc.safeProto(Audio,"Audio");
Object.setPrototypeOf(Audio.prototype, HTMLMediaElement.prototype);
