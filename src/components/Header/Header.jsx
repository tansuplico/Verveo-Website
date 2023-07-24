import React from "react";
import { Link } from "react-router-dom";

import { useState, useContext, useEffect } from "react";
import { CartContext } from "../../Context/CartContext";

import logo from "../Header/images/verveo-logo-light.png";
import favorites from "../Header/images/favorites.png";
import profile from "../Header/images/profile.png";
import basket from "../Header/images/basket.png";
import exit from "../Header/images/exit-drawer-icon.png";

import "../Header/Header.css";

export default function Header() {
  const { mainData, setMainData } = useContext(CartContext);
  const { itemsInCart, setItemsInCart } = useContext(CartContext);
  const { itemsInFavorite, setItemsInFavorite } = useContext(CartContext);

  const [cartClicked, setCartClicked] = useState(false);
  const [favoritesClicked, setFavoritesClicked] = useState(false);
  const [profileClicked, setProfileClicked] = useState(false);

  const [cartFiltered, setCartFiltered] = useState([]);
  const [favoriteFiltered, setFavoriteFiltered] = useState([]);

  const [signUpClicked, setSignUpClicked] = useState(false);

  const [menuClicked, setMenuClicked] = useState(false);

  function signUpClickedFunction() {
    setSignUpClicked(true);
  }

  // Scroll to the very top of the page
  function handleLinkClick() {
    window.scrollTo(0, 0);
  }

  // Cart button is clicked
  function cartClickedFunction() {
    setCartClicked((boolean) => !boolean);
    setFavoritesClicked(false);
    setProfileClicked(false);
    setMenuClicked(false);
  }

  // Favorite button is clicked
  function favoritesClickedFunction() {
    setFavoritesClicked((boolean) => !boolean);
    setCartClicked(false);
    setProfileClicked(false);
    setMenuClicked(false);
  }

  // Profile button is clicked
  function profileClickedFunction() {
    setProfileClicked((boolean) => !boolean);
    setCartClicked(false);
    setFavoritesClicked(false);
    setMenuClicked(false);
  }

  function menuBarFunction() {
    setMenuClicked((boolean) => !boolean);
    setFavoritesClicked(false);
    setProfileClicked(false);
    setCartClicked(false);
  }

  // Overlay
  function overlayClicked() {
    setCartClicked(false);
    setFavoritesClicked(false);
    setProfileClicked(false);
    setMenuClicked(false);
  }

  // Manage renders when adding item in cart
  useEffect(() => {
    // Filter the data based on itemsInCart
    const updatedItems = mainData.filter((item) =>
      itemsInCart.includes(item.name)
    );
    setCartFiltered(updatedItems);

    const updatedFavorite = mainData.filter((item) =>
      itemsInFavorite.includes(item.name)
    );
    setFavoriteFiltered(updatedFavorite);
  }, [itemsInCart, itemsInFavorite, mainData]);

  // Decrease the quantity
  function minusQuantity(name) {
    setCartFiltered((prevItems) =>
      prevItems.map((item) =>
        item.name === name
          ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
          : item
      )
    );
    setMainData((prevItems) =>
      prevItems.map((item) =>
        item.name === name
          ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
          : item
      )
    );
  }

  // Increase the quantity
  function addQuantity(name) {
    setCartFiltered((prevItems) =>
      prevItems.map((item) =>
        item.name === name ? { ...item, quantity: item.quantity + 1 } : item
      )
    );

    setMainData((prevItems) =>
      prevItems.map((item) =>
        item.name === name ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  }

  // Removes an item from the cart | Sets the quantity to 1
  function removeCartItem(name) {
    // Updates the cart objects
    const updatedDeletedItems = cartFiltered
      .filter((data) => data.name !== name)
      .map((data) => (data.name === name ? { ...data, quantity: 1 } : data));
    setCartFiltered(updatedDeletedItems);

    // Updates the main objects
    const updatedMainData = mainData.map((data) =>
      data.name === name ? { ...data, quantity: 1 } : data
    );
    setMainData(updatedMainData);

    setItemsInCart((prevItems) => prevItems.filter((item) => item !== name));
  }

  function removeFavoriteItem(name) {
    // Updates the cart objects
    const updatedDeletedItems = favoriteFiltered
      .filter((data) => data.name !== name)
      .map((data) => (data.name === name ? { ...data, quantity: 1 } : data));
    setFavoriteFiltered(updatedDeletedItems);

    // Updates the main objects
    const updatedMainData = mainData.map((data) =>
      data.name === name ? { ...data, isFavorite: false } : data
    );
    setMainData(updatedMainData);

    setItemsInFavorite((prevItems) =>
      prevItems.filter((item) => item !== name)
    );
  }

  const cartItemElements = cartFiltered.map((data) => {
    return (
      <div className="cart-item">
        <div className="cart-item-imagebox">
          <img src={data.imageUrl} alt="" />
        </div>
        <div className="cart-item-textbox">
          <h1> {data.name} </h1>
          <h3> {data.model} </h3>
          <span onClick={() => removeCartItem(data.name)}> Remove </span>
          <div className="cart-item-quantity">
            <p className="decrement" onClick={() => minusQuantity(data.name)}>
              -
            </p>
            <p> {data.quantity} </p>
            <p className="increment" onClick={() => addQuantity(data.name)}>
              +
            </p>
          </div>
        </div>

        <h3> ₱{data.price * data.quantity} </h3>
      </div>
    );
  });

  const favoriteItemElements = favoriteFiltered.map((data) => {
    return (
      <div className="favorite-item">
        <div className="favorite-item-imagebox">
          <img src={data.imageUrl} alt="" />
        </div>
        <div className="favorite-item-textbox">
          <h1> {data.name} </h1>
          <h3> {data.model} </h3>
          <span onClick={() => removeFavoriteItem(data.name)}> Remove </span>
        </div>
      </div>
    );
  });

  const subTotalElement = cartFiltered
    .map((data) => Number(data.price * data.quantity))
    .reduce((acc, currVal) => {
      return acc + currVal;
    }, 0);

  const shippingElement = cartFiltered
    .map((data) => Number(data.shipping * data.quantity))
    .reduce((acc, currVal) => {
      return acc + currVal;
    }, 0);

  return (
    <>
      <header>
        <nav>
          <div className="menu-bar">
            <i class="fa-solid fa-bars" onClick={menuBarFunction}></i>
          </div>
          <ul>
            <Link
              to="/watches"
              className="no-underline"
              onClick={handleLinkClick}
            >
              <li> Watches </li>
            </Link>
            <Link
              to="/boutiques"
              className="no-underline"
              onClick={handleLinkClick}
            >
              <li> Boutiques </li>
            </Link>
            <Link
              to="/brand"
              className="no-underline"
              onClick={handleLinkClick}
            >
              <li> Brand </li>
            </Link>
          </ul>

          <Link to="/" onClick={handleLinkClick}>
            <img src={logo} alt="logo" />
          </Link>

          <div className="header-icon-container">
            <div className="favorite-box">
              <img
                src={favorites}
                alt="favorites"
                onClick={favoritesClickedFunction}
              />
              {favoriteFiltered.length > 0 ? (
                <p> {favoriteFiltered.length}</p>
              ) : (
                ""
              )}
            </div>

            <div className="basket-box">
              <img src={basket} alt="basket" onClick={cartClickedFunction} />
              {cartFiltered.length > 0 ? <p> {cartFiltered.length}</p> : ""}
            </div>
            <img
              className="header-profile-icon"
              src={profile}
              alt="profile"
              onClick={profileClickedFunction}
            />
          </div>
        </nav>
      </header>

      <>
        {/* Cart */}
        <div
          className="shopping-cart-drawer"
          style={{ right: cartClicked ? "0" : "-400px" }}
        >
          <div className="exit-container">
            <img
              className="exit-drawer"
              src={exit}
              alt="exit"
              onClick={() => setCartClicked(false)}
            />
          </div>

          <div className="shopping-cart-title">
            <h1> Your Shopping Cart </h1>
          </div>

          {itemsInCart.length > 0 ? (
            <>
              <div className="shopping-cart-items-container">
                <div className="shopping-cart-items-box">
                  {cartItemElements}
                </div>
              </div>

              <div className="shopping-cart-payment">
                <h3>
                  Subtotal: <span> ₱{subTotalElement} </span>
                </h3>
                <h3>
                  Shipping: <span> ₱{shippingElement} </span>
                </h3>
                <h3>
                  Total: <span> ₱{subTotalElement + shippingElement} </span>
                </h3>
              </div>

              <button className="header-btn">
                <span> Checkout </span>
              </button>
            </>
          ) : (
            <button
              className="header-btn"
              onClick={() => setCartClicked(false)}
            >
              <span> Find Watches </span>
            </button>
          )}
        </div>

        {/* Favorites */}
        <div
          className="favorites-drawer"
          style={{ right: favoritesClicked ? "0" : "-400px" }}
        >
          <div className="exit-container">
            <img
              className="exit-drawer"
              src={exit}
              alt="exit"
              onClick={() => setFavoritesClicked(false)}
            />
          </div>

          <div className="favorites-title">
            <h1> Your Wish List </h1>
          </div>

          {itemsInFavorite.length > 0 ? (
            <div className="favorites-items-container">
              <div className="favorites-items-box">{favoriteItemElements}</div>
            </div>
          ) : (
            <button
              className="header-btn"
              onClick={() => setFavoritesClicked(false)}
            >
              <span> Find Watches </span>
            </button>
          )}
        </div>

        {/* Profile */}
        <div
          className="profile-drawer"
          style={{ right: profileClicked ? "0" : "-400px" }}
        >
          <div className="exit-container">
            <img
              className="exit-drawer"
              src={exit}
              alt="exit"
              onClick={() => setProfileClicked(false)}
            />
          </div>
          {signUpClicked ? (
            <form>
              <h1> Sign Up </h1>

              <h3> Email: </h3>
              <input type="email" placeholder="Please enter your email" />

              <h3> Password: </h3>
              <input type="password" placeholder="Please enter your password" />

              <h3> Re-enter Password: </h3>
              <input type="password" placeholder="Please enter your password" />

              <button className="header-btn">
                <span> Sign Up </span>
              </button>
            </form>
          ) : (
            <div className="profile-content-box">
              <img src={profile} alt="profile" />
              <h1> No account yet? </h1>
              <span onClick={signUpClickedFunction}> Click Here </span>
            </div>
          )}
        </div>

        <div
          className="menu-drawer"
          style={{ left: menuClicked ? "0" : "-400px" }}
        >
          <ul>
            <Link
              to="/watches"
              className="no-underline"
              onClick={handleLinkClick}
            >
              <li> Watches </li>
            </Link>
            <Link
              to="/boutiques"
              className="no-underline"
              onClick={handleLinkClick}
            >
              <li> Boutiques </li>
            </Link>
            <Link
              to="/brand"
              className="no-underline"
              onClick={handleLinkClick}
            >
              <li> Brand </li>
            </Link>
          </ul>
          <hr />
          <div className="menu-icon-box">
            <h3 onClick={favoritesClickedFunction}> Favorites</h3>
            <h3 onClick={profileClickedFunction}> Profile</h3>
          </div>
        </div>

        {cartClicked || favoritesClicked || profileClicked || menuClicked ? (
          <div className="overlay" onClick={overlayClicked}></div>
        ) : (
          ""
        )}
      </>
    </>
  );
}
