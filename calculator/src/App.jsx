import { useState } from "react";
import "./index.css";
function App() {
   const [firstInput, setFirstInput] = useState("");
   const [secondInput, setSecondInput] = useState("");
   const [output, setOutput] = useState("");
   const style = "bg-white shadow-md p-2 m-4 rounded-md cursor-pointer w-10";

   const operatorClick = (value) =>{
    setSecondInput(firstInput+value);
    setOutput(firstInput+value);
    setFirstInput("")
   }

   const handleClick=(value)=>{
    setFirstInput((prev)=>{return prev+value});
   }
   
   const evalClick=()=>{
      setSecondInput("")
      const result = eval(output+firstInput);
      setFirstInput(result)
   }

   const handleAllClear=()=>{
    setFirstInput("");
    setSecondInput("");
   }

   const handleDeleteClick=()=>{
    const str = firstInput.slice(0,-1)
    setFirstInput(str);
   }


  return (
    <>
     <div className="container rounded-md">
     <div className="flex flex-col">
        <input type="text" className="bg-blue-950 text-right mx-3 my-1 outline-none text-white" value={secondInput} onKeyDown={"return false"} />
        <input type="text" className="bg-blue-950 text-right mx-3 my-1 font-bold outline-none text-xl text-white"  autoFocus value={firstInput} />
      </div>
      <div>
        <button className={style} onClick={handleAllClear}>AC</button>
        <button className={style} onClick={handleDeleteClick}>DE</button>
        <button className={style} onClick={()=> operatorClick(' /')}>/</button>
        <button className={style} onClick={()=> operatorClick(' *')} >*</button>
      </div>
      <div>
        <button className={style} onClick={()=>handleClick(7)}>7</button>
        <button className={style} onClick={()=>handleClick(8)}>8</button>
        <button className={style} onClick={()=>handleClick(9)}>9</button>
        <button className={style} onClick={()=> operatorClick(' -')}>-</button>
      </div>
      <div>
        <button className={style} onClick={()=>handleClick(4)}>4</button>
        <button className={style} onClick={()=>handleClick(5)}>5</button>
        <button className={style} onClick={()=>handleClick(6)}>6</button>
        <button className={style} onClick={()=> operatorClick(' +')}>+</button>
      </div>
      <div>
        <button className={style} onClick={()=>handleClick(1)}>1</button>
        <button className={style} onClick={()=>handleClick(2)}>2</button>
        <button className={style} onClick={()=>handleClick(3)}>3</button>
        <button className={style} onClick={()=>handleClick(".")}>.</button>
      </div>
      <div>
        <button className={style} onClick={()=>handleClick(0)}>0</button>
        <button className={style} onClick={()=> operatorClick(' %')}>%</button>
        <button className="bg-white shadow-md p-2 m-4 rounded-md cursor-pointer w-20" onClick={()=>evalClick()}>=</button>
      </div>
     </div>
    </>
  )
}

export default App
