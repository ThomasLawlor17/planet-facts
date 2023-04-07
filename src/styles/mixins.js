import { css } from "styled-components";


const mixins = {
    button: css`
    border: 1px solid rgba(216,216,216,0.2);
    background-clip: padding-box;
    -webkit-background-clip: padding-box;
    font-family: 'Spartan', sans-serif;
    font-weight: 700;
    font-size: 12px;
    line-height: 25px;
    letter-spacing: 2.57px;
    text-transform: uppercase;
    padding: 12px 0 11px 0;
    cursor: pointer;

    &::before {
        content: counter(item, decimal-leading-zero) ' ';
        counter-increment: item;
        opacity: 50%;
        margin: auto 28px;
    }
    &.active {
        background-color: var(--${props => props.planet});
        border-color: var(--${props => props.planet});
    }
    &:hover:not(.active) {
        background-color: rgba(216,216,216,0.2);
    }

    @media (max-width: 900px) {
        font-size: 9px;
        letter-spacing: 1.93px;

        &::before {
            margin: auto 14px auto 20px;
            
            @media (max-width: 500px) {
                margin: auto 10px;   
            }
        }
    }
    @media (max-width: 414px) {
        border: none;
        padding: 0;
        transform: translate(0,0);
        position: relative;

        &::before {
            content: none;
        }
        span.first {
            display: none;
        }
        &.active {
            background-color: transparent;

            &::after {
                background-color: var(--${props => props.planet});
            }
        }
        &:not(.active) {
            span {
                opacity: 50%;
            }
        }
        &:hover:not(.active) {
            background-color: transparent;

            &::after {
                background-color: var(--${props => props.planet});
            }
        }
        &::after {
            content: '';
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            height: 4px;
            background-color: transparent;
        }
    }
    `,
    flexCenter: css`
    display: flex;
    align-items: center;
    justify-content: center;
    `,
    flexBetween: css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    `,
    infoBox: css`
    display: flex;
    flex-direction: column;
    border: 1px solid rgba(216,216,216,0.2);
    background-clip: padding-box;
    -webkit-background-clip: padding-box;
    padding: 20px 0 27px 2.07%;
    span:first-of-type {
        font-family: 'Spartan', sans-serif;
        font-weight: 700;
        font-size: 11px;
        line-height: 25px;
        letter-spacing: 1px;
        text-transform: uppercase;
        color: #FFFFFF;
        mix-blend-mode: normal;
        opacity: 0.5;
    }
    span:last-of-type {
        font-family: 'Antonio';
        font-weight: 400;
        font-size: 40px;
        line-height: 52px;
        letter-spacing: -1.5px;
        text-transform: uppercase;
        color: #FFFFFF;
    }

    @media (max-width: 900px) {
        span:first-of-type {
            font-size: 8px;
            line-height: 16px;
            letter-spacing: 0.73px;
        }
        span:last-of-type {
            font-size: 24px;
            line-height: 31.05px;
            letter-spacing: -0.9px;
        }
    }
    @media (max-width: 505px) {
        span:last-of-type {
            font-size: 20px;
            line-height: 25.88px;
            letter-spacing: -0.75px;
        }
    }
    @media (max-width: 414px) {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 0 24px;
        height: 48px;
    }
    `,

}

export default mixins