import { NextApiRequest, NextApiResponse } from 'next'
import DB from '@database'
<<<<<<< HEAD

const allAvos = async (request: NextApiRequest, response: NextApiResponse) => {
  const db = new DB()

  const id = request.query.id

  const avo = await db.getById(id as string)
  response.status(200).json(avo)
}

export default allAvos
=======
import enablePublicAccess from '@cors'

const AvoDetail = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    // Generally, you would not want this in your apps.
    // See more in 'cors.js'
    await enablePublicAccess(req, res)

    const db = new DB()
    const avoId = req.query.id as string

    const avo = await db.getById(avoId)

    // Notice: We're using Next.JS response helpers here :)
    // https://nextjs.org/docs/api-routes/response-helpers
    res.status(200).json(avo)
  } catch (e) {
    console.error(e)
    res.status(404).end()
  }
}

export default AvoDetail
>>>>>>> end
