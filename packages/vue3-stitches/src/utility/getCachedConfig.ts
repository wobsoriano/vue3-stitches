import { createStitches } from '../create-stitches'

let cachedConfig: unknown

export const getCachedConfig = () => cachedConfig || (cachedConfig = createStitches())
