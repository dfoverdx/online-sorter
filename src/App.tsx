import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.scss';
import Footer from './components/footer';
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
      question: localStorage.getItem(StorageKeys.question) || '',
      setQuestion: this.setQuestion.bind(this),
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

  private setQuestion(question: string) {
    localStorage.setItem(StorageKeys.question, question);
    this.setState({ question });
  }

  render() {
    return (
      <div className="App container">
        <div className="inner-container py-2">
          <Context.Provider value={this.state}>
            <Stages />
          </Context.Provider>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
