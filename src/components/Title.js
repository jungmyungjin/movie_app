import styles from "../css/Title.module.css";

const Title = () => {
  return (
    <div className={styles.main}>
      <h1 className={styles.title}>100 Movies</h1>
      <div className={styles.filter}>
        <select>
          <option value="">Grade filter</option>
          <option value="1">⭐️</option>
          <option value="2">⭐️⭐️</option>
          <option value="3">⭐️⭐️⭐️</option>
          <option value="4">⭐️⭐️⭐️⭐️</option>
          <option value="5">⭐️⭐️⭐️⭐️⭐️</option>
          <option value="6">⭐️⭐️⭐️⭐️⭐️⭐️</option>
          <option value="7">⭐️⭐️⭐️⭐️⭐️⭐️⭐️</option>
          <option value="8">⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️</option>
          <option value="9">⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️</option>
        </select>
      </div>
    </div>
  );
};

export default Title;
