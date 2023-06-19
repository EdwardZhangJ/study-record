import ThemeContext from './context/theme-context';
function HomeBanner() {
  return (
  <div>
    <h2>HomeBanner</h2>
    {/* 函数式组件使用Context共享的数据 */}
    <ThemeContext.Consumer>
      {
        value => {
          return <div>Banner Theme： {value.color}</div>
        }
      }
    </ThemeContext.Consumer>
  </div>
  )
}

export default HomeBanner;
