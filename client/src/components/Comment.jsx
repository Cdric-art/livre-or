import React from 'react'
import { dateParser } from './utils.js'

const Comment = ({ comment }) => {

	return (
		<>
			<p>{comment.id}</p>
			<p>{comment.text}</p>
			<p>{dateParser(comment.created_at)}</p>
		</>
	)
}

export default Comment