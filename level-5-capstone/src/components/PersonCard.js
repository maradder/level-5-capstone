import React, { useState, useEffect } from "react"
import Button from "./Button"
import { PersonContext } from "../context/PersonContext"

const PersonCard = props => {
	const [checked, setChecked] = useState(false)
	// const cardName = e.target.getAttribute("data-name")
	// const thisCard = document.getElementById(props.name)

	return (
		<div>
			<Button
				key={props.index}
				data-name={props.name}
				id={props.name}
				type="button"
				label={props.name}
				indicator={checked}
				onClick={e => {
					e.preventDefault()
					const checkBox = e.target.nextSibling
					setChecked(!checked)

					console.log(
						`${props.name}: ${
							checkBox.checked ? "Going" : "Not Going"
						}`
					)
				}}
			/>
			<input
				type="checkbox"
				hidden="true"
				name={props.name}
				value={props.name}
				checked={checked}
			/>
		</div>
	)
}
export default PersonCard
