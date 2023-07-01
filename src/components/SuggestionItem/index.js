// Write your code here

const SuggestionItem = props => {
  const {details, showResult} = props
  const {id, suggestion}

  const showOne = () => {
    showResult(id)
  }

  return (
    <li>
      <p>{suggestion}</p>
      <button type="button" onClick={showOne}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
        />
      </li>
    </button>
  )
}
