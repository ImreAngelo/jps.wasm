#include "Grid.h"
#include <queue>
#include <unordered_set>

std::vector<Node> Grid::makeMaze(int width, int height)
{
    typedef std::vector<Node> grid;

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
            }
        }
    }

    nodes = n;
    return n;
}

std::vector<Node> Grid::bfs(int from, int to, int size)
{
    using namespace std;

    Node start = Grid::nodes[from];
    Node end = Grid::nodes[to];

    unordered_map<Node*, Node*> closed{{ &start, &start }};
    queue<int> q{{ from }};
    
    // Direction vectors for neighbors (8-directional)
    const int dx[8] = {-1, 0, 1,-1, 1,-1, 0, 1 };
    const int dy[8] = {-1,-1,-1, 0, 0, 1, 1, 1 };

    while(!q.empty())
    {
        int index = q.front();
        Node* node = &Grid::nodes[index];
        q.pop();

        // Path found -> Rebuild from parents
        if(index == to)
        {   
            vector<Node> path;
            while(node->x != start.x || node->y != start.y)
            {
                path.push_back(*node);
                node = closed[node];
            }

            path.push_back(start);
            reverse(path.begin(), path.end());
            return path;
        }

        // Add neighbours
        for(auto i = 0; i < 8; i++) {
            auto x = node->x + dx[i];
            auto y = node->y + dy[i];

            // Out-of-bounds
            if(x < 0 || x >= size || y < 0 || y >= size)
                continue;

            Node* n = &Grid::nodes[x*size + y];

            // Not in closed list or unwalkable
            if(!n->flags || closed.contains(n))
                continue;

            closed.emplace(n, node);
            q.push(x*size + y);
        }
    }

    return {};
};