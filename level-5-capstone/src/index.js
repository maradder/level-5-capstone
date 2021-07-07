import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import { PersonContextProvider } from "./context/PersonContext"
import { DisplayContextProvider } from "./context/DisplayContext"

ReactDOM.render(
	<PersonContextProvider>
		<DisplayContextProvider>
			<App />
		</DisplayContextProvider>
	</PersonContextProvider>,
	document.getElementById("root")
)
