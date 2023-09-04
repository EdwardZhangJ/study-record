import styled from "styled-components";


export const CenterWrapper = styled.div`
  cursor: pointer;
  /* padding: 0 24px; */
  min-width: 327px;
  box-sizing: border-box;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 40px;
  display: flex;
  align-items: center;
  font-size: ${props => props.theme.font.primaryFontSize};
  text-align: left;



  .dir {
    border: none;
    background: transparent;
    cursor: pointer;
    padding: 0;
    text-align: inherit;
    border: 1px solid transparent;
    border-radius: 4px;
    margin: -1px;
    height: 48px;
    text-align: inherit;
    display: flex;
    align-items: center;
    color: #717171;
    box-sizing: border-box;
    
    .dir-text {
      padding: 0 16px;
      min-width: 80px;
      box-sizing: border-box;
    }

    &:first-child {
      padding-left: 8px;
    }
  }

  .split-line {
    flex: 0 0 1px;
    height: 24px;
    width: 1px;
    background: #ddd;
  }

  .search-bar {
    width: 32px;
    height: 32px;
    margin: 7px 7px 7px 0;
    color: #fff;
    box-sizing: border-box;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    
    background: ${props => props.theme.color.primaryColor};
  }
  ${props => props.theme.mixin.boxShadow}

`
