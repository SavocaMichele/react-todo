import React, { useEffect, useRef, useState } from 'react';
import { draggable } from '@atlaskit/pragmatic-drag-and-drop/element/adapter';
import { setCustomNativeDragPreview } from '@atlaskit/pragmatic-drag-and-drop/element/set-custom-native-drag-preview';
import clsx from 'clsx';
import styles from './DragDrop.module.scss';


interface DraggableProps {
    children: React.ReactNode;
    className?: string;
    id: string;

    onDragStart?: () => void;
    onDrop?: () => void;
}


/**
 * A draggable item that can be dragged around and dropped into a DropTarget.
 * It uses the `id` prop to identify itself during drag-and-drop operations.
 *
 * @param props
 * @constructor
 */
export const Draggable: React.FC<DraggableProps> = (props) => {
    const ref = useRef<HTMLDivElement>(null);
    const [dragging, setDragging] = useState<boolean>(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        return draggable({
            element: element,

            /** Add the ID to the payload */
            getInitialData: () => ({ id: props.id }),

            onDragStart: () => {
                setDragging(true);
                props.onDragStart?.();
            },

            onDrop: () => {
                setDragging(false);
                props.onDrop?.();
            },

            onGenerateDragPreview: ({ nativeSetDragImage }) => {
                setCustomNativeDragPreview({
                    nativeSetDragImage,
                    getOffset: ({ container }) => ({
                        x: container.clientWidth / 2,
                        y: container.clientHeight / 2,
                    }),
                    render: ({ container }) => {
                        const preview = element.cloneNode(true) as HTMLElement;

                        console.log(element.clientWidth)

                        preview.style.width = `220px`;
                        preview.style.opacity = '1';
                        preview.style.transform = 'scale(1.02)';     // subtle emphasis
                        preview.style.boxShadow = '0 10px 24px rgba(0,0,0,0.25)';
                        preview.style.pointerEvents = 'none';

                        container.appendChild(preview);

                        return () => container.removeChild(preview);
                    },
                });
            }
        });
    }, []); 

    return (
        <div
            id={props.id}
            ref={ref}
            className={clsx(
                styles.Draggable,
                dragging && styles['--is-dragging'],
                props.className
            )} 
        >
            {props.children}
        </div>
    )
}