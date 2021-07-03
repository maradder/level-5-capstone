import styled from "styled-components"

// const GlobalStyle = createGlobalStyle`
//     background-image: linear-gradient(to top, #30cfd0 0%, #330867 100%);
// `

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
	align-items: bottom;
	background: #ffffff;
	padding-bottom: 8px;
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
	font-family: --apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
		Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
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
	background: #35d0a2;
	border-radius: 50px;
`

const ButtonAlt = styled(ButtonBase)`
	width: 126px;
	height: 44px;
	background: #6d6d6d;
`

const ButtonAction = styled(ButtonBase)`
	width: 160px;
	min-width: fit-content;
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
	border: 2px solid #00000099;
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
	font-family: sans-serif;
	/* transform: translateY(${props => props.yval}px); */
	/* ${props =>
		props.home ? "transform: translateY(110px)" : "z-index: 0"} */
	animation: ${props => props.slide} ${props => props.adjert}s;
	box-shadow: 2px 2px 3px #121212;
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
	font-family: sans-serif;
	/* transform: translateY(${props => props.yval}px); */
	transform: translateY(110px);
	/* animation: ${props => props.slide} ${props => props.adjert}s; */
	box-shadow: 2px 2px 3px #121212;
`
const Main = styled.main`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	border: 1px solid #000000;
	width: fit-content;
	min-height: 90vh;
	padding: 4vw;
`

//  Clock Face
export {
	Image,
	UserCard,
	UserCardName,
	DateBanner,
	BannerContainer,
	ButtonBase,
	ButtonAlt,
	ButtonAction,
	ClockBodyBase,
	clockRadius,
	avatarDiameter,
	howFar,
	AvatarBase,
	AvatarHome,
	Main,
}
