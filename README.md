# Algorithms contemporary JS

## Quickstart

```shell
npm i @baburikon/algorithms
```

babel.config.js
```javascript
module.exports = {
  ignore: [/node_modules\/(?!@baburikon\/algorithms)/]
};
```

yourFile.js
```javascript
import { sortQuick } from "@baburikon/algorithms";
const arr = [1, 3, 2];
sortQuick(arr);
console.log(arr);
```

sic!
```shell
node_modules/.bin/babel-node --ignore no yourFile.js
```