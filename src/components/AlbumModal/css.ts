export const modal: CSSWithTheme = () => ({
  outline: 'none',
  boxSizing: 'border-box',
  width: '500px',
  background: '#FFFFFF',
  borderRadius: '10px',
  padding: '36px',
  fontFamily: 'Futura PT',

  '@media (max-width: 425px)': {
    height: '100vh',
    width: '100vw',
    borderRadius: '0',
  },
});

export const header: CSSWithTheme = () => ({
  position: 'relative',
  textAlign: 'center',

  svg: {
    position: 'absolute',
    cursor: 'pointer',
    left: '-5px',
    top: '-10px',

    path: {
      stroke: 'var(--main-text-color)',
    },
  },
});

export const modalTitle: CSSWithTheme = () => ({
  fontWeight: 500,
  fontSize: '18px',
  lineHeight: '13px',
  color: 'var(--main-text-color)',
});

export const modalBody: CSSWithTheme = () => ({
  marginTop: '36px',
  display: 'grid',
  gap: '16px',
});

export const input: CSSWithTheme = () => ({
  width: '100%',
  border: '1px solid #EEEEEE',
  borderRadius: '10px',
  height: '44px',
  background: '#F4F4F4',
  padding: '15px 17px',
  fontFamily: 'Futura PT',
  fontSize: '16px',
  outline: 'none',
});

export const button: CSSWithTheme = () => ({
  width: '420px',
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
