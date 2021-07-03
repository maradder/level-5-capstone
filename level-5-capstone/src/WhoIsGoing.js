import React, { useState, useEffect, useContext } from "react"
import { Main } from "./StyledComponents"
import WhoIsGoingForm from "./components/WhoIsGoingForm"
import ButtonSmall from "./components/ButtonSmall"

const WhoIsGoing = props => {
	return (
		<Main>
			<h3>Select Everyone Who Will be Going</h3>
			<WhoIsGoingForm id="whoIsGoingForm" />
			<ButtonSmall label="Next" form="whoIsGoingForm" />
		</Main>
	)
}

export default WhoIsGoing
