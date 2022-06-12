import { useState } from 'react';
import { v4 } from 'uuid';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import {
	Button,
	CheckBox,
	FixedSection,
	Header,
	HorizontalFlex,
	Input,
	TodoCard,
	TodoLayout,
	TodoTitle,
	VerticalFlex,
} from 'src/components';
import { DIRECTIONS } from 'src/constants';

const item = {
	id: v4(),
	title: 'Hello world',
	desc: 'Clean the house',
};

const item2 = {
	id: v4(),
	title: 'Hello world',
	desc: 'make a coffe',
};

export const Todo = ({ title }) => {
	const [textTitle, setTextTitle] = useState('');
	const [desc, setDesc] = useState('');
	const [todo, setTodo] = useState({
		todo: {
			title: 'Todo',
			items: [item, item2],
		},
		'in-progress': {
			title: 'In Progress',
			items: [],
		},
		done: {
			title: 'Completed',
			items: [],
		},
	});

	const handleDragEnd = ({ destination, source }) => {
		if (!destination) {
			return;
		}

		if (
			destination.index === source.index &&
			destination.droppableId === source.droppableId
		) {
			return;
		}

		// Creating a copy of item before removing it from state
		const itemCopy = { ...todo[source.droppableId].items[source.index] };

		setTodo((prev) => {
			prev = { ...prev };
			// Remove from previous items array
			prev[source.droppableId].items.splice(source.index, 1);

			// Adding to new items array location
			prev[destination.droppableId].items.splice(
				destination.index,
				0,
				itemCopy
			);

			return prev;
		});
	};

	const addItem = () => {
		setTodo((prev) => {
			return {
				...prev,
				todo: {
					title: 'Todo',
					items: [
						{
							id: v4(),
							title: textTitle,
							desc: desc,
						},
						...prev.todo.items,
					],
				},
			};
		});

		setTextTitle('');
		setDesc('');
	};

	return (
		<div>
			<Header />
			<h1>{title}</h1>
			<DragDropContext onDragEnd={handleDragEnd}>
				{Object.entries(todo).map(([key, data]) => {
					return (
						<TodoLayout key={key}>
							<TodoTitle>{data.title}</TodoTitle>
							<Droppable droppableId={key} className="droppable">
								{(provided, snapshot) => {
									return (
										<div ref={provided.innerRef} {...provided.droppableProps}>
											{data.items.map((el, index) => {
												return (
													<Draggable
														key={el.id}
														index={index}
														draggableId={el.id}
													>
														{(provided, snapshot) => {
															return (
																<TodoCard
																	className={` ${
																		snapshot.isDragging && 'dragging'
																	}`}
																	ref={provided.innerRef}
																	{...provided.draggableProps}
																	{...provided.dragHandleProps}
																>
																	<section className="content-sec">
																		<h4 className="title">{el.title}</h4>
																		<p className="desc">{el.desc}</p>
																	</section>
																</TodoCard>
															);
														}}
													</Draggable>
												);
											})}
											{provided.placeholder}
										</div>
									);
								}}
							</Droppable>
						</TodoLayout>
					);
				})}
			</DragDropContext>

			<FixedSection direction={DIRECTIONS.BOTTOM}>
				<HorizontalFlex>
					<VerticalFlex padding="15px" gap="15px">
						<Input
							type="text"
							placeholder="write a title"
							value={textTitle}
							onChange={(e) => setTextTitle(e.currentTarget.value)}
						/>
						<Input
							type="text"
							placeholder="write a description"
							value={desc}
							onChange={(e) => setDesc(e.currentTarget.value)}
						/>
					</VerticalFlex>
					<Button>Add</Button>
				</HorizontalFlex>
			</FixedSection>
		</div>
	);
};
