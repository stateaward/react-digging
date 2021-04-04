import React from 'react';

function Cards(props) {
   const initial = ['down', 'down', 'down', 'down'];
   const cardList = initial.map((initial, index) => <td key={index}>{initial}</td>);

   return (
      <table>
         <tbody>
            <tr>{cardList}</tr>
         </tbody>
      </table>
   );
}

export default Cards;
