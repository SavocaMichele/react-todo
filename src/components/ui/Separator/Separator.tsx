import clsx from 'clsx';
import styles from './Separator.module.scss';

interface SeparatorProps { 
    margin?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    dashed?: boolean;
}

export const Separator = (props: SeparatorProps) => {
    return (
        <div className={clsx(
            styles.Separator,
            props.margin && styles[`--margin-${props.margin}`],
            props.dashed && styles['--dashed']
        )} />
    )
}