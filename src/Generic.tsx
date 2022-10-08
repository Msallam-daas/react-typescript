import React, { ReactNode } from 'react'

export default function Generic<ListItem>({
items,
render,
}:{
items:ListItem[];
render:(item:ListItem)=>ReactNode;
}) {
  return (
    <div>
        <ul>
            {items.map(render)}
        </ul>
    </div>
  )
} 
