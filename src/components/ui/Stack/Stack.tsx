import clsx from 'clsx';
import styles from './Stack.module.scss';
import React from "react";

interface StackProps {
    direction?: 'row' | 'column';
    gap?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around';
    align?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
    wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
    width?: 'full';
    className?: string;
    children?: React.ReactNode;
}

/**
 * A flexible layout component that arranges its children in a stack (either row or column)
 *
 * @param props
 * @constructor
 */
export const Stack: React.FC<StackProps> = (props) => {
    return (
        <div className={clsx(
            props.className,
            styles.Stack,
            props.direction && styles[`--direction-${props.direction}`],
            props.gap && styles[`--gap-${props.gap}`],
            props.justify && styles[`--justify-${props.justify}`],
            props.align && styles[`--align-${props.align}`],
            props.wrap && styles[`--wrap-${props.wrap}`],
            props.width && styles[`--width-${props.width}`],
            props.className
        )}>
            {props.children}
        </div>
    )
}