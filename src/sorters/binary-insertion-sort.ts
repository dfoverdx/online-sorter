import { Item, itemsEqual } from '../types';
import Sorter, { TriggerPrompt, UpdateProgress } from './sorter';

export default class BinaryInsertionSort extends Sorter<number> {
  constructor(items: Item[], triggerPrompt: TriggerPrompt, updateProgress?: UpdateProgress<number>) {
    super(items, triggerPrompt, 1, updateProgress);
  }

  private curItem: Item | null = null;
  private curIdx: number = -1;

  async run() {
    const items = this.items;
    for (let i = 1; i < items.length; i++) {
      if (this.updateProgress) {
        this.updateProgress(this.progress);
      }

      this.curIdx = i;
      const item = this.curItem = items.splice(i, 1)[0],
        idx = await this.binarySearch(item, 0, i);

      items.splice(idx, 0, item);
      this.progress = i;
    }
  }

  cancel() {
    if (this.curItem) {
      this.items.splice(this.curIdx, 0, this.curItem);
    }
  }

  async binarySearch(item: Item, min: number, max: number): Promise<number> {
    if (min >= max) {
      return min;
    }

    const idx = Math.floor((max - min) / 2 + min),
      sortedItem = this.items[idx];

    if (item.required) {
      if (!sortedItem.required) {
        return this.binarySearch(item, min, idx);
      } else {
        return idx;
      }
    } else if (sortedItem.required) {
      return this.binarySearch(item, idx + 1, max);
    }

    const [promise, prompt] = Sorter.createPrompt(item, sortedItem);
    this.triggerPrompt(prompt);
    const result = await promise;

    if (itemsEqual(result, item)) {
      return this.binarySearch(item, min, idx);
    } else {
      return this.binarySearch(item, idx + 1, max);
    }
  }
}