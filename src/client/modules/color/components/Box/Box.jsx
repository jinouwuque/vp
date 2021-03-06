import PropTypes from 'prop-types';
import style from './style.sass';
import HeartButton from './components/HeartButton';
import ColorCanvas from './components/ColorCanvas';

const Box = ({
  id,
  value,
  starNum,
  starred,
  username,
  vertical,
  showUsername,
  onClickText,
  onClickHeart,
  onClickCanvas,
}) => {
  const onClickHeartLocal = () => {
    onClickHeart({
      willLike: !starred,
      id,
    });
  };
  const onClickCanvasLocal = () => {
    onClickCanvas(id);
  };
  return (
    <div className={style.box}>
      <ColorCanvas
        vertical={vertical}
        colorValue={value}
        onClickText={onClickText}
        onClickCanvas={onClickCanvasLocal}
      />
      <HeartButton
        starred={starred}
        starNum={starNum}
        onClick={onClickHeartLocal}
      />
      {showUsername && username && <p>{username}</p>}
    </div>
  );
};

Box.propTypes = {
  id: PropTypes.string.isRequired,
  username: PropTypes.string,
  starNum: PropTypes.number,
  value: PropTypes.string.isRequired,
  starred: PropTypes.bool,
  vertical: PropTypes.bool,
  showUsername: PropTypes.bool,
  onClickHeart: PropTypes.func.isRequired,
  onClickText: PropTypes.func.isRequired,
  onClickCanvas: PropTypes.func.isRequired,
};

Box.defaultProps = {
  onClickText: () => {},
  onClickCanvas: () => {},
};

export default Box;
