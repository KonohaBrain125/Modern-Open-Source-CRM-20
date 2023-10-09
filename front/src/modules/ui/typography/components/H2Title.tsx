import styled from '@emotion/styled';

type H2TitleProps = {
  title: string;
  description?: string;
  addornment?: React.ReactNode;
};

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${({ theme }) => theme.spacing(4)};
`;

const StyledTitleContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

const StyledTitle = styled.h2`
  color: ${({ theme }) => theme.font.color.primary};
  font-size: ${({ theme }) => theme.font.size.md};
  font-weight: ${({ theme }) => theme.font.weight.semiBold};
  margin: 0;
`;

const StyledDescription = styled.h3`
  color: ${({ theme }) => theme.font.color.tertiary};
  font-size: ${({ theme }) => theme.font.size.md};
  font-weight: ${({ theme }) => theme.font.weight.regular};
  margin: 0;
  margin-top: ${({ theme }) => theme.spacing(3)};
`;

export const H2Title = ({ title, description, addornment }: H2TitleProps) => (
  <StyledContainer>
    <StyledTitleContainer>
      <StyledTitle>{title}</StyledTitle>
      {addornment}
    </StyledTitleContainer>
    {description && <StyledDescription>{description}</StyledDescription>}
  </StyledContainer>
);
