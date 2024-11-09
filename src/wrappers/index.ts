import MainModuleFactory, { MainModule, Node } from './jps.js';
import { Vector } from './vector.js';

// Reference to the current instance of the program
let instance: MainModule | null = null;

/**
 * Retrieves the current instance, and creates a new instance if none exist.
 * @returns {Promise<void>}
 */
async function getInstance(): Promise<MainModule> {
    if(!instance) instance = await MainModuleFactory();
    return instance as MainModule;
}

/**
 * Generate a grid maze.
 * @param width 
 * @param height 
 */
export async function makeMaze(width: number, height: number): Promise<Vector<Node>> {
    const module = await getInstance();
    return new Vector<Node>(module.makeMaze(width, height));
}

/**
 * 
 * @param from 
 * @param to 
 * @param size 
 * @returns 
 */
export async function bfs(from: number, to: number, size: number): Promise<Vector<Node>> {
    const module = await getInstance();
    return new Vector<Node>(module.bfs(from, to, size));
}