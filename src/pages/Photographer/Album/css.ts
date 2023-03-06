export const container: CSSWithTheme = () => ({
  maxWidth: '900px',
  margin: '0 auto',
  paddingTop: '40px',
  boxSizing: 'border-box',
  minHeight: 'calc(100vh - 60px)',

  '@media (max-width: 1250px)': {
    width: '100%',
    padding: '20px 20px 0',
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

export const photoItem: CSSWithTheme = (src: string) => ({
  width: src.length ? '300px' : 'auto',
  height: '300px',
  backgroundImage: src.length ? `url(${src})` : 'none',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
});
