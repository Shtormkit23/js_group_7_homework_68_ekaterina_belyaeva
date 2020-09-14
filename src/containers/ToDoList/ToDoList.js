import React, {useEffect} from 'react';
import './ToDoList.css';
import {useDispatch, useSelector} from "react-redux";
import {addTask, changedTaskForm, closeModal, removeTask, getToDo} from "../../store/actions";
import Modal from "../../components/UI/Modal/Modal";
import Tasks from "../../components/Tasks/Tasks";
import Task from "../../components/Task/Task";
import TaskForm from "../../components/TaskForm/TaskForm";
import Spinner from "../../components/UI/Spinner/Spinner";

const TodoList = () => {
    const todoList = useSelector(state => state.todoList);
    const newTask = useSelector(state => state.newTask);
    const loading = useSelector(state => state.loading);
    const error = useSelector(state => state.error);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getToDo());
    }, [dispatch]);

    return (
        <div className="TodoList">
            {error &&
            <Modal
                show={error}
                closed={() => dispatch(closeModal())}
            >
                <p>{error.message}</p>
            </Modal>}
            <TaskForm
                task={newTask}
                onChange={event => dispatch(changedTaskForm(event))}
                sendHandler={event => dispatch(addTask(newTask, event))}
            />
            {todoList !== null ?
                <Tasks>
                    {
                        loading &&
                        <div className="preloader">
                            <Spinner />
                        </div>
                    }
                    {todoList.map(task => <Task
                        key={task.id}
                        id={task.id}
                        task={task.text}
                        onClick={() => dispatch(removeTask(task.id))}
                    />)}
                </Tasks> : <p>Add new task ...</p>
            }
        </div>
    );
};

export default TodoList;
