import React from "react";
import styled from "styled-components";
import { Item, ItemProps } from "../../types";
import { TopArea } from "./TopArea";
import { StartArea } from "./StartArea";

export const Index = ({ item }: ItemProps) => {
  return (
    <>
      <Container>
        <SideArea>
          <TopArea
            full_name={item.full_name}
            description={item.description}
            svn_url={item.svn_url}
            created_at={item.created_at}
            avatar_url={item.owner.avatar_url}
            ownerName={item.owner.login}
          />

          <StartArea
            stargazers_count={item.stargazers_count}
            language={item.language}
            forks_count={item.forks_count}
            updated_at={item.updated_at}
          />
          {/* <LinksArea /> */}
        </SideArea>
      </Container>
    </>
  );
};

const Container = styled.section`
  width: 100%;
  padding: 3rem 2.4rem;
  background: ${(props) => props.theme.colors.card};
  border-radius: 1.5rem;
  margin-top: 1.6rem;
  max-width: 73.3rem;
  box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.198567);
  display: flex;
  @media (min-width: 768px) {
    padding: 3.2rem 2.8rem;
  }
  @media (min-width: 900px) {
    padding: 2.8rem;
  }
  a {
    all: unset;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Pfp = styled.img`
  height: 117px;
  width: 117px;
  border-radius: 50%;
  margin-right: 3.7rem;
  display: none;
  @media (min-width: 900px) {
    display: block;
  }
`;

const SideArea = styled.div`
  width: 100%;
  flex-direction: column;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
