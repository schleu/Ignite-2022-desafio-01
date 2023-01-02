import { useState } from 'react';
import NewTask from '../NewTask';

import { task } from '../TodoItem';
import TodoList from '../TodoList';
import styles from './Todo.module.css';


const Todo = () => {
    const [tasks, setTasks] = useState<task[]>([
        {
            id: 0,
            title: 'Cobol',
            isDone: true,
        },
        {
            id: 1,
            title: 'React',
            isDone: true,
        },
        {
            id: 2,
            title: 'Typescript',
            isDone: false,
        },
        {
            id: 3,
            title: 'NodeJs',
            isDone: false,
        },
        {
            id: 4,
            title: 'ReactNative',
            isDone: false,
        },
        {
            id: 5,
            title: 'Java',
            isDone: false,
        },
        {
            id: 6,
            title: 'Python',
            isDone: false,
        },
        {
            id: 7,
            title: 'VueJs',
            isDone: false,
        },
        {
            id: 8,
            title: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
            isDone: false,
        },
    ])

    const AddTask = (title:string) =>{

        const newTask: task = {
            id: tasks.length,
            title,
            isDone: false,
        }

        setTasks(state => [...state, newTask])
    }

    const HandleDone = (id:number) => {
        const newTasks = tasks.map(task => 
            task.id === id 
            ? {
            ...task,
            isDone: !task.isDone,
             } 
             : task
        )

        setTasks(newTasks)
    }

    const RemoveTask = (id:number) => {
        setTasks(state => state.filter(task => task.id !== id));
    }

    return (
        <div className={styles.div}>
            <NewTask AddTask={AddTask} />
            <TodoList tasks={tasks} OnHandle={HandleDone} OnRemove={RemoveTask}/>
        </div>
    )
}

export default Todo;