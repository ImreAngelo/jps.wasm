cmake_minimum_required(VERSION 3.10)
project(jps)

# C++11
set(CMAKE_CXX_STANDARD 11)

add_definitions("-Wall -Wcast-qual -Wno-unused-command-line-argument -fno-exceptions -std=c++11")

# Include index.ts
configure_file(index.ts index.ts COPYONLY)

# Project files
add_executable(jps main.cpp Grid.h Grid.cpp)

# Compiler and linker flags
# Development build flags (no workers)
set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -s EXPORT_NAME=JPS \
    -s MODULARIZE=1 -s EXPORT_ES6 -s ENVIRONMENT=web,node \
    -s EXIT_RUNTIME=0 -s EXPORTED_RUNTIME_METHODS=['ccall'] --bind"
)

# # Using workers
# set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -s EXPORT_NAME=JPS --emit-tsd jps.d.ts \
#     -s MODULARIZE=1 -s EXPORT_ES6 -s ENVIRONMENT=web,worker,node -s USE_PTHREADS=1 -s PTHREAD_POOL_SIZE=1 \
#     -s EXIT_RUNTIME=0 -s EXPORTED_RUNTIME_METHODS=['ccall'] --bind"
# )

# --pre-js pre.js