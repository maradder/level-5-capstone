import React, { useContext, useState, useEffect } from "react"
import ActionButton from "./components/buttons/ActionButton"
import { DisplayContext } from "./context/DisplayContext"
import ClockBody from "./components/clockFace/ClockBody"
import { Main } from "./StyledComponents"
import { DateBanner, BannerContainer } from "./StyledComponents"
import { PersonContext } from "./context/PersonContext"
import HomeLogo from "./icons/home_black_24dp_black.svg"

const StatusScreen = props => {
	const { setComingBack, familyMembers } = useContext(PersonContext)
	const { setFormState } = useContext(DisplayContext)
	const [familyAtHome, setFamilyAtHome] = useState(0)

	const daysOfWeek = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	]
	const date = new Date()
	const today = date.getDay()

	const famAtHome = () => {
		familyMembers.map(person =>
			person.atHome
				? setFamilyAtHome(prevState => prevState + 1)
				: familyAtHome
		)
	}

	const handleStartCheckIn = e => {
		e.preventDefault()
		setComingBack([])
		setFormState("checkingIn")
	}
	const handleStartHeadOut = e => {
		e.preventDefault()
		setFormState("headingOut")
	}

	useEffect(() => {
		famAtHome()
		return () => {
			console.log("FamAtHome")
		}
	}, [])
	return (
		<Main>
			<BannerContainer>
				<DateBanner>Happy {daysOfWeek[today]}!!</DateBanner>
			</BannerContainer>
			<div
				style={{
					display: "flex",
					flexDirection: "row",
					alignItems: "center",
				}}
			>
				<img
					src={HomeLogo}
					alt="Check in at home"
					style={{
						height: "32px",
						width: "32px",
						marginTop: "-20px",
					}}
				/>
				<h3>: {familyAtHome}</h3>
			</div>
			<div style={{ minHeight: "fit-content", minWidth: "fit-content" }}>
				<ClockBody />
			</div>
			<div
				style={{
					display: "flex",
					flexDirection: "row",
					justifyContent: "space-between",
					width: "100%",
				}}
			>
				<ActionButton
					label="Heading Out"
					handleclick={handleStartHeadOut}
					name="checkout"
				/>
				<ActionButton
					type="button"
					home={true}
					label="Checking In"
					handleclick={handleStartCheckIn}
					name="checkin"
				/>
			</div>
		</Main>
	)
}

export default StatusScreen
