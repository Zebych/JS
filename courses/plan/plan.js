import React/*, {useEffect, useState}*/, {useEffect, useState} from 'react';

import Button from "../buttons/button/button";
import CleanBoard from '../cleanBoard/cleanBoard';

import {PlanWrap} from './planStyled';
import DragItemLesson from "./itemLesson/dragItemLesson/dragItemLesson";
import DragItemSection from "./itemSection/dragItemSection/dragItemSection";
import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd";
import ItemSection from "./itemSection/itemSection";
/*
import {getAllTemplates, setTemplate, setActiveSection} from "../../store/actions/usersAction";
import {connect} from "react-redux";

import axiosInstance from "../../service/iTeacherApi";
*/

const Plan = (
    {
        orderTasks,
        changeOrderLessons,
        open,
        type,
        title = 'Topic 1',
        list = [],
        textButton = '',
        add,
        section,
        //lessonID,
        //selectSection,
        //setActiveSection,
        edit,
        //selectedCourseID,
        editTask,
        courseId,
        onDelete,
        onHomeworkAddTask,
        onHomeworkDeleteTask,
        homeworkTasks,
        lessonEditType
    }) => {

    let content;
    if (list.length === 0) {
        content = (
            <CleanBoard
                // subtitle возможно нужно будет переделать
                subtitle={
                    type === "course"
                        ? `План занятий пуст`
                        : type === "lesson"
                        && `Раздел пуст`
                }

                // descr так же скорее всего нужно будет переделать
                descr={
                    type === "course"
                        ? `Добавьте и заполните уроки`
                        : type === "lesson"
                        && `Добавьте задания в раздел`
                }

                textButton={textButton}
                func={type === "lesson" ? open : add}
            />

        );

    } else {
        content = (
            <DragItemLesson
                title={title}
                changeOrderLessons={changeOrderLessons}
                list={list}
                edit={edit}
                courseId={courseId}
                onDelete={onDelete}
            />
        )
    }

    if (type === 'lesson' && section?.tasks && section?.tasks.length > 0) {
        content = (
               <DragItemSection
                   orderTasks={orderTasks}
                   section={section}
                   editTask={editTask}
                   lessonEditType={lessonEditType}
                   onDelete={onDelete}
                   homeworkTasks={homeworkTasks}
                   onHomeworkAddTask={onHomeworkAddTask}
                   onHomeworkDeleteTask={onHomeworkDeleteTask}
               />
        )
    }

    let showControl = {opacity: title.length === 0 ? 0 : 1};

    if (type === 'lesson' && !section?.id) return <></>
    return (
        <PlanWrap>
            <span style={showControl}
                  className="title">{type === 'lesson' ? section.name : title}</span>
            <div className="fake__wrapper">
                <div style={showControl} className='plan__section'>
                    {content}
                </div>
            </div>
            {type === 'lesson' && section.tasks && section.tasks.length > 0
                ? <Button
                    type={'add-round'}
                    text={''}
                    func={type === "lesson" ? open : add}
                />
                : null}

            {list.length > 0 ?
                <Button
                    type="add-round"
                    text=""
                    func={add}
                /> : null
            }
        </PlanWrap>

    )

};


export default Plan;
