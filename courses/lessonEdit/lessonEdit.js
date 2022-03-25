import React, {useEffect, useState} from 'react';
import {connect, useDispatch} from "react-redux";

import InfoMenu from "../courseEdit/infoMenu/infoMenu";
import Plan from "../../components/plan/plan";
import AdminChooseTemplateModal
    from "../../components/popupsAdmin/adminChooseTemplateModal/adminChooseTemplateModal";
import VideoModal from "../../components/popupsAdmin/lessonAddExModal/video/videoModal";
import TextModal from "../../components/popupsAdmin/lessonAddExModal/text/textModal";
import AddImageModal
    from '../../components/popupsAdmin/lessonAddExModal/image/addImageModal';
import AddAudioModal from '../../components/popupsAdmin/lessonAddExModal/audio/addAudio';
import AddDocumentModal
    from '../../components/popupsAdmin/lessonAddExModal/document/document';
import AddGallery from '../../components/popupsAdmin/lessonAddExModal/gallery/gallary';
import TestModal from '../../components/popupsAdmin/lessonAddExModal/test/test';
import PopupAddPart from "../../components/popupsAdmin/popupPart/popupAddPart";
import WordColl
    from "../../components/popupsAdmin/lessonAddExModal/worldColl/wordColl/wordColl";
import TF from "../../components/popupsAdmin/lessonAddExModal/tf/tf";
import Connect from "../../components/popupsAdmin/lessonAddExModal/connect/connect";
import SentenceOfWords
    from "../../components/popupsAdmin/lessonAddExModal/sentenceOfWords/sentenceOfWords";
import TransferWords
    from "../../components/popupsAdmin/lessonAddExModal/transferWords/transferWords";
import WriteWord from "../../components/popupsAdmin/lessonAddExModal/writeWord/writeWord";
import Note from "../../components/popupsAdmin/lessonAddExModal/note/note";
import RecordAudio
    from "../../components/popupsAdmin/lessonAddExModal/recordAudio/recordAudio";

import axiosInstance from "../../service/iTeacherApi";
import ConstructorHeader from "../../components/constructorHeader/constructorHeader";
import ConfirmPopup from "../../components/confirmPopup/confirmPopup";
import {
    openInfoPopup,
    setErrorInfoText,
    setSuccessInfoText
} from "../../store/actions/infoPopupAction";
import {ConstructorHomeworkDesc, ConstructorWrap} from "../courseEdit/styled";
import MainButton from "../../components/buttons/mainButton/mainButton";
import {
    clearHomework,
    editHomework,
    getHomework
} from "../../store/actions/homeworksAction";

const LessonEdit = (
    {
        user,
        userType,
        lessonId,
        type,
        onCreateHomework,
        returnModal,
        homework,
        homeworkId,
        getHomework,
        editHomework,
        clearHomework
    }) => {
    const dispatch = useDispatch();
    const [lesson, setLesson] = useState({});
    const [section, setSection] = useState({});
    const [sectionsList, setSectionsList] = useState([]);
    const [activeTab, setActiveTab] = useState(type === 'homework' ? 'homework' : 'section');
    const [homeworkList, setHomeworkList] = useState([]);
    const [selectedSection, setSelectedSection] = useState({});
    const [selectedTask, setSelectedTask] = useState({});
    const [homeworkTasks, setHomeworkTasks] = useState([]);
    const [isOpenAddSectionPopup, setOpenAddSectionPopup] = useState(false);
    const [isOpenAddTaskPopup, setOpenAddTaskPopup] = useState(false);
    const [isOpenDeleteSectionPopup, setOpenDeleteSectionPopup] = useState(false);
    const [isOpenDeleteTaskPopup, setOpenDeleteTaskPopup] = useState(false);
    const [modalsCreateTask, setModalsCreateTask] = useState({
            wordColl: false,
            tf: false,
            write: false,
            transfer: false,
            sentence: false,
            connect: false,
            textModal: false,
            videoModal: false,
            addImage: false,
            addAudio: false,
            addDocument: false,
            gallery: false,
            test: false,
            note: false,
            record: false,
            composeText: false
        }
    );

    useEffect(() => {
        clearHomework();
        downloadData();
        return () => clearHomework();
    }, []);

    useEffect(async () => {
        if (lesson.id) {
            if (lesson.homework.length > 0) {
                setSectionsList(lesson.sections);
                setHomeworkList(lesson.homework);
                setSection(activeTab === 'section' ?
                    lesson.sections[!!section?.id ? lesson.sections.findIndex(i => i.id === section.id) : 0]
                    : lesson.homework[0]);
            } else {
                await addHomework();
            }
        }
    }, [lesson])

    useEffect(async () => {
        if (homework.id) {
            setHomeworkTasks(homework.tasks.map(item => item.id));
            if (!lesson.id) await getLesson(homework.template.lesson.id);
        }
    }, [homework])

    const downloadData = async () => {
        try {
            if (type === 'homework') {
                if (!!homeworkId) await getHomework(userType, homeworkId);
            }
            if (!!lessonId) await getLesson(lessonId);
        } catch (e) {
            console.log(e)
        }
    }

    const getLesson = async (id) => {
        try {
            const {data} = await axiosInstance.get(`/${user.type.toLowerCase()}/lessons/${id}/`);
            setLesson(data);
        } catch (e) {
            console.log(e);
        }
    }

    const addSection = async (name) => {
        const data = {
            lesson: lesson.id,
            name
        }
        try {
            await axiosInstance.post(`/${user.type.toLowerCase()}/section/`, data);
            await getLesson(lesson.id);
        } catch (e) {
            console.log(e);
        }
    }

    const addHomework = async () => {
        const data = {
            lesson: lesson.id,
            name: 'Домашнее задание'
        }
        try {
            await axiosInstance.post(`/${user.type.toLowerCase()}/homework-template/`, data);
            setActiveTab('homework');
            await getLesson(lesson.id);
        } catch (e) {
            console.log(e);
        }
    }

    const handleEditSection = async (id, name) => {
        try {
            await axiosInstance.patch(`/${user.type.toLowerCase()}/section/${id}/`, {name});
            await getLesson(lesson.id);
        } catch (e) {
            console.log(e);
        }
    }

    const handleOrderSections = async (order) => {
        try {
            await axiosInstance.patch(`/${user.type.toLowerCase()}/lessons/${lesson.id}/`, {order})
        } catch (e) {
            console.log(e);
        }
        await getLesson(lesson.id)
    }

    const handleOrderTasks = async (order) => {
        try {
            await axiosInstance.patch(`/${user.type.toLowerCase()}/section/${section.id}/`, {order})
        } catch (e) {
            console.log(e);
        }
        await getLesson(lesson.id)
    }


    const handleOpenDeleteSectionPopup = (e, item) => {
        e.stopPropagation();
        e.preventDefault();
        setSelectedSection(item);
        setOpenDeleteSectionPopup(true);
    }

    const handleDeleteSection = async () => {
        try {
            await axiosInstance.delete(`/${user.type.toLowerCase()}/section/${selectedSection.id}/`);
            await getLesson(lesson.id);
            dispatch(setSuccessInfoText(`Секция успешно удалена`));
        } catch (e) {
            console.log(e);
            dispatch(setErrorInfoText('Произошла ошибка, попробуйте удалить секцию позже.'));
        } finally {
            closeAllPopups();
            dispatch(openInfoPopup());
        }
    }

    const handleOpenDeleteTaskPopup = (item) => {
        setSelectedTask(item);
        setOpenDeleteTaskPopup(true);
    }

    const handleDeleteTask = async () => {
        try {
            await axiosInstance.delete(`/tasks/${selectedTask.id}/`);
            await getLesson(lesson.id);
            handleHomeworkTasksDelete(selectedTask.id);
            dispatch(setSuccessInfoText(`Задание успешно удалено`));
        } catch (e) {
            console.log(e);
            dispatch(setErrorInfoText('Произошла ошибка, попробуйте удалить задание позже.'));
        } finally {
            closeAllPopups();
            dispatch(openInfoPopup());
        }
    }

    const handleSetSection = (data) => {
        setActiveTab('section');
        setSection(data);
    }

    const handleSetHomework = (data) => {
        setActiveTab('homework');
        setSection(data);
    }

    const closeAllPopups = () => {
        setSelectedSection({});
        setSelectedTask({});
        setOpenAddSectionPopup(false);
        setOpenAddTaskPopup(false);
        setOpenDeleteSectionPopup(false);
        setOpenDeleteTaskPopup(false);
        setModalsCreateTask({
            wordColl: false,
            tf: false,
            write: false,
            transfer: false,
            sentence: false,
            connect: false,
            textModal: false,
            videoModal: false,
            addImage: false,
            addAudio: false,
            addDocument: false,
            gallery: false,
            test: false,
            note: false,
            record: false,
            composeText: false
        })
    }

    const ReturnPrevModal = () => {
        setOpenAddSectionPopup(false);
        setOpenAddTaskPopup(true);
        setModalsCreateTask({
            wordColl: false,
            tf: false,
            write: false,
            transfer: false,
            sentence: false,
            connect: false,
            textModal: false,
            videoModal: false,
            addImage: false,
            addAudio: false,
            addDocument: false,
            gallery: false,
            test: false,
            note: false,
            record: false
        })
    }

    const showModalCreateTask = (type) => {
        setOpenAddTaskPopup(false);
        setModalsCreateTask({
            ...modalsCreateTask,
            [type]: true
        })
    }

    const handleOpenAddSectionPopup = () => setOpenAddSectionPopup(true);

    const handleOpenAddTaskPopup = () => setOpenAddTaskPopup(true);

    const handleCreateTask = async (data, handleSetDownloading = () => {
    }) => {
        if (data instanceof FormData) {
            data.set(`${activeTab === 'section' ? 'section' : 'homework_template'}`, section.id);
        } else {
            data[`${activeTab === 'section' ? 'section' : 'homework_template'}`] = section.id;
        }
        try {
            handleSetDownloading(true);
            await axiosInstance.post(`${user.type.toLowerCase()}/task/`, data);
            await getLesson(lesson.id);
            closeAllPopups();
        } catch (e) {
            console.log(e)
        } finally {
            handleSetDownloading(false);
        }
    }

    const handleEditTask = async (taskId, data, handleSetDownloading = () => {
    }) => {
        try {
            handleSetDownloading(true);
            await axiosInstance.patch(`${user.type.toLowerCase()}/task/${taskId}/`, data);
            await getLesson(lesson.id);
            closeAllPopups();
        } catch (e) {
            console.log(e)
        } finally {
            handleSetDownloading(false);
        }
    }

    const handleCreateHomework = () => onCreateHomework(lesson.homework[0].id, homeworkTasks);

    const handleUpdateHomework = async () => {
        try {
            const data = {tasks: homeworkTasks};
            await editHomework(homeworkId, data);
        } catch (e) {
            console.log(e);
        }
    };

    const handleHomeworkTasksAdd = (id) => setHomeworkTasks([...homeworkTasks, id]);

    const handleHomeworkTasksDelete = (id) => setHomeworkTasks([...homeworkTasks.filter(i => i !== id)]);

    const handleOpenEditTaskPopup = (data) => {
        const returnType = () => {
            switch (data.task_type) {
                case 'TEXT':
                    return 'textModal'
                case 'VIDEO':
                    return 'videoModal'
                case 'PHOTO':
                    return 'addImage'
                case 'DOCUMENT':
                    return 'addDocument'
                case 'LIST_WORD_COLL':
                    return 'wordColl';
                case 'TF':
                    return 'tf'
                case 'WRITE_WORD':
                    return 'write';
                case 'TRANSFER_WORDS':
                    return 'transfer';
                case 'SENTENCE':
                    return 'sentence';
                case 'COLLECT_TEXT':
                    return 'composeText';
                case 'CONNECT':
                    return 'connect';
                case 'TEST':
                    return 'test';
                case 'NOTE':
                    return 'note';
                case 'AUDIO':
                    return 'addAudio';
                case 'RECORD':
                    return 'record';
                default:
                    return 'textModal'
            }
        }
        setModalsCreateTask({
            ...modalsCreateTask,
            [returnType()]: data
        })
    };

    return (
        <>
            <ConstructorWrap>
                {isOpenAddSectionPopup
                && <PopupAddPart
                    func={addSection}
                    close={closeAllPopups}
                />
                }
                <ConstructorHeader
                    name={lesson.name}
                    headerType="lesson"
                    userType={userType}
                    lessonId={lesson.id}
                    returnModal={returnModal}
                >
                    {type === 'homework' &&
                    <MainButton
                        text={homeworkId ? 'Изменить задание' : 'Назначить задание'}
                        type='button'
                        func={homeworkId ? handleUpdateHomework : handleCreateHomework}
                        width={240}
                        disabled={homeworkTasks.length === 0}
                    />}
                </ConstructorHeader>
                {type === 'homework' && (
                    <ConstructorHomeworkDesc>
                        <p>Для создания домашнего задания отметьте галочкой необходимые
                            задания из любых разделов урока</p>
                    </ConstructorHomeworkDesc>)
                }
                <div className="container">
                    <div className="lesson__col">

                        <InfoMenu
                            type="section"
                            title="Разделы"
                            icon="CrossSvg"
                            lessonID={lesson.id}
                            dataSection={sectionsList}
                            func={handleOpenAddSectionPopup}
                            editSection={handleEditSection}
                            editOrderSections={handleOrderSections}
                            deleteSection={handleOpenDeleteSectionPopup}
                            section={section}
                            setSection={handleSetSection}
                            activeTab={activeTab}
                        />
                        <InfoMenu
                            type="homework"
                            icon="CrossSvgHome"
                            title="Домашнее задание"
                            func={addHomework}
                            dataHomework={homeworkList}
                            homework={section}
                            setHomework={handleSetHomework}
                            activeTab={activeTab}
                        />
                    </div>
                    <Plan
                        open={handleOpenAddTaskPopup}
                        editTask={handleOpenEditTaskPopup}
                        orderTasks={handleOrderTasks}
                        type="lesson"
                        title={'some title'}
                        textButton="Добавить задание"
                        lessonID={lesson.id}
                        section={section}
                        onHomeworkAddTask={handleHomeworkTasksAdd}
                        onHomeworkDeleteTask={handleHomeworkTasksDelete}
                        onDelete={handleOpenDeleteTaskPopup}
                        homeworkTasks={homeworkTasks}
                        lessonEditType={type}
                    />
                </div>
            </ConstructorWrap>
            {
                !!isOpenAddTaskPopup &&
                <AdminChooseTemplateModal
                    close={closeAllPopups}
                    showModal={showModalCreateTask}
                />
            }
            {isOpenDeleteSectionPopup && (
                <ConfirmPopup
                    onConfirm={handleDeleteSection}
                    onClose={closeAllPopups}
                    text={`Вы действительно хотите удалить\u00a0секцию\u00a0${selectedSection.name}\u00a0?`}
                    successText={'Да, удалить'}
                />
            )}
            {isOpenDeleteTaskPopup && (
                <ConfirmPopup
                    onConfirm={handleDeleteTask}
                    onClose={closeAllPopups}
                    text={`Вы действительно хотите удалить\u00a0задание\u00a0${selectedTask.title}\u00a0?`}
                    successText={'Да, удалить'}
                />
            )}
            {
                !!modalsCreateTask.textModal &&
                <TextModal
                    edit={modalsCreateTask.textModal}
                    lesson={lesson.id}
                    close={closeAllPopups}
                    back={ReturnPrevModal}
                    addTask={handleCreateTask}
                    editTask={handleEditTask}
                />
            }

            {
                !!modalsCreateTask.note &&
                <Note
                    edit={modalsCreateTask.note}
                    lesson={lesson}
                    close={closeAllPopups}
                    back={ReturnPrevModal}
                    addTask={handleCreateTask}
                    editTask={handleEditTask}
                />
            }

            {
                !!modalsCreateTask.record &&
                <RecordAudio
                    edit={modalsCreateTask.record}
                    lesson={lesson}
                    close={closeAllPopups}
                    back={ReturnPrevModal}
                    addTask={handleCreateTask}
                    editTask={handleEditTask}
                />
            }

            {
                !!modalsCreateTask.wordColl &&
                <WordColl
                    edit={modalsCreateTask.wordColl}
                    lesson={lesson}
                    close={closeAllPopups}
                    back={ReturnPrevModal}
                    addTask={handleCreateTask}
                    editTask={handleEditTask}
                />
            }

            {/*modal for add video in lesson template*/}

            {
                !!modalsCreateTask.videoModal &&
                <VideoModal
                    edit={modalsCreateTask.videoModal}
                    lesson={lesson}
                    close={closeAllPopups}
                    back={ReturnPrevModal}
                    addTask={handleCreateTask}
                    editTask={handleEditTask}
                />
            }

            {/*modal for add image in lesson template*/}

            {
                !!modalsCreateTask.addImage &&
                <AddImageModal
                    edit={modalsCreateTask.addImage}
                    lesson={lesson}
                    close={closeAllPopups}
                    back={ReturnPrevModal}
                    addTask={handleCreateTask}
                    editTask={handleEditTask}
                />
            }

            {
                !!modalsCreateTask.tf &&
                <TF
                    edit={modalsCreateTask.tf}
                    lesson={lesson}
                    close={closeAllPopups}
                    back={ReturnPrevModal}
                    addTask={handleCreateTask}
                    editTask={handleEditTask}
                />
            }

            {
                !!modalsCreateTask.transfer &&
                <TransferWords
                    edit={modalsCreateTask.transfer}
                    lesson={lesson}
                    close={closeAllPopups}
                    back={ReturnPrevModal}
                    addTask={handleCreateTask}
                    editTask={handleEditTask}
                />
            }

            {
                !!modalsCreateTask.write &&
                <WriteWord
                    edit={modalsCreateTask.write}
                    lesson={lesson}
                    close={closeAllPopups}
                    back={ReturnPrevModal}
                    addTask={handleCreateTask}
                    editTask={handleEditTask}
                />
            }

            {
                !!modalsCreateTask.test &&
                <TestModal
                    edit={modalsCreateTask.test}
                    lesson={lesson}
                    close={closeAllPopups}
                    back={ReturnPrevModal}
                    addTask={handleCreateTask}
                    editTask={handleEditTask}
                />
            }

            {
                !!modalsCreateTask.connect &&
                <Connect
                    edit={modalsCreateTask.connect}
                    lesson={lesson}
                    close={closeAllPopups}
                    back={ReturnPrevModal}
                    addTask={handleCreateTask}
                    editTask={handleEditTask}
                />
            }

            {
                !!modalsCreateTask.sentence &&
                <SentenceOfWords
                    edit={modalsCreateTask.sentence}
                    lesson={lesson}
                    close={closeAllPopups}
                    back={ReturnPrevModal}
                    addTask={handleCreateTask}
                    editTask={handleEditTask}
                />
            }

            {
                !!modalsCreateTask.composeText &&
                <SentenceOfWords
                    edit={modalsCreateTask.composeText}
                    lesson={lesson}
                    close={closeAllPopups}
                    back={ReturnPrevModal}
                    addTask={handleCreateTask}
                    editTask={handleEditTask}
                    taskType={'text'}
                />
            }

            {
                !!modalsCreateTask.addAudio &&
                <AddAudioModal
                    edit={modalsCreateTask.addAudio}
                    lesson={lesson}
                    close={closeAllPopups}
                    back={ReturnPrevModal}
                    addTask={handleCreateTask}
                    editTask={handleEditTask}
                />
            }

            {/*modal for add document file in lesson template*/}

            {
                !!modalsCreateTask.addDocument &&
                <AddDocumentModal
                    edit={modalsCreateTask.addDocument}
                    lesson={lesson}
                    close={closeAllPopups}
                    back={ReturnPrevModal}
                    addTask={handleCreateTask}
                    editTask={handleEditTask}
                />
            }

            {/*add gallery */}

            {
                !!modalsCreateTask.gallery &&
                <AddGallery
                    close={closeAllPopups}
                    back={ReturnPrevModal}
                    addTask={handleCreateTask}
                    editTask={handleEditTask}
                />
            }
        </>
    );
}

const mapStateToProps = ({users, homeworks}) => ({
    user: users.user,
    userType: users.userType,
    homework: homeworks.homework,
});

const mapDispatchToProps = (dispatch) => ({
    getHomework: (userType, id) => dispatch(getHomework(userType, id)),
    clearHomework: () => dispatch(clearHomework()),
    editHomework: (homeworkId, data) => dispatch(editHomework(homeworkId, data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LessonEdit);
