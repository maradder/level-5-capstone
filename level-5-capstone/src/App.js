import React, { useState, useEffect, useContext } from "react"
import { PersonContext } from "./context/PersonContext"
import Button from "./components/Button"
import ButtonSmall from "./components/ButtonSmall"
import ActionButton from "./components/ActionButton"
import ClockBody from "./components/clockFace/ClockBody"
import { clockRadius, avatarDiameter } from "./StyledComponents"
import StatusScreen from "./StatusScreen"
import WhoIsGoing from "./WhoIsGoing"
import WhereGoing from "./WhereGoing"

const App = () => {
	return (
		<div style={{ display: "flex", flexDirection: "row" }}>
			<StatusScreen />
			<WhoIsGoing />
			<WhereGoing />
		</div>
	)
}

export default App
