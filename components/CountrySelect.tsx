import { useRouter } from 'next/router'
import React, { FunctionComponent } from 'react'
import { Country } from '../types'

export const noCountriesMessage = 'No countries found on the selected continent'

export const createCountryUrl = (value: string): string => (
  `/country/${value}`
)

export const createContinentUrl = (value: string): string => (
  `/continent/${value}`
)

interface Props {
  countries: Country[]
}

const CountrySelect: FunctionComponent<Props> = ({
  countries,
}: Props) => {
  const router = useRouter()

  const nextCountries: Country[] = [
    // Country that will return an empty response from the api
    {
      name: 'Prussia',
      native: 'Prūsa',
      code: 'PRU',
      emoji: '🏴',
      emojiU: '',
      currency: 'Reichsthaler',
      languages: [],
      continent: {code: 'EU', name: 'Europe', countries: [] }
    },
    ...countries,
  ]

  const handleOnChange = (evt: React.ChangeEvent<HTMLSelectElement>) => {
    evt.preventDefault()
    router.push(createCountryUrl(evt.currentTarget.value))
  }

  if (!countries.length) {
    return (
      <div>{noCountriesMessage}</div>
    )
  }

  return (
    <select
      name="country-list"
      id="country-list"
      onChange={handleOnChange}
    >
      <option value="">-- Select One --</option>
      {nextCountries.map((country) => {
        return (
          <option
            key={country.code}
            value={country.code}
          >
            {country.emoji}
            {' '}
            {country.name}
          </option>
        )
      })}
    </select>
  )
}

export default CountrySelect
