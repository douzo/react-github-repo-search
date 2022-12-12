import React from 'react'
import styled from 'styled-components'
import { formattedDate } from "../../utils/formatter";


interface TopAreaProps {
  full_name: string;
  description: string;
  svn_url: string;
  created_at: Date;
  avatar_url: string;
  ownerName: string;
}

export const TopArea = ({
  full_name, description, svn_url, created_at, avatar_url, ownerName
}:TopAreaProps ) => {
  return (
    <>
      <Info>
        <Pfp src={avatar_url} alt={ownerName} />
        <SideInfo>
          <Name>
          <a href={svn_url}>{full_name}</a>
          </Name>
          <Bio>
            {description}
          </Bio>
          <CreatedAt>Created {formattedDate(created_at.toString())}</CreatedAt>
        </SideInfo>
      </Info>
      </>
  )
}


const Info = styled.div`
  display: flex;
  align-items: center;
`;

const Bio = styled.p`
  color: ${(props) => props.theme.colors.textNorm};
  font-size: 1.4rem;
  line-height: 2.4rem;
  margin: 1rem 0 1.2rem;
  @media (min-width: 768px) {
    margin: 1rem 0 1.2rem;
    font-size: 1.6rem;
  }
`;

const Pfp = styled.img`
  height: 75px;
  width: 75px;
  border-radius: 50%;
  margin-right: 2rem;
  @media (min-width: 768px) {
    width: 117px;
    height: 117px;
    margin-right: 4.1rem;
  }
  /* @media (min-width: 900px) {
    display: none;
  } */
`;

const SideInfo = styled.div`
  display: grid;
  @media (min-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
    word-break: break-word;
    /* grid-template-columns: 5fr 2fr;
    grid-template-rows: 1fr 1fr; */
    width: 100%;
    span:last-of-type {
      grid-column: 2 /3;
      grid-row: 1 /2;
      justify-self: end;
    }
  }
`;

const Name = styled.strong`
  font-weight: bold;
  font-size: 1.7rem;
  line-height: 3.4rem;
  color: ${(props) => props.theme.colors.textBolded};
  @media (min-width: 768px) {
    font-size: 2.7rem;
  }
`;


const CreatedAt = styled.span`
  font-size: 1.4rem;
  line-height: 2rem;
  color: ${(props) => props.theme.colors.textNorm};
  letter-spacing: 0.3px;
  @media (min-width: 768px) {
    font-size: 1.6rem;
  }
`;