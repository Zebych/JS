import React, {useState, useEffect} from 'react';

import {LessonWrap, LessonLi} from './infoLessonStyled';
import {InfoLiEmpty} from "../infoMenuStyled";
import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd";
import dragIcon from "../../../../assets/media/icon/6_dot.svg";

const InfoLessonList = ({
                            editOrderSections,
                            section,
                            setSection,
                            dataSection,
                            editSection,
                            deleteSection,
                            activeTab
                        }) => {
    const [sectionsList, setSectionList] = useState(dataSection);

    //проверка на изменения в секциях
    useEffect(() => {
        const checkedEdit = dataSection.filter(({name}) => sectionsList.indexOf(name) === -1)
        if (dataSection.length !== sectionsList.length) {
            setSectionList(dataSection)
        }
        setSectionList(checkedEdit)
    }, [dataSection])

    function onChangeSection(item) {
        setSection(item);
    }

    // меняем имя секции
    const changeNameSection = async (e, id) => {
        // получаем нужную секцию
        const currentSectionIndex = sectionsList.findIndex(section => parseInt(section.id) === parseInt(id));
        const newSection = {
            ...sectionsList[currentSectionIndex],
            name: e.target.value
        }
        const newSectionsList = [...sectionsList.slice(0, currentSectionIndex), newSection, ...sectionsList.slice(currentSectionIndex + 1)];
        setSectionList(newSectionsList);
    }

    const saveChangeNameSection = async (e, id) => {
        try {
            editSection(id, e.target.value);
        } catch (err) {
            console.log(err)
        }
    }

    //dragDrop
    const reorder = (conditionList, startIndex, endIndex) => {
        const result = Array.from(conditionList)
        const [removed] = result.splice(startIndex, 1)
        result.splice(endIndex, 0, removed)

        return result
    }

    const onEnd = (result) => {
        const reorderData = reorder(sectionsList, result.source.index, result.destination.index)
        const orderIdSections = reorderData.map(({id}) => id)
        setSectionList(reorderData)
        editOrderSections(orderIdSections)
    }

    return (
        <LessonWrap>
            <DragDropContext onDragEnd={onEnd}>
                <Droppable droppableId={"3"}>

                    {(provided) => (
                        <ul ref={provided.innerRef}>
                            {sectionsList.map((data, index) => {

                                const activeSection = data.id === section?.id && activeTab === 'section';

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
                                                        style={{
                                                            marginRight: "20px",
                                                            marginLeft: "10px"
                                                        }}/>
                                                    <LessonLi
                                                        key={data.id}
                                                        onClick={() => onChangeSection(data)}
                                                        className={`sections__topic${activeSection ? ' active' : ''}`}
                                                        tabIndex="-1"
                                                    >

                                                        {/*DragHandle*/}
                                                        {/*<span className="topic_dots"/>*/}

                                                        <input
                                                            style={{width: `${14 + data.name.length * 9}px`}}
                                                            onClick={(e) => e.stopPropagation()}
                                                            className="topic_input"
                                                            value={data.name}
                                                            onChange={(e) => changeNameSection(e, data.id)}
                                                            onKeyPress={(e) => e.key === 'Enter' && saveChangeNameSection(e, data.id)}
                                                            onBlur={(e) => saveChangeNameSection(e, data.id)}
                                                        />

                                                        <span
                                                            className='topic_delete'
                                                            onClick={(e) => !activeSection && deleteSection(e, data)}
                                                        />

                                                    </LessonLi>
                                                </div>
                                            </div>
                                        )}
                                    </Draggable>

                                    // <InfoLesson
                                    //   id={data.id}
                                    //   key={key}
                                    //   name={data.name}
                                    //   // select={() => select({id: data.id, name: data.name})}
                                    //   // setName={changeSectionName}
                                    //   // remove={deleteSection}
                                    //   // isActive={selected === data.id}
                                    // />
                                    // <LessonPart key={key} index={key} data={data} />
                                )
                            })}

                            {/*если нету разделов то виводим тект*/}
                            {
                                sectionsList.length === 0 && (
                                    <InfoLiEmpty>
                                        <p>Нет разделов</p>
                                        <span>Для редактирования урока Вам нужно добавить хотя бы один раздел</span>
                                    </InfoLiEmpty>
                                )
                            }
                            {provided.placeholder}
                        </ul>
                    )}

                </Droppable>
            </DragDropContext>

        </LessonWrap>

    );

}

// не правильное построение названия переменных к файлу
const InfoLesson = ({id, name, setName, select, remove, isActive = false}) => {

    const [value, setValue] = useState(name);
    const [inputWidth, setInputWidth] = useState(value.length);
    // const DragHandle = sortableHandle(() => <span className="topic_dots"/>);

    return (

        <LessonLi
            onClick={() => select(id)}
            className={`sections__topic${isActive ? ' active' : ''}`}
            tabIndex="-1"
        >

            {/*<DragHandle/>*/}

            <input

                style={{width: `${14 + inputWidth * 9}px`}}
                onClick={(e) => e.stopPropagation()}
                className="topic_input"
                value={value}
                onChange={(e) => {
                    setValue(e.target.value);
                    setInputWidth(e.target.value.length)
                }}
                onKeyPress={(e) => (e.key === 'Enter' && value !== name) && setName(id, value)}

            />

            <span className="topic_delete" onClick={(e) => {
                e.stopPropagation();
                remove(id);
            }}/>

        </LessonLi>

    );

}

export default InfoLessonList;
