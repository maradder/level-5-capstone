import React, { useState, useContext } from "react"
import { DisplayContext } from "../context/DisplayContext"
import { Main, ButtonAction } from "../StyledComponents"
import AddLocationForm from "./forms/AddLocationForm"
import AddUserForm from "./forms/AddUserForm"

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
