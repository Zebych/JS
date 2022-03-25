import styled from 'styled-components';

import icon_move from '../../../assets/media/icon/6_dot.svg';
import icom_delete from '../../../assets/media/icon/trash_basket.svg';
import icon_edit from '../../../assets/media/icon/edit.svg';
import icon_checkmark from '../../../assets/media/icon/checkmark.svg';
import {baseTheme} from "../../../baseTheme";

const SelectionWrap = styled.div`
  width: 100%;
  padding: 17px 16px 16px 23px;
  background: #FFFFFF;
  border: 1px solid #DDE1E6;
  box-sizing: border-box;
  box-shadow: 0px 0px 2px rgba(105, 112, 119, 0.06),
              0px 2px 2px rgba(105, 112, 119, 0.12);
  border-radius: 8px;
  margin-bottom: 16px;
  
  &:first-child {
    margin-top: 32px;
  }

  .section {
    
    &__row {
      width: 100%;

      &-1 {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-bottom: 10px;
      }

      &-2 {
        //padding-left: 26px;
      }
    }

    &__move {
      display: block;
      width: 10px;
      height: 16px;
      background: url(${icon_move}) center center/cover no-repeat;
      margin-right: 15px;
      cursor: pointer;
    }

    &__title {
      font-weight: 600;
      font-size: 16px;
      line-height: 22px;
      margin-right: auto;
    }

    &__delete {
      width: 17px;
      height: 20px;
      background: url(${icom_delete}) center center/cover no-repeat;
      cursor: pointer;
      margin-right: 24px;
    }
    
    &__edit {
      width: 24px;
      height: 24px;
      background: url(${icon_edit}) center center/cover no-repeat;
      cursor: pointer;
    }
    
    &__homework {
      width: 24px;
      height: 24px;
      border-radius: 4px;
      cursor: pointer;
      margin-left: 24px;
      background-repeat: no-repeat;
      background-position: center;
      transition: .25s;
      background-image: url(${icon_checkmark});
      background-color: ${baseTheme.colors.bgGrey};
      
      &.active {
        background-color: ${baseTheme.colors.bgBlue};
      }
    }
  }


  @media ${baseTheme.media.small} {
    border-radius: 0;
    border-left: 0;
    border-right: 0;
    border-top: 0;
    margin-bottom: 0;
    box-shadow: none;
    padding: 16px 8px;
    
    &:first-child {
      margin-top: 0;
    }

    .section {

      &__row {

        &-1 {
          padding: 0 8px;
        }
      }
    }
  }
`;

export { SelectionWrap };
