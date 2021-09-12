 import React from 'react'
import { Link } from 'react-router-dom'
 import './index.css'
 const MenuContainer = ()=>{
const menuItemsOptions = [
    { text: 'Profile',path:'/profile' },
    { text: 'Transactions',path:'/transaction' },
    { text: 'Check Balance',path:'/balance' },
    { text: 'Transaction History',path:'/history' },
    
  ]
    const [activeItem, setActiveItem] = React.useState('')
    const [activeItemPos, setActiveItemPos] = React.useState(0)
    const [activeItemColor, setActiveItemColor] = React.useState('')
    const createClickHandler = (activeItem) => e => {
      setActiveItem(activeItem)
      setActiveItemPos(document.getElementById(activeItem).offsetTop)
      setActiveItemColor(window.getComputedStyle(document.getElementById(activeItem)).getPropertyValue('background-color'))
    }
    
      const menuItems = menuItemsOptions.map((item) =><Link className="nav-link" to={item.path}><MenuItem item={ item } createClickHandler={ createClickHandler }/></Link>)                                       
      return (
        <div className='menu-container'>
          <span className='menu-item--active' style={{ top: activeItemPos, backgroundColor: activeItemColor }}/>
          { menuItems }
        </div>
      )
  }
  
  function MenuItem({ createClickHandler, item }) {
    const clickHandler = createClickHandler(item.text)
    
    return (
      <div 
        className='menu-item'
        id={ item.text }
        onClick={ clickHandler }
      >
        { item.text.toUpperCase() }
      </div>
    )
  }

  export default MenuContainer;