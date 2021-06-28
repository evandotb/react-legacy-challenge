import React from 'react';

 




const CatList = (props) => {
  return (
    <div>
      {props.cats.map(cats =>
        <ul>
        <li>{cats}</li>
        </ul>
        )}
    </div>
  )
}
  
     
export default CatList;