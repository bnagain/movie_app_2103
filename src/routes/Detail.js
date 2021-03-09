import React from 'react';
import './Detail.css';

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push('/');
    }
  }
  render() {
    const { location } = this.props;
    if (location.state) {
      const {  year, title, summary, poster, genres } = location.state;
      return (
        <div className="movie">
          <img src={poster} alt={title} title={title}/>
          <h3 className="movie__title">{title}</h3>
          <h5 className="movie__year">{year}</h5>
          <ul className="movie__genres">
            {genres.map((genre, index) => {
              return <li key={index} className="movie__genre">{genre}</li>;
            })}
          </ul>
          <p className="movie__summary">{summary}</p>
        </div>
      )
    } else {
      return null;
    }
    
  }
}

export default Detail;