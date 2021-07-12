import React, { useState, useContext } from "react"
import { PersonContext } from "../context/PersonContext"
import { ButtonAction } from "../StyledComponents"
import axios from "axios"

const AddLocationForm = () => {
	const { locations, setLocations } = useContext(PersonContext)
	const [initLocation, setInitLocation] = useState({
		location: "",
	})

	const handleSubmit = e => {
		axios
			.post("/familymembers", initLocation)
			.then(res => setLocations(prevState => [...prevState, res.data]))
	}

	const myChangeHandler = event => {
		const { name, value } = event.target
		setInitLocation(prevState => ({
			[name]: value,
		}))
		//
	}

	return (
		<div>
			<form
				onSubmit={handleSubmit}
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}
			>
				<h1>Add a Location:</h1>
				<input
					type="text"
					name="location"
					placeholder="Add a location"
					onChange={myChangeHandler}
				/>
				<ButtonAction>Save Location</ButtonAction>
			</form>
			<br />
			<h3>Current Locations</h3>
			{locations.map(place => {
				return <p>{place.location}</p>
			})}
		</div>
	)
}
export default AddLocationForm
