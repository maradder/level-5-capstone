import React, { useContext } from "react"
import { ClockFaceSegment } from "../../StyledComponents"
import { PersonContext } from "../../context/PersonContext"

const ClockBezel = props => {
	const { locations } = useContext(PersonContext)
	const degreeEach = 360 / locations.length
	return (
		<>
			{locations.map((place, index) => {
				return (
					<ClockFaceSegment rotation={`${degreeEach * index}deg`}>
						{place.location}
					</ClockFaceSegment>
				)
			})}
		</>
	)
}

export default ClockBezel
