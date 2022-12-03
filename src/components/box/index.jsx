import styles from "./index.module.scss";

function Box({ children, ...params }) {
    return (
        <div className={styles.Box} {...params}>
            {children}
        </div>
    );
}

export default Box;
