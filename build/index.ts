// Import the factory function (generated bindings).
import MainModuleFactory, { MainModule } from './jps.js'; // Update this path as needed
import NodeVector from './NodeVector';

// Reference to the current instance of the program
let instance: MainModule | null = null;

/**
 * Initializes the JPS WebAssembly module. Must be called before using the library.
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

export async function makeMaze(width: number, height: number): Promise<void> {
    const module = await getInstance();
    const ptr = module.makeMaze(width, height);

    const nvec = new NodeVector(ptr);
    console.log("Vec: ", nvec);

    nvec.forEach((v, i) => {
        console.log(i, ": ", v);
    })
    
    // console.log(ptr);
    // console.log(ptr.get(0), ptr.get(0).x, ptr.get(0).y, ptr.get(0).flags);
    
    // for(let i = 0; i < ptr.size(); i++) {
    //     console.log(ptr.get(i).x, ptr.get(i).y, ptr.get(i).flags);
    // }
}

export async function printNodes(): Promise<void> {
    const module = await getInstance();
    return module.printNodes();
}