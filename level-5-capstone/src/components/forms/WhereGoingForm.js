import React, { useState, useContext, useEffect } from "react"
import { DisplayContext } from "../../context/DisplayContext"
import { PersonContext } from "../../context/PersonContext"
import LocationButton from "../buttons/LocationButton"
import { LocationBase } from "../../StyledComponents"

const WhereGoingForm = props => {
	const { formState, setFormState } = useContext(DisplayContext)
	const { whereGoing, setWhereGoing, whoIsGoing, setWhoIsGoing, locations } =
		useContext(PersonContext)
	const [clicked, setClicked] = useState({})

	const handleSubmit = e => {
		e.preventDefault()
		setFormState("whenBack")
	}

	const handleClick = e => {
		const name = e.target.getAttribute("data-name")
		setWhereGoing(name)
		setClicked(prevState => {
			return {
				[name]: clicked[name] ? false : true,
			}
		})
		console.log(clicked)
		return console.log(name)
	}

	const renderForm = () => {
		return (
			<form
				name="whereGoingForm"
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					overflowY: "scroll",
					width: "100%",
					borderRadius: "24px",
					border: "4px solid #12121220",
				}}
				id={props.id}
				onSubmit={handleSubmit}
			>
				<div>
					{locations.map((location, index) => {
						const locationName = location.location
						return (
							<LocationBase
								clicked={clicked[locationName]}
								className="locationButton"
								onClick={handleClick}
								key={index}
								data-name={locationName}
								type="button"
							>
								<p>{locationName}</p>
							</LocationBase>
						)
					})}
				</div>
			</form>
		)
	}

	return renderForm()
}

export default WhereGoingForm
