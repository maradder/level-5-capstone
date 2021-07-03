import React, { useState, useEffect } from "react"
import { ButtonAlt } from "../StyledComponents"

const ButtonSmall = props => {
	return <ButtonAlt form={props.form}>{props.label}</ButtonAlt>
}

export default ButtonSmall
