// write your CatList component here
import React from 'react'

export default function CatList (props){
  const catPic= props.catPics.map(cat => <li><img key= "cat.id" src=" cat.url"/></li>)

  return (
    <div>
        <ul>{catPic}</ul>
    </div>
  )

    
}