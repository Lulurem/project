import { useRecoilState } from "recoil";
import styled from "styled-components";
import {
  accountState,
  accountsStates,
  categoriesState,
  categoryState,
} from "../atoms";
import { useEffect } from "react";

const Container = styled.div`
  padding: 20px;
`;

const Wrapper = styled.div`
  display: flex;
`;

const Cost = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  align-items: center;
  margin: 0px;
`;

const Budget = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  align-items: center;
  margin: 0px;
`;

const List = styled.select`
  width: 300px;
  height: 100px;
`;

const AddButton = styled.button`
  width: 300px;
  padding: 10px;
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

const InputButton = styled.button`
  width: 5%;
  height: 100%;
`;

function CashBook() {
  const [category, setCategory] = useRecoilState(categoryState);
  const [categories, setCategories] = useRecoilState(categoriesState);
  const [account, setAccount] = useRecoilState(accountState);
  const [accounts, setAccounts] = useRecoilState(accountsStates);
  const addCategory = () => {
    const newCategory = prompt("비용 분류 추가", "");
    if (newCategory) {
      if (categories.includes(newCategory)) {
        alert("중복된 이름입니다.");
        return;
      }
      setCategories([...categories, newCategory]);
      setCategory(newCategory);
    }
  };

  const addAccount = () => {
    const newAccount = prompt("출금 계정 추가", "");
    if (newAccount) {
      if (accounts.includes(newAccount)) {
        alert("중복된 계정입니다.");
        return;
      }
      setAccounts([...accounts, newAccount]);
      setAccount(newAccount);
    }
  };

  useEffect(() => {
    localStorage.setItem("categories", JSON.stringify(categories));
  }, [categories]);
  useEffect(() => {
    localStorage.setItem("accounts", JSON.stringify(accounts));
  }, [accounts]);

  return (
    <>
      <Container>
        <Wrapper>
          <Cost>
            <label>비용</label>
            <List />
            <AddButton onClick={addCategory}>비용 분류 추가</AddButton>
          </Cost>
          <Budget>
            <label>출금</label>
            <List />
            <AddButton onClick={addAccount}>출금 계정 추가</AddButton>
          </Budget>
        </Wrapper>
        <hr />
        <Form>
          <label>메모</label>
          <Input />
          <label>금액</label>
          <Input />
          <InputButton />
        </Form>
        <hr />
        <h1>내역</h1>
      </Container>
    </>
  );
}

export default CashBook;
