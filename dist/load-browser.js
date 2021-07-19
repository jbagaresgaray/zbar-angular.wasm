"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadWasmInstance = void 0;
/**
 * Webpack File-loader will break when the extension is .wasm.
 * Changing the extension is a workaround. And because of this
 * |instantiateStreaming| is always failed due to wrong MIME type.
 * see https://github.com/webpack/webpack/issues/6725
 */
// import wasmBinaryFile from './zbar.wasm';
// const zbar_wasm_bin_1 = __importDefault(require("./zbar.wasm.bin"));
exports.loadWasmInstance = async (importObj) => {
    // try {
    //   const output = await WebAssembly.instantiateStreaming(
    //     fetch(wasmBinaryFile),
    //     importObj
    //   );
    //   return output.instance;
    // } catch (err) {
    //   console.error('Wasm streaming compile failed: ' + err);
    //   console.error('Falling back to ArrayBuffer instantiation');
    // }
    // const res = await fetch(zbar_wasm_bin_1.default);
    const res = await fetch('https://zbar-wasm.github.io/demo/static/media/zbar.wasm.eb11d6b8.bin');
    if (!res['ok']) {
        console.error('Failed to load wasm binary file at ' + zbar_wasm_bin_1.default);
        return null;
    }
    const binary = await res.arrayBuffer();
    const output = await WebAssembly.instantiate(binary, importObj);
    return output.instance;
};
//# sourceMappingURL=load-browser.js.map