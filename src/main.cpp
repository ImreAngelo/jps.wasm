#include <stdio.h>
#include <emscripten/bind.h>

int main() {
    printf("Hello world!\n");
    return 1;
}

int add(int a, int b) {
    return a + b;
}

EMSCRIPTEN_BINDINGS(JPS) {
    emscripten::function("add", &add);
}