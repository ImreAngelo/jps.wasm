#include <emscripten/bind.h>
#include <iostream>
#include <stdio.h>
#include "Grid.h"

int main() {
    printf("Hello world!\n");
    return 1;
}

void printNodes() {
    for(const auto& n : Grid::nodes)
        std::cout << "(" << n.x << ", " << n.y << ")\n";
}

EMSCRIPTEN_BINDINGS(printer) {
    emscripten::function("printNodes", &printNodes);
}