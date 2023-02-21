export const container: CSSWithTheme = () => ({
  boxSizing: 'border-box',
  padding: '0 40px',
  height: '60px',
  width: '100%',
  borderBottom: '1px solid #F1F0EC',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  '@media (max-width: 425px)': {
    padding: '0 15px',
    borderTop: '1px solid #F1F0EC',
  },
});

export const avatar: CSSWithTheme = () => ({
  width: '35px',
  heiight: '35px',
  borderRadius: '50%',
  cursor: 'pointer',
});
