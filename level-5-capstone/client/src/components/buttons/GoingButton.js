import React, { useState, useEffect } from "react"
import { ButtonBase } from "../../StyledComponents"

const GoingButton = props => {
	return (
		<ButtonBase
			// style={{ backgroundColor: props.button }}
			key={props.index}
			clicked={props.clicked}
			name={props.personName}
			id={props.personName}
			type="button"
			onClick={props.onClick}
		>
			{props.personName}
		</ButtonBase>
	)
}

export default GoingButton
