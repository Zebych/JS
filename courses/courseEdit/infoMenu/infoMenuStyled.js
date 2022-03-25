import styled from 'styled-components';

import icon_pen from '../../../assets/media/icon/pen.svg';
import icon_cross from '../../../assets/media/icon/cross.svg';
import {baseTheme} from "../../../baseTheme";

const InfoUl = styled.ul`
  width: 318px;
  background: #FFFFFF;
  box-shadow: 0px 0px 2px rgba(105, 112, 119, 0.06), 0px 2px 2px rgba(105, 112, 119, 0.12);
  border-radius: 8px;
  padding: 16px 16px 0 16px;
  margin-bottom: 24px;
  list-style-type: none;
  position: relative;

  @media ${baseTheme.media.large} {
    width: 100%;

    &.cover {
      margin-left: 16px;

      @media ${baseTheme.media.medium} {
        margin-left: 0;
      }
    }
  }

  .info__title {
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;
    color: #111111;

    &_simple {
      display: inline-block;
      font-size: 16px;
      line-height: 22px;
      margin-bottom: 16px;
    }
  }
`;

const InfoLiEmpty = styled.li`
  text-align: center;
  padding: 50px 16px;
  list-style-type: none;

  p {
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 32px;
    letter-spacing: -0.01em;
    color: #697077;
    margin-bottom: 16px;
  }

  span {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.01em;
    color: #697077;
  }

`

const InfoLi = styled.li`

  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  position: relative;
  margin-bottom: 16px;

  &:after {
    content: '';
    display: block;
    width: calc(100% + 32px);
    position: absolute;
    bottom: -16px;
    left: -16px;
    border-bottom: 1px solid #DDE1E6;
  }
`;

const InfoHomework = styled(InfoUl)`
  padding: 16px;
  margin-bottom: 0;
  cursor: pointer;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;

  &.active {
    background: ${baseTheme.colors.bgActiveSection};

    .info__title {
      color: ${baseTheme.colors.activeSection};
    }
  }

  @media ${baseTheme.media.large} {
    margin-bottom: 24px;
  }
`;

const InfoUlSimple = styled(InfoUl)`

  margin-bottom: 0;

  .info__title_simple {

    display: inline-block;
    font-size: 16px;
    line-height: 22px;
    margin-bottom: 16px;

  }

  @media ${baseTheme.media.large} {
    margin-bottom: 24px;
  }
`;

const SvgBlock = styled.span`

  display: block;
  cursor: pointer;
  margin-right: 3px;

`;

const PenSvg = styled(SvgBlock)`
  width: 17px;
  height: 17px;
  background: url(${icon_pen}) center center/cover no-repeat;
`;

const CrossSvg = styled(SvgBlock)`
  width: 18px;
  height: 18px;
  background: url(${icon_cross}) center center/cover no-repeat;
`;

export {
  InfoUl,
  InfoLi,
  PenSvg,
  CrossSvg,
  InfoHomework,
  InfoUlSimple,
  InfoLiEmpty
};
