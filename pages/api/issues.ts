// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  fetch(`https://sfe-interview.hoppscotch.com/issues-${req.query.pageNumber || 1}.json`, {
    headers: {
      "Content-type": "application/json",
    }
  }).then(response => response.json()).then((data) => res.status(200).json(data))
}

export const config = {
  api: {
    responseLimit: false,
  },
}
