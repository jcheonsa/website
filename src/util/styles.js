import styled from "styled-components";
 
export const Container = styled.div`
 display: flex;
 min-height: 100vh;
 min-width: 0;
 font-family: sans-serif;
`;
 
export const Sidebar = styled.div`
 display: flex;
 min-width: 0;
 flex: 0 0 200px;
 flex-direction: column;
 border-right: solid 1px #3c4245;
 background-color: #98d788;
 padding: 10px;
`;
 
export const Content = styled.div`
 display: flex;
 flex-direction: column;
 flex: 1;
 min-width: 0;
 padding: 10px;
 background-color: #88afd7;
`;