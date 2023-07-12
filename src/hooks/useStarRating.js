import { useState, useEffect } from 'react'

export default function useStarRating ({ totalStars }) {
	const [stars] = useState(Number(localStorage.getItem('stars')) ?? totalStars)
	const [hoveredStars, setHoveredStars] = useState(Number(localStorage.getItem('hoveredStars')) ?? -1)
	const [rating, setRating] = useState(Number(localStorage.getItem('rating')) ?? -1)

	useEffect(() => {
		localStorage.setItem('rating', JSON.stringify(rating))
		localStorage.setItem('stars', JSON.stringify(stars))
		localStorage.setItem('hoveredStars', JSON.stringify(hoveredStars))
	}, [rating, stars, hoveredStars])

	const handleRating = (value) => {
		setRating(value)
	}

	const handleSetHoveredStars = (value) => {
		setHoveredStars(value)
	}

	return {
		stars,
		hoveredStars,
		rating,
		handleRating,
		handleSetHoveredStars,
	}
}