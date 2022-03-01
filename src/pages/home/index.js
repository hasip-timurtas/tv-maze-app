import { useState, useEffect } from 'react';
import apiClient from '../../api';
import ShowItem from '../../componenets/showItem';
import './home.scss';

function Home() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    apiClient.getTvShows().then(result => {
      setShows(result.data);
    });
  }, []);

  return (
    <div className="Home">
      <p className="description">
        TV Show and web series database. <br />
        Create personalised schedules. Episode guide, cast, crew and character information.
      </p>

      <div className="show-content">
        <h2>Last Added Shows</h2>

        <div className="show-list">
          {
            shows.length ?
              shows.map(({ id, show }) => <ShowItem key={id} image={show.image.medium} />)
              : <div>There is no shows yet.</div>
          }
        </div>
      </div>
    </div>
  );
}

export default Home;
