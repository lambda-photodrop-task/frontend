export const modal: CSSWithTheme = () => ({
  outline: 'none',
  boxSizing: 'border-box',
  width: '379px',
  height: '653px',
  background: '#262626',
  borderRadius: '20px',
  padding: '23px 15px 40px',
  fontFamily: 'Futura PT',

  '@media (max-width: 425px)': {
    height: '100vh',
    width: '100vw',
    borderRadius: '0',

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
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

  '@media (max-width: 425px)': {
    margin: '0',
  },
});

export const modalText: CSSWithTheme = () => ({
  fontWeight: 400,
  fontSize: '16px',
  lineHeight: '11px',
  color: '#FFFFFF',
  textAlign: 'center',
});

export const cropperContainer: CSSWithTheme = () => ({
  width: '285px',
  height: '285px',
  overflow: 'hidden',
  margin: '42px auto 0',
});

export const cropper: CSSWithTheme = ({
  imageOrientation,
  imageHeight,
  imageWidth,
}: {
  imageOrientation: string;
  imageHeight: number;
  imageWidth: number;
}) => ({
  height: `${imageHeight}px`,
  width: `${imageWidth}px`,
  marginLeft: imageOrientation === 'landscape' ? `calc((285px - ${imageWidth}px) / 2)` : '0',
  marginTop: imageOrientation === 'portrait' ? `calc((285px - ${imageHeight}px) / 2)` : '0',
  position: 'relative',

  '.reactEasyCrop_Container': {
    '.reactEasyCrop_CropArea': {
      color: '#262626',
      border: 'none',
    },
  },
});

export const modalFooter: CSSWithTheme = () => ({
  marginTop: '95px',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '10px',

  input: {
    display: 'none',
  },
});

export const button: CSSWithTheme = (type: string) => ({
  outline: 'none',
  border: type === 'secondary' ? '1px solid #FFFFFF' : 'none',
  color: type === 'secondary' ? '#FFFFFF' : '#262626',
  fontWeight: 500,
  fontSize: '18px',
  lineHeight: '23px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  width: '170px',
  height: '50px',
  background: type === 'secondary' ? 'none' : '#FFFFFF',
  borderRadius: '50px',
  cursor: 'pointer',
});
