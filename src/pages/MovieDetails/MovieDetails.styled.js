import styled from "styled-components";
import { NavLink } from "react-router-dom";



export const Container = styled.div`
  margin: 0 auto;
  padding: 0 16px;
  display: flex;
  flex-direction: column
`;


export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
width: 50px;
  &.active {
    color: white;
    background-color: orangered;
  }
`;

export const IMG = styled.img`
max-width: 300px;
`;

export const Button = styled.button`
padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  margin-bottom: 40px;
width: 100px;
  :hover {
    color: white;
    background-color: orangered;
  }
`;