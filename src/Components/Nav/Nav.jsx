import React from "react";
import styled from 'styled-components';

import NavTitle from "../NavTitle/NavTitle";

const NavBar = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  width: 100%;
  background: rgb(167,7,233);
  background: linear-gradient(107deg, rgba(167,7,233,1) 0%, rgba(115,7,209,1) 76%, rgba(108,0,255,1) 100%); 
  margin: 0;
  padding-left: 3%;
`;

function Nav() {
  return (
    <NavBar>
      <NavTitle />
    </NavBar>
  );
}

export default Nav;
