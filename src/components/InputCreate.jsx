import { useState } from 'react'

const InputCreate = () => {
    const [text, setText] = useState('')

    const handleSummit = (e) => {
        e.preventDefault()
    }

    return (
        <form onSubmit={handleSummit} method='POST' action='/create'>
            <input type='text' value={text} onChange={e => setText(e.target.value)} />
            <button type='submit'>Añadir</button>
        </form>
    )
}

export default InputCreate