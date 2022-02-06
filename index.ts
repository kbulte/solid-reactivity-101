import { createSignal, createMemo } from 'solid-js';
import './style.css';

const [count, setCount] = createSignal(1); // Create -  In every reactive framework there is the concept of the signal with mutable data
const doubleCount = () => count() * 2; // Derive - The concept of deriving the data
createMemo(() => console.log(doubleCount())); // Effect -  The concept of the side effect

// The above three create a magic pattern for reactivity

setCount(5);
setCount(30);
