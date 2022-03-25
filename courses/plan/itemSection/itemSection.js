import React from 'react';
import classNames from "classnames";
//import {sortableHandle} from "react-sortable-hoc";
import MediaModals from "../../mediaModals/mediaModals";

import {SelectionWrap} from './itemSectionStyled';
import dragIcon from "../../../assets/media/icon/6_dot.svg";

const ItemSection = ({
                         type,
                         data,
                         onDelete,
                         onEdit,
                         onHomeworkAddTask,
                         onHomeworkDeleteTask,
                         homeworkActive,
                         lessonEditType,
                         provided
                     }) => {
    /* const DragHandle = sortableHandle(() => (
       <span className="item-lesson__move"/>
     ));*/
    const handleHomeworkToggleTask = () => homeworkActive ? onHomeworkDeleteTask(data.id) : onHomeworkAddTask(data.id);

    return (
        <SelectionWrap>
            {/*<DragHandle/>*/}
            <div className="section__row section__row-1">
                {/*<span className="section__move"/>*/}

                <span className="section__title">
            <img
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                src={dragIcon} alt="dragIcon"
                style={{marginRight: "20px"}}/>
                    {data.title}
        </span>

                <span className="section__delete" onClick={() => onDelete(data)}/>
                <span className="section__edit" onClick={() => onEdit(data)}/>
                {lessonEditType === 'homework' &&
                <span
                    className={classNames('section__homework', {active: homeworkActive})}
                    onClick={handleHomeworkToggleTask}
                    title={homeworkActive ? 'Удалить из домашнего задания' : 'Добавить в домашнее задание'}
                />}
            </div>

            <div className="section__row section__row-2">
                <MediaModals type={type} data={data}/>
            </div>
        </SelectionWrap>
    )
};

export default ItemSection;
