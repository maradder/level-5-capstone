import React from "react"
import {
	AvatarBase,
	AvatarHome,
	AvatarHomeContainer,
	avatarDiameter,
	clockRadius,
} from "../../StyledComponents"
import { keyframes } from "styled-components"

const Avatar = props => {
	const slide = keyframes`
            0.0%{
                transform: translatey(-1px);
            }
            99.2%{
                transform: translatey(${clockRadius - (avatarDiameter - 4)}px);
            }
`
	const randomRotation = Math.floor(Math.random() * 360)
	return (
		<div>
			{props.home ? (
				<AvatarHomeContainer rotation={randomRotation}>
					<AvatarHome>{props.name}</AvatarHome>
				</AvatarHomeContainer>
			) : (
				<AvatarBase
					// motion={motion}
					home={props.home}
					adjert={props.beback}
					slide={slide}
					rotate={props.rotate}
				>
					{props.name}
				</AvatarBase>
			)}
		</div>
	)
}

export default Avatar
