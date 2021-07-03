import React, { useState, createContext } from "react"

const PersonContext = createContext()
const PersonContextProvider = props => {
	// const [yVal, setYVal] = useState(10)
	const [familyStatus, setFamilyStatus] = useState([
		{
			name: "Mom",
			atHome: false,
			location: { place: "store", rotation: 40 },
			ert: 24,
		},

		{
			name: "Elizabeth",
			atHome: false,
			location: { place: "gym", rotation: 90 },
			ert: 32,
		},

		{
			name: "Avery",
			atHome: false,
			location: { place: "trail", rotation: 315 },
			ert: 45,
		},

		{
			name: "Benson",
			atHome: false,
			location: { place: "store", rotation: 50 },
			ert: 14,
		},

		{
			name: "Rosalie",
			atHome: false,
			location: { place: "work", rotation: 135 },
			ert: 13,
		},
	])
	// const [mom, setMom] = useState({
	// 	location: "store",
	// 	ert: 0.5,
	// })
	// const [elizabeth, setElizabeth] = useState({
	// 	location: "gym",
	// 	ert: 0.75,
	// })
	// const [avery, setAvery] = useState({
	// 	location: "trail",
	// 	ert: 1.5,
	// })
	// const [benson, setBenson] = useState({
	// 	location: "store",
	// 	ert: 3,
	// })
	// const [rosalie, setRosalie] = useState({
	// 	location: "work",
	// 	ert: 5,
	// })
	const locations = [
		{ place: "store", rotation: 40 },
		{ place: "gym", rotation: 90 },
		{ place: "trail", rotation: 315 },
		{ place: "store", rotation: 50 },
		{ place: "work", rotation: 135 },
	]
	return (
		<PersonContext.Provider value={{ familyStatus, locations }}>
			{props.children}
		</PersonContext.Provider>
	)
}

export { PersonContextProvider, PersonContext }
