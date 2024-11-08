// Import the factory function (generated bindings).
import MainModuleFactory, { MainModule } from './jps.js'; // Update this path as needed

// Reference to the current instance of the program
let instance: MainModule | null = null;

/**
 * Initializes the JPS WebAssembly module. Must be called before using the library.
 * @returns {Promise<void>}
 */
async function getInstance(): MainModule {
    if(!instance) instance = await MainModuleFactory();
    return instance as MainModule;
}

export async function add(a:number, b:number): Promise<number> {
    console.log("Adding", a, "+", b)
    const module = await getInstance();
    return module.add(a, b);
}

export async function printNodes(): Promise<void> {
    const module = await getInstance();
    return module.printNodes();
}