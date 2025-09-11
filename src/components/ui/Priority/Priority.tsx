import styles from './Priority.module.scss';
import clsx from 'clsx';
import { Typo } from '../Typo/Typo';
import type { TodoPriority } from '../../../service/api';
import { ucFirst } from '../../../utils/helper';

interface PriorityProps {
    level: TodoPriority;
}

export const Priority = (props: PriorityProps) => {

    const getPriorityColor = (level: TodoPriority) => {
        switch (level) {
            case 'high':
                return 'error';
            case 'medium':
                return 'warning';
            case 'low':
                return 'success';
            default:
                return 'gray';
        }
    }

    return (
        <div className={clsx(
            styles.Priority,
            props.level && styles[`--level-${props.level}`]
        )}>
            <div className={styles.Circle} />
            <Typo size='xs' color={getPriorityColor(props.level)}>{ucFirst(props.level)}</Typo>
        </div>
    )
}
