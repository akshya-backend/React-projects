import { useState } from "react"
import BasketComponent from "./components/basketComponent"
import ButtonComponent from "./components/buttonComponent"


function App() {
  const totalApple=10
  const [leftAppleCount, setLeftAppleCount] = useState(totalApple)
  const [rightAppleCount, setRightAppleCount] = useState(0)
  
  function swapLeftApple() {
    if (rightAppleCount > 0) {
     setRightAppleCount(rightAppleCount - 1)
    setLeftAppleCount(leftAppleCount + 1  )
    }
  }

  function swapRightApple() {
    if (leftAppleCount  > 0) {
       setLeftAppleCount(leftAppleCount - 1)
       setRightAppleCount(rightAppleCount + 1 )
    }
  }


  return (
    <>
      <h1 style={{
        textAlign:"center",
        color:"black",
        
      }}>Apple Bucket</h1>
      <div className="container">
         <BasketComponent  leftBasket={leftAppleCount} />
         <div className="btnCollection">
          <ButtonComponent link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5TSWGxDEr8ApytKkiCORtIJ_ikGALjxUSwA&s" title="Left" onClick={swapLeftApple}/>
          <ButtonComponent link="data:image/png;base64,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" title="Right" onClick={swapRightApple} />
         </div>
        <BasketComponent  leftBasket={rightAppleCount} />
      </div>
     
   
    </>
  )
}

export default App
