import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import { PersonContextProvider } from "./context/PersonContext"

ReactDOM.render(
	<PersonContextProvider>
		<App />
	</PersonContextProvider>,
	document.getElementById("root")
)
