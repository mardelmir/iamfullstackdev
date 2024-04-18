import { useState } from 'react'

const InputCreate = () => {
    const [text, setText] = useState({ title: '' })
    const urlPost = 'http://localhost:3000/create'

    const handleOnChange = (e) => { setText({ title: e.target.value }) }
    
    const handleSummit = async (e) => {
        e.preventDefault()
        await fetch(urlPost, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(text)
        })
        setText({ title: '' })
    }

    return (
        <form onSubmit={handleSummit}>
            <input type='text' value={text.title} onChange={handleOnChange} />
            <button type='submit'>Añadir</button>
        </form>
    )
}

export default InputCreate