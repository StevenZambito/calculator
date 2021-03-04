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
          <Button
            onButtonClick={handleButtonPress}
            content="Clear"
            type="function"
          />
          <Button
            onButtonClick={handleButtonPress}
            content="÷"
            type="operator"
          />
        </div>
        <div className="row">
          <Button onClick={() => handleButtonPress(7)} content={7} />
          <Button onButtonClick={handleButtonPress} content={8} />
          <Button onButtonClick={handleButtonPress} content={9} />
          <Button
            onButtonClick={handleButtonPress}
            content="x"
            type="operator"
          />
        </div>
        <div className="row">
          <Button onButtonClick={handleButtonPress} content={4} />
          <Button onButtonClick={handleButtonPress} content={5} />
          <Button onButtonClick={handleButtonPress} content={6} />
          <Button
            onButtonClick={handleButtonPress}
            content="-"
            type="operator"
          />
        </div>
        <div className="row">
          <Button onButtonClick={handleButtonPress} content={1} />
          <Button onButtonClick={handleButtonPress} content={2} />
          <Button onButtonClick={handleButtonPress} content={3} />
          <Button
            onButtonClick={handleButtonPress}
            content="+"
            type="operator"
          />
        </div>
        <div className="row">
          <Button
            onButtonClick={handleButtonPress}
            content={0}
            isLarge={true}
          />
          <Button onButtonClick={handleButtonPress} content="." />
          <Button
            onButtonClick={handleButtonPress}
            content="="
            type="operator"
          />
        </div>
      </div>
    </div>
  )
}
