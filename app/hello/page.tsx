import { getHellow } from '@/actions/action'
import Hellow from '@/component/Hellow'
import React from 'react'

export default async function page() {
const result = await getHellow()
  return (
    <div>
        Hellow form server component
        <div>result from action:{result}</div>
        <div><Hellow/></div>
    </div>
  )
}
