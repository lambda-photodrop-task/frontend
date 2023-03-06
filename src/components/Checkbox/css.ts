import CheckedIcon from '../../assets/images/icons/checked-icon.svg';

export const container: CSSWithTheme = () => ({
  label: {
    alignItems: 'center',
    display: 'flex',
    width: 'fit-content',

    input: {
      '-webkit-appearance': 'none',
      appearance: 'none',

      width: '20px',
      height: '20px',
      borderRadius: '5px',
      border: '1px solid #E3E0D8',
      outline: 'none',
      cursor: 'pointer',
    },

    'input:checked': {
      border: '1px solid #3300CC',
      position: 'relative',
    },

    'input:checked::before': {
      position: 'absolute',
      content: `url(${CheckedIcon})`,
      top: 2,
      left: 2,
    },

    span: {
      color: '#262626',
      fontFamily: 'Futura PT',
      fontWeight: 500,
      fontSize: '18px',
      lineHeight: '12px',
      marginLeft: '10px',
      outline: 'none',
      cursor: 'pointer',
    },
  },

  p: {
    color: '#6D6D6D',
    marginLeft: '37px',
  },

  '@media (max-width: 425px)': {
    label: {
      span: {
        fontSize: '16px',
        lineHeight: '21px',
      },
    },
    p: {
      fontSize: '14px',
      lineHeight: '18px',
    },
  },
});
