import { Item, itemsEqual } from '../types';
import Sorter, { TriggerPrompt, UpdateProgress } from './sorter';

export default class Quicksort extends Sorter<Item> {
  constructor(items: Item[], triggerPrompt: TriggerPrompt, updateProgress?: UpdateProgress<Item>) {
    super(items, triggerPrompt, new Array(items.length).fill(false), updateProgress);
  }

  async run() {
    if (this.updateProgress) {
      this.updateProgress(this.progress);
    }

    return this.qs(0, this.items.length - 1);
  }

  private async qs(low: number, high: number): Promise<void> {
    if (low < high) {
      const pIdx = await this.partition(low, high);
      this.progress[pIdx] = this.items[pIdx];
      if (this.updateProgress) {
        this.updateProgress(this.progress);
      }

      await this.qs(low, pIdx - 1);
      await this.qs(pIdx + 1, high);
    }
  }

  private async partition(low: number, high: number): Promise<number> {
    const pivot = this.items[high];
    if (pivot.required) {
      this.swap(low, high);
      return low;
    }

    let i = low;
    for (let j = low; j < high; j++) {
      const item = this.items[j];

      if (item.required && !pivot.required) {
        this.swap(i, j);
        i++;
        continue;
      }

      const [promise, prompt] = Sorter.createPrompt(pivot, item)
      this.triggerPrompt(prompt);
      const result = await promise;

      if (itemsEqual(result, item)) {
        this.swap(i, j);
        i++;
      }
    }

    this.swap(i, high);
    return i;
  }
}