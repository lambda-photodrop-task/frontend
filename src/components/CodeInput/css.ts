export const input = () => ({
  marginTop: '18px',

  '.code-input-container': {
    width: '420px',
    justifyContent: 'space-between',
  },

  '.code-input': {
    background: '#F4F4F4',
    height: '40px',
    width: '45px !important',
    borderRadius: '10px',
    border: '1px solid #EEEEEE',
    outline: 'none',

    fontFamily: 'Futura PT',
    fontSize: '18px',
    color: 'var(--main-text-color)',
  },

  '@media (max-width: 425px)': {
    '.code-input-container': {
      width: '100%',
    },
  },
});
