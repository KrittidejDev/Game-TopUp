import styled from 'styled-components';

export const CheckboxContainer = styled.div`
  .checkbox_container {
    display: flex;
    column-gap: 6px;
    cursor: pointer;
    .checkbox_label {
      color: ${({ theme }) => theme.COLORS.BLACK_1};
      font-size: ${({ theme }) => theme.FONTS.SIZES.S14};
      font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.REGULAR};
      .cb_link {
        color: ${({ theme }) => theme.COLORS.GREEN_1};
        font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.MEDIUM};
      }
    }
  }
  .errors {
    margin-top: 2px;
    padding-left: 16px;
    font-size: ${({ theme }) => theme.FONTS.SIZES.S12};
    font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.REGULAR};
    color: ${({ theme }) => theme.COLORS.RED_1};
  }
  a {
    color: ${({ theme }) => theme.COLORS.GREEN_1};
    font-size: ${({ theme }) => theme.FONTS.SIZES.S14};
    font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.MEDIUM};
  }
`;
