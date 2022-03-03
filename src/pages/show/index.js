import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import DOMPurify from "dompurify";
import StarsRating from '../../componenets/rating';
import apiClient from '../../api';
import Starring from '../../componenets/starring';
import { removeTags } from '../../utils/removeTags'
import './show.scss';

function Show() {
  const [show, setShow] = useState();
  const [message, setMessage] = useState('Loading...');
  let { id: showId } = useParams();

  useEffect(() => {
    apiClient.getShowDetail(showId)
      .then(result => {
        console.log(result)
        setShow(result.data);
      }).catch(error => {
        if (error.response?.status === 404) {
          setMessage('Show details not found.');
        } else {
          setMessage('Unexpected error, please try later.');
        }
      })
  }, []);

  return (
    <div className="Show">
      {show && showId ?
        <div>
          <div className="show-info-up">
            <div className="show-image">
              <img src={show.image.medium} alt={show.name} />
            </div>
            <div className="show-details">
              <div className="rating">
                <StarsRating rating={show.rating.average} /> <span className="rating-point"> {show.rating.average / 2}/5</span>
              </div>

              <h1 className="show-title">{show.name}</h1>
              <div className="show-description">{removeTags(show.summary)}</div>
            </div>
          </div>
          <div className="show-info-down">
            <div className="show-info">
              <div className="show-info-title">Show Info</div>
              <div className="show-info-detail">
                <div className="show-info-row">
                  <span className="show-info-row-title">Streammed on</span> <span className="show-info-row-value">{show.network.name}</span>
                </div>
                <hr />
                <div className="show-info-row">
                  <span className="show-info-row-title">Schedule</span> <span className="show-info-row-value">{show.schedule.days.join(', ')}</span>
                </div>
                <hr />
                <div className="show-info-row">
                  <span className="show-info-row-title">Status</span> <span className="show-info-row-value">{show.status}</span>
                </div>
                <hr />
                <div className="show-info-row">
                  <span className="show-info-row-title">Genres</span> <span className="show-info-row-value">{show.genres.join(', ')}</span>
                </div>
                <hr />
              </div>
            </div>
            <div className="show-starring">
              <div className="show-info-title">Starring</div>
              <div className="show-info-detail">
                <Starring showId={show.id} />
              </div>
            </div>
          </div>
        </div>
        : message}
    </div>
  );
}

export default Show;
