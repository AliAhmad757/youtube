import { useRouter } from 'next/router'
import React from 'react'

const slug = () => {
const router = useRouter()
    return (
    <div>{router?.query?.slug}</div>
  )
}

export default slug