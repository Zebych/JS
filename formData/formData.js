/*
import React, {useEffect, useState} from 'react';
import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd";
import ItemLesson from "../itemLesson";
import dragIcon from "../../../../assets/media/icon/6_dot.svg";

const DndItemLesson = ({title, orderLessons, list, edit, courseId, onDelete}) => {
    const [conditionList, setConditionList] = useState(list)
    // const [orderIdConditionList, setOrderIdConditionList] = useState([])


    useEffect(() => {
        const isCheckedEdit = list.filter(({name}) => conditionList.indexOf(name) === -1)

        if (list.length !== conditionList.length) {
            setConditionList(list)
        }

        setConditionList(isCheckedEdit)
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

        let formData = new FormData()
        formData.append("data", "{\"name\": \"Новое имя\", \"order\": [101, 100,102]}")

        /!*    const formData = new FormData()
            formData.append("name", title)
            formData.append("order", JSON.stringify(orderIdLessons))

            let form={"name":title,
                "order": orderIdLessons
            }*!/
        /!*        let form = {name: 'План', order: [101, 100,102]}
                const formData = new FormData();
                for (let key in form) {
                    Array.isArray(form[key])
                        ? form[key].forEach(value => formData.append(key , value))
                        : formData.append(key, form[key]) ;
                }*!/

        orderLessons(formData)

        /!*
//formData postman
var myHeaders = new Headers();
myHeaders.append("Authorization", "Basic dGVhY2hlcjFAbWFpbC5ydTpjdmJubTEyMzQ=");
var formdata = new FormData();
formdata.append("data", "{\"name\": \"Новое имя\", \"order\": [101, 100,102]}");
var requestOptions = {
        method: 'PATCH',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
};
fetch("http://31.131.249.137:8080/api/teacher/courses-library/103/", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));*!/
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

export default DndItemLesson;*/
const onEnd = () => {
  /*  let form = {
        "name": title,
        "order": orderIdLessons
    }*/
    let form = JSON.stringify({name: 'План', order: [101, 100,102]})

    let formData = new FormData()
    formData.append("data", form)
    let form1 = formData.entries()

/*    console.log(form1.next())
    console.log(form1.next())
    console.log(form1.next())
    console.log(form1.next())*/

 /*   const formData = new FormData();
    for (let key in form) {
        Array.isArray(form[key])
            ? form[key].forEach(value => formData.append(key, value))
            : formData.append(key, form[key]);
    }*/

}
onEnd()

//formData postman
/*
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Basic dGVhY2hlcjFAbWFpbC5ydTpjdmJubTEyMzQ=");
    var formdata = new FormData();
    formdata.append("data", "{\"name\": \"Новое имя\", \"order\": [101, 100,102]}");
    var requestOptions = {
        method: 'PATCH',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    };
    fetch("http://31.131.249.137:8080/api/teacher/courses-library/103/", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));*/

// преобразование формы в json
// проверка если data formData то перевести ее в json
// const dataInc=(data instanceof FormData) ? JSON.stringify(Object.fromEntries(data)) : data