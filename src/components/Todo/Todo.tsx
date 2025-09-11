import type { Todo as TodoProps } from '../../service/api';
import { formatDate } from '../../utils/helper';
import { Stack } from '../ui/Stack/Stack';
import { Typo } from '../ui/Typo/Typo';
import { Priority } from '../ui/Priority/Priority';
import styles from './Todo.module.scss';
import { Separator } from '../ui/Separator/Separator';
import { Draggable } from '../ui/DragDrop/Draggable';


/**
 * A single Todo Item that already includes draggable functionality
 * @param props
 * @constructor
 */
export const Todo = (props: TodoProps) => {
    
    return (
        <Draggable className={styles.Todo} key={props.id} id={props.id}>
            <Stack direction='column' gap='md' width='full'>
                {/* Header */}
                <Stack justify='space-between' align='center' gap='sm' width='full'>
                    <Typo strong className={styles.Title}>{props.title}</Typo>
                    <Typo color='light' className={styles.Date}>{formatDate(props.createdAt)}</Typo>
                </Stack>

                {/* Body */}
                {props.body ? 
                    <Typo className={styles.Body} color='light'>{props.body}</Typo> 
                : 
                    <Typo className={styles.Body} color='light' italic>No description</Typo>
                }

                <Separator dashed />

                {/* Footer */}
                <Stack justify='flex-end'>
                    <Priority level={props.priority} />
                </Stack>
            </Stack>
        </Draggable>
    )
}
