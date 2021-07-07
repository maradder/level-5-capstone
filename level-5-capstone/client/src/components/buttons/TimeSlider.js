import React, { useState, useEffect } from "react"
import { Main } from "../../StyledComponents"

const TimeSlider = props => {
	const [xStart, setXStart] = useState()
	const [xEnd, setXEnd] = useState()
	const handleClick = e => {
		e.preventDefault()
		console.log(e.screenY)
	}

	useEffect(() => {
		const sliderHandle = document.querySelector(".sliderHandle")
		const rect = sliderHandle.getBoundingClientRect()
		setXStart(rect.bottom)
		setXEnd(rect.bottom + 20)
		sliderHandle.addEventListener("drag", e => {
			setXEnd(e.screenY)
		})
		return () => {
			console.log("Loaded")
		}
	}, [])

	return (
		<Main style={{}} className="mainContainer">
			<div
				onClick={handleClick}
				onDrag={e => setXStart(e.screenY)}
				style={{
					minHeight: "600px",
					width: "350px",
					backgroundColor: "Pink",
					display: "flex",
					flexDirection: "column",
					justifyContent: "space-around",
					alignItems: "center",
				}}
				className="sliderBody"
			>
				<button
					style={{
						height: "30px",
						width: "90px",
						borderRadius: "8px",
					}}
				>
					+
				</button>
				<div
					onClick={handleClick}
					style={{
						width: "15px",
						height: "500px",
						backgroundColor: "blue",
						display: "flex",
						flexDirection: "column",
						justifyContent: "space-around",
						alignItems: "center",
					}}
					className="sliderTrack"
				>
					<div
						onClick={handleClick}
						draggable="true"
						style={{
							minWidth: "350px",
							backgroundColor: "yellow",
							height: `${xStart + (xEnd - xStart)}px`,
						}}
						className="sliderHandle"
					>
						Handle
					</div>
				</div>
				<button
					style={{
						height: "30px",
						width: "90px",
						borderRadius: "8px",
					}}
				>
					-
				</button>
			</div>
		</Main>
	)
}

export default TimeSlider
