import React, { useContext } from "react"
import { Main } from "./StyledComponents"
import ButtonSmall from "./components/buttons/ButtonSmall"
import WhereGoingForm from "./components/forms/WhereGoingForm"
import { DisplayContext } from "./context/DisplayContext"

const WhereGoing = props => {
	const { setFormState } = useContext(DisplayContext)
	return (
		<Main>
			<h3>Select where you are going</h3>
			<WhereGoingForm id="whereGoing" />
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
					onClick={() => setFormState("headingOut")}
				/>
				<ButtonSmall label="Next" form="whereGoing" type="submit" />
			</div>
		</Main>
	)
}

export default WhereGoing
