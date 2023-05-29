import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const TaskScreen = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const userId = searchParams.get('userId');
    const [tasks, setTasks] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/api/v1/task/getAll/${userId}`);
                console.log(response.data.tasks);
                setTasks(response.data.tasks);
            } catch (error) {
                console.error('Failed to fetch tasks:', error);
            }
        };

        fetchTasks();
    }, [userId]);

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredTasks = tasks.filter((task) =>
        task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        task.description.toLowerCase().includes(searchTerm.toLowerCase())
    );


    return (
        <div>
            <h3>Tasks:</h3>
            <input
                type="text"
                placeholder="Search tasks..."
                value={searchTerm}
                onChange={handleSearch}
            />
            <ul>
                {filteredTasks.length > 0 ? (
                    filteredTasks.map((task) => (
                        <li key={task._id}>
                            <h4>{task.title}</h4>
                            <p>{task.description}</p>
                            <p>{task.completed ? 'Completed' : 'Active'}</p>
                        </li>
                    ))
                ) : (
                    <p>No tasks found.</p>
                )}
            </ul>
        </div>
    );
};

export default TaskScreen;
