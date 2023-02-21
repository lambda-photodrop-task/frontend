export const container: CSSWithTheme = () => ({
  backgroundColor: '#262626',
  padding: '60px 0 40px',
});

export const content: CSSWithTheme = () => ({
  width: '791px',
  margin: '0 auto',
  display: 'grid',
  gridTemplateColumns: '4fr 3fr',
  gap: '60px',

  '@media (max-width: 825px)': {
    gridTemplateColumns: '1fr',
    width: '100%',
    padding: '0 15px',
  },
});

export const title: CSSWithTheme = () => ({
  color: '#FFFFFF',
  fontFamily: 'Termina',
  fontWeight: 700,
  fontSize: '22px',
  lineHeight: '26px',
  letterSpacing: '-0.02em',
  marginBottom: '19px',

  '@media (max-width: 825px)': {
    fontSize: '18px',
    lineHeight: '23px',
  },
});

export const text: CSSWithTheme = () => ({
  color: '#FFFFFF',
  fontSize: '18px',
  lineHeight: '23px',
  letterSpacing: '-0.02em',

  '@media (max-width: 825px)': {
    fontSize: '16px',
    lineHeight: '21px',
  },
});

export const button: CSSWithTheme = () => ({
  outline: 'none',
  border: '1px solid #FFFFFF',
  color: '#FFFFFF',
  fontWeight: 500,
  fontSize: '18px',
  lineHeight: '23px',

  width: '300px',
  height: '50px',
  background: 'none',
  borderRadius: '50px',
  cursor: 'pointer',
});

export const linksContainer: CSSWithTheme = () => ({
  display: 'flex',
  flexDirection: 'column',
  marginTop: '30px',

  a: {
    color: '#FFFFFF',
    fontFamily: 'Futura PT',
    textDecoration: 'none',
    letterSpacing: '-0.02em',

    ':last-child': {
      marginTop: '19px',
    },
  },
});
