interface IVector<T> extends ClassHandle {
	push_back(item: T): void;
	resize(size: number, value?: T): void;
	size(): number;
	get(index: number): T;
	set(index: number, value: T): boolean;
}

// interface IVector<T> extends IVectorBase<T> {
// 	forEach(callback: (item: T, index: number, vector: IVector<T>) => void): void;
// }

export class Vector<T> implements IVector<T> {
	private vector: IVector<T>;
	
    constructor(vector: IVector<T>) {
        this.vector = vector;
    }
	
	push_back(item: T): void {
		this.vector.push_back(item);
	}
	
	resize(size: number, value?: T): void {
		this.vector.resize(size, value);
	}
	
	size(): number {
		return this.vector.size();
	}
	
	get(index: number): T {
		return this.vector.get(index);
	}
	
	set(index: number, value: T): boolean {
		return this.vector.set(index, value);
	}
	
	forEach(callback: (item: T, index: number, vector: Vector<T>) => void): void {
		for (let i = 0; i < this.vector.size(); i++) {
            callback(this.vector.get(i), i, this);
        }
    }
}
	