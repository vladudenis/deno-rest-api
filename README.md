# Demo REST API

Implemented with Oak and DenoDB.

# Node.js vs Deno

Differences between Node and Deno:

## Node
    - has access to environment by default
    - has permissions by default, such as the permission to read or write to a file or to access the network
    - needs a TypeScript transpiler to compile TypeScript code

## Deno
    - needs to be given permissions to access environment and perform other tasks
    - supports TypeScript out-of-the-box without the need of a transpiler
    - contains modern JavaScript features (such as ES6 modules)
    - browser API exists in the backend
    - can use 'await' in the global scope
