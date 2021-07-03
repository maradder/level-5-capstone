import React, { useState } from "react"
import {
	AvatarBase,
	AvatarHome,
	avatarDiameter,
	clockRadius,
} from "../StyledComponents"
import styled, { keyframes } from "styled-components"

const Avatar = props => {
	const adjert = props.beback
	const slide = keyframes`
            0.0%{
                transform: translatey(-1px);
            }
            99.2%{
                transform: translatey(${clockRadius - (avatarDiameter - 4)}px);
            }
`
	// const motion = props.home
	// 	? "animation: 'none'"
	// 	: `animation:  ${slide} ${adjert}`

	return (
		<div>
			{props.home ? (
				<AvatarHome>{props.name}</AvatarHome>
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
