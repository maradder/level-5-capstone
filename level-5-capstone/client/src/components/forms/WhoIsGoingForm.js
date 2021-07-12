import React, { useState, useContext, useEffect } from "react"
import { PersonContext } from "../../context/PersonContext"
import { DisplayContext } from "../../context/DisplayContext"
import GoingButton from "../buttons/GoingButton"

const WhoIsGoingForm = props => {
	const { familyMembers, whoIsGoing, setWhoIsGoing } =
		useContext(PersonContext)
	const { formState, setFormState } = useContext(DisplayContext)
	const [clicked, setClicked] = useState({})

	const handleSubmit = e => {
		e.preventDefault()
		setFormState("whereGoing")
	}

	const handleClick = (e, person) => {
		e.preventDefault()
		const { name } = e.target
		whoIsGoing.indexOf(name) > -1
			? setWhoIsGoing(whoIsGoing.filter(person => person !== name))
			: setWhoIsGoing(prevState => [...prevState, name])
		setClicked(prevState => {
			return {
				...prevState,
				[name]: clicked[name] ? false : true,
			}
		})
		console.log(clicked)
	}

	// const handleClick = e => {
	// 	e.preventDefault()
	// 	const { name } = e.target
	// 	setClicked(prevState => {
	// 		return {
	// 			...prevState,
	// 			[name]: clicked[name] ? false : true,
	// 		}
	// 	})
	// }
	useEffect(() => {
		console.log(clicked)
	}, [clicked])

	const renderForm = () => {
		return (
			<form name="whoIsGoing" id="whoIsGoingForm" onSubmit={handleSubmit}>
				{familyMembers.map((person, index) => {
					const personName = person.name
					return (
						<div key={personName + person._id}>
							<GoingButton
								key={personName + person._id}
								personName={personName}
								type="button"
								clicked={clicked[personName]}
								onClick={handleClick}
							/>
						</div>
					)
				})}
			</form>
		)
	}

	return renderForm()
}

export default WhoIsGoingForm
