import React, {useState, useEffect} from 'react';
//import {sortableHandle} from 'react-sortable-hoc';
//import {NavLink} from "react-router-dom";

import {ItemLessonWrap} from './itemLessonStyled';
import {connect, useSelector} from "react-redux";

const ItemLesson = ({data, index, courseId, count = '1', onEdit, onDelete}) => {
    const {user} = useSelector(state => state.users)
    const [lessonData, setLessonData] = useState({});

    // передача данных урока
    useEffect(() => {
        setLessonData(data);
    }, [data])

    /*  // это нужно будет удалить и переделать
      const DragHandle = sortableHandle(() => (
        <span className="item-lesson__move"/>
      ));*/

    return (
        <ItemLessonWrap
            to={user.type === "ADMIN"
                ? `/admin-panel/templates/${courseId}/lessons/${lessonData.id}`
                : `/course-edit/${courseId}/lessons/${lessonData.id}`}
        >
            {/*<DragHandle/>*/}
            <span className="item-lesson__number">#</span>
            <span className="item-lesson__count">{count}</span>
            <span
                className="item-lesson__name"
            >
        {lessonData.name}
      </span>
            {/*<span className="item-lesson__more"/>*/}
            <span
                className="item-lesson__delete"
                onClick={(e) => onDelete(e, data)}
            />

            <span
                className="item-lesson__edit"
                onClick={(e) => onEdit(e, data)}
            />

        </ItemLessonWrap>
    );
}

const mapStateToProps = (state) => {

    return {
        // это нужно удалить
        lessons: state.lessons
    }

};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ItemLesson);
