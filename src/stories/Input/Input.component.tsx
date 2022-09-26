import React from 'react'
import { InputStyled } from './input.styled'

type InputTypes = {
    type: string,
    placeholder: string,
    name?: string,
    value?: string,
    inputtype: string,
    padding: string,
    width: number
    onBlur?: (event?: React.FocusEvent<HTMLInputElement> | undefined) => void,
    onChange?: (event: any) => void,
    onFocus?: (event?: React.FocusEvent<HTMLInputElement> | undefined) => void,
}

function Input({ type, placeholder, value, inputtype, padding, width, onChange }: InputTypes) {

    return (
        <InputStyled
            type={type}
            placeholder={placeholder}
            value={value}
            inputtype={inputtype}
            padding={padding}
            width={width}
            onChange={(e) => console.log(e.target.value)} />
    )
}

export default Input
