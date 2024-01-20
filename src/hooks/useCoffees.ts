import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export const useCoffees = () =>
  useQuery({
    queryKey: ['coffees'],
    queryFn: () =>
      axios
        .get(
          'https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json'
        )
        .then((response) => response.data)
  })
