import Context from './context';

export {};

declare global {
  type CT = React.ContextType<typeof Context>;
}

export interface Item {
  text: string;
  weight?: number;
  required?: boolean;
}

export interface Prompt {
  resolve: (item: Item) => void,
  item1: Item;
  item2: Item;
  item3?: Item;
}

export function itemsEqual(left: Item | null | undefined, right: Item | null | undefined) {
  if ((left === null || right === null || left === undefined || right === undefined)) {
    return left === right;
  }

  return left.text === right.text && left.required === right.required && left.weight === right.weight;
}