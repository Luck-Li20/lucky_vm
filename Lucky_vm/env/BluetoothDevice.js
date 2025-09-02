// BluetoothDevice 对象 
BluetoothDevice = function BluetoothDevice(){return framevm.toolsFunc.throwError("TypeError", "Illegal constructor");};
framevm.toolsFunc.safeProto(BluetoothDevice,"BluetoothDevice");
Object.setPrototypeOf(BluetoothDevice.prototype, EventTarget.prototype);
framevm.toolsFunc.defineProperty(BluetoothDevice.prototype, "id", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, BluetoothDevice.prototype, "BluetoothDevice", "id_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(BluetoothDevice.prototype, "name", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, BluetoothDevice.prototype, "BluetoothDevice", "name_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(BluetoothDevice.prototype, "gatt", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, BluetoothDevice.prototype, "BluetoothDevice", "gatt_get", arguments)}, set:undefined});
framevm.toolsFunc.defineProperty(BluetoothDevice.prototype, "ongattserverdisconnected", {configurable:true, enumerable:true, get:function (){return framevm.toolsFunc.dispatch(this, BluetoothDevice.prototype, "BluetoothDevice", "ongattserverdisconnected_get", arguments)}, set:function (){return framevm.toolsFunc.dispatch(this, BluetoothDevice.prototype, "BluetoothDevice", "ongattserverdisconnected_set", arguments)}});
