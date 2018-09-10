import styled from "styled-components";

export const PageWrapper = styled.div`
  min-height: calc(100vh - 2rem);
  background-color: ${({ theme }) => theme.colors.blue};
  overflow: hidden;
  padding: 1rem 0;
`;

export const Container = styled.div`
  height: 100%;
  margin: 0 auto;
  position: relative;
  width: ${({ theme }) => theme.variables.containerWidth};
`;

export const Title = styled.h1`
  text-align: center;
  color: white;
`;

export const Row = styled.div`
  align-items: flex-start;
  display: flex;
  justify-content: space-between;
  margin: 3rem 0;
`;

export const Textarea = styled.textarea`
  border-radius: 4px;
  border-style: solid;
  border-width: 3px;
  flex-basis: calc(50% - 0.5rem);
  min-height: 80vh;
  padding: 1rem;
  resize: none;
`;

export const Input = styled(Textarea)`
  font-size: 14px;
  border-color: ${({ theme }) => theme.colors.purple};
  white-space: pre;
`;

export const Output = styled(Textarea.withComponent("div"))`
  background-color: #fff;
  border-color: ${({ theme }) => theme.colors.green};
`;

const Button = styled.button`
  background: ${({ theme }) => theme.colors.blue};
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.blue};
  color: white;
  display: block;
  height: 40px;
  line-height: 100%;
  min-width: 80px;
`;

export const CopyButton = styled(Button)`
  position: absolute;
  bottom: 1rem;
  right: calc(50% + 1.5rem);
`;
