import styled, { css } from 'styled-components';
import Container from '../container';
import Text from 'app/components/atoms/text';

/* eslint-disable-next-line */
export interface TabBarProps {
  Vertical?: boolean;
  Horizontal?: boolean;
  Size?: string;
  Sections: string[];
  ActiveSection: number;
  ChangeSection: (section: number) => void;
}

interface ITabBar {
  Vertical?: boolean;
  Horizontal?: boolean;
  Size?: string;
}

const StyledTabBar = styled.div<ITabBar>`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column-reverse;
  align-items: center;
  font-size: 1.9rem;
  ${(props) =>
    props.Size &&
    css`
      font-size: ${props.Size};
    `}
  ${(props) =>
    props.Vertical &&
    css`
      border-right: 2px solid #efefef;
      & > hr {
        height: 0.1px;
        width: 100%;
        background-color: #efefef;
        margin: 0;
        border-color: transparent;
        border-radius: 0.7rem;
        align-self: center;
        z-index: 0;
      }
    `};

  ${(props) =>
    props.Horizontal &&
    css`
      & > hr {
        height: 0.1px;
        width: 100%;
        background-color: #efefef;
        margin: 0;
        border-color: transparent;
        border-radius: 0.7rem;
        align-self: center;
        z-index: 0;
      }
    `}
`;

interface IStyledTab {
  Vertical?: boolean;
  Horizontal?: boolean;
  Active: boolean;
}

const StyledTab = styled.div<IStyledTab>`
  display: flex;
  font: inherit;
  cursor: pointer;
  height: 100%;
  transition: all 0.2s ease;
  ${(props) =>
    props.Vertical &&
    css`
      height: fit-content;
      padding: 3rem 2rem 3rem 2rem;
      &:hover {
        background-color: #f6f6f6;
      }
      & > hr {
        display: none;
      }
    `}

  ${(props) =>
    props.Horizontal &&
    css`
      color: grey;
      flex-direction: column;
      justify-content: flex-end;
      align-items: center;
      gap: 2rem;
      width: 12rem;
      & hr {
        height: 0.8px;
        border-color: transparent;
        border-radius: 0.7rem;
        align-self: center;
        background-color: #faa519;
        transform: none;
        margin: 0;
        transform: scale(0);
        width: 100%;
        align-self: flex-end;
        will-change: transform;
        transition: transform 0.25s cubic-bezier(0.445, 0.05, 0.55, 0.95) 0s;
        z-index: 1;
      }
      ${props.Active &&
      css`
        color: #faa519;
        font-weight: 500;
        & hr {
          transform: scale(1);
        }
      `}
    `}
`;

export function TabBar(props: TabBarProps) {
  return (
    <StyledTabBar
      Vertical={props.Vertical}
      Horizontal={props.Horizontal}
      Size={props.Size}
    >
      <hr />
      <Container
        MarginBottom="-2px"
        Row={props.Horizontal}
        Column={props.Vertical}
      >
        {props.Sections.map((section, index) => {
          return (
            <StyledTab
              Vertical={props.Vertical}
              Horizontal={props.Horizontal}
              key={index}
              onClick={() => {
                props.ChangeSection(index);
              }}
              Active={index === props.ActiveSection}
            >
              <Container
                Row
                CenterCA
                CenterMA
                Width="fit-content"
                Height="fit-content"
                BG="transparent"
              >
                <Text
                  Color={
                    index === props.ActiveSection
                      ? '#faa519'
                      : 'rgb(105, 105, 105)'
                  }
                  N
                >
                  {section}
                </Text>
              </Container>
              <hr />
            </StyledTab>
          );
        })}
      </Container>
    </StyledTabBar>
  );
}

export default TabBar;
