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

  cancel() {
    // pass
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
    if (high - low > 5) {
      // find middle pivot
      const pivots = this.items.slice(high - 2).filter(i => !i.required);

      if (pivots.length > 1) {
        const [promise, prompt] = Sorter.createPrompt(...pivots as [Item, Item, Item?]);
        this.triggerPrompt(prompt);
        const mid = await promise,
          idx = this.items.indexOf(mid);

        // idx should never be -1, but just in case
        if (idx === -1) {
          console.warn(`Did not find item ${mid.text}`);
        } else {
          this.swap(idx, high);
        }
      }
    }

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