export const container: CSSWithTheme = () => ({
  height: 'calc(100vh - 60px)',
  margin: '178px auto 0',
  width: 'fit-content',

  '@media (max-width: 768px)': {},
});

export const content: CSSWithTheme = () => ({
  maxWidth: '420px',
});

export const title: CSSWithTheme = () => ({
  fontSize: '30px',
  lineHeight: '36px',
  textAlign: 'center',
});

export const inputLabel: CSSWithTheme = () => ({
  fontSize: '18px',
  lineHeight: '23px',
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

export const inputResendCode: CSSWithTheme = () => ({
  cursor: 'pointer',
  fontSize: '18px',
  lineHeight: '23px',
  color: 'var(--cta-button-color)',
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
});

export const secondaryText: CSSWithTheme = () => ({
  color: 'var(--secondary-text-color)',
  lineHeight: '21px',
});

export const avatarContainer: CSSWithTheme = () => ({
  width: '181px',
  margin: '20px auto 0',
  position: 'relative',

  img: {
    height: '181px',
  },
});

export const avatarUpload: CSSWithTheme = () => ({
  position: 'absolute',
  height: '42px',
  width: '42px',
  background: 'var(--cta-button-color)',
  border: '1px solid var(--cta-button-color)',
  borderRadius: '50%',
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  bottom: 0,
  right: 0,

  input: {
    display: 'none',
  },
});
