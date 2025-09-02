// Comment 对象 
Comment = function Comment(){};
framevm.toolsFunc.safeProto(Comment,"Comment");
Object.setPrototypeOf(Comment.prototype, CharacterData.prototype);
