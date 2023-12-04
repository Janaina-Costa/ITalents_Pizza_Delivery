/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/interactive-supports-focus */
interface IProps {
  onClick: () => void;
}

const style = {
  background: '#5BF600',
  width: '24px',
  height: '2px',
};

const MenuIcon = ({ onClick }: IProps) => (
  <div
    role="button"
    style={{
      width: '24px',
      height: '24px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    }}
    onClick={onClick}
    className="cursor-pointer"
  >
    <div style={style} />
    <div style={style} />
    <div style={style} />
  </div>
);

export default MenuIcon;
