import React, { useState } from "react"
import { ButtonBase } from "../StyledComponents"

const Button = props => {
	return (
		<ButtonBase onClick={props.onClick}>
			{props.label}
			<p style={{ color: "black" }}>
				{props.indicator ? (
					<span class="material-icons">sentiment_satisfied_alt</span>
				) : (
					""
				)}
			</p>
		</ButtonBase>
	)
}

export default Button
