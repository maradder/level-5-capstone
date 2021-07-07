import React, { useContext } from "react"
import { Main } from "./StyledComponents"
import CheckInForm from "./components/forms/CheckInForm"
import ActionButton from "./components/buttons/ActionButton"
import { DisplayContext } from "./context/DisplayContext"
import ButtonSmall from "./components/buttons/ButtonSmall"

const WhoIsCheckingIn = props => {
	const { setFormState } = useContext(DisplayContext)
	return (
		<Main>
			<h3>Select everyone who is checking in</h3>
			<CheckInForm id="checkInForm" />
			<div
				style={{
					display: "flex",
					flexDirection: "row",
					justifyContent: "space-between",
					width: "100%",
				}}
			>
				<ButtonSmall
					label="Home"
					type="button"
					onClick={() => setFormState("status")}
				/>
				<ActionButton
					type="submit"
					label="Check In"
					form="checkInForm"
				/>
			</div>
		</Main>
	)
}

export default WhoIsCheckingIn
