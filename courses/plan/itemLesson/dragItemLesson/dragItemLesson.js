import React, {useEffect, useState} from 'react';
import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd";
import ItemLesson from "../itemLesson";
import dragIcon from "../../../../assets/media/icon/6_dot.svg";

const DragItemLesson = ({title, changeOrderLessons, list, edit, courseId, onDelete}) => {
    const [conditionList, setConditionList] = useState(list)

    useEffect(() => {
        const editData = list.filter(({name}) => conditionList.indexOf(name) === -1)
        if (list.length !== conditionList.length) {
            setConditionList(list)
        }

        setConditionList(editData)
    }, [list])

    const editLesson = async (e, id) => {
        e.preventDefault();
        e.stopPropagation();
        edit(id);
    }

    const reorder = (conditionList, startIndex, endIndex) => {
        const result = Array.from(conditionList)
        const [removed] = result.splice(startIndex, 1)
        result.splice(endIndex, 0, removed)

        return result
    }

    const onEnd = (result) => {
        const reorderData = reorder(conditionList, result.source.index, result.destination.index)
        const orderIdLessons = reorderData.map(({id}) => id)

        let form = JSON.stringify({name: title, order: orderIdLessons})
        let formData = new FormData()
        formData.append("data", form)

        setConditionList(reorderData)

        changeOrderLessons(formData)
    }

    return (
        <DragDropContext onDragEnd={onEnd}>
            <Droppable droppableId={"1"}>

                {(provided) => (

                    <ul ref={provided.innerRef}>
                        {conditionList.map((data, index) => {

                            return (
                                <Draggable draggableId={String(data.id)}
                                           key={data.id}
                                           index={index}
                                >

                                    {(provided) => (
                                        <div ref={provided.innerRef}
                                             {...provided.draggableProps}>

                                            <div style={{display: "flex"}}>

                                                <img
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                    src={dragIcon} alt="dragIcon"
                                                    style={{marginRight: "20px"}}/>

                                                <ItemLesson
                                                    // пока не понятно зачем этот каунт
                                                    count={index + 1}
                                                    data={data}
                                                    // id шаблона
                                                    courseId={courseId}
                                                    // пока просто заглушки
                                                    onEdit={editLesson}
                                                    onDelete={onDelete}
                                                />
                                            </div>
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

export default DragItemLesson;