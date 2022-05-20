import { useState } from 'react'
import './App.css'
import Button from './Button/button'
import {suma,resta,multiplicacion,division,modulo} from '../exp'

function App() {
  const [value,setValue]=useState("0")
  const [oldvalue,setOldvalue]=useState(null)
  const [operator,setOperator]=useState(null)

  const hanleButton = content =>()=>{
    const num=parseFloat(value)
    if(content==="AC"){
      setValue('0')
      setOldvalue(null)
      setOperator(null)
      return
    }
    if(content==="±"){
      if(num<0){
        setValue((num*-1).toString())
        return
      }
    }
    if(content ==='mod'){
      if(operator!==null){
        if(operator==="+"){
          setOldvalue((suma(oldvalue,parseFloat(value))))
        }else if(operator==="-"){
          setOldvalue((resta(oldvalue,parseFloat(value))))
        }else if(operator==='÷'){
          setOldvalue((division(oldvalue,parseFloat(value))))
        }else if(operator==="×"){
          setOldvalue((multiplicacion(oldvalue,parseFloat(value))))
        }else if(operator==='mod'){
          setOldvalue((modulo(oldvalue,parseFloat(value))))
        }
      }
      else{
        setOldvalue(parseFloat(value))
      }
      setOperator("mod")
      setValue("0")
      return 

    }
    if(content==='+'){
      if(operator!==null){
        if(operator==="+"){
          setOldvalue((suma(oldvalue,parseFloat(value))))
        }else if(operator==="-"){
          setOldvalue((resta(oldvalue,parseFloat(value))))
        }else if(operator==='÷'){
          setOldvalue((division(oldvalue,parseFloat(value))))
        }else if(operator==="×"){
          setOldvalue((multiplicacion(oldvalue,parseFloat(value))))
        }else if(operator==='mod'){
          setOldvalue((modulo(oldvalue,parseFloat(value))))
        }
      }
      else{
        setOldvalue(parseFloat(value))
      }
      setOperator("+")
      setValue("0")
      return 

    }
    if(content==='-'){
      if(operator!==null){
        if(operator==="+"){
          setOldvalue((suma(oldvalue,parseFloat(value))))
        }else if(operator==="-"){
          setOldvalue((resta(oldvalue,parseFloat(value))))
        }else if(operator==='÷'){
          setOldvalue((division(oldvalue,parseFloat(value))))
        }else if(operator==="×"){
          setOldvalue((multiplicacion(oldvalue,parseFloat(value))))
        }else if(operator==='mod'){
          setOldvalue((modulo(oldvalue,parseFloat(value))))
        }
      }
      else{
        setOldvalue(parseFloat(value))
      }
      setOperator("-")
      setValue("0")
      return 
    }
    if(content==='÷'){
      if(operator!==null){
        if(operator==="+"){
          setOldvalue((suma(oldvalue,parseFloat(value))))
        }else if(operator==="-"){
          setOldvalue((resta(oldvalue,parseFloat(value))))
        }else if(operator==='÷'){
          setOldvalue((division(oldvalue,parseFloat(value))))
        }else if(operator==="×"){
          setOldvalue((multiplicacion(oldvalue,parseFloat(value))))
        }else if(operator==='mod'){
          setOldvalue((modulo(oldvalue,parseFloat(value))))
        }
      }
      else{
        setOldvalue(parseFloat(value))
      }
      setOperator("÷")
      setValue("0")
      return
    }
    if(content==='×'){
      if(operator!==null){
        if(operator==="+"){
          setOldvalue((suma(oldvalue,parseFloat(value))))
        }else if(operator==="-"){
          setOldvalue((resta(oldvalue,parseFloat(value))))
        }else if(operator==='÷'){
          setOldvalue((division(oldvalue,parseFloat(value))))
        }else if(operator==="×"){
          setOldvalue((multiplicacion(oldvalue,parseFloat(value))))
        }else if(operator==='mod'){
          setOldvalue((modulo(oldvalue,parseFloat(value))))
        }
      }
      else{
        setOldvalue(parseFloat(value))
      }
      setOperator("×")
      setValue("0")
      return
    }

    if(content==="="){
      if(!operator) return;
      if(operator==="+"){
        setValue((suma(oldvalue,parseFloat(value))).toString())
      }else if(operator==="-"){
        setValue((resta(oldvalue,parseFloat(value))).toString())
      }else if(operator==='÷'){
        setValue((division(oldvalue,parseFloat(value))).toString())
      }else if(operator==="×"){
        setValue((multiplicacion(oldvalue,parseFloat(value))).toString())
      }else if(operator==='mod'){
        setValue((modulo(oldvalue,parseFloat(value))).toString())
      }
      setOldvalue(null)
      setOperator(null)
      return
    }
    
    setValue((parseFloat(num+content)).toString())

  }

  return (
    <div className="App">
       <div className='top'>4:43</div>
       <div className='display'>{value}</div>
       <div className='buttons'>
         <Button onButtonClick={hanleButton} content="AC" type="function"/>
         <Button onButtonClick={hanleButton} content="±"  type="function"/>
         <Button onButtonClick={hanleButton} content="mod"  type="operator"/>
         <Button onButtonClick={hanleButton} content="÷"  type="operator"/>
         <Button onButtonClick={hanleButton} content="7"/> 
         <Button onButtonClick={hanleButton} content="8"/>
         <Button onButtonClick={hanleButton} content="9"/>
         <Button onButtonClick={hanleButton} content="×"  type="operator"/>
         <Button onButtonClick={hanleButton} content="4"/>
         <Button onButtonClick={hanleButton} content="5"/>
         <Button onButtonClick={hanleButton} content="6"/>
         <Button onButtonClick={hanleButton} content="-"  type="operator"/>
         <Button onButtonClick={hanleButton} content="1"/>
         <Button onButtonClick={hanleButton} content="2"/>
         <Button onButtonClick={hanleButton} content="3"/>
         <Button onButtonClick={hanleButton} content="+"  type="operator"/>
         <Button onButtonClick={hanleButton} content="0"/>
         <Button onButtonClick={hanleButton} content="."/>
         <Button onButtonClick={hanleButton} content="="  type="operator"/>
       </div>
       <div className='bottom'>-</div>

    </div>
  )
}

export default App
