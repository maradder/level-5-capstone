import React, { useState, useContext, useEffect } from "react"
import { PersonContext } from "../context/PersonContext"
import ButtonSmall from "./ButtonSmall"
import LocationCard from "./LocationCard"

const WhereGoingForm = props => {
	const { locations } = useContext(PersonContext)
	return (
		<form
			id={props.id}
			onSubmit={e => {
				e.preventDefault()
				console.log("done")
			}}
		>
			{locations.map((location, index) => (
				<LocationCard
					name={location.place}
					place={location.place}
					index={index}
					location={location}
				/>
			))}
		</form>
	)
}

export default WhereGoingForm
