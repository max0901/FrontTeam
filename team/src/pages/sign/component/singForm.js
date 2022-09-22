import styled from "styled-components";
const SignForm = () => {
  return (
    <Form>
      <FormInner>
        <h2>회원가입</h2>
        <p>
          <input type="text" placeholder="이름을 입력해주세요" />
        </p>

        <p>
          <input type="text" placeholder="아이디를 입력해주세요" />
        </p>
        <p>
          <input type="password" placeholder="비밀번호를 입력해주세요" />
        </p>
        <Btn>회원가입</Btn>
      </FormInner>
    </Form>
  );
};
export default SignForm;

const Form = styled.div`
  width: 500px;
  box-shadow: -60px 0px 100px -90px #000, 60px 0px 100px -90px #000;
  margin: 100px auto;
`;
const FormInner = styled.div`
  padding: 100px 0;
  height: 600px;

  & > h2 {
    margin-bottom: 100px;
  }
  & p {
    margin: 40px 0;
  }
  & p > input {
    width: 300px;
    height: 40px;
    margin-left: 20px;
    border-radius: 5px 5px;
    text-indent: 20px;
  }
`;
const Btn = styled.button`
  width: 100px;
  height: 30px;
  border-radius: 5px;
`;
