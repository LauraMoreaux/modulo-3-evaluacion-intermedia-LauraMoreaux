import React from 'react';

class Item extends React.Component {
  render() {
    const pokeType = this.props.types.map((type, index) => {
      return <li key={index}>{type}</li>;
    });
    return (
      <article className='card'>
        <h2 className='title'>{this.props.name}</h2>
        <div className='img-box'>
          <img src={this.props.url} alt='Pokemon foto' />
        </div>
        <ul className='type-list'>{pokeType}</ul>
      </article>
    );
  }
}

export default Item;
