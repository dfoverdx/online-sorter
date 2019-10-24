import React from 'react';
import { Item } from './item';

export enum StorageKeys {
  items = 'items',
  stage = 'stage',
}

export enum Algorithm {
  quicksort = 'qs',
  avlTree = 'avl',
  insertionSort = 'ins'
}

export enum Stage {
  dataEntry,
  algorithmSelect,
  sorting,
  displayResults
}

export interface AppContext {
  items: Item[];
  updateItems(items: Item[]): void;

  stage: Stage;
  setStage(stage: Stage): void;

  algorithm: Algorithm | null;
  setAlgorithm(algoirthm: Algorithm | null): void;
}

const Context = React.createContext<AppContext>({
  items: [],
  updateItems: () => {},
  stage: Stage.dataEntry,
  setStage: () => {},
  algorithm: null,
  setAlgorithm: () => {},
});

export default Context;