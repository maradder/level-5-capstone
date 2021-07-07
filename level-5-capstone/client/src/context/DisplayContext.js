import React, { useState, useEffect, createContext } from "react"

const DisplayContext = createContext()
const DisplayContextProvider = props => {
	const [formState, setFormState] = useState("status")
	return (
		<DisplayContext.Provider value={{ formState, setFormState }}>
			{props.children}
		</DisplayContext.Provider>
	)
}

export { DisplayContext, DisplayContextProvider }
