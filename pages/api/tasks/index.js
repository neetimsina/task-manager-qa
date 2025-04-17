// In-memory database
export const tasks = [
    {
      id: '1',
      title: 'Complete project proposal',
      description: 'Finalize the Q2 project proposal with budget and timeline',
      category: 'Work',
      priority: 'high',
      dueDate: '2025-05-01',
      completed: false,
      createdAt: '2025-04-15T10:00:00Z'
    },
    {
      id: '2',
      title: 'Buy groceries',
      description: 'Milk, eggs, bread, fruits',
      category: 'Shopping',
      priority: 'medium',
      dueDate: '2025-04-19',
      completed: true,
      createdAt: '2025-04-14T15:30:00Z'
    },
    {
      id: '3',
      title: 'Schedule dentist appointment',
      description: 'Call Dr. Smith for regular checkup',
      category: 'Personal',
      priority: 'low',
      dueDate: '2025-04-30',
      completed: false,
      createdAt: '2025-04-13T09:15:00Z'
    }
  ];
  
  // Function to update tasks array
  export function updateTasks(newTasks) {
    // Clear the array
    tasks.length = 0;
    // Add all new items
    tasks.push(...newTasks);
  }
  
  export default function handler(req, res) {
    if (req.method === 'GET') {
      // Return all tasks
      res.status(200).json(tasks);
    } 
    else if (req.method === 'POST') {
      const task = req.body;
      
      // Generate a new ID
      const newTask = {
        ...task,
        id: String(Date.now()),
      };
      
      tasks.push(newTask);
      res.status(201).json(newTask);
    } 
    else {
      res.status(400).json({ message: 'Method not allowed' });
    }
  }