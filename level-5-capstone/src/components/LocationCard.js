import React, { useState, useEffect } from "react"
import Button from "./Button"
import { PersonContext } from "../context/PersonContext"

const LocationCard = props => {
	const [checked, setChecked] = useState(false)
	// const cardplace = e.target.getAttribute("data-place")
	// const thisCard = document.getElementById(props.place)

	return (
		<div>
			<Button
				key={props.index}
				data-place={props.place}
				id={props.place}
				type="button"
				label={props.place}
				indicator={checked}
				onClick={e => {
					e.preventDefault()
					const checkBox = e.target.nextSibling
					setChecked(!checked)

					console.log(
						`${props.place}: ${
							checkBox.checked ? "Going" : "Not Going"
						}`
					)
				}}
			/>
			<input
				type="radio"
				hidden="true"
				name="location"
				value={props.place}
				checked={checked}
			/>
		</div>
	)
}
export default LocationCard
