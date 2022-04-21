import React from 'react';

const MenuItem = ({ item, selectedMenuItem }) => {
  return (
    <div className={`menuTitle ${selectedMenuItem == item.menuTitle ? 'menuTitle__active' : ''}`}>
        <img className='menuTitle__image' src={item.icon} alt={item.menuTitle} title={item.menuTitle} />
        <p className='menuTitle__content'>{item.menuTitle}</p>
    </div>
  )
}

export default MenuItem