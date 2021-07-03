import React, { useState, useEffect, useContext } from "react"
import { Main } from "./StyledComponents"
import ButtonSmall from "./components/ButtonSmall"
import WhereGoingForm from "./components/WhereGoingForm"

const WhereGoing = props => {
	return (
		<Main>
			<h3>Select where you are going</h3>
			<WhereGoingForm id="whereGoing" />
			<ButtonSmall label="Next" form="whereGoing" />
		</Main>
	)
}

export default WhereGoing
