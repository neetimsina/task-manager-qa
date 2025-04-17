import { tasks, updateTasks } from './index';

export default function handler(req, res) {
  const { id } = req.query;
  
  if (req.method === 'PUT') {
    const updatedTask = req.body;
    
    // Update task
    const newTasks = tasks.map(task => 
      task.id === id ? { ...task, ...updatedTask } : task
    );
    updateTasks(newTasks);
    
    const task = tasks.find(task => task.id === id);
    res.status(200).json(task);
  } 
  else if (req.method === 'DELETE') {
    // Delete task
    const newTasks = tasks.filter(task => task.id !== id);
    updateTasks(newTasks);
    
    res.status(200).json({ message: 'Task deleted' });
  } 
  else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}