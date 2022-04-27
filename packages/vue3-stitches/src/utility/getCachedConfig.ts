import { createStitches } from '../create-stitches'

let cachedConfig: any

export const getCachedConfig = () => cachedConfig || (cachedConfig = createStitches())
