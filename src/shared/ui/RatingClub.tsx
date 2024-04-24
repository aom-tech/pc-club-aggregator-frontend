import { Star } from 'lucide-react'

interface RatingClubProps {
  className?: string
  rating: number
  fill: string
  size?: number
}

const RatingClub: React.FC<RatingClubProps> = ({ className, rating, fill, size=28 }) => {
  return (
    <div className={className}>
      <Star fill={fill} size={size} />
      <span>{rating}</span>
    </div>
  )
}

export default RatingClub
