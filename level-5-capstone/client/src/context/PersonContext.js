import React, { useState, useEffect, createContext } from "react"
import axios from "axios"
const PersonContext = createContext()
const PersonContextProvider = props => {
	const [comingBack, setComingBack] = useState([])
	const [whereGoing, setWhereGoing] = useState()
	const [whoIsGoing, setWhoIsGoing] = useState([])
	const [headingOut, setHeadingOut] = useState([])
	const [updateObj, setUpdateObj] = useState({})
	const [timeAway, setTimeAway] = useState(5)
	const [familyMembers, setFamilyMembers] = useState([])

	const getCurrentFamilyMembers = () => {
		axios.get("/familymembers").then(res => setFamilyMembers(res.data))
		return console.log("Initial get")
	}

	const [locations, setLocations] = useState([
		{ location: "school" },
		{ location: "store" },
		{ location: "gym" },
		{ location: "work" },
		{ location: "downtown" },
		{ location: "cafe" },
		{ location: "friends" },
		{ location: "trail" },
	])

	useEffect(() => {
		getCurrentFamilyMembers()
		return () => {
			console.log("Initial GET request")
		}
	}, [])

	useEffect(() => {
		console.log(familyMembers)
	}, [familyMembers])

	return (
		<PersonContext.Provider
			value={{
				familyMembers,
				setFamilyMembers,
				locations,
				setLocations,
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
