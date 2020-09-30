import React, { useState } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRedo } from '@fortawesome/free-solid-svg-icons';
import splash from './sweat.png';
function App() {
	const [ count, setCount ] = useState(0);
	const [ caption, setCaption ] = useState('Start drinking water.');
	function handleCount() {
		if (count >= 0 && count < 3) {
			setCaption('Drink more water!');
		} else if (count >= 3 && count < 7) {
			setCaption("You're doing great!");
		} else if (count >= 7 && count < 10) {
			setCaption('Drink less water!');
		} else if (count >= 10 && count < 14) {
			setCaption('No seriously, stop drinking water!');
		} else if (count >= 14) {
			setCaption('You may have diabetes, please do a check-up.');
		}
		setCount(count + 1);
	}
	function resetCount() {
		setCount(0);
		setCaption('Start drinking water.');
	}
	return (
		<body>
			<div className="displayCount">
				<div className="count">{count}</div>
			</div>
			<div className="caption">{caption}</div>
			<div className="buttons">
				<div className="pee">
					<button className="iPeed" onClick={handleCount}>
						I peed
						<img src={splash} alt="Splash" className="splash" />
					</button>
				</div>
				<div className="resetButton">
					<button>
						<FontAwesomeIcon onClick={resetCount} icon={faRedo} className="reset" />
					</button>
				</div>
			</div>
		</body>
	);
}

export default App;
