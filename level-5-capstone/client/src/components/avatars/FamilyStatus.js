import React, { useContext } from "react"
import { PersonContext } from "../../context/PersonContext"
import Avatar from "./Avatar"
import { clockRadius } from "../../StyledComponents"

const FamilyStatus = props => {
	const { familyMembers } = useContext(PersonContext)
	return (
		<div style={{ position: "relative" }}>
			{familyMembers.map((person, index) => {
				const rotation =
					person.location === "gym"
						? 90
						: person.location === "trail"
						? 315
						: person.location === "store"
						? 50
						: person.location === "work"
						? 135
						: person.location === "school"
						? 0
						: person.location === "downtown"
						? 180
						: person.location === "cafe"
						? 225
						: person.location === "friends"
						? 270
						: 0
				return (
					<div
						style={{
							position: "absolute",
							top: "0",
							left: "0",
							display: "flex",
							flexDirection: "row",
							justifyContent: "center",
							height: clockRadius * 2,
							width: clockRadius * 2,
							backgroundColor: "transparent",
							transform: "rotate(" + rotation + "deg)",
						}}
						key={index}
					>
						<Avatar
							home={person.atHome}
							beback={person.estReturnTime}
							rotate={person.location.rotation}
							name={person.name.charAt(0)}
							// yval={yVal}
						/>
					</div>
				)
			})}
		</div>
	)
}

export default FamilyStatus
