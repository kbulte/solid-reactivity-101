import { createSignal, createEffect } from 'solid-js';
import './style.css';

const [count, setCount] = createSignal(1);
const doubleCount = () => count() * 2;

const appDiv: HTMLElement = document.getElementById('app');
createEffect(() => (appDiv.innerHTML = `<h1>${doubleCount()}</h1>`));

setTimeout(() => setCount(5), 1000);
setTimeout(() => setCount(30), 3000);
