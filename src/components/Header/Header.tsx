import {Typo} from "../ui/Typo/Typo";
import styles from './Header.module.scss';
import {Stack} from "../ui/Stack/Stack";


export const Header = () => {
    return (
        <Stack
            className={styles.Header}
            align="center"
            direction="row"
        >
            <Typo size={"lg"}>React Kanban Board</Typo>
        </Stack>
    )
}