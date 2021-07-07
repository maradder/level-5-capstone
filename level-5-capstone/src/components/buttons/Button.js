import React, { useState } from "react"
import { ButtonBase } from "../../StyledComponents"

const Button = props => {
	const [clicked, setClicked] = useState(false)

	return (
		<ButtonBase
			clicked={props.clicked}
			key={props.key}
			data-name={props.name}
			name={props.name}
			id={props.id}
			type={props.type}
			label={props.label}
			indicator={props.clicked}
			onClick={props.handleClick}
		>
			{props.label}
			<p style={{ color: "black" }}>
				{props.clicked ? (
					<span class="material-icons">sentiment_satisfied_alt</span>
				) : (
					""
				)}
			</p>
		</ButtonBase>
	)
}

export default Button
