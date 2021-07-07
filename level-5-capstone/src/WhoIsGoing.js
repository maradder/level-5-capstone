import React, { useContext } from "react"
import { Main } from "./StyledComponents"
import WhoIsGoingForm from "./components/forms/WhoIsGoingForm"
import ButtonSmall from "./components/buttons/ButtonSmall"
import { DisplayContext } from "./context/DisplayContext"

const WhoIsGoing = props => {
	const { setFormState } = useContext(DisplayContext)

	return (
		<Main>
			<h3>Select everyone who will be going</h3>
			<WhoIsGoingForm id="whoIsGoingForm" />
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
					onClick={() => setFormState("status")}
				/>
				<ButtonSmall label="Next" form="whoIsGoingForm" type="submit" />
			</div>
		</Main>
	)
}

export default WhoIsGoing
