import React, { useState, createContext } from "react"

const PersonContext = createContext()
const PersonContextProvider = props => {
	const [comingBack, setComingBack] = useState([])
	const [whereGoing, setWhereGoing] = useState()
	const [whoIsGoing, setWhoIsGoing] = useState([])
	const [headingOut, setHeadingOut] = useState([])
	const [updateObj, setUpdateObj] = useState({})
	const [timeAway, setTimeAway] = useState(5)
	const [familyMembers, setFamilyMembers] = useState([
		{
			name: "Mom",
			atHome: false,
			location: "cafe",
			ert: 24,
		},

		{
			name: "Elizabeth",
			atHome: false,
			location: "gym",
			ert: 32,
		},

		{
			name: "Avery",
			atHome: false,
			location: "trail",
			ert: 45,
		},

		{
			name: "Benson",
			atHome: false,
			location: "store",
			ert: 14,
		},

		{
			name: "Rosalie",
			atHome: false,
			location: "work",
			ert: 13,
		},
	])

	const locations = [
		{ location: "school" },
		{ location: "store" },
		{ location: "gym" },
		{ location: "work" },
		{ location: "downtown" },
		{ location: "cafe" },
		{ location: "friends" },
		{ location: "trail" },
	]

	return (
		<PersonContext.Provider
			value={{
				familyMembers,
				setFamilyMembers,
				locations,
				comingBack,
				setComingBack,
				setWhereGoing,
				whereGoing,
				whoIsGoing,
				setWhoIsGoing,
				timeAway,
				setTimeAway,
				// checkInFunction,
			}}
		>
			{props.children}
		</PersonContext.Provider>
	)
}

export { PersonContextProvider, PersonContext }
