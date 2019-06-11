import React from 'react';
import './App.css';
import Counter from './components/Counter';
import CounterHooks from './components/CounterHook';
import Toggler from './components/ToggleHook';
import SpringAnimation from './components/SpringAnimation';
import SpringToggle from './components/SpringToggle';
import Input from './components/Hooks/Input';
import FormStateHook from './components/Hooks/FormStateHook';
import Component1 from './components/SpringAnimations/Component1';
import Component2 from './components/SpringAnimations/Component2';
import TransitionGroup from './components/SpringAnimations/GridExample/TransitionGrid';
import AnimatedCard from './components/SpringAnimations/AnimatedCard/AnimatedCard.js';
import BSCard from './components/SpringAnimations/AnimatedCard/BSCard.js';
import BSClassCard from './components/SpringAnimations/AnimatedCard/BSClassCard.js';
import MasonryGrid from './components/SpringAnimations/GridExample2/MasonryGrid.js';
import ResponsiveTest from './components/ResponsiveTest';
import FlexboxTest from './components/FlexboxTest';
//import Component3 from './components/SpringAnimations/Component3';

import { Spring } from 'react-spring/renderprops';

const c1Style = {
  background: 'steelblue',
  color: 'white',
  padding: '1.5rem'
}

function App() {

  // state = {
  //   showComponent3: false
  // }
  return (
    <React.Fragment>
      <div className="App">

        {/* <div style={c1Style}>
        <Component1 />
      </div>
      <Component2 />


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
            <select class="custom-select" id="inputGroupSelect01">
              <option selected>Choose...</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>

        </form> */}
        {/* </div> */}
        <div className="container">
          {/* <div className="row mt-5">
          <Counter />
        </div>
        <div className="row mt-5">
          <CounterHooks />
        </div>
        <div className="row mt-5">
          <Toggler />
        </div>
        <div className="row mt-5">
          <SpringAnimation />
        </div>
        <div className="row mt-5">
          <SpringToggle />
        </div>
        <div className="row mt-5">
          <Input />
        </div>
        <div className="row mt-5 mb-5">
          <FormStateHook />
        </div> */}
          <div className="row mt-5 mb-5">
            {/* <TransitionGroup /> */}
            {/* <AnimatedCard /> */}
            {/* <BSCard /> */}

            <BSClassCard />


            {/* <MasonryGrid /> */}
          </div>
        </div>
        <ResponsiveTest />

        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <img className="img-fluid" src="https://thumbs.gfycat.com/LivelyEmbellishedBarbet-poster.jpg" />
            </div>
            <div className="col-lg-6 text-center">
              <div className="row justify-content-center">
                <div className="col-10">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Magni porro praesentium dicta exercitationem incidunt!
                  Architecto voluptas ratione voluptatibus provident quam ea, quisquam neque suscipit aperiam, deleniti, nesciunt ad veniam.
                  Doloremque a sint aliquam, tenetur minima ad dolorem rerum nisi iusto sed ratione, velit hic. Quia consectetur cum minus voluptas culpa?
              </div>
              </div>

            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 testMe "><h1>hello</h1></div>
        </div>
        <div className="row">
          <FlexboxTest />
        </div>


      </div >
    </React.Fragment>
  );
}

export default App;
