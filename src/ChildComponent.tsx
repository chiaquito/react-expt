import { useEffect, useState } from 'react'


interface ChildComponentProps  {
    parentState: number;
    parentClickHandler: () => void;
}



export const ChildComponent = (props:ChildComponentProps)=> {
    const [childState, setChildState] = useState(0)

    useEffect(()=>{
        console.warn("子コンポーネントがレンダリング")
      },)

    const clickhandler = ()=>{
        setChildState((preValue)=>{return preValue+1})
    }

  return (
    <>
    <p>ChildComponent</p>
    <p>{childState}</p>
    <button onClick={clickhandler}>子コンポーネントのボタン</button><br/>
    <button onClick={props.parentClickHandler}>親コンポーネントのボタン</button><br/>
    </>
    
  )
}
