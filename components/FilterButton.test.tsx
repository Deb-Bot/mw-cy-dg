import { render } from "@testing-library/react"
import FilterButton from "./FilterButton"

describe('Filter Button Component', () => {
  it('Renders the filter button', () => {
    const buttonText = 'submit'
    const { container } = render(
      <FilterButton 
      active = {true}
      onClick = {() => onclick }
      text = {buttonText} />
    )

    expect(container.querySelector('button')).toHaveTextContent(buttonText)
  })
})
