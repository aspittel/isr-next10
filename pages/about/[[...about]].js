import { useRouter } from 'next/router'
import React from 'react'

export default function About(props) {
  const routeData = useRouter()
  return (
    <div>
      {JSON.stringify(routeData.query)}
    </div>
  )
}
