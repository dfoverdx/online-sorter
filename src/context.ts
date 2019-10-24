import React from 'react';
import { Item } from './item';

export enum StorageKeys {
  items = 'items',
}

export enum Algorithm {
  quicksort = 'qs',
  avlTree = 'avl',
  insertionSort = 'ins'
}

export interface AppContext {
  items: Item[];
  updateItems(items: Item[]): void;

  algorithm: Algorithm | null;
  setAlgorithm(algoirthm: Algorithm | null): void;
}

const Context = React.createContext<AppContext>({
  items: [],
  updateItems: () => {},
  algorithm: null,
  setAlgorithm: () => {},
});

export default Context;