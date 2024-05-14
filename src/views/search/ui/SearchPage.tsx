import { Suspense } from 'react'
import ClubList from './ClubList'
import Filter from '@/features/filter'

interface SearchPageProps {
  searchParams: { [K: string]: string }
}
const SearchPage: React.FC<SearchPageProps> = ({ searchParams }) => {
  return (
    <>
      <Suspense>
        <Filter />
      </Suspense>
      <ClubList searchParams={searchParams} />
    </>
  )
}

export default SearchPage
