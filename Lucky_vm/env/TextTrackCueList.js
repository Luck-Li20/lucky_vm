// TextTrackCueList 对象 
TextTrackCueList = function TextTrackCueList(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(TextTrackCueList,"TextTrackCueList");
framevm.toolsFunc.defineProperty(TextTrackCueList.prototype, "length", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, TextTrackCueList.prototype, "TextTrackCueList", "length_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(TextTrackCueList.prototype, "getCueById", {configurable:true, enumerable:true, writable:true, value:function (){return framevm.toolsFunc.dispatch(this, TextTrackCueList.prototype, "TextTrackCueList", "getCueById", arguments)}});
