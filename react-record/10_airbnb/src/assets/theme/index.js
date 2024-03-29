const theme = {
  color: {
    primaryColor: '#ff485c',
    secondaryColor: '#00848a',
  },
  text: {
    primaryColor: '#484848',
    secondaryColor: '#222222',
  },
  font: {
    primaryFontSize: '14px',
  },
  mixin: {
    boxShadow: `
      transition: box-shadow 0.2s ease;
      &:hover {
        box-shadow: 0 2px 4px rgba(0,0,0,0.18);
      }
    `
  }
}

export default theme
