import { useState } from 'react';
import { CheckBox, Header, TodoCard, TodoLayout } from 'src/components';

export const Todo = ({ title }) => {
	const [todo, setTodo] = useState();

	return (
		<div>
			<Header />
			<h1>{title}</h1>
			<TodoLayout>
				<TodoCard>
					<section className="check-sec">
						<CheckBox />
					</section>
					<section className="content-sec">
						<h4 className="title">hello world</h4>
						<p className="desc">this is the first part of the todo list</p>
					</section>
				</TodoCard>
				<TodoCard>
					<section className="check-sec">
						<CheckBox />
					</section>
					<section className="content-sec">
						<h4 className="title">hello world</h4>
						<p className="desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae dicta minima quod iusto libero odio sint ab perferendis quia magnam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, quaerat. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur nam unde illo quas soluta dolores quae magnam esse explicabo vitae.</p>
					</section>
				</TodoCard>
				<TodoCard>
					<section className="check-sec">
						<CheckBox />
					</section>
					<section className="content-sec">
						<h4 className="title">hello world</h4>
						<p className="desc">this is the first part of the todo list</p>
					</section>
				</TodoCard>
				<TodoCard>
					<section className="check-sec">
						<CheckBox />
					</section>
					<section className="content-sec">
						<h4 className="title">hello world</h4>
						<p className="desc">this is the first part of the todo list</p>
					</section>
				</TodoCard>
			</TodoLayout>
		</div>
	);
};
