// TypeScript bindings for emscripten-generated code.  Automatically generated at compile time.
declare namespace RuntimeExports {
    /**
     * @param {string|null=} returnType
     * @param {Array=} argTypes
     * @param {Arguments|Array=} args
     * @param {Object=} opts
     */
    function ccall(ident: any, returnType?: (string | null) | undefined, argTypes?: any[] | undefined, args?: (Arguments | any[]) | undefined, opts?: any | undefined): any;
    let HEAPF32: any;
    let HEAPF64: any;
    let HEAP_DATA_VIEW: any;
    let HEAP8: any;
    let HEAPU8: any;
    let HEAP16: any;
    let HEAPU16: any;
    let HEAP32: any;
    let HEAPU32: any;
    let HEAP64: any;
    let HEAPU64: any;
}
interface WasmModule {
  _main(_0: number, _1: number): number;
}

export interface ClassHandle {
  isAliasOf(other: ClassHandle): boolean;
  delete(): void;
  deleteLater(): this;
  isDeleted(): boolean;
  clone(): this;
}
export interface IntVector extends ClassHandle {
  push_back(_0: number): void;
  resize(_0: number, _1: number): void;
  size(): number;
  get(_0: number): any;
  set(_0: number, _1: number): boolean;
}

export interface Node extends ClassHandle {
  x: number;
  y: number;
  flags: number;
}

export interface INodeVector extends ClassHandle {
  push_back(_0: Node): void;
  resize(_0: number, _1: Node): void;
  size(): number;
  get(_0: number): any;
  set(_0: number, _1: Node): boolean;
}

interface EmbindModule {
  add(_0: number, _1: number): number;
  printNodes(): void;
  IntVector: {
    new(): IntVector;
  };
  Node: {};
  INodeVector: {
    new(): INodeVector;
  };
  makeMaze(_0: number, _1: number): INodeVector;
}

export type MainModule = WasmModule & typeof RuntimeExports & EmbindModule;
export default function MainModuleFactory (options?: unknown): Promise<MainModule>;
