import { Item, Prompt } from '../types';

export default abstract class AlgorithmBase {
  constructor(
    public items: Item[],
    protected triggerPromptUser: (prompt: Prompt) => void,
    protected updateProgress?: (progress: boolean[] | (Item | false)[]) => void)
  {
    this.progressArray = new Array(items.length).fill(false);
  }

  protected progressArray: (Item | false)[] | boolean[];

  abstract async run(): Promise<void>;

  protected swap(i: number, j: number): void {
    [this.items[i], this.items[j]] = [this.items[j], this.items[i]];
  }

  static createPrompt(item1: Item, item2: Item, item3?: Item): [Promise<Item>, Prompt] {
    const prompt = <Partial<Prompt>>{
        item1,
        item2,
        item3
      },
      promise = new Promise<Item>(res => prompt.resolve = res);

    return [promise, <Prompt>prompt];
  }
}