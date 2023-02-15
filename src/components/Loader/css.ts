export const container: CSSWithTheme = () => ({
  position: 'absolute',
  zIndex: 100,
  height: '100vh',
  width: '100vw',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  background: 'rgba(255, 255, 255, 0.9)',
  backdropFilter: 'blur(4px)',

  img: {
    width: '75px',
  },

  p: {
    marginTop: '20px',
    fontSize: '18px',
    lineHeight: '23px',
    fontWeight: 500,
  },
});
