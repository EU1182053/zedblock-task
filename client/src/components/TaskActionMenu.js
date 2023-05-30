import React from 'react';

const TaskActionMenu = ({ onBulkRemoveCompleted }) => {
  const handleBulkRemoveCompleted = () => {
    onBulkRemoveCompleted();
  };

  return (
    <div>
      <button onClick={handleBulkRemoveCompleted}>Remove Completed Tasks</button>
    </div>
  );
};

export default TaskActionMenu;
