import { up } from 'styled-breakpoints';
import styled, { css } from 'styled-components';
import { ColType } from './types';

export const GridWrapper = styled.div<{ cols: ColType; centered?: boolean }>`
    display: grid;
    grid-template-columns: repeat(${({ cols }) => cols.default}, minmax(0, 1fr));
    grid-template-rows: auto;
    grid-gap: 40px 20px;

    ${up('md')} {
        grid-template-columns: repeat(${({ cols }) => cols.md}, minmax(0, 1fr));
    }

    ${up('lg')} {
        grid-template-columns: repeat(${({ cols }) => cols.lg}, minmax(0, 1fr));
    }

    ${up('xl')} {
        grid-template-columns: repeat(${({ cols }) => cols.xl}, minmax(0, 1fr));

        ${({ centered, cols }) =>
            centered &&
            css`
                *:nth-child(1) {
                    justify-self: flex-end;
                }

                *:nth-child(${cols.xl > 2 ? 2 : 0}) {
                    justify-self: center;
                }
            `}
    }

    @media print {
        grid-template-columns: repeat(${({ cols }) => cols.lg}, minmax(0, 1fr));
        margin-left: 0;
        margin-right: 0;
    }
`;
