export const backdrop = () => ({
  backgroundColor: 'transparent !important',
});

export const modal = () => ({
  width: '100vw',
  height: '100vh',
  outline: 'none',
  background: 'rgba(0, 0, 0, 0.95)',

  '@media (orientation: portrait)': {
    background: '#262626',
  },
});

export const closeIcon: CSSWithTheme = () => ({
  cursor: 'pointer',
  position: 'absolute',
  top: '23px',
  left: '35px',

  '@media (orientation: portrait)': {
    top: '15px',
    left: '7px',
  },
});

export const image = (imageOrientation: string) => ({
  display: 'flex',
  height: '100vh',
  justifyContent: 'center',
  alignItems: 'center',

  '@media (orientation: landscape)': {
    img: {
      height: '100vh',
    },
  },

  '@media (orientation: portrait)': {
    img: {
      width: imageOrientation === 'portrait' ? 'calc(100vw - 30px)' : '100vw',
    },
  },
});

export const footer: CSSWithTheme = () => ({
  position: 'absolute',
  display: 'flex',
  gap: '30px',
  alignItems: 'center',
  justifyContent: 'center',
  paddingBottom: '20px',
  bottom: 0,
  width: '100vw',

  '@media (orientation: landscape)': {
    background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.75) 44.34%, rgba(0, 0, 0, 0) 100%)',
    justifyContent: 'end',
    paddingTop: '20px',
    height: '100px',
  },
});

export const downloadButton: CSSWithTheme = () => ({
  outline: 'none',
  cursor: 'pointer',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  background: 'transparent',
  border: 'none',
  color: '#FFFFFF',
  fontSize: '14px',
  lineHeight: '11px',
  height: '37px',

  svg: {
    marginBottom: '5px',
  },
});

export const button: CSSWithTheme = () => ({
  outline: 'none',
  border: '1px solid #FFFFFF',
  color: '#FFFFFF',
  fontWeight: 500,
  fontSize: '18px',
  lineHeight: '23px',

  width: '200px',
  height: '50px',
  background: 'none',
  borderRadius: '50px',
  cursor: 'pointer',
});
