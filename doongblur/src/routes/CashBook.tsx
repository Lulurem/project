import styled from "styled-components";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;

const Select = styled.select`
  width: 300px;
  height: 100px;
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

function CashBook() {
  return (
    <Wrapper>
      <label>비용</label>
      <Select />
      <label>출금</label>
      <Select />
      <hr />
      <Form>
        <label>메모</label>
        <Input />
        <label>금액</label>
        <Input />
        <Button />
      </Form>
      <hr />
      <h1>내역</h1>
    </Wrapper>
  );
}

export default CashBook;
