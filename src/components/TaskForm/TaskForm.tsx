import React, { useState } from 'react';
import type { TaskFormProps, Task } from '../../types/index';

// Internal shape of form fields before task object is constructed
interface FormData {
  title: string;
  description: string;
  priority: 'low' | 'medium' | 'high';
  dueDate: string;
}

export const TaskForm: React.FC<TaskFormProps> = ({ onAddTask }) => {

  // Controls form visibility
  const [isOpen, setIsOpen] = useState(false);

  // Single state object managing all form fields
  const [formData, setFormData] = useState<FormData>({
    title: '',
    description: '',
    priority: 'medium',
    dueDate: '',
  });

  // Generic handler for all form inputs using computed property names
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!formData.title.trim() || !formData.dueDate) {
      alert('Please provide a title and due date');
      return;
    }

    const newTask: Task = {
      id: Date.now().toString(),
      title: formData.title.trim(),
      description: formData.description.trim(),
      priority: formData.priority,
      status: 'pending' as const,
      dueDate: formData.dueDate,
      createdAt: new Date().toISOString(),
    };

    onAddTask(newTask);
    setFormData({ title: '', description: '', priority: 'medium', dueDate: '' });
    setIsOpen(false);
  };