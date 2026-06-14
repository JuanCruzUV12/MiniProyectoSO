const memoryBlocks: number[][] = [];

export function consumeMemory() {

 const block =
  new Array(500000)
  .fill(Math.random());

 memoryBlocks.push(block);
}
