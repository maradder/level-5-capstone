import React, { useState, useEffect, useContext } from "react"
import { PersonContext } from "./context/PersonContext"
import {
	Main,
	SlideForm,
	ButtonIncrease,
	CustomSlider,
	SliderLabel,
	ButtonDecrease,
} from "./StyledComponents"
import ButtonSmall from "./components/buttons/ButtonSmall"
import { DisplayContext } from "./context/DisplayContext"

const WhenBack = props => {
	const { whereGoing, whoIsGoing, timeAway, setTimeAway } =
		useContext(PersonContext)
	const { setFormState } = useContext(DisplayContext)

	const [groupLeaving, setGroupLeaving] = useState({
		people: whoIsGoing,
		place: whereGoing,
		ert: timeAway,
	})

	const increaseIconStyle = {
		color: timeAway >= 160 ? "#fff" : "#6D6D6D",
		fontSize: "48px",
		cursor: "pointer",
	}
	const decreaseIconStyle = {
		color: timeAway >= 15 ? "#fff" : "#6D6D6D",
		fontSize: "48px",
		cursor: "pointer",
	}
	const h2Style = {
		position: "relative",
		top: "-25px",

		zIndex: "5",
		width: "fit-content",
		fontFamily: "'Inter', sans-serif",
		userSelect: "none",
		color: timeAway > 10 ? "#fff" : "#6D6D6D",
	}
	const h2Content =
		timeAway * 1.8 < 60
			? `${timeAway * 1.8} Minutes`
			: `${Math.round(timeAway * 1.8)} minutes`
	const handleIncrease = () =>
		timeAway <= 180
			? setTimeAway(prevState => prevState + 5)
			: alert("Please review your time")

	const handleDecrease = () =>
		timeAway >= 0
			? setTimeAway(prevState => prevState - 5)
			: alert("Please review your time")

	const handleSubmit = e => {
		e.preventDefault()
		setGroupLeaving(prevState => {
			return { prevState, ert: timeAway * 1.8 }
		})
		setFormState("status")
		console.log(groupLeaving)
	}

	useEffect(() => {
		const range = document.getElementById("range")

		range.addEventListener("input", e => {
			setTimeAway(e.target.value)
		})
		return () => {
			console.log("Listener Added")
		}
	}, [])

	return (
		<Main>
			<h3>Select when you will be back</h3>
			<SlideForm name="whenBack" id="whenBack" onSubmit={handleSubmit}>
				<ButtonIncrease
					type="button"
					className="increase"
					onClick={handleIncrease}
				>
					<i style={increaseIconStyle} className="fas fa-plus" />
				</ButtonIncrease>
				<CustomSlider
					type="range"
					id="range"
					min="0"
					max="100"
					step="5"
					value={timeAway}
					aria-orientation="vertical"
					onChange={() => console.log(timeAway)}
				/>
				<SliderLabel htmlFor="range"></SliderLabel>
				<h2 style={h2Style}>{h2Content}</h2>
				<ButtonDecrease
					type="button"
					name="decrease"
					onClick={handleDecrease}
				>
					<i style={decreaseIconStyle} className="fas fa-minus" />
				</ButtonDecrease>
			</SlideForm>{" "}
			<div
				style={{
					display: "flex",
					flexDirection: "row",
					justifyContent: "space-between",
					width: "100%",
				}}
			>
				<ButtonSmall
					label="Back"
					type="button"
					onClick={() => setFormState("whereGoing")}
				/>
				<ButtonSmall label="Submit" form="whenBack" type="submit" />
			</div>
		</Main>
	)
}

export default WhenBack
