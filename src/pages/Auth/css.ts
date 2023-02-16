export const container =
  (mobileMargin: number): CSSWithTheme =>
  () => ({
    margin: '178px auto 0',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',

    '@media (max-width: 425px)': {
      margin: `${mobileMargin}px 0 0`,
    },
  });

export const content: CSSWithTheme = () => ({
  width: '420px',

  '@media (max-width: 425px)': {
    width: '100%',
    padding: '0 15px',
  },
});

export const title: CSSWithTheme = () => ({
  fontSize: '30px',
  lineHeight: '22px',
  textAlign: 'center',

  '@media (max-width: 425px)': {
    fontSize: '22px',
    lineHeight: '17px',
  },
});

export const inputLabel: CSSWithTheme = () => ({
  fontSize: '18px',
  lineHeight: '23px',
  marginTop: `29px`,

  '@media (max-width: 425px)': {
    fontSize: '16px',
    lineHeight: '21px',
    marginTop: `14px`,
  },
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
  marginTop: '20px',
  width: 'fit-content',

  '@media (max-width: 425px)': {
    fontSize: '16px',
    lineHeight: '21px',
  },
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

export const secondaryText: CSSWithTheme = () => ({
  color: 'var(--secondary-text-color)',
  lineHeight: '21px',

  a: {
    color: 'var(--secondary-text-color)',
    textDecorationColor: '#3300CC',
  },

  '@media (max-width: 425px)': {
    fontSize: '14px',
    lineHeight: '18px',
  },
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
