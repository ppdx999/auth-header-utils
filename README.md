# auth-header-utils

Utilities for auth header.

# Install

```
npm i auth-header-utils
```

# Usage

```js
import { basic } from "auth-header-utils";

basic.makeToken("username", "password") === "dXNlcm5hbWU6cGFzc3dvcmQ="

basic.makeHeader("dXNlcm5hbWU6cGFzc3dvcmQ=") === "Basic dXNlcm5hbWU6cGFzc3dvcmQ="
basic.makeHeader("username", "password") === "Basic dXNlcm5hbWU6cGFzc3dvcmQ="

basic.isValid("Basic xxxxxx") === true
basic.isValid("Basci xxxxxx") === false

basic.getToken("Basic xxxxxx") === "xxxxxx"

basic.parseToken("dXNlcm5hbWU6cGFzc3dvcmQ=") == ["username", "password"]

basic.parseHeader("Basic dXNlcm5hbWU6cGFzc3dvcmQ=") == ["username", "password"]
```

```js
import {bearer} from "auth-header-utils";

bearer.isValid("Bearer xxxxxx") === true
bearer.isValid("Bearre xxxxxx") === false

bearer.parseHeader("Bearer xxxxxx") === "xxxxxx"
```


All functions are small. You can read the code and understand how they work(= specific algorithm)
