export const container: CSSWithTheme = () => ({
  maxWidth: '900px',
  margin: '0 auto',
  padding: '40px 0',
  minHeight: 'calc(100vh - 60px)',
  boxSizing: 'border-box',

  '@media (max-width: 1250px)': {
    width: '100%',
    padding: '20px 20px 40px',
  },
});

export const button: CSSWithTheme = () => ({
  borderRadius: '50%',
  border: 'none',
  height: '40px',
  width: '40px',
  background: '#3300CC',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
});

export const photosContainer: CSSWithTheme = (isLoading: boolean) => ({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  marginTop: '36px',
  gap: isLoading ? '15px' : '0',
});

export const photoItem = (src: string, selected: boolean) => ({
  width: src.length ? '300px' : 'auto',
  height: '300px',
  backgroundImage: src.length ? `url(${src})` : 'none',
  cursor: 'pointer',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundBlendMode: 'multiply',
  backgroundColor: selected ? 'rgba(0, 0, 0, 0.2)' : 'unset',
});

export const tagUsersContainer: CSSWithTheme = () => ({
  marginTop: '24px',
});

export const textButton: CSSWithTheme = () => ({
  width: '200px',
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
