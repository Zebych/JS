import styled from 'styled-components';
import {baseTheme} from "../../baseTheme";

const PlanWrap = styled.div`
  width: 100%;
  background-color: #fff;
  border-radius: 8px;
  padding: 16px;
  position: relative;
  margin-left: 24px;
  box-shadow: 0 0 2px rgba(105, 112, 119, 0.06), 0 2px 2px rgba(105, 112, 119, 0.12);
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  min-height: 100%;

  .plan__wrap {
    margin-top: -25px;
  }

  .title {
    display: block;
    position: relative;
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;
    color: #111111;
    margin-bottom: 16px;
    width: 100%;

    &:after {
      content: '';
      display: block;
      width: calc(100% + 32px);
      position: absolute;
      left: -16px;
      bottom: -16px;
      border-bottom: 1px solid #DDE1E6;
    }
  }
  
  .fake__wrapper {
    width: 100%;
    height: 100%;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }
  
  .plan__section {
    width: 100%;
    height: 100%;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }

  @media ${baseTheme.media.large} {
    margin-left: 0;
    min-height: unset;
    flex-grow:1;
  }

  @media ${baseTheme.media.small} {
    padding: 16px 0;
    
    .title {
      padding: 0 16px;
      
      &:after {
        width: 100%;
        left: 0;
        bottom: -16px;
      }
    }
  }
`;

export { PlanWrap };
