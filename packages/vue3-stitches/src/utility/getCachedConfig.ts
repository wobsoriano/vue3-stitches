import { createStitches } from '../features/styled'

let cachedConfig: any

export const getCachedConfig = () => cachedConfig || (cachedConfig = createStitches())
