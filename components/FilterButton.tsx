import React, { FunctionComponent } from 'react'
import styles from '../styles/Home.module.css'

interface Props {
  active: boolean
  onClick: () => void
  text: string
}

const FilterButton: FunctionComponent<Props> = ({
  active,
  onClick,
  text,
}: Props) => {
  return (
    <button
      onClick={() => onClick()}
      className={active ? styles.filterActive: undefined}
    >
      {text}
    </button>
  )
}

export default FilterButton
