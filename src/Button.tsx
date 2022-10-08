
import React,{MouseEvent} from 'react'

export default function Button({title,onClick}:{title:string,onClick:(event:MouseEvent)=>void}) {
  return (
    <button className="button button5" onClick={onClick}>{title}</button>
  )
}
