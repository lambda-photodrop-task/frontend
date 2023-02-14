export const input = () => ({
  marginTop: '18px',
  width: '420px',

  'div[data-baseweb="select"]': {
    marginRight: '10px',

    'div.ao': {
      borderRadius: '10px',
      paddingRight: '6px',
      cursor: 'pointer !important',
      border: '1px solid #EEEEEE',
      background: '#F4F4F4',
    },
  },

  'div[data-baseweb="input"]': {
    border: '1px solid #EEEEEE',
    borderRadius: '10px',
    background: '#F4F4F4',
    fontFamily: 'Futura PT',

    'div[data-baseweb="phone-input"]': {
      background: '#F4F4F4',
    },
  },

  '@media (max-width: 425px)': {
    width: '100%',

    'div[data-baseweb="input"]': {
      'div[data-baseweb="phone-input"]': {
        fontSize: '14px',

        input: {
          fontSize: '14px',
        },
      },
    },
  },
});
