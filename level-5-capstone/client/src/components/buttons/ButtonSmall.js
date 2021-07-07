import React from "react"
import { ButtonAlt } from "../../StyledComponents"

const ButtonSmall = props => {
	return (
		<ButtonAlt form={props.form} onClick={props.onClick}>
			{props.label}
		</ButtonAlt>
	)
}

export default ButtonSmall
