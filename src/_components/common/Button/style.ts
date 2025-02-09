import { css } from 'styled-components'

export const buttonTypeOfState = {
  Outline: css`
      border: 1px solid var(--Border-Default, #D6DBE1);
      color: var(--Black-Default, #000);
  `,
  Fill: css`
      background: var(--Brand-Default, #007BFF);
      color: var(--White-Default, #FFF);
  `,
  Soft: css`
      background: var(--Brand-Secondary, #E6F2FF);
      color: var(--Brand-Default, #007BFF);
  `
}

export const buttonStatusOfState = {
  Default: css`
  `,
  Disabled: css`
      opacity: 0.5;
  `,
  Subtle: css``,
}

export const buttonSizeOfState = {
  Small: css`
      height: 38px;
      min-width: 60px;
      padding: 11px 16px;
      border-radius: 8px;
      font-size: 16px;
  `,
  Medium: css`
      height: 46px;
      padding: 14px 16px;
      border-radius: 12px;
      font-size: 18px;
  `,
  Large: css`
      border-radius: 12px;
      height: 54px;
      padding: 18px 16px;
      font-size: 18px;
  `,
}