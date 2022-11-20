import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class ListAlbums extends React.Component {
  render() {
    const { response, artistInput } = this.props;
    return (
      <div className="albumsContainer">
        <p className="result">
          Результаты альбомов:
          {' '}
          {artistInput}
          {' '}
        </p>
        <div className="listAlbums">
          { response.map((album, index) => (
            <div key={ index } className="album">
             <Link 
                to={ `/album/${album.collectionId}` }
                data-testid={ `link-to-album-${album.collectionId}` }> 
                <img src={ album.artworkUrl100 } alt="Album" className="img" />
             </Link>
              <h2>{album.collectionName}</h2>
              <h3>{album.artistName}</h3>
              {/* <Link
                to={ `/album/${album.collectionId}` }
                data-testid={ `link-to-album-${album.collectionId}` }
              >
               Более
              </Link> */}
            </div>
          )) }
        </div>
      </div>
    );
  }
}

ListAlbums.propTypes = {
  response: PropTypes.arrayOf(PropTypes.object).isRequired,
  artistInput: PropTypes.string.isRequired,
};

export default ListAlbums;
