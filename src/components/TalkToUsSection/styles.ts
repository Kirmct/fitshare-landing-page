import styled from "styled-components";
interface TalkContainerProps {
  topImage: string;
}

export const TalkContainer = styled.section<TalkContainerProps>`
  .imgTop {
    background-image: url("${({ topImage }) => topImage}");
    height: 65px;
    background-size: cover;
  }
  .content {
    background-color: ${(props) => props.theme["background-color-cold"]};
    margin-top: -4px;
    padding: 3rem;
    gap: 3rem;
    display: flex;
    width: 100vw;
    flex-wrap: wrap;
    align-item: center;
    justify-content: center;

    .left {
      display: flex;
      flex-direction: column;
      
      min-width: 300px;
      gap:1rem;
      flex:1;
        img {
                width: 100%;
                max-height: 25rem;
                display: block;
            }
        h1{
          color: ${(props) => props.theme["primary-color"]};
        }
        span{
          color: ${(props) => props.theme["primary-color"]};
          text-weight: bold;
        }
    }

    .right {
      display: flex;
      align-items:center;
      justify-content: center;
      flex:1;
      .form {
        background-color: #D5DCFE; // cor de fundo do formulário
        padding: 2rem;
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        min-width: 80%;   

        label {
          font-weight: bold;
          color: #333;
          margin-bottom: 0.5rem;
          font-size: 1rem;
        }

        .input,
        .textarea {
          width: 100%;
          padding: 0.75rem;
          border: 1px solid #dcdcdc;
          border-radius: 6px;
          background-color: #f9f9ff;
          color: #333;
          font-size: 1rem;

          &::placeholder {
            color: #c2c2d1;
          }

          &:focus {
            outline: none;
            border-color: #8e8eef;
          }
        }

        .textarea {
          resize: vertical;
          min-height: 100px;
        }

        .button {
          background-color: ${(props) => props.theme["primary-color"]}; // cor do botão "Enviar"
          color: #fff;
          padding: 0.75rem;
          border: none;
          border-radius: 16px;
          font-weight: bold;
          font-size: 1rem;
          cursor: pointer;
          transition: background-color 0.2s ease;

          &:hover {
            background-color: #3b5bdb;
          }
        }
      }
    }
  }
`;
