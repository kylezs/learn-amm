# Learn AMM

A project that helps people learn how AMMs work by simulating behaviours with user inputted values.

# Setup

## Wasm

```
cargo install wasm-pack
```

To build the Rust to Wasm so it's usable in React. 
```
wasm-pack build --out-dir ../wasm-build
```

To create a node_modules symlink to the /wasm-build folder (only need to run this once)
```
yarn install
```