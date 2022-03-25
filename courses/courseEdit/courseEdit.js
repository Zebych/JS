import React, {useEffect, useState} from "react";
import axiosInstance from "../../service/iTeacherApi";
import {useDispatch, useSelector} from "react-redux";
import {ConstructorWrap} from "./styled";
import InfoMenu from "./infoMenu/infoMenu";
import Plan from "../../components/plan/plan";
import PopupChangeCover
    from "../../components/popupsAdmin/popupChangeCover/popupChangeCover";
import PopupEditCourse
    from "../../components/popupsAdmin/popupCourse/editCourse/popupEditCourse";
import PopupAddLesson
    from "../../components/popupsAdmin/popupLesson/addLesson/popupAddLesson";
import {PopupEditLesson} from "../../components/popupsAdmin/popupLesson/editLesson/popupEditLesson";
import ConstructorHeader from "../../components/constructorHeader/constructorHeader";
import MainButton from "../../components/buttons/mainButton/mainButton";
import ConfirmPopup from "../../components/confirmPopup/confirmPopup";
import {
    openInfoPopup,
    setErrorInfoText,
    setSuccessInfoText
} from "../../store/actions/infoPopupAction";
import {useHistory} from "react-router";

const CourseEdit = ({courseId}) => {
    const {user} = useSelector(state => state.users);
    const dispatch = useDispatch();
    const [course, setCourse] = useState({});
    const [lesson, setLesson] = useState({});
    const [isOpenCoverPopup, setOpenCoverPopup] = useState(false);
    const [isOpenNamePopup, setOpenNamePopup] = useState(false);
    const [isOpenAddLessonPopup, setOpenAddLessonPopup] = useState(false);
    const [isOpenEditLessonPopup, setOpenEditLessonPopup] = useState(false);
    const [isOpenDeleteLessonPopup, setOpenDeleteLessonPopup] = useState(false);
    const [isOpenDeleteCourseModal, setOpenDeleteCourseModal] = useState(false);
    const history = useHistory();
    const handleBackHistory = () => history.goBack();

    useEffect(async () => {
        await getCourse(courseId);
    }, [courseId]);

    const getCourse = async (id) => {
        try {
            const response = await axiosInstance.get(`/${user.type.toLowerCase()}/courses-library/${id}/`);
            setCourse(response.data);
        } catch (e) {
            console.log(e);
        }
    }


    const changeCourseFreeStatus = async () => {
        try {
            if (course.free) {
                await axiosInstance.delete(`/admin/register-course/${courseId}`);
            } else {
                await axiosInstance.post(`/admin/register-course/`, {
                    "course_template": courseId
                });
            }
            await getCourse(courseId);
        } catch (e) {
            console.log(e);
        }
    }

    if (!course.id) return <></>

    const dataSection = [
        [
            'Длительность курса',
            `${course.lessons.length}${(course.lessons.length === 0 || course.lessons.length >= 5) ? ' уроков' : course.lessons.length === 1 ? ' урок' : ' урока'}`
        ],
        ['Длительность урока', '60 минут'],
        ['Уровень', course.level]
    ];

    //order lessons
    const handleOrderLessons = async (formData) => {
        try {
             await axiosInstance.patch(`/${user.type.toLowerCase()}/courses-library/${course.id}/`, formData)
        } catch (e) {
            console.log(e)
        }
        await getCourse(course.id)
    }

    const handleOpenCoverPopup = () => {
        setOpenCoverPopup(true);
    }

    const handleOpenNamePopup = () => {
        setOpenNamePopup(true);
    }

    const handleOpenAddLessonPopup = () => {
        setOpenAddLessonPopup(true);
    }

    const handleEditLessonPopup = (item) => {
        setLesson(item)
        setOpenEditLessonPopup(true);
    }

    const handleOpenDeleteLessonPopup = (e, item) => {
        e.stopPropagation();
        e.preventDefault();
        setLesson(item);
        setOpenDeleteLessonPopup(true);
    }

    const handleDeleteLesson = async (e, id) => {
        e.stopPropagation();
        e.preventDefault();
        try {
            await axiosInstance.delete(`/${user.type.toLowerCase()}/lessons/${lesson.id}/`);
            await getCourse(courseId);
            dispatch(setSuccessInfoText(`Урок успешно удален`));
        } catch (e) {
            console.log(e);
            dispatch(setErrorInfoText('Произошла ошибка, попробуйте удалить урок позже.'));
        } finally {
            handleCloseAllPopup();
            dispatch(openInfoPopup());
        }
    }
    const handleOpenDeleteModal = () => setOpenDeleteCourseModal(true);

    const handleDeleteCourse = async () => {
        try {
            //console.log(course)
            // await axiosInstance.delete(`/teacher/courses/${courseId}/`);
            await getCourse(courseId);
            handleBackHistory();
            dispatch(setSuccessInfoText(`Курс успешно удален`));
        } catch (e) {
            console.log(e);
            dispatch(setErrorInfoText('Произошла ошибка, попробуйте удалить курс позже.'));
        } finally {
            handleCloseAllPopup();
            dispatch(openInfoPopup());
        }
    }

    const handleCloseAllPopup = () => {
        setOpenCoverPopup(false);
        setOpenNamePopup(false);
        setOpenAddLessonPopup(false);
        setOpenEditLessonPopup(false);
        setOpenDeleteLessonPopup(false);
        setOpenDeleteCourseModal(false);
        setLesson({});
    }

    return (
        <ConstructorWrap>
            {isOpenCoverPopup && (
                <PopupChangeCover
                    course={course}
                    userType={user.type.toLowerCase()}
                    setCourse={setCourse}
                    close={handleCloseAllPopup}/>
            )}
            {isOpenNamePopup && (
                <PopupEditCourse
                    userType={user.type.toLowerCase()}
                    setCourse={setCourse}
                    course={course}
                    close={handleCloseAllPopup}/>
            )}
            {isOpenAddLessonPopup
            && <PopupAddLesson
                course={courseId}
                updateCourse={getCourse}
                close={handleCloseAllPopup}
            />
            }
            {isOpenEditLessonPopup
            && <PopupEditLesson
                lesson={lesson}
                courseId={courseId}
                userType={user.type.toLowerCase()}
                updateCourse={getCourse}
                close={handleCloseAllPopup}
            />
            }
            {isOpenDeleteLessonPopup && (
                <ConfirmPopup
                    onConfirm={handleDeleteLesson}
                    onClose={handleCloseAllPopup}
                    text={`Вы действительно хотите удалить\u00a0урок\u00a0${lesson.name}\u00a0?`}
                    successText={'Да, удалить'}
                />
            )}
            {isOpenDeleteCourseModal && user.type === 'TEACHER' && (
                <ConfirmPopup
                    onConfirm={handleDeleteCourse}
                    onClose={handleCloseAllPopup}
                    text={'Вы действительно хотите удалить курс?'}
                    successText={'Да, удалить'}
                />
            )}

            <ConstructorHeader
                name={course.name}
                headerType="course"
                userType={user.type.toLowerCase()}
                courseId={courseId}
                setCourse={setCourse}
            >
                {/* <MainButton
              text={'Удалить'}
              type={'button'}
              width={'120'}
              func={handleOpenDeleteModal}
              classList={'btn-del'}
            />*/}
                {user.type === 'ADMIN' && course.general && <MainButton
                    text={course.free ? 'Сделать платным' : 'Сделать бесплатным'}
                    func={changeCourseFreeStatus}
                    width={'270'}
                />}
            </ConstructorHeader>
            <div className="container">
                <div className="course__col">
                    <InfoMenu
                        type="info"
                        title="Информация"
                        icon="PenSvg"
                        dataSection={dataSection}
                        func={handleOpenNamePopup}
                    />
                    <InfoMenu
                        func={handleOpenCoverPopup}
                        type="cover"
                        title="Обложка"
                        image={course.background}
                        bgImage={course.background_image}
                        bgType={course.bg_type}
                    />
                </div>
                <Plan
                    type="course"
                    title="План занятий"
                    textButton="Добавить занятие"
                    // список уроков
                    list={course.lessons}
                    // тут наверное тоже нужно будет переделывать
                    add={handleOpenAddLessonPopup}
                    // изминения урока
                    edit={handleEditLessonPopup}
                    onDelete={handleOpenDeleteLessonPopup}
                    changeOrderLessons={handleOrderLessons}
                    // не совсем понятно зачепм это нужно передавать
                    //selectedCourseID={props.templateID}
                    courseId={courseId}
                />
            </div>
        </ConstructorWrap>
    )

};

export default CourseEdit;
