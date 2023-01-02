import { useState } from 'react';
import ClipboardIcon from '../../assets/clipboard.svg';
import TodoItem, { task } from '../TodoItem';
import styles from './TodoList.module.css';


interface props{
    tasks: task[],
    OnRemove: (id:number)=> void,
    OnHandle: (id:number)=> void,
}

const TodoList = ({tasks, OnHandle, OnRemove}:props) => {
 
    const totalTaskDone = tasks.reduce((acc, task) => task.isDone ? acc + 1 : acc ,0)

    return (
        <div className={styles.div}>
            <div className={styles.info}>
                <div className={styles.created}>
                    Tarefas criadas
                    <div className={styles.counter}>
                        {tasks.length}
                    </div>
                </div>
                <div className={styles.done}>
                    Concluídas
                    <div className={styles.counter}>
                        {totalTaskDone} 
                        {totalTaskDone > 0 ?
                        <> de {tasks.length}</>
                        :<></>
                        }
                        
                        
                    </div>
                </div>
            </div>
            <div className={styles.tasks}>
                {tasks.length 
                ? tasks.map(task => <TodoItem key={task.id} toogleDone={OnHandle} {...task} removeTask={OnRemove} />) 
                : (
                <div className={styles.empty}>
                    <img src={ClipboardIcon} />
                    <p>
                        <span>Você ainda não tem tarefas cadastradas</span>
                        Crie tarefas e organize seus itens a fazer
                    </p>
                    
                </div>
                )}
            </div>
        </div>
    )
}

export default TodoList;