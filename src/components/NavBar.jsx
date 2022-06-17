import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";


const NavbarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  background: pink;
  color: white;
  padding: 20px;
`;

function Navbar() {
  return (
    <NavbarWrapper>
      <Link to="/">Home</Link>
      <Link to="/products">Product</Link>
    </NavbarWrapper>
  );
}

export default Navbar;