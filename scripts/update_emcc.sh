#!/bin/bash

EMSDK_DIR="./vendors/emsdk"

$EMSDK_DIR/emsdk install latest
$EMSDK_DIR/emsdk activate latest

echo "Updated emscripten."