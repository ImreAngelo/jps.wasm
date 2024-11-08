export interface IVector<T> extends ClassHandle {
	push_back(item: T): void;
	resize(size: number, value?: T): void;
	size(): number;
	get(index: number): T;
	set(index: number, value: T): boolean;
	forEach(callback: (item: T, index: number, vector: IVector<T>) => void): void;
}

export class Vector<T> implements IVector<T> {
	private storage: IVector<T>;
	
	push_back(item: T): void {
		this.storage.push_back(item);
	}
	
	resize(size: number, value?: T): void {
		this.storage.resize(size, value);
	}
	
	size(): number {
		return this.storage.size();
	}
	
	get(index: number): T {
		return this.storage.get(index);
	}
	
	set(index: number, value: T): boolean {
		return this.storage.set(index, value);
	}
	
	forEach(callback: (item: T, index: number, vector: Vector<T>) => void): void {
		for (let i = 0; i < this.storage.size(); i++) {
            callback(this.storage.get(i), i, this);
        }
    }
}
	