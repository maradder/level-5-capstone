import React, { useState, useEffect, useContext } from "react"
import { clockRadius } from "../../StyledComponents"
import { PersonContext } from "../../context/PersonContext"

const ClockBezel = props => {
	return (
		<div>
			<div
				style={{
					position: "absolute",
					top: 0,
					left: 0,
					display: "flex",
					flexDirection: "row",
					justifyContent: "center",
					height: clockRadius * 2,
					width: clockRadius * 2,
					transform: "rotate(0deg)",
				}}
			>
				School
			</div>
			<div
				style={{
					position: "absolute",
					top: 0,
					left: 0,
					display: "flex",
					flexDirection: "row",
					justifyContent: "center",
					height: clockRadius * 2,
					width: clockRadius * 2,

					transform: "rotate(45deg)",
				}}
			>
				Store
			</div>
			<div
				style={{
					position: "absolute",
					top: 0,
					left: 0,
					display: "flex",
					flexDirection: "row",
					justifyContent: "center",
					height: clockRadius * 2,
					width: clockRadius * 2,

					transform: "rotate(90deg)",
				}}
			>
				Gym{" "}
			</div>
			<div
				style={{
					position: "absolute",
					top: 0,
					left: 0,
					display: "flex",
					flexDirection: "row",
					justifyContent: "center",
					height: clockRadius * 2,
					width: clockRadius * 2,

					transform: "rotate(135deg)",
				}}
			>
				Work
			</div>
			<div
				style={{
					position: "absolute",
					top: 0,
					left: 0,
					display: "flex",
					flexDirection: "row",
					justifyContent: "center",
					height: clockRadius * 2,
					width: clockRadius * 2,

					transform: "rotate(180deg)",
				}}
			>
				Downtown
			</div>
			<div
				style={{
					position: "absolute",
					top: 0,
					left: 0,
					display: "flex",
					flexDirection: "row",
					justifyContent: "center",
					height: clockRadius * 2,
					width: clockRadius * 2,

					transform: "rotate(225deg)",
				}}
			>
				Cafe
			</div>
			<div
				style={{
					position: "absolute",
					top: 0,
					left: 0,
					display: "flex",
					flexDirection: "row",
					justifyContent: "center",
					height: clockRadius * 2,
					width: clockRadius * 2,

					transform: "rotate(270deg)",
				}}
			>
				Friends
			</div>
			<div
				style={{
					position: "absolute",
					top: 0,
					left: 0,
					display: "flex",
					flexDirection: "row",
					justifyContent: "center",
					height: clockRadius * 2,
					width: clockRadius * 2,

					transform: "rotate(315deg)",
				}}
			>
				Trail
			</div>

			{props.children}
		</div>
	)
}

export default ClockBezel
