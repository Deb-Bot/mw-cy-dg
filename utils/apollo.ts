/**
 * Utils requiring apollo
 */
import { GetServerSideProps } from "next";
import { gql } from "@apollo/client"
import client from "../apollo-client";
import { Continent, Country } from "../types";

export const QUERY_ALL_COUNTRIES = gql`
  query Countries($filter: CountryFilterInput) {
    countries(filter: $filter) {
      name
      native
      code
      currency
      states {
        code
        name
      }
      emoji
      emojiU
      languages {
        code
        rtl
        name
        native
      }
    }
  }
`

export const getSelectedContinent: GetServerSideProps<{ continent: Continent | null }> = async (context) => {
  // get dynamic query variable
  const code = context.query.continent

  try {
    const { data } = await client.query({
      variables: {
        code,
      },
      query: gql`
        query Continent($code: ID!) {
          continent(code: $code){
            name
            code
            countries {
              code
              name
            }
          }
        }
      `,
    });

    return {
      props: {
        continent: data,
      },
    };
  } catch (error) {
    console.log({ error })
    
  }

  return {
    props: {
      continent: null
    }
  }
}

export const getSelectedCountry: GetServerSideProps<{ country: Country | null }> = async (context) => {
  // get dynamic query variable
  const { code } = context.query

  try {
    const { data } = await client.query({
      variables: {
        code,
      },
      query: gql`
        query Country($code: String!) {
          countries(filter:{ code: { eq: $code} }){
            name
            native
            code
            currency
            states {
              code
              name
            }
            emoji
            emojiU
            languages {
              code
              rtl
              name
              native
            }
            continent {
              name
              code
            }
          }
        }
      `,
    });

    return {
      props: {
        country: data.countries[0] || null,
      },
    };
  } catch (error) {
    console.log({error})
  } 
  return {
    props: {
      country: null
    }
  }
}
