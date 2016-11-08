import React from 'react';
import { Link } from 'react-router';


const BoardIndexItem = ({board}) => (
  <li className="BoardIndexItem">
    <Link to={`/boards/owner/${board.id}`}>
      {board.title}
    </Link>
  </li>
)

export default BoardIndexItem;
