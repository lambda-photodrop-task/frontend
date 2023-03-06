export const container: CSSWithTheme = () => ({
  maxWidth: '1200px',
  margin: '0 auto',
  paddingTop: '40px',
  boxSizing: 'border-box',
  minHeight: 'calc(100vh - 60px - 471px)',

  '@media (max-width: 1250px)': {
    width: '100%',
    paddingTop: '20px',
  },
});

export const albumsSection: CSSWithTheme = () => ({
  '@media (max-width: 1250px)': {
    padding: '0 15px',
  },
});

export const photosSection: CSSWithTheme = () => ({
  marginTop: '100px',

  '@media (max-width: 1250px)': {
    h2: {
      paddingLeft: '15px',
    },
  },

  '@media (max-width: 768px)': {
    marginTop: '34px',
  },
});

export const sectionTite: CSSWithTheme = () => ({
  fontFamily: 'Futura PT',
  fontWeight: 500,
  fontSize: '16px',
  lineHeight: '21px',
  color: '#262626',

  '@media (max-width: 768px)': {
    fontSize: '14px',
    lineHeight: '18px',
  },
});

export const itemsContainer: CSSWithTheme = (isGapEnabled: boolean) => ({
  display: 'flex',
  flexWrap: 'wrap',
  marginTop: '19px',
  gap: isGapEnabled ? '5px' : 0,

  '@media (max-width: 768px)': {
    marginTop: '10px',
  },
});

export const album: CSSWithTheme = () => ({
  width: '200px',
  height: '255px',
  borderRadius: '20px',

  '@media (max-width: 768px)': {
    width: '110px',
    height: '140px',
  },
});

export const photo: CSSWithTheme = () => ({
  width: '400px',
  height: '400px',

  '@media (max-width: 768px)': {
    width: '125px',
    height: '125px',
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
  margin: '100px 0',

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
    margin: '87px 0 60px',
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

export const artistPrint = (url: string, name?: string) => ({
  background: name ? `linear-gradient(to bottom, rgba(0,0,0,0) 30%, rgba(0,0,0,0.7)), url('${url}')` : `url('${url}')`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  width: '200px',
  height: '255px',
  borderRadius: '20px',
  cursor: 'pointer',

  display: 'flex',
  alignItems: 'end',
  justifyContent: 'center',

  p: {
    marginBottom: '20px',
    color: '#FFFFFF',
    fontSize: '14px',
    lineHeight: '9px',
  },
});

export const photoItem = (src: string) => ({
  width: src.length ? '300px' : 'auto',
  height: '300px',
  backgroundImage: src.length ? `url(${src})` : 'none',
  cursor: 'pointer',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundBlendMode: 'multiply',

  '@media (max-width: 768px)': {
    width: '125px',
    height: '125px',
  },
});

export const buttonContainer: CSSWithTheme = () => ({
  margin: '100px 0',
  display: 'flex',
  justifyContent: 'center',
});

export const button: CSSWithTheme = () => ({
  width: '300px',
  height: '50px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '20px',

  color: '#FFFFFF',
  fontFamily: 'Futura PT',
  fontWeight: 500,
  fontSize: '22px',
  lineHeight: '22px',

  background: 'var(--cta-button-color)',
  borderRadius: '50px',
  cursor: 'pointer',
  border: 'none',
  boxSizing: 'boder-box',

  ':disabled': {
    background: 'var(--cta-button-disabled-color)',
    cursor: 'not-allowed',
  },

  '@media (max-width: 425px)': {
    width: '100%',
    fontSize: '18px',
  },
});
