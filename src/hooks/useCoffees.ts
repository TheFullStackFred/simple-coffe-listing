import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export type Coffee = {
  available: boolean
  id: number
  image: string
  name: string
  popular: boolean
  price: string
  rating: string
  votes: number
}

export const useCoffees = () =>
  useQuery({
    queryKey: ['coffees'],
    queryFn: () =>
      axios
        .get<Coffee[]>(
          'https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json'
        )
        .then((response) => response.data)
  })
