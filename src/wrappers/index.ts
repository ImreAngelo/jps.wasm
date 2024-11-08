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

export async function add(a: number, b: number): Promise<number> {
    const module = await getInstance();
    return module.add(a, b);
}

/**
 * Generate a grid maze.
 * @param width 
 * @param height 
 */
export async function makeMaze(width: number, height: number): Promise<Vector<Node>> {
    const module = await getInstance();
    const vec = new Vector<Node>(module.makeMaze(width, height));
    
    // vec.forEach((v, i) => {
    //     console.log(i, `:\t(${v.x}, ${v.y}) has flag ${v.flags}`);
    // })

    return vec;
}

export async function printNodes(): Promise<void> {
    const module = await getInstance();
    return module.printNodes();
}


// Types 
export { Vector, Node };