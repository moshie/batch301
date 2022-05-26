import styled from 'styled-components';

const Window = styled.div`
  box-shadow: 0 1px 4px rgba(#4a4a4a, 0.5);
  border-radius: 0.25em;
  overflow: hidden;
  position: relative;
  margin-bottom: 2em;
`;

const Header = styled.header`
  background: linear-gradient(to bottom, #f9f9f9, #efefef);
  font-size: 1em;
  border-bottom: 1px solid #fff;
  padding: 0.35em;
  text-align: center;
  color: #232323;
  text-shadow: 2px 2px 1px rgba(255, 255, 255, 0.6);
`;

const Input = styled.textarea`
  min-height: 20em;
  background: #fff;
  border-top: 1px solid #cecece;
  padding: 1em 1em 4em 1em;
  font-size: 1em;
  overflow-y: auto;
  color: #232323;
  font-family: 'Source Sans Pro', sans-serif;
  line-height: 1.8em;
  width: 100%;
  display: block;
  border: 0;
  resize: vertical;
  margin: 0;

  &:focus {
    outline: none;
  }

  @media screen and (min-width: 768px) {
    min-height: 26em;
    padding: 1em 1em 2em 1em;
  }

  @media screen and (min-height: 600px) and (max-height: 780px) {
    min-height: 22em;
  }
`;

export const Editor = () => {
  return (
    <Window>
      <Header>Redirects.txt</Header>
      <label htmlFor="redirects-editor" className="sr-only">
        Redirects
      </label>
      <Input id="redirects-editor"></Input>
    </Window>
  );
};
