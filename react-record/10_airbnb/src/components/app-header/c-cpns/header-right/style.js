import styled from "styled-components";

export const RightWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  .btn-icon {
    display: flex;
    align-items: center;
    justify-content: center;

    margin-right: 5px;
    cursor: pointer;
    width: 44px;
    height: 44px;

    &:hover {
      border-radius: 22px;
      background: #eee;
      width: 44px;
      height: 44px;
    }

  }

  .profile {
    display: flex;
    align-items: center;
    justify-content: space-around;

    height: 42px;
    width: 77px;
    margin-right: 24px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 25px;
    background-color: #fff;
    color: ${props => props.theme.text.primaryColor};
    cursor: pointer;
    /* 设置boxShadow 混入样式 */
    ${props => props.theme.mixin.boxShadow}


    .popup-panel {
      position: absolute;
      top: 70px;
      right: 0;
      width: 240px;
      background-color: #fff;
      box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);
      border-radius: 15px;

      .top, .bottom {
        padding: 10px 0;

        .item {
          height: 40px;
          line-height: 40px;
          padding: 0 16px;
        }
      }

      .top {
        border-bottom: 1px solid #eee;

        .register {
          font-weight: 700;
        }
      }
    }
  }
`
