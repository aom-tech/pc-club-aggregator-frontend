import ClubList from './ClubList'
import Filter from '@/features/filter'

const SearchPage: React.FC = () => {
  return (
    <>
      <Filter/>
      <ClubList />
    </>
  )
}

export default SearchPage
