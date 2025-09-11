import clsx from "clsx"
import styles from "./Typo.module.scss"


interface TypoProps {
    children: React.ReactNode;
    className?: string;
    color?: "primary" | "light" | "gray" | "error" | "success" | "warning";
    size?: "xs" | "sm" | "md" | "lg";
    strong?: boolean;
    italic?: boolean;
}

export const Typo: React.FC<TypoProps> = (props) => {

    return (
        <span className={clsx(
            props.className,
            styles.Typo,
            props.color && styles[`--color-${props.color}`],
            props.size && styles[`--size-${props.size}`],
            props.strong && styles.strong,
            props.italic && styles.italic
        )}>{props.children}</span>
    )
}