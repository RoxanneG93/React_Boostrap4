import React from 'react';
import './App.css';
import Counter from './components/Counter';
import CounterHooks from './components/CounterHook';
import Toggler from './components/ToggleHook';

function App() {
  return (
    <div className="App">
      <h1 className="display-1">test</h1>
      <div className="container">
        <form action="">
          <div className="form-group">
            <label for="email">Email</label>
            <input type="email" placeholder="enter your email" id="email" className="form-control-md" />
          </div>
          <div className="form-group">
            <label for="password">Password</label>
            <input type="password" placeholder="enter your password" id="password" className="form-control-md" />
          </div>
          <div class="input-group mb-3">
            {/* <div class="input-group-prepend">
              <label class="input-group-text" for="inputGroupSelect01">Options</label>
            </div> */}
            <select class="custom-select" id="inputGroupSelect01">
              <option selected>Choose...</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>

        </form>
      </div>
      <Counter />
      <CounterHooks />
      <Toggler />
    </div>
  );
}

export default App;
