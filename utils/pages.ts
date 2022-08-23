/**
 * Utils used by `/pages`
 */
import { Filter } from "../types"

export const FILTER_LS = 'filter'

export const filters: {
  [x: string]: Filter
} = {
  europe: {
    name: 'europe',
    continent: { eq: 'EU' },
    currency: { eq: 'EUR' }
  },
  africa: {
    name: 'africa',
    continent: { eq: 'AF'}
  },
  asia:{
    name: 'asia',
    continent: { eq: 'AS'}
  },
  oceania: {
    name: 'oceania',
    continent: { eq: 'OC'}
  },
  antarctica: {
    name: 'antarctiaca',
    continent: { eq: 'AN'}
  },
  mu: {
    name: 'mu',
    continent: { eq: 'MU' }
  }
}

/**
 * The gql filter will not accept the name property
 * Return everything except that
 */
export const cleanedFilter = (filter: Filter): Omit<Filter, 'name'> => {
  const { name, ...rest } = filter
  return rest
}

export const saveFilter = (filter: Filter) => {
  window.localStorage.setItem(FILTER_LS, JSON.stringify(filter))
}

export const getSavedFilter = (): Filter | null => {
  const stored = window.localStorage.getItem(FILTER_LS)
  if (stored) {
    try {
      const parsed: Filter = JSON.parse(stored)
      return parsed
    } catch {
      // do nothing
    }
  }

  return null
}
