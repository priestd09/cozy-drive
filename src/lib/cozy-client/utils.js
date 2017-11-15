export const mapValues = (object, transform) => {
  let result = {}
  for (const key in object) {
    result[key] = transform(object[key], key)
  }
  return result
}

export const filterValues = (object, filter) => {
  let result = {}
  for (const key in object) {
    if (filter(object[key], key)) {
      result[key] = object[key]
    }
  }
  return result
}

export const removeObjectProperty = (obj, prop) => {
  return Object.keys(obj).reduce((result, key) => {
    if (key !== prop) {
      result[key] = obj[key]
    }
    return result
  }, {})
}

export const removeObjectProperties = (obj, props) => {
  const sProps = new Set(props)
  const res = Object.keys(obj).reduce((result, key) => {
    if (!sProps.has(key)) {
      result[key] = obj[key]
    }
    return result
  }, {})
  return res
}
