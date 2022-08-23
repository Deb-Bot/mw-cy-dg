export type Language = {
  code: string
  rtl: boolean
  name: string
  native: string
}

export type Country = {
    name: string
    native: string
    code: string
    currency: string
    states?: []
    emoji: string
    emojiU: string
    languages: Language[]
    continent: Continent
  }

export type Continent = {
    code: ContinentCode
    name: string
    countries: Country[]
  }

export type ContinentCode = 'EU' | 'NA' | 'SA' | 'AF' | 'AS' | 'OC' | 'AN' | 'MU' 

export type Filter = {
  name: string
  continent?: {
    eq?: ContinentCode,
    in?: ContinentCode[]
  },
  currency?: { eq: 'EUR' | string }
}
