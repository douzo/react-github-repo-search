import React, { useContext, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { ThemeContext } from "../contexts/ThemeContext";
import { RepoDataProps, TopAreaProps } from "../types";

import iconSun from "../assets/icon-sun.svg";
import iconMoon from "../assets/icon-moon.svg";
import iconSearch from "../assets/icon-search.svg";

const TopArea = ({ setRepo, page, setPage, setLoading }: TopAreaProps) => {
  const { changeTheme, lightMode } = useContext(ThemeContext);
  const [empty, setEmpty] = useState<boolean>(false);
  const [notFound, setNotFound] = useState<boolean>(false);
  const repoNameRef = useRef<HTMLInputElement>(null);
  const [inputRepo, setInputRepo] = useState<string>("github");

  function handleSubmit() {
    if (
      repoNameRef.current?.value.trim() === "" ||
      repoNameRef.current?.value === undefined
    ) {
      setEmpty(true);

      setInputRepo("");
      setRepo(null);
      return;
    }

    setEmpty(false);
    setPage(1);
    fetchRepo(repoNameRef.current.value, 1, 20);
  }

  async function fetchRepo(repo: string, page: number, perPage: number) {
    setInputRepo(repo);
    const queryTerm = `q=${repo}`;
    const queryPage = `&page=${page || 1}`;
    const queryPerPage = `&per_page=${perPage || 20}`;
    const queryString = queryTerm + queryPerPage + queryPage;

    setLoading(true);

    const response = await fetch(
      `https://api.github.com/search/repositories?${queryString}`
    );
    const data = await response.json();

    if (response.status != 200) {
      setNotFound(true);
      setRepo(null);
      return;
    }

    setNotFound(false);

    setLoading(false);
    setRepo(data);
  }

  useEffect(() => {
    fetchRepo(inputRepo, page, 20);
  }, [inputRepo, page]);

  return (
    <>
      <ThemeArea>
        <ChangeThemeBtn type="button" onClick={changeTheme}>
          {lightMode ? (
            <>
              DARK
              <img src={iconMoon} alt="dark mode" />
            </>
          ) : (
            <>
              LIGHT
              <img src={iconSun} alt="light mode" />
            </>
          )}
        </ChangeThemeBtn>
      </ThemeArea>
      <Container>
        <InputArea
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <InputLabel>
            <img src={iconSearch} alt="search .." />
          </InputLabel>
          <Input
            ref={repoNameRef}
            name="repoName"
            id="repoName"
            type="text"
            placeholder="Search repo name ..."
          />
          {empty && <Warn>Enter search repo name</Warn>}
          {notFound && <Warn>Not Found</Warn>}
          <SubmitBtn type="submit">Search</SubmitBtn>
        </InputArea>
      </Container>
    </>
  );
};

const Container = styled.header`
  width: 100%;
  max-width: 73.3rem;
`;

const ThemeArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
`;

const Warn = styled.small`
  font-weight: bold;
  font-size: 1.5rem;
  line-height: 2.2rem;
  color: #f74646;
  margin-right: 2.4rem;
`;

const ChangeThemeBtn = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background: none;
  font-weight: bold;
  font-size: 1.6rem;
  line-height: 1.9rem;
  letter-spacing: 0.25rem;
  color: ${(props) => props.theme.colors.themeBtn};
  cursor: pointer;
  img {
    margin-left: 1.6rem;
  }
`;

const InputArea = styled.form`
  margin-top: 3.6rem;
  border-radius: 1.5rem;
  background: ${(props) => props.theme.colors.card};
  box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.198567);
  width: 100%;
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.7rem 0.7rem 0.7rem 1.6rem;
  transition: height 0.3s ease;
  position: relative;
  @media (min-width: 768px) {
    height: 6.9rem;
  }
`;

const InputLabel = styled.label`
  height: 2.4rem;
  cursor: pointer;
`;

const Input = styled.input`
  flex: 1;
  font-style: normal;
  font-weight: normal;
  font-size: 1.4rem;
  line-height: 192%;
  color: ${(props) => props.theme.colors.textNorm};
  background: none;
  border: none;
  margin: 0 0.8rem;
  @media (min-width: 768px) {
    font-size: 1.7rem;
    margin: 0 2.4rem;
  }
  &:focus {
    outline: 1px dashed #0079ff;
  }
`;

const SubmitBtn = styled.button`
  background: #0079ff;
  border: none;
  height: 100%;
  border-radius: 1rem;
  line-height: 2.1rem;
  font-size: 1.5rem;
  font-weight: bold;
  color: #fff;
  cursor: pointer;
  width: 8.4rem;
  transition: all 0.3s ease-out;
  cursor: pointer;
  &:hover {
    filter: brightness(1.05);
    box-shadow: 0px 0px 15px -3px #0079ff;
  }
  @media (min-width: 768px) {
    width: 10.6rem;
    font-size: 1.7rem;
  }
`;
export default TopArea;
