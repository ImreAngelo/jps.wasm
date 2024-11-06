#pragma once

struct Node {
    int x, y;
};

namespace Grid {
    std::vector<Node> nodes;

    int add(int a, int b) {
        nodes.emplace_back(Node{a, b});
        return a + b;
    }
}

EMSCRIPTEN_BINDINGS(jps) {
    emscripten::function("add", &Grid::add);
}