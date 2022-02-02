import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 1.2rem;
  h1 {
    color: #49bcac;
  }
  .upload-box {
    color: #49bcac;
    text-align: center;
    .upload-success {
      display: flex;
      align-items: center;
      flex-direction: column;
      h4 {
        color: #5599de;
      }
      img {
        margin-top: 2rem;
        width: 80%;
        height: auto;
      }
    }
    .upload-unsuccess {
      color: red;
      img {
        width: 80%;
        height: auto;
      }
    }
  }
`;
