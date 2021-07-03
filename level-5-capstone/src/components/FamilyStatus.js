import React, { useState, useEffect, useContext } from "react"
import { PersonContext } from "../context/PersonContext"
import Avatar from "./Avatar"
import {
	avatarDiameter,
	clockRadius,
	PersonInstance,
} from "../StyledComponents"

const FamilyStatus = props => {
	const { familyStatus } = useContext(PersonContext)

	return (
		<div style={{ position: "relative" }}>
			{familyStatus.map((person, index) => {
				console.log(person.location.rotation)

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
							transform:
								"rotate(" + person.location.rotation + "deg)",
						}}
						key={index}
					>
						<Avatar
							home={person.atHome}
							beback={person.ert}
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
