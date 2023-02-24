export const container: CSSWithTheme = () => ({
  margin: '40px auto 0',
  maxWidth: '420px',

  '@media (max-width: 425px)': {
    width: '100%',
    padding: '0 15px',
    marginTop: '22px',
  },
});

export const title: CSSWithTheme = () => ({
  fontSize: '22px',
  lineHeight: '26px',
  textAlign: 'center',

  '@media (max-width: 425px)': {
    fontSize: '18px',
    lineHeight: '22px',
  },
});

export const text: CSSWithTheme = () => ({
  fontWeight: 500,
  fontSize: '18px',
  lineHeight: '23px',
  marginTop: '23px',

  '@media (max-width: 425px)': {
    fontSize: '16px',
    lineHeight: '21px',
  },
});

export const linksContainer: CSSWithTheme = () => ({
  marginTop: '20px',
  display: 'grid',
  gap: '5px',
  width: '100%',
});

export const linkItem: CSSWithTheme = () => ({
  textDecoration: 'none',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  padding: '11px 15px',
  borderRadius: '10px',
  border: '1px solid #CECCB5',
  cursor: 'pointer',
});

export const linkItemTitle: CSSWithTheme = () => ({
  fontWeight: 500,
  lineHeight: '21px',

  '@media (max-width: 425px)': {
    fontSize: '14px',
    lineHeight: '18px',
  },
});

export const linkItemText: CSSWithTheme = () => ({
  lineHeight: '21px',

  '@media (max-width: 425px)': {
    fontSize: '14px',
    lineHeight: '18px',
  },
});

export const avatarContainer: CSSWithTheme = () => ({
  width: '150px',
  position: 'relative',
  marginTop: '15px',

  img: {
    height: '150px',
    borderRadius: '50%',
  },

  '@media (max-width: 425px)': {
    width: '100px',
    img: {
      height: '100px',
    },
  },
});

export const avatarUpload: CSSWithTheme = () => ({
  position: 'absolute',
  height: '43px',
  width: '43px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: '#3300CC',
  border: '2px solid #FFFFFF',
  borderRadius: '50%',
  bottom: 0,
  left: 125,
  cursor: 'pointer',

  svg: {
    height: '28px',
  },
});
