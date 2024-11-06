cmake_minimum_required(VERSION 3.10)
project(jps)

# C++11
set(CMAKE_CXX_STANDARD 11)

add_definitions("-Wall -Wcast-qual -Wno-unused-command-line-argument -fno-exceptions -std=c++11")

# Project files
add_executable(jps main.cpp Grid.h Grid.cpp)

# Compiler and linker flags
set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -s EXPORT_NAME=JPS \
    -s MODULARIZE=1 -s ENVIRONMENT=web,worker,node -s USE_PTHREADS=1 -s PTHREAD_POOL_SIZE=1 \
    -s EXIT_RUNTIME=0 -s EXPORTED_RUNTIME_METHODS=['ccall'] --bind"
)

# --pre-js pre.js