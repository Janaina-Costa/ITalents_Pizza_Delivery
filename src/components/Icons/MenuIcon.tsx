const style = {
  background: '#5BF600',
  width: '24px',
  height: '2px',
};

const MenuIcon = () => (
  <div
    style={{
      width: '24px',
      height: '24px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    }}
  >
    <div style={style} />
    <div style={style} />
    <div style={style} />
  </div>
);

export default MenuIcon;
