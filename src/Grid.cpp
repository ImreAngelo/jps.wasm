#include "Grid.h"

std::vector<Node> Grid::makeMaze(int width, int height)
{
    typedef std::vector<Node> grid;

    // std::vector<int> xvals;

    grid n;
    n.reserve(width * height);
    for(auto x = 0; x < width; x++)
        for(auto y = 0; y < height; y++)
            n.emplace_back(Node{x,y,0});

    // Maze generation using Prim's algorithm
    std::vector<std::vector<bool>> visited(width, std::vector<bool>(height, false));
    std::vector<Node> walls;
    
    // Starting point (randomized)
    std::srand(std::time(0));
    int startX = std::rand() % width;
    int startY = std::rand() % height;
    visited[startX][startY] = true;
    n[startX * height + startY].flags = 1; // Set starting point as walkable
    walls.push_back({startX, startY, false});

    // Direction vectors for neighbors (up, down, left, right)
    const int dx[4] = {-1, 1, 0, 0};
    const int dy[4] = {0, 0, -1, 1};

    while (!walls.empty()) {
        // Randomly pick a wall from the list
        int randIndex = std::rand() % walls.size();
        Node current = walls[randIndex];
        walls.erase(walls.begin() + randIndex);

        // Look for unvisited neighbors
        for (int i = 0; i < 4; ++i) {
            int nx = current.x + dx[i];
            int ny = current.y + dy[i];

            // Check if the neighbor is within bounds
            if (nx >= 0 && nx < width && ny >= 0 && ny < height && !visited[nx][ny]) {
                // Mark the current cell and its neighbor as part of the maze
                visited[nx][ny] = true;
                visited[current.x][current.y] = true;
                n[nx * height + ny].flags = 0; // Set neighbor as walkable
                n[current.x * height + current.y].flags = 1; // Set current as walkable
                walls.push_back({nx, ny, 0});
                // xvals.push_back(current.x);
            }
        }
    }

    nodes = n;

    // Debug
    return n;
    // return xvals;
};