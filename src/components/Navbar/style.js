import styled from 'styled-components';

export const Container = styled.div`
   width: 100%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);

strong {
  color: #2ab7ca;
}

.navbar-brand {
  font-size: 1.6em;
}
.nav-link {
  font-size: 1.3em;
  color: #272727;
  text-decoration: none;
  transition: 0.4s;
  color: #272727 !important;
}

.nav-link:hover {
  color: #2ab7ca !important;
}
`;
