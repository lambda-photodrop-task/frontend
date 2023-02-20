export const modal: CSSWithTheme = () => ({
  outline: 'none',
  boxSizing: 'border-box',
  width: '379px',
  height: '653px',
  background: '#262626',
  borderRadius: '20px',
  padding: '23px 15px 40px',
  fontFamily: 'Futura PT',
});

export const header: CSSWithTheme = () => ({
  position: 'relative',
  textAlign: 'center',

  svg: {
    position: 'absolute',
    cursor: 'pointer',
    left: '-5px',
    top: '-7px',
  },
});

export const modalTitle: CSSWithTheme = () => ({
  fontWeight: 500,
  fontSize: '18px',
  lineHeight: '13px',
  color: '#FFFFFF',
});

export const modalBody: CSSWithTheme = () => ({
  marginTop: '94px',
});

export const modalText: CSSWithTheme = () => ({
  fontWeight: 400,
  fontSize: '16px',
  lineHeight: '11px',
  color: '#FFFFFF',
  textAlign: 'center',
});

export const cropperContainer: CSSWithTheme = () => ({
  position: 'relative',
  marginTop: '42px',
  height: '285px',

  '.reactEasyCrop_Container': {
    img: {
      maxHeight: '285px',
      height: '285px',

      maxWidth: 'unset',
      width: 'auto',
    },

    '.reactEasyCrop_CropArea': {
      color: '#262626',
      // height: '285px !important',
      // width: '285px !important',
      border: 'none',
    },
  },
});

export const modalFooter: CSSWithTheme = () => ({
  marginTop: '95px',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '10px',
});

export const button: CSSWithTheme = (type: string) => ({
  outline: 'none',
  border: type === 'secondary' ? '1px solid #FFFFFF' : 'none',
  color: type === 'secondary' ? '#FFFFFF' : '#262626',
  fontWeight: 500,
  fontSize: '18px',
  lineHeight: '23px',

  width: '170px',
  height: '50px',
  background: type === 'secondary' ? 'none' : '#FFFFFF',
  borderRadius: '50px',
  cursor: 'pointer',
});
