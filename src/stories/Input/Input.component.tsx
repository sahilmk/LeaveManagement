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
    onChange?: (event: React.ChangeEvent<HTMLInputElement> | undefined) => void,
    onFocus?: (event?: React.FocusEvent<HTMLInputElement> | undefined) => void,
}

function Input({ type, placeholder, value, inputtype, padding, width, onChange, onBlur, onFocus }: InputTypes) {

    return (
        <InputStyled
            type={type}
            placeholder={placeholder}
            value={value}
            inputtype={inputtype}
            padding={padding}
            width={width}
            onChange={onChange}
            onBlur={onBlur}
            onFocus={onFocus}
        />
    )
}

export default Input
