import { tasks } from './index';

export default function handler(req, res) {
  const { id } = req.query;
  
  if (req.method === 'PUT') {
    const updatedTask = req.body;
    
    // Update task
    tasks = tasks.map(task => 
      task.id === id ? { ...task, ...updatedTask } : task
    );
    
    const task = tasks.find(task => task.id === id);
    
    res.status(200).json(task);
  } 
  else if (req.method === 'DELETE') {
    // Delete task
    tasks = tasks.filter(task => task.id !== id);
    
    res.status(200).json({ message: 'Task deleted' });
  } 
  else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}