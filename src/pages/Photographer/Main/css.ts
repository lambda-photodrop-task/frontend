export const container: CSSWithTheme = () => ({
  maxWidth: '768px',
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

export const albumsContainer: CSSWithTheme = () => ({
  marginTop: '16px',
  display: 'grid',
  gap: '16px',
});

export const albumItem: CSSWithTheme = (isSkeleton: boolean) => ({
  boxSizing: 'border-box',
  width: '100%',
  height: '64px',
  borderRadius: '10px',
  border: isSkeleton ? 'none' : '1px solid #E3E0D8',
  padding: '16px',
  cursor: isSkeleton ? 'unset' : 'pointer',

  display: 'flex',
  alignItems: 'center',

  svg: {
    height: '36px',
    width: '36px',
    marginRight: '16px',
  },
});
