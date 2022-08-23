import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Country, Filter } from '../types'
import CountrySelect from '../components/CountrySelect'
import { QUERY_ALL_COUNTRIES } from '../utils/apollo'
import { useQuery } from '@apollo/client'
import { useEffect, useState } from 'react'
import FilterButton from '../components/FilterButton'
import { cleanedFilter, getSavedFilter, saveFilter, filters  } from '../utils/pages'

const title = 'Choose a location'

const HomePage: NextPage = () => {
  const [filter, setFilter] = useState<Filter>(filters.europe)
  const [initialRun, setInitialRun] = useState(false)

  const { data, loading, error } = useQuery<{ countries: Country[] }>(
    QUERY_ALL_COUNTRIES,
    {
      skip: !initialRun,
      variables: {
        filter: cleanedFilter(filter),
      }
    }
  )
  
  useEffect(() => {
    // get saved filter from localStorage
    const savedFilter = getSavedFilter()

    // if there is a saved filter, attempt to get the matching
    // filter from our `filters` object
    // then setFilter state
    if (savedFilter && savedFilter.name) {
      const nextFilter = Object.values(filters)
        .find((filter) => filter.name === savedFilter.name)

      if (nextFilter) {
        setFilter(nextFilter)
      }
    }

    // we've done our initial setup
    // set initial run to true to trigger the useQuery
    setInitialRun(true)
  }, [])

  const handleSetFilter = (filter: Filter) => {
    setFilter(filter)
    saveFilter(filter)
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.subtitle}>{title}</h1>

        {loading && (
          <div>Loading...</div>
        )}

        {(error) && (
          <div>Error loading</div>
        )}

        {!error && !loading && data && (
          <CountrySelect countries={data.countries} />
        )}

        <div>
          <h2>Filter</h2>
          <div className={styles.filterContainer}>
            {Object.entries(filters).map(([name, aFilter]) => (
              <FilterButton
                active={filter === aFilter}
                onClick={() => handleSetFilter(aFilter)}
                text={name}
                key={name}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

export default HomePage
