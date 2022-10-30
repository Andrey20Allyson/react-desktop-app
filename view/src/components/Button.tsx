import React from 'react'
import './Button.css'

interface Props {
    startCount: number
}

export default function Button(props: React.HTMLProps<{}>) {
    const text = props.children?.toString();
    return (
        <input type={'button'} className='Button' value={text} onClick={(ev) => {
            console.log('Olá, mundo!')
        }} />
    )
}