import React from 'react'

export default function GreeterForm() {
    const inputRef = useRef<HTMLInputElement(null);
    function HandleSubmit= (e: React.FormEvent ) => {
      e.preventDefault();
      console.log(inputRef.current.value);
    }
    return(
    <form onSubmit={HandleSubmit}>
    <h1>This is the Greeter</h1>
    <input type="text" ref="inputRef" placeholder="enter Name"/>
    <div>GreeterForm</div>
    </form>
  )
}
  