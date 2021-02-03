import React, { useEffect, useState } from 'react'
import Comment from './Comment.jsx'
import axios from 'axios'

const AllComments = () => {

	const [data, setData] = useState([])
	const [isLoad, setIsLoad] = useState(false)

	useEffect( () => {
		const fetchData = async () => {
			await axios({
				method: 'get',
				url: `${import.meta.env.VITE_API_URL}/api/comments`
			})
				.then(res => {
					setData(res.data)
					setIsLoad(true)
				})
				.catch(err => console.log(err))
		}
		fetchData()
	}, [isLoad])

	return (
		<div className="container__comments">
			<h2>Tout les commentaires :</h2>
			<div className='container__comment'>
				{isLoad ? data.map(comment => (
					<Comment key={comment.id} comment={comment}/>
				)) : (
					<p>Chargement...</p>
				)}
			</div>
		</div>
	)
}

export default AllComments