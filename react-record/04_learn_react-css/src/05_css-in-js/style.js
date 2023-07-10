import {styled} from 'styled-components'
import {smallSize} from './style/variables'
// 1. 基本使用
export const AppWrapper = styled.div`
  .footer {
    border: 1px solid orange;
  }
`

// 2. 子元素可以单独抽取到一个样式组件
// 3. 可以接受玩不传入的props
// 4. 可以通过attrs给标签模板字符串中提供的属性添加默认值
// 5. 从单独的文件中引入变量
export const SectionWrapper = styled.div.attrs((props) => ({
  color: props.color || 'red',
}))`
  border: 1px solid red;
  .title {
    font-size: ${(props) => props.size}px;
    color: ${(props) => props.color};
    &:hover {
      background: purple;
    }
  }
  .content {
    font-size: ${smallSize};
    color: green;
  }
`
