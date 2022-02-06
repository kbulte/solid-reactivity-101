import { createSignal, createEffect } from 'solid-js';
import { render } from 'solid-js/web';
import './style.css';

const [count, setCount] = createSignal(1);
const doubleCount = () => count() * 2;

render(
  () => (
    <div>
      <h1>{doubleCount()}</h1>
      <button onClick={() => setCount(30)}>Click me</button>
    </div>
  ),
  document.getElementById('app')!
);
