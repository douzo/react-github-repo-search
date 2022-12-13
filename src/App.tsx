import { useState } from "react";
import styled from "styled-components";
import TopArea from "./components/TopArea";
import { Index } from "./components/UserData/Index";

import { ThemeContextProvider } from "./contexts/ThemeContext";
import { ItemProps, RepoProps } from "./types";
function App() {
  const [repo, setRepo] = useState<RepoProps | null>(null);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  function setRepoData(repo: RepoProps | null) {
    setRepo(repo);
    console.log(repo);
  }

  const handlePagination = (direction: string) => {
    let offset = page * 20;
    let results = repo?.total_count || 0;
    if (direction === "prev" && page >= 2) {
      setPage(page - 1);
    }
    if (direction === "next" && page > 0 && offset < results) {
      setPage(page + 1);
    }
  };

  return (
    <ThemeContextProvider>
      <Container>
        <TopArea
          setRepo={setRepoData}
          page={page}
          setPage={setPage}
          setLoading={setLoading}
        />

        <TotalResults>{repo?.total_count || 0} results</TotalResults>
        {loading ? (
          <Loading></Loading>
        ) : (
          <>
            <ListView>
              {(repo?.items || []).map((r) => {
                return <Index item={r}></Index>;
              })}
            </ListView>

            <Pagination>
              <Icon onClick={() => handlePagination("prev")}>Prev</Icon>
              <PageText>Page {page}</PageText>
              <Icon onClick={() => handlePagination("next")}>Next</Icon>
            </Pagination>
          </>
        )}
      </Container>
    </ThemeContextProvider>
  );
}

const Loading = styled.div`
  :before,
  :after {
    background: #ffffff;
    -webkit-animation: load1 1s infinite ease-in-out;
    animation: load1 1s infinite ease-in-out;
    width: 1em;
    height: 4em;
  }

  color: #ffffff;
  text-indent: -9999em;
  margin: 88px auto;
  position: relative;
  font-size: 11px;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;

  :before,
  :after {
    position: absolute;
    top: 0;
    content: "";
  }
  :before {
    left: -1.5em;
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
  }
  :after {
    left: 1.5em;
  }
  @-webkit-keyframes load1 {
    0%,
    80%,
    100% {
      box-shadow: 0 0;
      height: 4em;
    }
    40% {
      box-shadow: 0 -2em;
      height: 5em;
    }
  }
  @keyframes load1 {
    0%,
    80%,
    100% {
      box-shadow: 0 0;
      height: 4em;
    }
    40% {
      box-shadow: 0 -2em;
      height: 5em;
    }
  }
`;

const PageText = styled.span`
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors.textNorm};
`;

const Icon = styled.button`
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

const Pagination = styled.div`
  display: flex;
  gap: 2rem;
  padding: 1rem;
  cursor: pointer;
  font-size: 0.8rem;
  color: ${(props) => props.theme.colors.textNorm};

  align-items: center;
  justify-content: center;
`;

const TotalResults = styled.div`
  width: 100%;
  max-width: 73.3rem;
  font-weight: 700;
  display: flex;
  padding: 9px;
  align-items: center;
  justify-content: left;
  color: ${(props) => props.theme.colors.textNorm};
`;

const ListView = styled.li`
  max-width: 100%;
  margin: 0 auto;
  display: grid;
  gap: 1rem;
  @media (max-width: 600px) {
    display: list-item;
  }
  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Container = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.colors.background};
  padding: 3.1rem 2.4rem;
  @media (min-width: 768px) {
    padding: 3.1rem 7rem;
  }
`;

export default App;
