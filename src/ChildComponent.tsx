import { useEffect, useState } from 'react'



export const ChildComponent = ()=> {
    const [childState, setChildState] = useState(0)

    useEffect(()=>{
        console.warn("子コンポーネントがレンダリング")
      },[childState])

    const clickhandler = ()=>{
        setChildState((preValue)=>{return preValue+1})
    }

  return (
    <>
    <p>ChildComponent</p>
    <p>{childState}</p>
    <button onClick={clickhandler}>子コンポーネントのボタン</button>
    </>
    
  )
}
