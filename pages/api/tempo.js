// import React from 'react'


async function tempo(req, res) {
  const dynamicDate = await new Date()
  //controle de cache
  res.setHeader('Cache-Control', 's-maxage=10, stale-while-revalidate')
  res.json({
    data: dynamicDate.toGMTString(),
    env: `${process.env.ENV_VARIABLE}`
  })
}

export default tempo