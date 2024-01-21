import { Coffee } from '../hooks/useCoffees'
import starFill from '../assets/Star_fill.svg'
import star from '../assets/Star.svg'

const CoffeeCard = ({
  name,
  image,
  price,
  rating,
  votes,
  popular,
  available
}: Coffee) => {
  return (
    <div className='coffee-card'>
      {popular && <div className='coffee-badge'>Popular</div>}
      <img src={image} alt={name} className='coffee-image' />
      <div className='coffee-details'>
        <p className='coffee-name'>{name}</p>
        <p className='coffee-price'>{price}</p>
      </div>
      <div className='coffee-rating'>
        <img src={rating ? starFill : star} alt='rating' />
        {rating ? (
          <>
            <p className='coffee-rating-value'>{rating}</p>
            <p className='coffee-rating-votes'>({votes} votes)</p>
          </>
        ) : (
          <p className='coffee-rating-votes'>No ratings</p>
        )}
        {!available && <p className='coffe-rating-available'>Sold out</p>}
      </div>
    </div>
  )
}

export default CoffeeCard
