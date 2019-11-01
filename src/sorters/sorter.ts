import { Item, Prompt } from '../types';

export type TriggerPrompt = (prompt: Prompt) => void;
export type Progress<T extends number | Item> = T extends number ? T : (T | false)[];
export type UpdateProgress<T extends number | Item> = (progress: Progress<T>) => void;

export default abstract class Sorter<TProgress extends Item | number> {
  constructor(
    public items: Item[],
    protected triggerPrompt: TriggerPrompt,
    protected progress: Progress<TProgress>,
    protected updateProgress?: UpdateProgress<TProgress>)
  {
  }

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