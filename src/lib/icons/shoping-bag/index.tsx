import { FC, SVGAttributes } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { DefaultSVG } from '../../default-svg/DefaultSVG';

export const ShopingBag: FC = ({
	stroke = 'ed708e',
	fill = 'fff',
	viewBox = '-2.4 -2.4 28.80 28.80',
	height = 24,
	width = 24,
	id,
}: Partial<SVGAttributes<any>>) => {
	const randomId = id || uuidv4();
	return (
		<DefaultSVG
			viewBox={viewBox}
			height={`${Number(height)}px`}
			width={`${Number(width)}px`}
			fill={`#${fill}`}>
			<g
				id={`${randomId}_bgCarrier`}
				stroke-width='0'></g>
			<g
				id={`${randomId}_tracerCarrier`}
				stroke-linecap='round'
				stroke-linejoin='round'
				stroke={`#${stroke}`}
				stroke-width='0.048'></g>
			<g id={`${randomId}_iconCarrier'`}>
				{' '}
				<path
					d='M9 11V6C9 4.34315 10.3431 3 12 3C13.6569 3 15 4.34315 15 6V10.9673M10.4 21H13.6C15.8402 21 16.9603 21 17.816 20.564C18.5686 20.1805 19.1805 19.5686 19.564 18.816C20 17.9603 20 16.8402 20 14.6V12.2C20 11.0799 20 10.5198 19.782 10.092C19.5903 9.71569 19.2843 9.40973 18.908 9.21799C18.4802 9 17.9201 9 16.8 9H7.2C6.0799 9 5.51984 9 5.09202 9.21799C4.71569 9.40973 4.40973 9.71569 4.21799 10.092C4 10.5198 4 11.0799 4 12.2V14.6C4 16.8402 4 17.9603 4.43597 18.816C4.81947 19.5686 5.43139 20.1805 6.18404 20.564C7.03968 21 8.15979 21 10.4 21Z'
					stroke={`#${stroke}`}
					stroke-width='2'
					stroke-linecap='round'
					stroke-linejoin='round'></path>{' '}
			</g>
		</DefaultSVG>
	);
};

<svg
	viewBox='-2.4 -2.4 28.80 28.80'
	fill='none'
	xmlns='http://www.w3.org/2000/svg'
	transform='rotate(0)'></svg>;
