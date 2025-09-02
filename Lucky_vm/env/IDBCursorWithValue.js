// IDBCursorWithValue 对象 
IDBCursorWithValue = function IDBCursorWithValue(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(IDBCursorWithValue,"IDBCursorWithValue");
Object.setPrototypeOf(IDBCursorWithValue.prototype, IDBCursor.prototype);
framevm.toolsFunc.defineProperty(IDBCursorWithValue.prototype, "value", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, IDBCursorWithValue.prototype, "IDBCursorWithValue", "value_get", arguments)}, set:undefined});
