import styled from "styled-components";
import { Card } from "../core";

export const TodoCard = styled(Card).attrs({
  full: true
})`
  display: flex;
  & > .check-sec {
    display:flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    margin: 0 0.5rem;
    border-right: 2px solid ${({ theme }) => theme.colors.border};
  }
  & > .content-sec {
    margin: 1rem;

    color: ${({ theme }) => theme.colors.text_gray};
  } 
  & h4.title {
    font-size:1.2rem;
    font-weight: 700;
  }
  & p.desc {
    font-weight: 400;
    margin-top:10px;
  }

`;

