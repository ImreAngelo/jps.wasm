import { ClassHandle, INodeVector } from './jps.js';

export default class NodeVector implements INodeVector {
    private impl: INodeVector;

    constructor(vector: INodeVector) {
        this.impl = vector;
    }

    push_back(node: Node): void {
        this.impl.push_back(node);
    }

    resize(size: number, element: Node): void {
        this.impl.resize(size, element);
    }

    size(): number {
        return this.impl.size();
    }

    get(index: number): any {
        return this.impl.get(index);
    }

    set(index: number, element: Node): boolean {
        return this.impl.set(index, element);
    }

    isAliasOf(other: ClassHandle): boolean {
        throw new Error('Method not implemented.');
    }
    delete(): void {
        throw new Error('Method not implemented.');
    }
    deleteLater(): this {
        throw new Error('Method not implemented.');
    }
    isDeleted(): boolean {
        throw new Error('Method not implemented.');
    }
    clone(): this {
        throw new Error('Method not implemented.');
    }

    /**
     * 
     * @param callback 
     */
    forEach(callback: (value: number, index: number, vector: NodeVector) => void): void {
        for(let i = 0; i < this.impl.size(); i++) {
            callback(this.impl.get(i), i, this);
        }
    }
}

// // Example usage:
// const vector = new IntVectorImpl();
// vector.push_back(10);
// vector.push_back(20);
// vector.push_back(30);

// vector.forEach((value, index) => {
//     console.log(`Value at index ${index}: ${value}`);
// });