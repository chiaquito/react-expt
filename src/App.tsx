import { FC, useEffect, useState } from 'react'
import { ChildComponent } from './ChildComponent'

export const App:FC = ()=> {
  const [parentState, setParentState] = useState(0)

  useEffect(()=>{
    console.warn("親のコンポーネントがレンダリング")
  },)

  const clickHandler = () => {
    setParentState((preValue)=>preValue+1)
  }

  return (
    <>
     <p>App Component</p>
     <p>{parentState}</p>
     <button onClick={clickHandler}>親コンポーネントのボタン</button>
     <ChildComponent parentState={parentState} parentClickHandler={clickHandler}
     />

    </>
  )
}

export default App
