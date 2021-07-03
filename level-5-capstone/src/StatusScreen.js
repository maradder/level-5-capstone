import React, { useState, useEffect } from "react"
import ActionButton from "./components/ActionButton"
import Button from "./components/Button"
import ClockBody from "./components/clockFace/ClockBody"
import { Main } from "./StyledComponents"
import { ButtonAction, DateBanner, BannerContainer } from "./StyledComponents"

const StatusScreen = props => {
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

	return (
		<Main style={{}}>
			<BannerContainer>
				<DateBanner>Happy {daysOfWeek[today]}!!</DateBanner>
			</BannerContainer>

			<ClockBody />
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}
			>
				<ActionButton label="Heading Out" />
				<ActionButton home={true} label="Checking In" />
			</div>
		</Main>
	)
}

export default StatusScreen
