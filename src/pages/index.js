import React , {useRef} from 'react'
import Greeter from '../components/Greeter'
// import item from './modules/item'
function IndexPage() {
  const inputRef = useRef<HTMLInputElement(null);
  functin HandleSubmit= (e: React.FormEvent ) => {
    e.preventDefault();
    console.log(inputRef.current.value);
  }
  return (
    <>
    <form onSubmit={HandleSubmit}></form>
    <h1>This is the Greeter</h1>
    <input type="text" ref="inputRef" placeholder="enter Name"/>
  <Greeter person={inputRef}/>
    
    </>
  )
}
    
export default IndexPage