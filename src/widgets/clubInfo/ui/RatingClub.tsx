import { Star } from 'lucide-react'

interface RatingClubProps {
  className?: string
  rating: number
  fill: string
}

const RatingClub: React.FC<RatingClubProps> = ({ className, rating, fill }) => {
  return (
    <div className={className}>
      <Star fill={fill} size={28} />
      <span>{rating}</span>
    </div>
  )
}

export default RatingClub
