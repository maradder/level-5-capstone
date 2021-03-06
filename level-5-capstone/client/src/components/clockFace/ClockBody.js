import React from "react"
import HomeLogoBlk from "../../icons/home_black_24dp_black.svg"
import { ClockBodyBase } from "../../StyledComponents"
// import { PersonContext } from "../../context/PersonContext"
import ClockBezel from "./ClockBezel"
import FamilyStatus from "../avatars/FamilyStatus"

const ClockBody = props => {
	// const { familyStatus } = useContext(PersonContext)

	return (
		<ClockBodyBase className="circle">
			<ClockBezel />
			<img
				src={HomeLogoBlk}
				alt="Check in at home"
				style={{
					position: "absolute",
					top: "46%",
					left: "46%",
					fill: "#000000",
				}}
			/>
			{/* <Avatar beback={props.adjert} yval={yVal} /> */}
			<FamilyStatus />
		</ClockBodyBase>
	)
}

export default ClockBody
