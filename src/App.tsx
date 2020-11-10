import React, { ReactNode } from 'react';
import './App.scss';

class App extends React.PureComponent {
  public render(): ReactNode {
    return (
      <div className="w-100 d-flex align-items-center justify-content-center">
        <h1>Welcome !! Hello, world</h1>
      </div>
    );
  }
}

export default App;
