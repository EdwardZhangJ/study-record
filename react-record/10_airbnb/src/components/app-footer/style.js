import { styled } from 'styled-components'

export const FooterWrapper = styled.div`
  border-top: 1px solid #ddd;
  margin: 20px auto;
  padding-top: 48px;
  font-family: 'Hiragino Sans GB', 'Microsoft YaHei', 'Microsoft YaHei', 'Heiti SC';
  color: #222222;
  font-size: 0.875rem;

  .content {
    padding: 0 40px;
  }

  .service {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    column-gap: 8px;
    padding-bottom: 48px;
    border-bottom: 1px solid #ddd;
  }

  .item {

    .title {
      font-weight: 600;
      margin-bottom: 12px;
    }

    .list{
      display: grid;
      grid-gap: 12px;
      font-weight: 400;
    }
    .href {
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
  }

  .statement {
    padding-top: 24px;

    .info {
      margin-top: 8px;
      padding-top: 8px;
      border-top: 1px solid #ddd;

      color: #717171;
      font-size: 0.75rem;
    }
  }
`
