import { useState, useEffect } from 'react';
import apiClient from '../../api'
import './home.scss';

function Home() {

  const [shows, setShows] = useState([]);

  useEffect(() => {

    apiClient.getTvShows().then(result => {
      setShows(result.data);
    })

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
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

        </div>
      </div>
    </div>
  );
}

export default Home;
