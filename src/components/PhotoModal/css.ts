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

export const dropzone: CSSWithTheme = () => ({
  marginTop: '36px',
  padding: '24px',
  border: '2px dashed #eeeeee',
  color: '#bdbdbd',
  outline: 'none',
  textAlign: 'center',
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
