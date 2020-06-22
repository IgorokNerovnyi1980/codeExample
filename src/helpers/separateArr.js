export default function (startArr, value) {
  const start = [...startArr]
  const result = []
  for (let i = 0; value > i; i += 1) {
    const iteration = start.splice(0, value)
    result.push(iteration)
  }
  return result
}
