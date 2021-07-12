import React from "react"
import { ButtonBase } from "../../StyledComponents"

const LocationButton = props => {
	return (
		<ButtonBase
			key={props.index}
			clicked={props.clicked}
			name={props.locationName}
			id={props.locationName}
			type="button"
			onClick={props.onClick}
		>
			{props.label}
			{props.children}
		</ButtonBase>
	)
}

export default LocationButton
