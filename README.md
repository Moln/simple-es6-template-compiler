Simple es6 template compiler / 简易的ES6模板解析器
=================================================

Usage / 使用
-------------

```js
var es6Compiler = require('@moln/simple-es6-template-compiler');
es6Compiler(
    "Sum: ${param1} + ${param2} = ${ param1 + param2 }\n" + 
    "Concat: ${ concat('hello', 'world') }", 
    {
        param1: 1, 
        param2: 2,
        concat: function (a, b) {
            return a + ' ' + b
        }
    }
); 
//Sum: 1 + 2 = 3
//Concat: hello world
```