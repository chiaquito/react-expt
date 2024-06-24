import { useEffect, useState } from 'react'
import { ChildComponent } from './ChildComponent'

function App() {
  const [parentState, setParentState] = useState(0)

  useEffect(()=>{
    console.warn("親のコンポーネントがレンダリング")
  },[parentState])

  const clickHandler = () => {
    setParentState((preValue)=>preValue+1)
  }

  return (
    <>
     <p>App Component</p>
     <p>{parentState}</p>
     <button onClick={clickHandler}>親コンポーネントのボタン</button>
     <ChildComponent/>

    </>
  )
}

export default App
