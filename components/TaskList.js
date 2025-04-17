import styles from '../styles/TaskList.module.css';

export default function TaskList({ tasks, toggleTaskStatus, deleteTask }) {
  return (
    <div className={styles.taskList}>
      {tasks.map((task) => (
        <div className={`${styles.taskItem} ${task.completed ? styles.completed : ''}`}>
          <div className={styles.taskHeader}>
            <div className={styles.taskTitle}>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTaskStatus(task.id)}
                className={styles.checkbox}
              />
              <h3>{task.title}</h3>
            </div>
            
            <div className={styles.taskActions}>
              <button 
                onClick={() => deleteTask(task.id)}
                className={styles.deleteButton}
              >
                ✕
              </button>
            </div>
          </div>
          
          <div className={styles.taskDetails}>
            {task.description && <p>{task.description}</p>}
            
            <div className={styles.taskMeta}>
              {task.category && (
                <span className={styles.category}>{task.category}</span>
              )}
              
              <span className={`${styles.priority} ${styles[task.priority]}`}>
                {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}
              </span>
              
              {task.dueDate && (
                <span className={styles.dueDate}>
                  Due: {new Date(task.dueDate).toLocaleDateString()}
                </span>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}