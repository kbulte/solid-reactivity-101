import { createSignal, createEffect } from 'solid-js';
import './style.css';

const [count, setCount] = createSignal(1);
const doubleCount = () => count() * 2;
createEffect(() => (h1.textContent = String(doubleCount())));

const appDiv: HTMLElement = document.getElementById('app');
const h1 = document.createElement('h1');
const button = document.createElement('button');
button.textContent = 'Click me';
button.onclick = () => setCount(30);
appDiv.append(h1, button);
