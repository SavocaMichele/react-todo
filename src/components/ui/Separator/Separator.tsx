import clsx from 'clsx';
import styles from './Separator.module.scss';

interface SeparatorProps { 
    margin?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    dashed?: boolean;
}

/**
 * A simple horizontal separator line with optional margin and dashed style
 *
 * @param props
 * @constructor
 */
export const Separator = (props: SeparatorProps) => {
    return (
        <div className={clsx(
            styles.Separator,
            props.margin && styles[`--margin-${props.margin}`],
            props.dashed && styles['--dashed']
        )} />
    )
}