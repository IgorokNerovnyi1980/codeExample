export default function (fnUpdateStore) {
  const values = document.querySelectorAll('#price')
  let result = 0
  const setResult = (value) => {
    result = value + result
  }
  [...values].map(el => (Number(el.dataset.value))).map(val => (setResult(val)))

  fnUpdateStore(result.toFixed(2))
}
