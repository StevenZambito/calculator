import React, { useState } from "react";
import styles from "./Calculator.module.css";
import { Results } from "./Results.js";
import { Button } from "./Button.js";

export const Calculator = () => {
	const [value, setValue] = useState("0");
	const [memory, setMemory] = useState(null);

	const handleButtonPress = (content) => () => {
		const num = parseFloat(value);
		if (content === "Clear") {
			setValue("0")
			setMemory(null);
			return;
		}
		if (content === )
		setValue((parseFloat(num + content)).toString());
		return
	};

	return (
		<div className={styles.CalculatorShell}>

      <div className={styles.screenSection}>
			<p displayValue={value} className={styles.screen}>0</p>
		</div>
			{/* <Results displayValue={value} /> */}

			<div className={styles.row}>
				<Button
					onButtonClick={handleButtonPress}
					content="Clear"
					type="function"
				/>
				<Button onButtonClick={handleButtonPress} content="÷" type="operator" />
			</div>
			<div className={styles.row}>
				<Button onButtonClick={handleButtonPress} content={7} />
				<Button onButtonClick={handleButtonPress} content={8} />
				<Button onButtonClick={handleButtonPress} content={9} />
				<Button onButtonClick={handleButtonPress} content="x" type="operator" />
			</div>
			<div className={styles.row}>
				<Button onButtonClick={handleButtonPress} content={4} />
				<Button onButtonClick={handleButtonPress} content={5} />
				<Button onButtonClick={handleButtonPress} content={6} />
				<Button onButtonClick={handleButtonPress} content="-" type="operator" />
			</div>
			<div className={styles.row}>
				<Button onButtonClick={handleButtonPress} content={1} />
				<Button onButtonClick={handleButtonPress} content={2} />
				<Button onButtonClick={handleButtonPress} content={3} />
				<Button onButtonClick={handleButtonPress} content="+" type="operator" />
			</div>
			<div className={styles.row}>
				<Button onButtonClick={handleButtonPress} content={0} isLarge={true} />
				<Button onButtonClick={handleButtonPress} content="." />
				<Button onButtonClick={handleButtonPress} content="=" type="operator" />
			</div>
		</div>
	);
};