cmake_minimum_required(VERSION 3.10)
project(jps)

# C++11
set(CMAKE_CXX_STANDARD 20)

add_definitions("-Wall -Wcast-qual -Wno-unused-command-line-argument -fno-exceptions -std=c++11")

# Include typescript files
configure_file(wrappers/index.ts index.ts COPYONLY)
configure_file(wrappers/vector.ts vector.ts COPYONLY)

# Project files
add_executable(jps Grid.cpp)
# main.cpp

# Compiler and linker flags
set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -s EXPORT_NAME=JPS --emit-tsd jps.d.ts \
    -s MODULARIZE=1 -s EXPORT_ES6 -s ENVIRONMENT=web,node \
    -s EXIT_RUNTIME=0 -s EXPORTED_RUNTIME_METHODS=['ccall'] --bind"
)
# --pre-js pre.js

# # TODO: Use workers
# set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -s EXPORT_NAME=JPS --emit-tsd jps.d.ts \
#     -s MODULARIZE=1 -s EXPORT_ES6 -s ENVIRONMENT=web,worker,node -s USE_PTHREADS=1 -s PTHREAD_POOL_SIZE=1 \
#     -s EXIT_RUNTIME=0 -s EXPORTED_RUNTIME_METHODS=['ccall'] --bind"
# )