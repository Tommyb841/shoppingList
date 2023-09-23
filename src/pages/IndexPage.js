import React from 'react';
import Greeter from '../components/Greeter';

// import item from './modules/item'
export function IndexPage() {
  const inputRef; function useRef<T>() { } null;
  return (
    <>
      <h1>This is the Greeter</h1>
      <input type="text" ref="inputRef" placeholder="enter Name" />
      <Greeter person={inputRef} />

    </>
  );
}
