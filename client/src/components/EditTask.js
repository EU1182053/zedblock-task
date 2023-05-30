import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const EditTask = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const searchParams = new URLSearchParams(location.search);
    const taskId = searchParams.get('taskId');
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const updatedData = {
        title,description
    }
    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/api/v1/task/getById/${taskId}`);
                console.log(response.data.task);
                setTitle(response.data.task.title);
                setDescription(response.data.task.description);
            } catch (error) {
                console.error('Failed to fetch tasks:', error);
            }
        };

        fetchTasks();
    }, [taskId]);
    const handleUpdate = async() => {
        
        try {
            const response = await axios.put(`http://localhost:8000/api/v1/task/update/${taskId}`, updatedData);

            if (response.status === 200) {
                //we will do it later
                navigate(`/task/details?taskId=${taskId}`);
            }
        } catch (error) {
            console.error('Error updating employee:', error);
            // Handle error or display error message
        }
    }

    return (
        <>
            <label>
                Title:
                <input className="input-field" type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
            </label>
            <label>
                Description:
                <textarea className="input-field" type="text" value={description} onChange={(e) => setDescription(e.target.value)} required />
            </label>

            <button className="submit-button" type="button" onClick={handleUpdate}>Update</button>
        </>
    )
}

export default EditTask