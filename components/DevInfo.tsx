import React from 'react'

export const DevInfo = () => {
  return (
    <div>
      DevInfo<br />
      version: <b>{process.env.VERSION}</b>
    </div>
  )
}
