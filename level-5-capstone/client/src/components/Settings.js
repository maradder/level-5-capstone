import React, { useState, useContext } from "react"
import AddUserForm from "./AddUserForm"
import { DisplayContext } from "../context/DisplayContext"
import AddLocationForm from "./AddLocationForm"
import { Main, ButtonAction } from "../StyledComponents"

const Settings = () => {
	const { formState, setFormState } = useContext(DisplayContext)

	const [showUser, setShowUser] = useState(true)

	const handleClick = () => {
		setShowUser(!showUser)
	}
	return (
		<Main>
			{showUser ? (
				<>
					<AddUserForm />{" "}
					<div
						style={{
							display: "flex",
							flexDirection: "row",
							width: "100%",
							justifyContent: "space-between",
						}}
					>
						<ButtonAction onClick={handleClick}>
							Add Location
						</ButtonAction>
						<ButtonAction onClick={() => setFormState("status")}>
							Back Home
						</ButtonAction>
					</div>
				</>
			) : (
				<>
					{" "}
					<AddLocationForm />{" "}
					<div
						style={{
							display: "flex",
							flexDirection: "row",
							width: "100%",
							justifyContent: "space-between",
						}}
					>
						<ButtonAction onClick={handleClick}>
							Add User
						</ButtonAction>
						<ButtonAction onClick={() => setFormState("status")}>
							Back Home
						</ButtonAction>
					</div>
				</>
			)}{" "}
		</Main>
	)
}
export default Settings
