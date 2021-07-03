import React, { useState, useContext, useEffect } from "react"
import PersonCard from "./PersonCard"
import { PersonContext } from "../context/PersonContext"
import ButtonSmall from "./ButtonSmall"

const WhoIsGoingForm = props => {
	const { familyStatus } = useContext(PersonContext)
	return (
		<form
			id={props.id}
			onSubmit={e => {
				e.preventDefault()
				console.log("done")
			}}
		>
			{familyStatus.map((person, index) => (
				<PersonCard name={person.name} index={index} person={person} />
			))}
		</form>
	)
}

export default WhoIsGoingForm
