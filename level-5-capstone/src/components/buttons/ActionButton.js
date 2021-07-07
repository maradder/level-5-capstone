import React from "react"
import { ButtonAction } from "../../StyledComponents"
import HomeLogo from "../../icons/home_black_24dp.svg"

const ActionButton = props => {
	return (
		<ButtonAction onClick={props.handleclick} form={props.form}>
			{props.home === true ? (
				<img src={HomeLogo} alt="Check in at home" />
			) : (
				<></>
			)}
			{props.label}
		</ButtonAction>
	)
}

export default ActionButton
