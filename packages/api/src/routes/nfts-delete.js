import { HTTPError } from '../errors.js'
import { validate } from '../utils/auth.js'
import { JSONResponse } from '../utils/json-response.js'
import { parseCid } from '../utils/utils.js'

/** @type {import('../utils/router.js').Handler} */
export const nftDelete = async (event, ctx) => {
  const { db, user } = await validate(event, ctx)
  const { params } = ctx
  const cid = parseCid(params.cid)

  const data = await db.deleteUpload(cid.sourceCid, user.id)

  if (data) {
    return new JSONResponse(
      {
        ok: true,
      },
      { status: 202 }
    )
  } else {
    throw new HTTPError('NFT not found', 404)
  }
}
