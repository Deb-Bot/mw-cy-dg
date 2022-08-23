import React from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { createCountryUrl } from "../../components/CountrySelect";
import styles from '../../styles/Home.module.css'
import { Continent } from "../../types";
import { getSelectedContinent } from "../../utils/apollo";

export const getServerSideProps = getSelectedContinent

const ContinentPage: NextPage<{ continent: Continent }> = ({ continent }) => {
  const router = useRouter()

  if (!continent) {
    return (
      <div>{router.query.country} Continent not found</div>
    )
  }

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>{continent.name}</h1>
        <div>
          {continent.countries.map((country) => (
            <button
              onClick={() => router.push(createCountryUrl(country.code))}
            
              key= {country.name}>
            </button>
          ))}
        </div>
      </main>
    </div>
  )
}

export default ContinentPage
