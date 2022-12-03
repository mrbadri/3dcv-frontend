import styles from "./index.module.scss";
import cn from "classnames";

function GridRuler({ spacing }) {
    const classNames = cn(styles.GridRuler, {
        [styles[`GridRuler_spacing_${spacing}`]]: spacing
    });

    return (
        <div className={classNames}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((number) => (
                <div key={number} className={styles.GridRuler_item} />
            ))}
        </div>
    );
}

export default GridRuler;
