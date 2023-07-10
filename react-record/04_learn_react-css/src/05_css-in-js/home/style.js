import { styled } from "styled-components";

export const HYButton = styled.button`
  border: 1px solid #ff2423;
  border-radius: 5px;
`
export const HYButtonWrapper = styled(HYButton)`
  background: #23ffe2;
  color: #232323;
`

export const HomeWrapper = styled.div`
  margin: 10px auto;
  border: 1px solid #fe56fe;
  .top {
    .banner {
      color: red;
    }
  }

  .bottom {
    .header {
      color: ${props => props.theme.color};
      font-size: ${props => props.theme.size};
    }

    .product-list {

      .product-item {
        color: blue;
      }
    }
  }
`
