import { useState } from 'react'

const InputCreate = () => {
    const [title, setTitle] = useState('')
    const [res, setRes] = useState('Nada todavía')

    const handleSummit = async (e) => {
        e.preventDefault()
        const urlPost = 'http://localhost:3000/create'
        const payload = { title }

        try {
            const response = await fetch(urlPost, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            })
            const data = await response.json() // para visualizar lo que se ha enviado
            setRes(data.title)
            setTitle('')
        }
        catch (error) { console.log(error) }
    }
    
    return (
        <>
            <form onSubmit={handleSummit}>
                <input
                    type='text'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <button type='submit'>Añadir</button>
            </form>
            <div>
                Se ha enviado: {res}
            </div>
        </>
    )
}

export default InputCreate