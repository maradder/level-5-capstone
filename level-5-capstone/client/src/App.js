import React, { useContext } from "react"
import { DisplayContext } from "./context/DisplayContext"
import StatusScreen from "./StatusScreen"
import WhoIsGoing from "./WhoIsGoing"
import WhoIsCheckingIn from "./WhoIsCheckingIn"
import WhereGoing from "./WhereGoing"
import Settings from "./components/Settings"
import WhenBack from "./WhenBack"
import { GlobalStyle } from "./StyledComponents"
const App = () => {
	const { formState } = useContext(DisplayContext)
	return (
		<div>
			<GlobalStyle />

			{formState === "status" ? (
				<StatusScreen />
			) : formState === "checkingIn" ? (
				<WhoIsCheckingIn />
			) : formState === "headingOut" ? (
				<WhoIsGoing />
			) : formState === "whereGoing" ? (
				<WhereGoing />
			) : formState === "whenBack" ? (
				<WhenBack />
			) : formState === "settings" ? (
				<Settings />
			) : (
				<StatusScreen />
			)}
		</div>
	)
}

export default App
