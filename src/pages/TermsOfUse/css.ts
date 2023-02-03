export const container: CSSWithTheme = () => ({
  maxWidth: '700px',
  margin: '40px auto 0 auto',

  '@media (max-width: 768px)': {
    width: '100%',
    marginTop: '16px',
    padding: '0 15px',
  },
});

export const title: CSSWithTheme = () => ({
  fontSize: '30px',
  lineHeigt: '36px',
  textAlign: 'center',

  '@media (max-width: 768px)': {
    fontSize: '18px',
    lineHeigt: '22px',
  },
});

export const text: CSSWithTheme = () => ({
  fontSize: '18px',
  lineHeight: '23px',
  letterSpacing: '-0.02em',
  marginTop: '15px',
  paddingBottom: '16px',

  ol: {
    margin: 0,
    paddingLeft: '26px',
  },

  ul: {
    margin: 0,
    paddingLeft: '26px',
  },

  '@media (max-width: 768px)': {
    fontSize: '16px',
    lineHeigt: '21px',
  },
});
