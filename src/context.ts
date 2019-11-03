import React from 'react';
import { Item } from './types';

export enum StorageKeys {
  items = 'items',
  question = 'question',
}

export enum Algorithm {
  quicksort = 'qs',
  binaryInsertion = 'binIns',
  insertionSort = 'ins'
}

export interface AppContext {
  items: Item[];
  updateItems(items: Item[]): void;

  algorithm: Algorithm | null;
  setAlgorithm(algoirthm: Algorithm | null): void;

  question: string;
  setQuestion(question: string): void;
}

const Context = React.createContext<AppContext>({
  items: [],
  updateItems: () => {},
  algorithm: null,
  setAlgorithm: () => {},
  question: '',
  setQuestion: () => {},
});

export default Context;