import React, {useEffect, useState} from 'react';
import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd";
import ItemSection from "../itemSection";

const DragItemSection = (
    {
        orderTasks,
        section,
        editTask,
        onHomeworkAddTask,
        onDelete,
        onHomeworkDeleteTask,
        homeworkTasks,
        lessonEditType
    }) => {
    const [conditionSection, setConditionSection] = useState(section.tasks)

    const tasks = section.tasks

    useEffect(() => {
        const isCheckedEdit = tasks.filter(({name}) => conditionSection.indexOf(name) === -1)

        if (tasks.length !== conditionSection.length) {
            setConditionSection(tasks)
        }
        setConditionSection(isCheckedEdit)
    }, [tasks])

    const reorder = (conditionList, startIndex, endIndex) => {
        const result = Array.from(conditionList)
        const [removed] = result.splice(startIndex, 1)
        result.splice(endIndex, 0, removed)

        return result
    }

    const onEnd = (result) => {
        const reorderData = reorder(conditionSection, result.source.index, result.destination.index)
        const orderIdTasks = reorderData.map(({id}) => id)
        setConditionSection(reorderData)
        orderTasks(orderIdTasks)
    }

    return (
        <DragDropContext onDragEnd={onEnd}>
            <Droppable droppableId={"1"}>

                {(provided) => (
                    <ul ref={provided.innerRef}>
                        {tasks.map((data, index) => {

                            return (
                                <Draggable draggableId={String(data.id)}
                                           key={data.id}
                                           index={index}
                                >

                                    {(provided) => (
                                        <div ref={provided.innerRef}
                                             {...provided.draggableProps}>

                                            <ItemSection
                                                provided={provided}
                                                key={data.id}
                                                type={data.task_type}
                                                data={data}
                                                onDelete={onDelete}
                                                onEdit={editTask}
                                                onHomeworkAddTask={onHomeworkAddTask}
                                                onHomeworkDeleteTask={onHomeworkDeleteTask}
                                                homeworkActive={homeworkTasks?.includes(data.id)}
                                                lessonEditType={lessonEditType}
                                            />
                                        </div>
                                    )}
                                </Draggable>
                            )
                        })}
                        {provided.placeholder}
                    </ul>
                )}
            </Droppable>
        </DragDropContext>
    );
};

export default DragItemSection;