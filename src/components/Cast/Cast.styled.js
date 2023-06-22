import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 30px;
  padding: 0 80px 40px 80px;
`;

export const CastTitle = styled.h3`
  font-size: 30px;
  font-weight: 500;
  text-align: center;
  text-transform: uppercase;
`;

export const CastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  align-items: center;
  margin-top: 30px;
`;

export const CastListItem = styled.li`
  width: calc((100% - 4 * 50px) / 5);
  height: 400px;
  word-wrap: break-word;
`;

export const CastInfo = styled.div`
  margin-top: 24px;
  max-width: 200px;
`;

export const CastName = styled.h3`
  margin-bottom: 12px;
`;

export const NoInfo = styled.p`
  margin: 30px auto 0 auto;
  padding: 20px;
  max-width: 500px;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  background-color: #f8f8f8;
  text-align: center;
`;

export const CastImg = styled.img`
  border-radius: 3px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
`;
