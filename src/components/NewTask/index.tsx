import { ChangeEvent, useState } from 'react'
import PlusCircledIcon from '../../assets/plusCircled.svg'
import styles from './NewTask.module.css'

interface props{
    AddTask: (t:string) => void
}

const NewTask = ({AddTask}:props) => {
    const [task, setTask] = useState('')

    const HandleTitleTask = (event: ChangeEvent<HTMLInputElement>) => {
        setTask(event.target.value)
    }

    const HandleAddTask = () => {
        AddTask(task);
        setTask('')
    }

    return (
        <div className={styles.div}>
            <input type="text" className={styles.input} placeholder="Adicione uma nova tarefa" onChange={HandleTitleTask} value={task} />

            <button className={styles.button} onClick={()=> HandleAddTask()} disabled={task.length === 0}>
                Criar
                <img src={PlusCircledIcon} />
            </button>
        </div>
    )
}

export default NewTask;