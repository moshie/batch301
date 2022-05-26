import styled from 'styled-components';

export const Alert = styled.div`
  display: block;
  padding: 0.8em 1em;
  border-radius: 3px;
  background: #e2e2e2,
    border: 1px solid #535353;
    color: #181818;
`;

export const ErrorAlert = styled(Alert)`
  background: #ffeded;
  border: 1px solid #ed6868;
  color: #ba1717;
`;

export const WarningAlert = styled(Alert)`
  background: #fff4ed;
  border: 1px solid #ed9d68;
  color: #ba6017;
`;

export const InfoAlert = styled(Alert)`
  background: #edf0ff;
  border: 1px solid #6877ed;
  color: #174eba;
`;
