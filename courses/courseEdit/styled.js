import styled from 'styled-components';
import {baseTheme} from "../../baseTheme";

const ConstructorWrap = styled.div`
  background-color: #f8f9fb;
  z-index: 21;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  overflow: auto;
  display: flex;
  flex-direction: column;

  .container {
    background-color: #f8f9fb;
    display: flex;
    flex-grow: 1;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: stretch;
    padding: 24px 48px;

    @media ${baseTheme.media.extraLarge} {
      padding: 16px 24px;
    }

    @media ${baseTheme.media.large} {
      padding: 16px;
      flex-direction: column;

      .course__col {
        display: flex;
        justify-content: space-between;
      }
    }

    @media ${baseTheme.media.medium} {
      .course__col {
        flex-direction: column;
      }
    }
  }
`;

const ConstructorHomeworkDesc = styled.div`
  max-width: 1442px;
  width: 100%;
  margin: 10px auto 3px;
  padding: 0 48px;

  @media ${baseTheme.media.extraLarge} {
    padding: 0 24px;
  }
  
  @media ${baseTheme.media.extraLarge} {
    padding: 0 16px;
  }
  
  p {
    padding: 16px 0;
    background-color: ${baseTheme.colors.bgWhite};
    text-align: center;
    color: ${baseTheme.colors.textGrey};
    border-radius: 8px;
    box-shadow: 0px 0px 2px rgb(105 112 119 / 6%), 0px 2px 2px rgb(105 112 119 / 12%);

    @media ${baseTheme.media.medium} {
      font-size: 14px;
      line-height: 18px;
    }
  }
`;

export {ConstructorWrap, ConstructorHomeworkDesc}
