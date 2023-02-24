export const container: CSSWithTheme = () => ({
  boxSizing: 'border-box',
  padding: '0 40px',
  height: '60px',
  width: '100%',
  borderBottom: '1px solid #F1F0EC',
  display: 'flex',
  alignItems: 'center',

  '@media (max-width: 425px)': {
    padding: '0 15px',
    borderTop: '1px solid #F1F0EC',
  },
});

export const backButton: CSSWithTheme = (isVisible: boolean) => ({
  flex: 1,

  a: {
    display: isVisible ? 'flex' : 'none',
    cursor: 'pointer',
    width: '35px',
    height: '35px',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '50%',
    transition: 'all 0.2s',

    ':hover': {
      background: 'rgba(0, 0, 0, 0.05)',
    },
  },

  svg: {
    marginLeft: '-3px',
  },
});

export const avatar: CSSWithTheme = (isVisible: boolean) => ({
  flex: 1,
  display: 'flex',
  justifyContent: 'end',

  a: {
    display: isVisible ? 'block' : 'none',
  },

  img: {
    width: '35px',
    flexShrink: 0,
    height: '35px',
    borderRadius: '50%',
    cursor: 'pointer',
  },
});
