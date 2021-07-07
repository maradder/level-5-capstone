import React, { useState, useContext, useEffect } from "react"
import { PersonContext } from "../../context/PersonContext"
import { DisplayContext } from "../../context/DisplayContext"
import CheckInButton from "../buttons/CheckInButton"

const CheckInForm = props => {
	const {
		familyMembers,
		setFamilyMembers,
		comingBack,
		setComingBack,
		checkInFunction,
	} = useContext(PersonContext)
	const { setFormState } = useContext(DisplayContext)
	const [clicked, setClicked] = useState({})

	const handleChange = e => {
		const { name, value } = e.target
		comingBack.indexOf(value) > -1
			? setComingBack(comingBack.filter(person => person != name))
			: setComingBack(prevState => [...prevState, value])
	}

	const handleSubmit = e => {
		e.preventDefault()
		// Update the status for each of the people
		comingBack.map(person => {
			const returnedPerson = familyMembers.findIndex(
				member => member.name === person
			)
			const source = {
				name: person,
				atHome: true,
				location: "",
				ert: null,
			}

			const target = familyMembers[returnedPerson]
			const returnedTarget = Object.assign(target, source)
			const remainingPersons = familyMembers.filter(
				human => human.name != person
			)
			return setFamilyMembers([returnedTarget, ...remainingPersons])
		})
		setFormState("status")
	}

	const handleClick = (e, person) => {
		e.preventDefault()
		const { name } = e.target
		comingBack.indexOf(name) > -1
			? setComingBack(comingBack.filter(person => person != name))
			: setComingBack(prevState => [...prevState, name])
		setClicked(prevState => {
			return {
				...prevState,
				[name]: clicked[name] ? false : true,
			}
		})
		console.log(clicked)
	}

	const renderForm = () => {
		return (
			<form name="checkInForm" id="checkInForm" onSubmit={handleSubmit}>
				{familyMembers.map((person, index) => {
					return (
						// const personName = person.name
						person.atHome === false ? (
							<div key={person.name}>
								<CheckInButton
									key={index}
									clicked={clicked[person.name]}
									personName={person.name}
									id={person.name}
									onClick={handleClick}
								/>
							</div>
						) : (
							console.log("Person is at home")
						)
					)
				})}
			</form>
		)
	}

	useEffect(() => {
		const results = renderForm()
		return () => {
			console.log("CheckInForm Refreshed")
		}
	}, [clicked])

	return renderForm()
}

export default CheckInForm
