import Search from "../search/search.component";
import Deliver from "../deliver/deliver.components";
import { Order } from "../order/order.component";
import { ShopCart } from "../cart/cart.component";
import { useNavigate } from "react-router-dom";

import {
  StyledNav,
  StyledAmazonIcon,
  SyledNavRight,
  SyledNavleft,
} from "./navigation.styles";
import { SignIn } from "../signIn/signIn.component";
import React from "react";

const Nav = () => {
  const history = useNavigate();
  const handleClick = () => {
    history("/");
  };

  return (
    <StyledNav>
      <SyledNavleft>
        <StyledAmazonIcon onClick={handleClick} />
        <Deliver />
      </SyledNavleft>
      <Search />
      <SyledNavRight>
        <SignIn />
        <Order />
        <ShopCart />
      </SyledNavRight>
    </StyledNav>
  );
};
export default Nav;
