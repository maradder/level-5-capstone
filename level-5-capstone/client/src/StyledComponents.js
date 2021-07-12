import styled, { createGlobalStyle } from "styled-components"
import SliderImg from "./img/Untitled.svg"

const GlobalStyle = createGlobalStyle`
* {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
}

html {
	padding-top: 50px;
	min-height: 100vh;
	display: flex;
	flex-direction: row;
	justify-content: center;
	background-image:
	linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%),
}
body {
	font-family: "Inter", sans-serif;
}

h3 {
	font-size: 24px;
	background-color: transparent;
	margin-bottom: 16px;
}
`

const UserCard = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	height: 100px;
	width: 360px;
	border: 1px solid #000000;
	border-radius: 24px;
	margin: 8px auto;
	padding: 16px;
	background-image: linear-gradient(to top, #09203f 0%, #537895 100%);

	:hover {
		box-shadow: 4px 4px 4px #121212;
		background-image: linear-gradient(to top, #08103e 30%, #537895 100%);
	}
`
const BannerContainer = styled.div`
	width: 262px;
	height: 62px;
	display: flex;
	justify-content: center;
	align-items: flex-start;
	padding: 16px;
	border: 1px solid #000000;
	box-sizing: border-box;
	box-shadow: 9px 9px 0px #ffe478;
	border-radius: 4px;
`

const DateBanner = styled.h3`
	width: 310px;
	height: 90px;
	font-style: normal;
	font-weight: 600;
	font-size: 22px;
	line-height: 27px;
	text-align: center;
	color: #000000;
`
const Image = styled.img`
	height: 100%;
	width: auto;
	border-radius: 50%;
	margin: auto 0;
	justify-self: flex-start;
`

const UserCardName = styled.label`
	font-size: 4.8rem;
	font-family: "Inter", sans-serif;
	text-transform: capitalize;
	font-weight: 300;
	color: #ffffff;
`
// Buttons

const ButtonBase = styled.button`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	padding: 0 50px;
	margin: 12px 0;
	width: 230px;
	height: 51px;
	border: ${props => (props.clicked ? "none" : "1px solid #121212")};
	background-color: ${props => (props.clicked ? "#35d0a2" : "#FFE478")};
	border-radius: 50px;

	:hover {
		border: 2px solid #c13909;
	}
`

const LocationBase = styled.button`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	padding: 0 50px;
	margin: 12px 0;
	width: 230px;
	height: 51px;
	border: ${props => (props.clicked ? "none" : "1px solid #121212")};
	background-color: ${props => (props.clicked ? "#35d0a2" : "#FFE478")};
	border-radius: 50px;

	:hover {
		border: 2px solid #c13909;
	}
`

const CustomSlider = styled.input`
	display: flex;
	flex-direction: row;
	align-items: center;
	transform: rotate(270deg);
	margin-top: 30px;
	height: 350px;
	width: 55vh;
	border-radius: 8px 32px 32px 8px;
	background-image: linear-gradient(
			90deg,
			#35d0a2fd ${props => 0.95 * props.value}%,
			#ffe47810 ${props => 0.99 * props.value}%
		),
		url(${SliderImg});
	-webkit-appearance: none;
	background-size: cover;

	:focus {
		outline: none;
	}

	/* Chrome & Safari */
	::-webkit-slider-runnable-track {
		border-radius: 4px;
		width: 100%;
		height: 10px;
		cursor: pointer;
	}

	::-webkit-slider-thumb {
		-webkit-appearance: none;
		min-height: 37vh;
		max-height: 37vh;
		width: 32px;
		background: #35d0a2ae;
		border-radius: 8px 32px 32px 8px;
		overflow: none;
		margin-top: -32.4%;
		margin-bottom: 0.5px;
		cursor: pointer;
	}
`
const SlideForm = styled.form`
	display: column;
	width: 400px;
	max-height: 100vh;
	display: flex;
	flex-direction: column;
	height: fit-content;
	align-items: center;
	justify-content: center;
`
const ButtonIncrease = styled.button`
	background-color: transparent;
	outline: none;
	border: none;
	position: relative;
	top: 30px;

	z-index: 5;
`
const SliderLabel = styled.label`
	display: none;
	width: 100%;
	font-family: sans-serif;
	font-style: normal;
	font-weight: 600;
	font-size: 24px;
	line-height: 29px;
	z-index: 5;
	color: #ffffff;
	orientation: vertical;
`

const ButtonDecrease = styled.button`
	height: 90px;
	z-index: 3;
	background-color: transparent;
	outline: none;
	border: none;
	position: relative;
	top: -50px;
	z-index: 5;
`

const ButtonAlt = styled(ButtonBase)`
	min-width: 126px;
	max-width: 126px;
	min-height: 44px;
	max-height: 44px;
	background: #6d6d6d;
`

const ButtonAction = styled(ButtonBase)`
	transition: all 0.3s;
	width: 160px;
	min-width: 120px;
	height: 41px;
	background: #000000;
	box-shadow: 3px 4px 0px #ffe478;
	border-radius: 50px;
	color: white;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;

	img {
		fill: #f00;
		margin: auto 8px;
	}

	:hover {
		transition: 3s;
		background: radial-gradient(#9be15d 0%, #00e3ae 100%);
		box-shadow: 3px 4px 5px #ffe478;
	}
`
//  Buttons

//  Clock Face
const clockRadius = 140
const ClockBodyBase = styled.div`
	position: relative;
	height: ${clockRadius * 2}px;
	width: ${clockRadius * 2}px;
	background: radial-gradient(
		50% 50% at 50% 50%,
		#ffdf5f 0%,
		rgba(255, 228, 120, 0.52) 34.33%,
		rgba(255, 228, 120, 0) 70%
	);

	border: 5px solid #00000099;
	box-sizing: border-box;
	padding: 0;
	margin: 1em auto;
	border-radius: 50%;
	overflow: hidden;
	p {
		color: white;
		font-size: 24px;
	}
	box-shadow: 1px 1px 19px 10px #121212cd;
`

const ClockFaceSegment = styled.div`
	position: absolute;
	top: 0px;
	left: ${120}px;
	padding: 4px auto;
	margin: auto;
	height: 100%;
	display: flex;
	flex-direction: row;
	justify-content: center;
	height: clockRadius * 2;
	width: clockRadius * 2;
	transform: rotate(${props => props.rotation});
`
const avatarDiameter = 20
const howFar = clockRadius - (avatarDiameter - 4)
const AvatarBase = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	height: ${avatarDiameter}px;
	width: ${avatarDiameter}px;
	border-radius: 50%;
	background-color: tomato;
	font-family: "Inter", sans-serif;
	/* transform: translateY(${props => props.yval}px); */
	/* ${props =>
		props.home ? "transform: translateY(110px)" : "z-index: 0"} */
	animation: ${props => props.slide} ${props => props.adjert}s infinite;
	box-shadow: 2px 2px 3px #121212;
`

const AvatarHomeContainer = styled.div`
	position: absolute;
	top: 130px;
	left: 130px;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	transform: rotate(${props => props.rotation}deg);
	height: ${clockRadius / 4};
	width: fit-content;
	background-color: transparent;
`
const AvatarHome = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	height: ${avatarDiameter}px;
	width: ${avatarDiameter}px;
	border-radius: 50%;
	background-color: tomato;
	font-family: "Inter", sans-serif;
	transform: translateY(29px);
	box-shadow: 2px 2px 3px #121212;
`
const Main = styled.main`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	/* background: linear-gradient(#e66465, #9198e5); */
	border: 1px solid #000000;
	border-radius: 24px;
	min-width: 30vw;
	max-width: fit-content;
	min-height: 80vh;
	max-height: 80vh;
	margin: auto;
	padding: 24px;
`

//  Clock Face
export {
	GlobalStyle,
	Image,
	UserCard,
	UserCardName,
	DateBanner,
	BannerContainer,
	ButtonBase,
	LocationBase,
	CustomSlider,
	SlideForm,
	ButtonIncrease,
	SliderLabel,
	ButtonDecrease,
	ButtonAlt,
	ButtonAction,
	ClockBodyBase,
	clockRadius,
	ClockFaceSegment,
	avatarDiameter,
	howFar,
	AvatarHomeContainer,
	AvatarBase,
	AvatarHome,
	Main,
}
