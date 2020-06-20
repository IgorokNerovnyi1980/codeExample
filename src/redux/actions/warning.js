import textData from '../../lib/textData.json'

const {
  development, weather,
} = textData

export const baseWarning = (text, lang) => (dispatch) => {
  switch (text) {
    case 'in development': return dispatch({
      type: 'SHOW_WARNING',
      payload: development.button[lang],
    })
    case 'in weather': return dispatch({
      type: 'SHOW_WARNING',
      payload: weather.not_coords[lang],
    })
    case 'in geolocation': return dispatch({
      type: 'SHOW_WARNING',
      payload: weather.not_access[lang],
    })
    default: return dispatch({
      type: 'SHOW_WARNING',
      payload: text,
    })
  }
}
