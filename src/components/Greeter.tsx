import React, { useRef, useState } from 'react'
export default function Greeter() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [enteredName, setEnteredName] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputRef.current) {
      setEnteredName(inputRef.current.value);
      inputRef.current.value = ("")
    }
  };
  return (
    <>
      <h1>This is the Greeter</h1>
      <h2>Hello world from {enteredName}</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={inputRef} placeholder="enter Name" />
        <button type="submit"> enter</button>
      </form>
    </>
  )
}
