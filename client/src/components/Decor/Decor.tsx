import { FC } from 'react';

import './Decor.scss';

interface IProps {
		name: string;
    bg_color: string;
    width: string;
}

const Decor: FC<IProps> = ({ name, bg_color, width }) => (

    <div className={name}>
        <span>
            <svg
                width={width}
                height='21'
                viewBox='0 0 49 21'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
            >
                <path
                    d='M24.267 0L21.8851 4.514L19.5801 9.028C21.232 12.1974 22.6919 14.9442 24.3246 18.056L29.0691 9.028L26.6296 4.514L24.267 0Z'
                    fill={bg_color}
                />
                <path
                    d='M48.4379 15.3863L48.2074 15.2518L47.9769 15.0981L47.7271 14.9637L47.4966 14.81L47.2469 14.6756L47.0164 14.5411L46.7859 14.4066L46.5362 14.2722L46.2865 14.1377L46.056 14.0225L45.8063 13.888L45.5566 13.7536L45.3261 13.6191L45.0764 13.5038L44.8267 13.3694L44.5769 13.2541L44.3272 13.1389L44.0775 13.0236L43.8278 12.8892L43.6934 12.8315L41.4844 17.6529L41.5804 17.6913L41.8109 17.7873L42.0222 17.9026L42.2527 18.0178L42.464 18.1139L42.6753 18.2291L42.9058 18.3444L43.1171 18.4596L43.3284 18.5557L43.5397 18.6709L43.7702 18.8054L43.9815 18.9206L44.1928 19.0359L44.4041 19.1511L44.6154 19.2664L44.8267 19.4009L45.038 19.5161L45.2492 19.6314L45.4605 19.7658L45.6718 19.9003L45.8639 20.0155L48.6299 15.5015L48.4379 15.3863Z'
                    fill={bg_color}
                />
                <path
                    d='M38.119 10.6799L37.8501 10.603L37.5812 10.5262L37.3123 10.4302L37.0434 10.3533L36.7744 10.2957L36.4863 10.2189L36.2174 10.142L35.9485 10.0652L35.6796 10.0076L35.3914 9.93074L35.1225 9.85391L34.8536 9.79628L34.5655 9.73865L34.2965 9.68103L34.0084 9.60419L33.7395 9.54657L33.4514 9.50815L33.1825 9.45053L33.0288 9.41211L32.0684 14.6176L32.1836 14.6368L32.4333 14.6945L32.683 14.7329L32.9135 14.7905L33.1632 14.8481L33.413 14.9057L33.6627 14.9634L33.8932 15.021L34.1429 15.0594L34.3926 15.1362L34.6231 15.1939L34.8728 15.2515L35.1225 15.3283L35.353 15.386L35.5835 15.4436L35.8332 15.5204L36.0637 15.5973L36.3134 15.6549L36.5439 15.7317L36.7937 15.8085L36.8897 15.847L38.484 10.7951L38.388 10.7759L38.119 10.6799Z'
                    fill={bg_color}
                />
                <path
                    d='M15.504 9.39274L15.2159 9.45037L14.9278 9.50799L14.6589 9.54641L14.3707 9.60404L14.1018 9.68087L13.8137 9.7385L13.5448 9.79612L13.2566 9.85375L12.9877 9.93058L12.7188 10.0074L12.4499 10.065L12.1617 10.1419L11.8928 10.2187L11.6239 10.2955L11.355 10.3532L11.0861 10.43L10.8172 10.526L10.529 10.6029L10.2793 10.6797L10.1641 10.7181L11.7584 15.77L11.8352 15.7316L12.0849 15.6547L12.3154 15.5971L12.5459 15.5203L12.7956 15.4434L13.0453 15.3858L13.2758 15.3282L13.5256 15.2513L13.7561 15.1937L14.0058 15.1361L14.2363 15.0593L14.486 15.0208L14.7357 14.9632L14.9854 14.9056L15.2159 14.848L15.4656 14.7903L15.7153 14.7327L15.965 14.6943L16.2147 14.6367L16.4452 14.5983L16.5797 14.579L15.6193 9.37354L15.504 9.39274Z'
                    fill={bg_color}
                />
                <path
                    d='M4.84055 12.7738L4.59084 12.889L4.34113 13.0235L4.09141 13.1387L3.8417 13.254L3.59199 13.3692L3.34228 13.5037L3.09257 13.6189L2.84286 13.7534L2.61236 13.8879L2.36265 14.0223L2.11294 14.1376L1.88243 14.272L1.63272 14.4065L1.40222 14.541L1.15251 14.6754L0.922009 14.8099L0.672298 14.9635L0.441796 15.098L0.211294 15.2517L0 15.3669L2.78524 19.8809L2.95811 19.7657L3.16941 19.6312L3.36149 19.516L3.57278 19.4007L3.78408 19.2662L3.99537 19.151L4.22587 19.0357L4.43717 18.9205L4.64846 18.8052L4.85976 18.6708L5.07105 18.5555L5.28234 18.4595L5.51284 18.3442L5.72414 18.229L5.93543 18.1137L6.16593 18.0177L6.37723 17.9024L6.60773 17.7872L6.81902 17.6911L7.04953 17.5951L7.16478 17.5375L4.9558 12.7354L4.84055 12.7738Z'
                    fill={bg_color}
                />
            </svg>

        </span>
    </div>
);

export { Decor };
