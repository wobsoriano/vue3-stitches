function zipObject<T>(arr: T[], ...arrays: any[][]): unknown[][] {
  arrays = [arr, ...arrays]

  return Array.from({ length: Math.max(...arrays.map(x => x.length)) }).map(
    (_, i) => {
      return Array.from({ length: arrays.length }, (__, k) => arrays[k][i])
    },
  )
}

export default function normalizeProps(props = {}) {
  if (Array.isArray(props))
    return zipObject(props)

  else
    return props
}
