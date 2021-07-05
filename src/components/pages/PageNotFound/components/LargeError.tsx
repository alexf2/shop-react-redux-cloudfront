import * as React from 'react';
import './LargeError.css';

interface LargeErrorProps {
    header: string;
    comment: string;
}

const D = 90;   // Диаметр круга
const R = D / 2;
const H = 13;   // Половина длины проекции крестика на оси X и Y

export class LargeError extends React.PureComponent<LargeErrorProps> {
    public render() {
        return (
            <div className='large-error__box'>
                <svg width={`${D}px`} height={`${D}px`}>
                    <g transform={`translate(${R},${R})`}>
                        <circle className='large-error__lines' cx='0' cy='0' r={`${R - 2}`} />
                        <path className='large-error__lines' d={`M-${H} -${H} L${H} ${H} M-${H} ${H} L${H} -${H}`} />
                    </g>
                </svg>
                <div className='large-error__header'>{this.props.header}</div>
                <div className='large-error__comment'>{this.props.comment}</div>
            </div>
        );
    }
    public static msg404 = 'Страница не найдена';   // Сообщение согласно утвержденному дизайну
}
