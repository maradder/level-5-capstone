import React, { useState, useContext } from "react"
import { Main, ButtonAction } from "../../StyledComponents"
import axios from "axios"
import { PersonContext } from "../../context/PersonContext"

const AddUserForm = props => {
	const { familyMembers, setFamilyMembers } = useContext(PersonContext)
	const [initState, setInitState] = useState({
		name: "",
		atHome: true,
		location: "Home",
		estReturn: 0,
	})

	const handleSubmit = e => {
		e.preventDefault()
		axios
			.post("/familymembers", initState)
			.then(res =>
				setFamilyMembers(prevState => [...prevState, res.data])
			)
	}

	const myChangeHandler = event => {
		const { name, value } = event.target
		setInitState(prevState => ({
			...prevState,
			[name]: value,
		}))
	}

	return (
		<div style={{ justifyContent: "flex-start" }}>
			<form
				onSubmit={handleSubmit}
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}
			>
				<h1>Add Person</h1>
				<p>Who do you want to add?</p>
				<input type="text" name="name" onChange={myChangeHandler} />
				<ButtonAction>Add Person</ButtonAction>
			</form>
			<br />
			<h3>Current Family</h3>
			{familyMembers.map(member => (
				<div>
					<p style={{ margin: "0px auto" }}>{member.name}</p>
				</div>
			))}
		</div>
	)
}
export default AddUserForm
