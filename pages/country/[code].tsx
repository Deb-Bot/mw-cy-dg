import React from 'react'
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import styles from '../../styles/Home.module.css'
import Link from 'next/link';
import { Country } from '../../types';
import { getSelectedCountry } from '../../utils/apollo';
import { createContinentUrl } from '../../components/CountrySelect';

export const getServerSideProps = getSelectedCountry

const CountryPage: NextPage<{ country: Country }> = ({ country }) => {
  const router = useRouter()

  if (!country) {
    return (
       <div>{router.query.country} Country not found</div>
    )
  }

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>{country.name} ({country.native})</h1>

        <div className={styles.grid}>
          <div className={styles.card}>
            <strong>Code: </strong>
            {country.code}
          </div>

          <div className={styles.card}>
            <strong>Flag: </strong>
            {country.emoji}
          </div>

          <div className={styles.card}>
            <strong>Currency: </strong>
            {country.currency}
          </div>

          <div className={styles.card}>
            <strong>Continent: </strong>
            <button
              onClick={() => router.push(createContinentUrl(country.continent.code))}
            >
              {country.continent.name}
            </button>
          </div>
        </div>

        <div>
          <h3>Languages</h3>

          <div className={styles.grid}>
            {country.languages.map((language) => (
              <div key={language.name} className={styles.card}>
                {language.name} ({language.native})
              </div>
            ))}
          </div>
        </div>

        <Link href="/">Home</Link>
      </main>
    </div>
  )
}

export default CountryPage
