import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.scss';
import Context, { Algorithm, AppContext, StorageKeys } from './context';
import Stages from './stages';
import { Item } from './types';

interface State extends AppContext {}

class App extends React.PureComponent<{}, State> {
  constructor(props: {}) {
    super(props);

    this.state = {
      items: this.getItemsFromStorage(),
      updateItems: this.updateItems.bind(this),
      algorithm: null,
      setAlgorithm: this.setAlgorithm.bind(this),
    };
  }

  private getItemsFromStorage(): Item[] {
    const data = localStorage.getItem(StorageKeys.items);
    if (!data) {
      return [];
    }

    return JSON.parse(data);
  }

  private updateItems(items: Item[]) {
    localStorage.setItem(StorageKeys.items, JSON.stringify(items));
    this.setState({ items });
  }

  private setAlgorithm(algorithm: Algorithm | null) {
    this.setState({ algorithm });
  }

  render() {
    return (
      <div className="App container pt-2 pb-3">
        <Context.Provider value={this.state}>
          <Stages />
        </Context.Provider>
      </div>
    );
  }
}

export default App;
