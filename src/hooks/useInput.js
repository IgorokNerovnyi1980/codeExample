import {
  useState,
} from 'react'

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue)
  const reset = () => {
    setValue(initialValue)
  }

  const changeInputValue = {
    value,
    onChange: (e) => {
      setValue(e.target.value)
    },
  }

  return [value, changeInputValue, reset]
}
export default useInput
