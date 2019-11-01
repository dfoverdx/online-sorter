import { itemsEqual } from '../types';
import Base from './base';

export default class InsertionSort extends Base {
  async run() {
    if (this.updateProgress) {
      this.updateProgress(this.progressArray);
    }

    const items = this.items;

    for (let i = 1; i < items.length; i++) {
      const item = items[i];

      let j = i - 1;
      for (; j >= 0; j--) {
        const sortedItem = items[j];

        if (item.required) {
          if (!sortedItem.required) {
            this.swap(j + 1, j);
            continue;
          } else {
            break;
          }
        }

        const [promise, prompt] = Base.createPrompt(item, sortedItem);
        this.triggerPromptUser(prompt);
        const result = await promise;

        if (itemsEqual(result, item)) {
          this.swap(j + 1, j);
        } else {
          break;
        }
      }
    }
  }
}