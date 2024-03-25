import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import "./App.css"
import Menu from './components/Menubar'
import Body from './components/Body.jsx'
import { titleList } from './components/constants.js'
import Cart from './components/Cart.jsx'

const App = () => {
  const [menuData, setMenuData] = useState({
    titleImg: titleList[0].titleImg,
    titleText: titleList[0].titleText
  })
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {

  }, [menuData])

  const onclickHandler = (i) => {
    setMenuData(titleList[i])
  }
  const cartHandler = () => {
    setShowCart(!showCart);
  }

  return (
    <>
      <Header />
      <Menu onclickHandler={onclickHandler} isVisible={!showCart}/>
      <Body menuData={menuData} cartHandler={cartHandler} isVisible={!showCart}/>
      <Cart  cartHandler={cartHandler} isVisible={showCart}/>
    </>
  )
}

export default App
