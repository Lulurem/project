import { styled } from "styled-components";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;

const Form = styled.form`
  display: flex;
  height: 50px;
  align-items: center;
`;

const Input = styled.input`
  width: 20%;
  height: 100%;
`;

const Button = styled.button`
  width: 5%;
  height: 100%;
`;

function Category() {
  return (
    <Wrapper>
      <h1>비용 분류 추가</h1>
      <Form>
        <Input />
        <Button />
      </Form>
    </Wrapper>
  );
}

export default Category;
