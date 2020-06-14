import textData from '../../lib/textData.json'

const {
  development,
} = textData

export const baseWarning = (text, lang) => (dispatch) => {
  if (text === 'in development') {
    return dispatch({
      type: 'SHOW_WARNING',
      payload: development.button[lang],
    })
  }
  return dispatch({
    type: 'SHOW_WARNING',
    payload: text,
  })
}
