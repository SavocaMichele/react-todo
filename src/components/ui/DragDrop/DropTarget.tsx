import React, { useEffect, useRef, useState } from 'react';
import { dropTargetForElements } from '@atlaskit/pragmatic-drag-and-drop/element/adapter';
import clsx from 'clsx';
import styles from './DragDrop.module.scss';


interface DropTargetProps {
    children: React.ReactNode;
    className?: string;
    id: string;

    onDragEnter?:   () => void;
    onDragLeave?:   () => void;
    onDrop?:        () => void;
}


/**
 * A drop target area where draggable items can be dropped into.
 * It uses the `id` prop to identify itself during drag-and-drop operations.
 * @param props
 * @constructor
 */
export const DropTarget: React.FC<DropTargetProps> = (props) => {
    const ref = useRef(null);
    const [isDraggedOver, setIsDraggedOver] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        return dropTargetForElements({
            element: element,

            /** Add the ID to the payload */
            getData: () => ({ id: props.id }),

            onDragEnter: () => {
                setIsDraggedOver(true);
                props.onDragEnter?.();
            },

            onDragLeave: () => {
                setIsDraggedOver(false);
                props.onDragLeave?.();
            },

            onDrop: () => {
                setIsDraggedOver(false);
                props.onDrop?.();
            },
        });
    }, [props.id]);

    return (
        <div 
            ref={ref}
            className={clsx(
                styles.DropTarget,
                isDraggedOver && styles['--is-dragged-over'],
                props.className
            )} 
        >
            {props.children}
        </div>
    )
}