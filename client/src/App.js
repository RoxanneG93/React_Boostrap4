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
import Home from './Home';
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
        <Home />

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Harum voluptatibus facilis, quidem obcaecati minus tempora maxime cumque est odio modi impedit voluptates culpa dolore eligendi iste voluptatem laboriosam, distinctio ea!</p>

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
              <img className="img-fluid" src="https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12193133/German-Shepherd-Puppy-Fetch.jpg" />
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
          {/* <FlexboxTest /> */}
        </div>
        <div className="row no-gutters p-0">
          <div class="card-columns card-deck">
            <div class="card">
              <img src="https://thumbs.gfycat.com/LivelyEmbellishedBarbet-poster.jpg" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
              <div class="card-footer">
                <small class="text-muted">Last updated 3 mins ago</small>
              </div>
            </div>
            <div class="card">
              <img src="https://thumbs.gfycat.com/LivelyEmbellishedBarbet-poster.jpg" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
              </div>
              <div class="card-footer">
                <small class="text-muted">Last updated 3 mins ago</small>
              </div>
            </div>
            <div class="card">
              <img src="https://thumbs.gfycat.com/LivelyEmbellishedBarbet-poster.jpg" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
              </div>
              <div class="card-footer">
                <small class="text-muted">Last updated 3 mins ago</small>
              </div>
            </div>
          </div>
        </div>

        <div className="row no-gutters p-0">
          <div class="card-columns">
            <div class="card">
              <img src="https://thumbs.gfycat.com/LivelyEmbellishedBarbet-poster.jpg" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title that wraps to a new line</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
            </div>
            <div class="card p-3">
              <blockquote class="blockquote mb-0 card-body">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                <footer class="blockquote-footer">
                  <small class="text-muted">
                    Someone famous in <cite title="Source Title">Source Title</cite>
                  </small>
                </footer>
              </blockquote>
            </div>
            <div class="card">
              <img src="https://thumbs.gfycat.com/LivelyEmbellishedBarbet-poster.jpg" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
            <div class="card bg-primary text-white text-center p-3">
              <blockquote class="blockquote mb-0">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat.</p>
                <footer class="blockquote-footer text-white">
                  <small>
                    Someone famous in <cite title="Source Title">Source Title</cite>
                  </small>
                </footer>
              </blockquote>
            </div>
            <div class="card text-center">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This card has a regular title and short paragraphy of text below it.</p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
            <div class="card">
              <img src="https://thumbs.gfycat.com/LivelyEmbellishedBarbet-poster.jpg" class="card-img-top" alt="..." />
            </div>
            <div class="card p-3 text-right">
              <blockquote class="blockquote mb-0">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                <footer class="blockquote-footer">
                  <small class="text-muted">
                    Someone famous in <cite title="Source Title">Source Title</cite>
                  </small>
                </footer>
              </blockquote>
            </div>
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is another card with title and supporting text below. This card has some additional content to make it slightly taller overall.</p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
          </div>
        </div>


      </div >
    </React.Fragment>
  );
}

export default App;
