import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">

           
                <div className="container">
                    <div className="navBar">
                        <a href="https://www.etsy.com/?ref=lgo">
                            <div className="logo"></div>
                        </a>
                        <div className="searchBar">
                            <input type="text" placeholder="Whiskey" />
                            <button className="searchBtn" type="submit">Search</button>
                        </div>
                        <div className="signin">
                            <ul className="userLogin">
                                <li><a href="https://www.etsy.com/sell?ref=hdr&from_page=https%3A%2F%2Fwww.etsy.com%2Fsearch">Sell on Etsy</a></li>
                                <li><a href="#">Register</a></li>
                                <li><a href="#">Sign In</a></li>
                                <li></li>
                                <li>
                                    <div className="cart"></div>
                                    <div className="cartText"><a href="#">Cart</a></div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="ulList">
                        <ul className="prodNav">
                            <li><a href="">Clothing &amp; Accessories</a></li>
                            <li><a href="">Jewelry</a></li>
                            <li><a href="">Craft Supplies  Tools</a></li>
                            <li><a href="">Weddings</a></li>
                            <li><a href="">Entertainment</a></li>
                            <li><a href="">Home &amp; Living</a></li>
                            <li><a href="">Kids &amp; Baby</a></li>
                            <li><a href="">Vintage</a></li>
                        </ul>
                    </div>
                    <div className="main">
                        <div className="sideBar">
                            <div className="allCatagories">
                                <ul className="catTitle">
                                    <li>
                                        All categories
                                    </li>
                                </ul>
                                <ul className="catList">
                                    <li><a href="#">Home &amp; Living</a></li>
                                    <li><a href="#">Art &amp; Collectibles</a></li>
                                    <li><a href="#">Weddings</a></li>
                                    <li><a href="#">Clothing</a></li>
                                    <li><a href="#">Paper &amp; Party Supplies</a></li>
                                    <li><a href="#">Jewelry</a></li>
                                    <li><a href="#">Craft Supplies &amp; Tools</a></li>
                                    <li><a href="#">Accessories</a></li>
                                    <li><a href="#">Bags &amp; Purses</a></li>
                                    <li><a href="#">Bath &amp; Beauty</a></li>
                                    <li><a href="#">Books, Movies &amp; Music</a></li>
                                    <li><a href="#">Shoes</a></li>
                                    <li><a href="#">Electronics &amp; Accessories</a></li>
                                    <li><a href="#">Toys &amp; Games</a></li>
                                    <li><a href="#">Pet Supplies</a></li>
                                </ul>
                            </div>
                            <div className="catHr1"></div>
                            <div className="shopLocation">
                                <ul>
                                    <li>Shop Location</li>
                                    <li>
                                        <input type="radio" name="Location"/>&nbsp;&nbsp;Anywhere 
                                    </li>
                                    <li>
                                        <input type="radio" name="Location"/>&nbsp;&nbsp;United States
                                    </li>
                                    <li>
                                        <input type="radio" name="Location"/>&nbsp;&nbsp;Custom
                                    </li>
                                </ul>
                                <div className="location">
                                    <input className="locInput" type="text" name="Location" placeholder="Enter Location"/>
                                    <button className="searchArrow" type="button">&#9658;</button>
                                </div>
                            </div>
                            <div className="catHr2"></div>
                            <div className="itemType">
                                <ul>
                                    <li>Item Type</li>
                                    <li>
                                        <input type="radio" name="itemType"/>&nbsp;&nbsp;All Items
                                    </li>
                                    <li>
                                        <input type="radio" name="itemType"/>&nbsp;&nbsp;Hand Made
                                    </li>
                                    <li>
                                        <input type="radio" name="itemType"/>&nbsp;&nbsp;Vintage
                                    </li>
                                </ul>
                            </div>
                            <div className="price">
                                <ul>
                                    <li>Price ($)</li>
                                    <li>
                                        <input type="radio" name="itemType"/>&nbsp;&nbsp;Any price
                                    </li>
                                    <li>
                                        <input type="radio" name="itemType"/>&nbsp;&nbsp;Under $25
                                    </li>
                                    <li>
                                        <input type="radio" name="itemType"/>&nbsp;&nbsp;$25 to $50
                                    </li>
                                    <li>
                                        <input type="radio" name="Location"/>&nbsp;&nbsp;$50 to $100
                                    </li>
                                    <li>
                                        <input type="radio" name="Location"/>&nbsp;&nbsp;Over $100
                                    </li>
                                    <li>
                                        <input type="radio" name="Location"/>&nbsp;&nbsp;Custom
                                    </li>
                                </ul>
                            </div>
                            <div className="priceInput">
                                <input className="cPriceLow" type="text" placeholder="Low"/> to
                                <input className="cPriceHigh" type="text" placeholder="High"/>
                                <button className="searchArrow2" type="button">&#9658;</button>
                            </div>
                            <div className="catHr3"></div>
                            <div className="catHr4"></div>
                            <p className="filter">Filter by color</p>
                            <div className="fillColor">
                                <div className="fColor"></div>
                                <div className="fColor"></div>
                                <div className="fColor"></div>
                                <div className="fColor"></div>
                                <div className="fColor"></div>
                                <div className="fColor"></div>
                                <div className="fColor"></div>
                                <div className="fColor"></div>
                            </div>
                            <div className="catHr5"></div>
                            <div className="ordOpt">
                                <ul>
                                    <li>Ordering Options</li>
                                    <li>
                                        <input type="checkbox" name="itemType"/>&nbsp;&nbsp;Accepts Etsy gift cards
                                    </li>
                                    <li>
                                        <input type="checkbox" name="itemType"/>&nbsp;&nbsp;Customizable
                                    </li>
                                </ul>
                            </div>
                            <div className="catHr6"></div>
                            <div className="shipTo">
                                <p>Ship to</p>
                                <select className="country" id="">
                                   
                                    <option value="Cuba">Cuba</option>
                                    <option value="Cyprus">Cyprus</option>
                                    <option value="Czech Republic">Czech Republic</option>
                                    <option value="Denmark">Denmark</option>
                                    <option value="Djibouti">Djibouti</option>
                                    <option value="Dominica">Dominica</option>
                                    <option value="Dominican Republic">Dominican Republic</option>
                                    <option value="East Timor">East Timor</option>
                                    <option value="Ecuador">Ecuador</option>
                                    <option value="Egypt">Egypt</option>
                                    <option value="El Salvador">El Salvador</option>
                                    <option value="Equatorial Guinea">Equatorial Guinea</option>
                                    <option value="Eritrea">Eritrea</option>
                                </select>
                            </div>
                        </div>
                        <div className="images">
                             <div className="productImage">
                                <a href="#">
                                    <div className="love"></div>
                                </a>
                                <a href="#">
                                    <div className="hamb"></div>
                                </a>
                                <div className="productInfo">
                                    <ul>
                                        <li>Description</li>
                                        <li>Title</li>
                                        <li>Price</li>
                                    </ul>
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>
                </div>
                
    );
  }
}

export default App;
