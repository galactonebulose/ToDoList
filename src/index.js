import React from 'react';
import { createRoot } from 'react-dom/client';
import ToDoList from './ToDoList';


const container = document.getElementById('root');
const root = createRoot(container); 
root.render(<ToDoList tab="home" />);