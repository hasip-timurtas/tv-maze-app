import { useState, useEffect } from 'react';
import apiClient from '../../api';
import './starring.scss';

function Starring({ showId }) {
  const [casts, setCasts] = useState([]);

  useEffect(() => {
    apiClient.getCasts(showId)
      .then(result => {
        setCasts(result.data);
      })
  }, []);

  return (
    <div className="starring">
      {casts.length && casts.map(cast =>
        <div key={cast.person.id}>
          <div className="show-info-row">
            <div className="cover">
              <span className="icon fa fa-user-circle"></span>
              <span className="show-info-row-title">{cast.person.name}</span>
            </div>
            <span className="show-info-row-value">{cast.character.name}</span>
          </div>
          <hr />
        </div>
      )
      }
    </div >
  );
}

export default Starring;
