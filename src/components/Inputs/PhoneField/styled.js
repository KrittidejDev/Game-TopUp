import styled from "styled-components";

export const PhoneFieldStyled = styled.div`
  width: 100%;
  position: relative;
  .label {
    margin-bottom: 10px;
    color: ${({ theme }) => theme.COLORS.BLACK_2};
    font-size: ${({ theme }) => theme.FONTS.SIZES.S14};
    font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.MEDIUM};
  }
  input {
    text-align: center;
    border-radius: 4px;
    border: 1px solid
      ${({ theme, $isError }) =>
        $isError ? theme.COLORS.RED_1 : theme.COLORS.PINK_1};
    padding: 9.5px 12px;
    width: calc(100% - 26px);
    background: ${({ theme, disabled }) =>
      disabled ? theme.COLORS.GRAY_4 : theme.COLORS.BLACK_3};
    color: ${({ theme }) => theme.COLORS.WHITE_1};
    font-size: ${({ theme }) => theme.FONTS.SIZES.S14};
    font-family: inherit;
    font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.REGULAR};
    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_2};
    }
    &:focus {
    }
  }
  .errors {
    margin-top: 2px;
    padding-left: 16px;
    font-size: ${({ theme }) => theme.FONTS.SIZES.S12};
    font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.REGULAR};
    color: ${({ theme }) => theme.COLORS.RED_1};
  }

  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type="number"] {
    -moz-appearance: textfield;
  }

  &.theme_filter {
  }
`;
