import styled, { css } from 'styled-components';

/* eslint-disable-next-line */
export interface TabBarProps {
  Type?: string;
  Sections: string[];
  ActiveSection: number;
  ChangeSection: (section: number) => void;
}

const StyledTabBar = styled.div`
  width: 100%;
  height: 100%;
  background-color: #ededed;
  display: flex;
  border-right: 1px solid rgba(0, 0, 0, 0.05);
  flex-direction: column;
`;

interface IStyledTab {
  Active: boolean;
}

const StyledTab = styled.div<IStyledTab>`
  display: flex;
  flex-direction: row;
  align-items: center;
  font: inherit;
  font-size: 1.9rem;
  transition: all 0.1s ease;
  cursor: pointer;
  & div {
    height: 100%;
    width: 5px;
    margin-right: 10px;
  }
  & span {
    padding: 3rem 0px 3rem 0px;
  }
  ${(props) =>
    props.Active &&
    css`
      background-color: #ffffff;
      font-weight: 500;
      & div {
        background-color: #faa519;
      }
    `}
`;

export function TabBar(props: TabBarProps) {
  return (
    <StyledTabBar>
      {props.Sections.map((section, index) => {
        return (
          <StyledTab
            key={index}
            onClick={() => {
              props.ChangeSection(index);
            }}
            Active={index === props.ActiveSection}
          >
            <div />
            <span>{section}</span>
          </StyledTab>
        );
      })}
    </StyledTabBar>
  );
}

export default TabBar;
