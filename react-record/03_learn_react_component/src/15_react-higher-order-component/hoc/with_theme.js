import ThemeContext from '../context/theme_context.js'
function withTheme(OriginComponent) {
  return (props) => {
    return (
      <ThemeContext.Consumer>
        {
          (theme) => <OriginComponent {...props} {...theme} />
        }
      </ThemeContext.Consumer>)
  }
}
export default withTheme
