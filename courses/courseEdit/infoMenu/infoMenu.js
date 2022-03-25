import React from 'react';
import classnames from "classnames";

import InfoCourse from "./infoCourse/infoCourse";
import InfoCover from './infoCover/infoCover';
import InfoLessonList from './infoLesson/infoLesson';

import {
  InfoUl,
  InfoLi,
  PenSvg,
  CrossSvg,
  InfoUlSimple, InfoHomework
} from './infoMenuStyled';

const InfoMenu = (props) => {
  // Тип нужен для того что бы отображать разные варианты верстки и функционала
  const _type = props.type || 'simple';

  const iconWrap = (icon) => {
    switch (icon) {
      case 'PenSvg':
        return <PenSvg onClick={props.func}/>;
      case 'CrossSvg':
        return <CrossSvg onClick={props.func}/>;
      default:
        return null;
    }
  };

  return (
    _type !== 'simple'
      ? _type === 'homework' ? (
          <InfoHomework className={classnames({active: props.homework?.id && props.activeTab === 'homework'})}
                        onClick={props.dataHomework?.length > 0 ? () => props.setHomework(props.dataHomework[0]) : props.func}>
            <span className="info__title">{props.title}</span>
          </InfoHomework>
        ) :
        <InfoUl className={classnames({cover: _type === 'cover'})}>
          <InfoLi>
            <span className="info__title">{props.title}</span>
            {iconWrap(props.icon)}
          </InfoLi>
          {/*Не понятно что за типы и к чему они вообще*/}
          {_type === 'info'
            ? <InfoCourse
              dataSection={props.dataSection}
            />

            : _type === 'cover'
              ? <InfoCover
                func={props.func}
                image={props.image}
                bgImage={props.bgImage}
                bgType={props.bgType}
              />

              : _type === 'section'

              &&
                  <InfoLessonList
                section={props.section}
                setSection={props.setSection}
                lessonID={props.lessonID}
                dataSection={props.dataSection}
                editSection={props.editSection}
                editOrderSections={props.editOrderSections}
                deleteSection={props.deleteSection}
                activeTab={props.activeTab}
              />
          }
        </InfoUl>
      : (
        <InfoUlSimple>
          <span className="info__title_simple">{props.title}</span>
        </InfoUlSimple>
      )
  )

};

export default InfoMenu;
