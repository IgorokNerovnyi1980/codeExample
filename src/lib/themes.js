import {
  Bg, warmBg, coldBg, Fs, Shdw, other,
} from './variables'

const base = {
  ...Bg,
  ...coldBg,
  ...Fs,
  ...Shdw,
  ...other,
}
const secondary = {
  ...Bg,
  ...warmBg,
  ...Fs,
  ...Shdw,
  ...other,
}

export default {
  base,
  secondary,
}
