import React, { useContext } from "react";
import styled from "styled-components";
import iconStar from "../../assets/icon-star.svg";
import iconFork from "../../assets/icon-fork.svg";
import { ThemeContext } from "../../contexts/ThemeContext";
import { formattedDate } from "../../utils/formatter";
interface AdditionalDetailsProps {
  stargazers_count: number;
  language: string;
  forks_count: number;
  updated_at: Date;
}
export const StartArea = ({
  stargazers_count,
  language,
  forks_count,
  updated_at,
}: AdditionalDetailsProps) => {
  const { lightMode } = useContext(ThemeContext);
  return (
    <Details>
      <Link>
        <svg
          aria-label="star"
          role="img"
          height="16"
          viewBox="0 0 16 16"
          width="16"
        >
          <g fill={lightMode ? "#4b6a9b" : "#fff"}>
            <path
              fill-rule="evenodd"
              d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"
            ></path>
          </g>
        </svg>
        <Data>{stargazers_count || 0}</Data>
      </Link>
      <Link>
        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" width="16">
          <g fill={lightMode ? "#4b6a9b" : "#fff"}>
            <path
              fill-rule="evenodd"
              d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"
            ></path>
          </g>
        </svg>
        <Data>{forks_count || 0}</Data>
      </Link>
      <Link>{language && <Data>{language || ""}</Data>}</Link>
      <Link>
        <Data>
          Updated {updated_at ? formattedDate(updated_at.toString()) : ""}
        </Data>
      </Link>
    </Details>
  );
};

const Details = styled.div`
  font-size: 0.7rem;
  display: flex;
  gap: 2rem;
  line-height: 1.25rem;
  color: ${(props) => props.theme.colors.textNorm};
`;
const Data = styled.span`
  font-size: 1.4rem;
  line-height: 2rem;
  color: ${(props) => props.theme.colors.textNorm};
  margin-left: 0.5rem;
  letter-spacing: 0.3px;
  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Link = styled.li`
  display: flex;
  align-items: center;
  margin-top: 2rem;
  a {
    display: grid;
    grid-template-columns: 20px 1fr;
  }
  svg {
    width: 20px;
  }
  &.unavailable {
    opacity: 0.5;
  }
`;
