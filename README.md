Created with StackBlitz ⚡️
# Key concepts and things to know about Solid

- Solid leans a lot of concept of knockoutjs but is more refined. Knockout was one of the early reactive libraries.

- Other reactive frameworks wrap an observer around your component to create a reactive system. This has a huge impact, this means more components more observers. This does not scale, makes it just heavier. Solid doesn't use ant observers only functions.

- Solid is a reactive library that uses the concept of signals (aka atoms)

- A signal is a variable but it's called like a function.
 
 - The signal functions are the cornerstone primitives in solid like explained [here](https://dev.to/ryansolid/building-a-reactive-library-from-scratch-1i0p)

- You don't need statemanagement. The reactive atoms are enough for statemanagement. Just by getting out of the function you tell it to be put on the global scope and share the state between multiple components. If you put it in the function state is not shared because of the closure.

- The reactivity model works in 3 stages that works in all reactive frameworks:

    * Signal - values that change over time (mutable data)
    * Derive - run all pure computations (that don't create side effects visible by the outside world)
    * Effects - anything that affects something outside of the scope of the current function e.g. DOM mutations

- Solid has no component system because Ryan the creator of Solid want's to use the platform as much as possible. For the component system web components can be used. This is important to get good results in benchmarks.

- Solidjs is focussing on the single page apps and less on the multipage apps. 

- Solid does not need a compile step like Svelte. Only when you use a fragment this is compiled.

- Solid supports streaming to stop page load blocking

# Comparison between frameworks dom changes

|  Framework | Reactivity  |  Virtual dom |  Compiler |
|---|---|---|---|
|  Solidjs |  ✅ |   |   |
|  React |   | ✅ |   |
|  Vue | ✅ | ✅ |   |
|  Svelte | ✅ |   | ✅ |


*Difference with Vue is the VDom, Vue's reactivity is close via the composition api but they use this reactivity not to update the real dom but instead for updating then VDom

*Difference with Svelte is the compile step, Solid is not using compilation

# Difference with React

- Components are only rendered once. If you put a console log in a component you see this log will only be once in the output. In case of React this will be logged multiple times.

- In fact Solid does not use the concept of components, it just looks like one because it is wrapped in a function just like in React but it's not the case.

- Uses JSX but is not 100% compatible with React JSX. e.g. class vs classname

# Steps

1. [Start](https://github.com/kbulte/solid-reactivity-101/tree/reactivity-101-start)
2. [React to side effects](https://github.com/kbulte/solid-reactivity-101/tree/reactivity-101-effect)
3. [JSX is optional](https://github.com/kbulte/solid-reactivity-101/tree/reactivity-101-effect-no-jsx)
4. [With JSX](https://github.com/kbulte/solid-reactivity-101/tree/reactivity-101-effect-jsx)
5. [Final](https://github.com/kbulte/solid-reactivity-101/tree/master)



