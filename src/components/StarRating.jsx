import useStarRating from "../hooks/useStarRating"
import { RATING_MESSAGES } from "../consts/rating"
import PropTypes from 'prop-types'

export default function StarRating({ totalStars }) {
	const {
		stars,
		hoveredStars,
		rating,
		handleRating,
		handleSetHoveredStars,
	} = useStarRating({ totalStars })

	return (
		<section className="star-container">
			<h2 className="card-title">How was your experience?</h2>

			{[...Array(stars)].map((_, index) => (
				<span
					key={index}
					onMouseOver={() => handleSetHoveredStars(index)}
					onMouseOut={() => handleSetHoveredStars(rating)}
					onClick={() => handleRating(index)}
					className={index <= hoveredStars ? 'hovered-stars' : ''}
				>
					&#9733;
				</span>
			))}

			<p className="card-rating-message">
				{RATING_MESSAGES?.[hoveredStars]}
			</p>
		</section>
	)
}

StarRating.propTypes = {
	totalStars: PropTypes.number.isRequired,
}