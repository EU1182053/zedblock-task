import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import TaskActionMenu from './TaskActionMenu';

const TaskScreen = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const searchParams = new URLSearchParams(location.search);
    const userId = searchParams.get('userId');
    const [tasks, setTasks] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/api/v1/task/getAll/${userId}`);
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

    const handleTaskCompletionToggle = async (taskId) => {
      
            
    };

    const handleBulkRemoveCompleted = () => {
        // Logic to remove completed tasks
        // This function will be called when the "Remove Completed Tasks" button is clicked
      };

      const handleTaskCreate = (userId) => {
        navigate(`/add-task?userId=${userId}`)
      }
      
    const handleTaskTitleClick = (taskId) => {
        navigate(`/task/details?taskId=${taskId}`);
    };
    return (
        <div>
            <h3>Tasks:</h3>
            <input
                type="text"
                placeholder="Search tasks..."
                value={searchTerm}
                onChange={handleSearch}
            />
            <div className="task-tiles">
                {filteredTasks.length > 0 ? (
                    filteredTasks.map((task) => (
                        <div key={task._id} className="task-tile" onClick={() => handleTaskTitleClick(task._id)}>
                            <h4>{task.title}</h4>
                            <input
                                type="checkbox"
                                checked={task.state === 'completed'}
                                onChange={() => handleTaskCompletionToggle(task._id)}
                            />
                        </div>
                    ))
                ) : (
                    <p>No tasks found.</p>
                )}
            </div>
            <TaskActionMenu onBulkRemoveCompleted={handleBulkRemoveCompleted} />
            <button onClick={() => {
                handleTaskCreate(userId)
            }}>Add Task</button>
        </div>
    );
};

export default TaskScreen;


