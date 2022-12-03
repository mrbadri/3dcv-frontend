import styles from "./index.module.scss";
import cn from "classnames";

function Grid({
    children,
    container,
    item,
    cols,
    spacing,
    justifyContent,
    alignItems,
    xs,
    sm,
    md,
    lg,
    ...params
}) {
    const classNames = cn({
        [styles.Grid_container]: container,
        [styles.Grid_item]: item,
        [styles[`Grid_xs_${xs}`]]: xs,
        [styles[`Grid_sm_${sm}`]]: sm,
        [styles[`Grid_md_${md}`]]: md,
        [styles[`Grid_lg_${lg}`]]: lg,
        [styles[`Grid_cols_${cols}`]]: cols,
        [styles[`Grid_spacing_${spacing}`]]: spacing,
        [styles[`Grid_alignItems_${alignItems}`]]: alignItems,
        [styles[`Grid_justifyContent_${justifyContent}`]]: justifyContent
    });

    console.log("GRID:", styles);

    return (
        <div className={classNames} {...params}>
            {children}
        </div>
    );
}

export default Grid;
