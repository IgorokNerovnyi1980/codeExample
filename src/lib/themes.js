import {
  Bg, warmBg, coldBg, Fs, Shdw, other,
} from './variables'

export const baseTheme = {
  ...Bg,
  ...coldBg,
  ...Fs,
  ...Shdw,
  ...other,
}
export const secondaryTheme = {
  ...Bg,
  ...warmBg,
  ...Fs,
  ...Shdw,
  ...other,
}
