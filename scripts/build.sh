#!/bin/bash

EMSDK_DIR="./vendors/emsdk"

source $EMSDK_DIR/emsdk_env.sh
cd build
rm -rf *
emcmake cmake ../src -DCMAKE_BUILD_TYPE=debug
cmake --build .