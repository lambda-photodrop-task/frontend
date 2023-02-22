export const container: CSSWithTheme = () => ({
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '40px 0 120px',
  boxSizing: 'border-box',
  minHeight: 'calc(100vh - 60px - 471px - 40px)',

  '@media (max-width: 1250px)': {
    width: '100%',
    padding: '20px 0 60px',
  },
});

export const emptyStateContainer: CSSWithTheme = () => ({
  margin: '0 auto',
  width: '700px',
  textAlign: 'center',

  svg: {
    width: '100px',
  },

  h2: {
    fontFamily: 'Futura PT',
    fontWeight: 500,
    fontSize: '30px',
    lineHeight: '22px',
    color: '#262626',
    margin: '30px 0 0',
  },

  p: {
    fontSize: '19px',
    lineHeight: '16px',
    margin: '20px 0 0',
  },

  '@media (max-width: 1250px)': {
    width: '100%',
    padding: '0 15px',
  },

  '@media (max-width: 768px)': {
    svg: {
      width: '75px',
    },

    h2: {
      marginTop: '21px',
      fontSize: '22px',
      lineHeight: '28px',
    },

    p: {
      fontSize: '18px',
      lineHeight: '23px',
      marginTop: '16px',
    },
  },
});

export const printsContainer: CSSWithTheme = () => ({
  margin: '100px 0 0',

  h2: {
    fontFamily: 'Futura PT',
    fontWeight: 500,
    fontSize: '30px',
    lineHeight: '22px',
    color: '#262626',
    margin: '30px 0 0',
  },

  '@media (max-width: 1250px)': {
    paddingLeft: '15px',
    marginTop: '87px',
  },

  '@media (max-width: 768px)': {
    fontSize: '22px',
    lineHeight: '28px',
  },
});

export const printsContent: CSSWithTheme = () => ({
  marginTop: '20px',
  display: 'grid',
  gap: '10px',
  gridTemplateColumns: '1fr 1fr 1fr',
  width: 'fit-content',

  '@media (max-width: 635px)': {
    width: 'auto',
    overflowX: 'scroll',
  },
});

export const artistPrint: CSSWithTheme = (url: string) => ({
  backgroundImage: `url('${url}')`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  width: '200px',
  height: '255px',
  borderRadius: '20px',
  cursor: 'pointer',
});
