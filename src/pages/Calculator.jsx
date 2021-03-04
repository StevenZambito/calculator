import React, { useState } from 'react'
import { Button } from '../components/Button.jsx'

export const Calculator = () => {
  const [value, setValue] = useState('0')
  const [memory, setMemory] = useState(null)

  const handleButtonPress = content => {
    console.log(content)
    const num = parseFloat(value)
    if (content === 'Clear') {
      setValue('0')
      setMemory(null)
      return
    }
    setValue(parseFloat(num + content).toString())
    return
  }

  return (
    <div className="wrapper">
      <div className="calculator-shell">
        <div className="screen-section">
          <p className="screen">{value}</p>
        </div>

        <div className="row">
          <Button onClick={handleButtonPress} content="Clear" type="function" />
          <Button onClick={handleButtonPress} content="÷" type="operator" />
        </div>
        <div className="row">
          <Button onClick={() => handleButtonPress(7)} content={7} />
          <Button onClick={() => handleButtonPress(8)} content={8} />
          <Button onClick={() => handleButtonPress(9)} content={9} />
          <Button onClick={handleButtonPress} content="x" type="operator" />
        </div>
        <div className="row">
          <Button onClick={() => handleButtonPress(4)} content={4} />
          <Button onClick={() => handleButtonPress(5)} content={5} />
          <Button onClick={() => handleButtonPress(6)} content={6} />
          <Button onClick={handleButtonPress} content="-" type="operator" />
        </div>
        <div className="row">
          <Button onClick={() => handleButtonPress(1)} content={1} />
          <Button onClick={() => handleButtonPress(2)} content={2} />
          <Button onClick={() => handleButtonPress(3)} content={3} />
          <Button onClick={handleButtonPress} content="+" type="operator" />
        </div>
        <div className="row">
          <Button onClick={handleButtonPress} content={0} isLarge={true} />
          <Button onClick={handleButtonPress} content="." />
          <Button onClick={handleButtonPress} content="=" type="operator" />
        </div>
      </div>
    </div>
  )
}
