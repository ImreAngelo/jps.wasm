#pragma once

#include <emscripten/bind.h>
#include <vector>
#include <algorithm>
#include <random>
#include <ctime>
#include <iostream>


struct Node {
    int x, y;
    char flags;
};

namespace Grid {
    std::vector<Node> nodes;

    int add(int a, int b) {
        nodes.emplace_back(Node{a, b, 0});
        return a + b;
    }
    
    void printNodes() {
        for(const auto& n : Grid::nodes)
            std::cout << "(" << n.x << ", " << n.y << ") -> " << (n.flags == 0 ? "Unwalkable" : "Walkable") << "\n";
    }

    std::vector<Node> makeMaze(int width, int height);

    std::vector<Node> bfs(int from, int to, int size = 10);
};

EMSCRIPTEN_BINDINGS(jps) {
    emscripten::function("add", &Grid::add);
    emscripten::function("makeMaze", &Grid::makeMaze);
    emscripten::function("printNodes", &Grid::printNodes);
    emscripten::register_vector<int>("IntVector");
    
    emscripten::class_<Node>("Node")
        .property("x", &Node::x)
        .property("y", &Node::y)
        .property("flags", &Node::flags)
        ;

    emscripten::register_vector<Node>("INodeVector");
    
    emscripten::function("bfs", &Grid::bfs);
};