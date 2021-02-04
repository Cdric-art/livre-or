import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const AddComment = ({ refresh }) => {

	const [text, setText] = useState('')
	const [response, setResponse] = useState('')

	const handleSubmit = async (e) => {
		e.preventDefault();
		await axios({
			method: 'post',
			url: `${import.meta.env.VITE_API_URL}/api/createdComment`,
			data: { text }
		})
			.then(res => {
				setResponse(res.data.message)
				setText('')
				refresh()
			})
			.catch(err => setResponse(err))
	}

	return (
		<div className="addComment">
			<form className="form" onSubmit={handleSubmit}>
				<label className="label" htmlFor="comment">Votre commentaire :</label>
				<textarea className="input" name="comment" value={text} onChange={(e) => setText(e.target.value)}/>
				<input className="btn" type="submit"/>
			</form>
			{response && (
				<div className="response__server">
					<p>{response}</p>
				</div>
			)}
		</div>
	)
}

export default AddComment