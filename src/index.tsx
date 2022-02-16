import { createSignal, createEffect } from 'solid-js';
import { render } from 'solid-js/web';
import '../style.css';

function Counter(){
    const [count, setCount] = createSignal(1);
    const doubleCount = () => count() * 2;

    return (
        <>
            <h1>{doubleCount()}</h1>
            <button onClick={() => setCount(30)}>Click me</button>
        </>
    );
}

render(Counter, document.getElementById('app')!);