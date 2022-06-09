import { useState } from 'react';
import { Card, Header, TodoLayout } from 'src/components';

export const Todo = ({ title }) => {
  const [todo, setTodo] = useState();
  
  return (
		<div>
			<Header />
			<h1>{title}</h1>
			<TodoLayout></TodoLayout>
		</div>
	);
};
