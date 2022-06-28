// import React from 'react'


async function tempo(req, res) {
  const dynamicDate = await new Date()

  // return (
  //   <div>tempo</div>
  // )
  res.json({
    data: dynamicDate.toGMTString(),
    env: `${process.env.ENV_VARIABLE}`
  })
}

export default tempo