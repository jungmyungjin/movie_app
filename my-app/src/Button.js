// propTypes를 사요앟기 위해 설치를 먼저 한다
// npm i prop-types
import PropTypes from "prop-types";

// css 적용방법 3 : css 모듈을 사용한다.
import styles from "./Button.module.css";

function Button({ text }) {
  return (
    // css 적용방법 2 :js 스타일로 적용 한다.
    // <button style={{ color: "pink", backgroundColor: "black" }}>{text}</button>

    // 동작하는 페이지의 요소를 확인하면, className은 랜덤 값이 들어간다.
    <button className={styles.title}>{text}</button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

// App.js에서 Button을 가져올 수 있도록 내보냄
export default Button;
