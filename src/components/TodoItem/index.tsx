import CheckIcon from '../../assets/check.svg'
import CheckedIcon from '../../assets/checked.svg'
import TrashIcon from '../../assets/trash.svg'
import styles from './TodoItem.module.css'

export interface task {
    id: number;
    title: string;
    isDone: boolean;
}

interface props{
    toogleDone: (id:number)=>void;
    removeTask: (id:number)=>void;
    id:number;
    title: string;
    isDone: boolean;
}

const TodoItem = ({ toogleDone, removeTask, title, isDone, id }:props) => {

    return (
        <div className={styles.div}>
            <div className={isDone ? styles.done :styles.todo} onClick={()=> toogleDone(id)}>
                <img src={isDone ? CheckedIcon : CheckIcon} /> {title}
            </div>

            <img className={styles.trash} src={TrashIcon} onClick={()=> removeTask(id)} />
        </div>
    )
}

export default TodoItem;