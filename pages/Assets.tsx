import Svg, { Defs, LinearGradient, Stop, Path, G, Circle } from "react-native-svg"

const background = require('../assets/base.webp')

export interface ImageProps {
	color?: string
	width?: number,
	height?: number,
}

const ICICB = ({ width, height, color }:ImageProps)=>(
	<Svg viewBox="0 0 512 512" width={width || 25} height={height || 25}>
		<Defs>
			<LinearGradient id="grd1" gradientUnits="userSpaceOnUse"  x1="-349.6" y1="241.2" x2="320.5" y2="-152">
				<Stop offset={0} stopColor={color || "#a18959"}  />
				<Stop offset={0.1} stopColor={color || "#eecf89"}  />
				<Stop offset={.3} stopColor={color || "#976224"}  />
				<Stop offset={.7} stopColor={color || "#efd58d"}  />
				<Stop offset={1} stopColor={color || "#81693e"}  />
			</LinearGradient>
		</Defs>
		<Path fill="url(#grd1)" d="m342.3 275.67c-18.6-11.93-57.13-29.48-115.58-52.66c-103.09-44.11-145.42-116.33-126.99-216.67c-3.55 86.79 43.96 149.78 142.54 188.97c53.4 19.26 94.98 40.23 124.74 62.9c31.53 19.13 38.8 51.37 21.79 96.71c3.01-33.2-12.49-59.62-46.5-79.25zm28.03-32.49c25.52-40.75 60.94-51.83 106.26-33.23c-19.59 5.73-33.43 23.74-41.54 54.01c-3.76 21.77-12.47 41.26-26.12 58.47c3.76-34.83-9.11-61.24-38.6-79.25zm-32.42 75.88c-12.59-8.49-38.22-20.32-76.91-35.47c-84.76-31.09-128.25-72.32-130.46-123.68c0.71 27.45 47.12 58.1 139.22 91.93c97.25 32.06 130.77 76.92 100.57 134.57c5.72-39.05-15.28-55.8-32.42-67.35zm-153.17-62.44c17.09 16.65 50.62 33.75 100.57 51.28c52.87 15.94 77.84 39.59 74.92 70.94c-18.33 102.03-151.04 97.24-156.62 97.24c-85.29-6.64-140.42 3.32-165.4 29.89c12.76-48.36 62.84-68.02 150.25-58.99c78.12 12.49 126.61-5.84 145.47-54.99c9.56-21.65-1.6-38-33.48-49.03c-32.15-8.84-56.9-18.49-74.27-28.95c-30.82-19.39-40.38-45.44-41.44-57.39zm-58.81 141.86c16.21-34.57 51.05-42.66 104.52-24.3c44.28 15.94 74.93 20.01 91.94 12.23c-9.97 18.85-44.27 20.44-102.88 4.78c-39.43-10.26-70.62-7.83-93.58 7.29zm-49.82 51.86c21.86-41.87 60.34-57.13 115.44-45.79c82.65 17.02 104.98 6.81 119.91 4.46c-20.26 23.5-60.5 30.66-120.72 21.47c-40.77-9.18-78.99-2.56-114.63 19.86z" />
	</Svg>
)

const ETH = ({ width, height, color }:ImageProps)=>(
	<Svg viewBox="0 0 128 128" width={width || 20} height={height || 20}>
		<Path fill={color || "#1ea199"} d="M64.19 0.69L64.19 0.76C64.25 1.07 64.25 1.45 64.25 1.83L64.25 47.29C64.19 47.54 64 47.61 63.81 47.73C62.48 48.36 61.23 48.93 59.9 49.49C58.07 50.31 56.18 51.2 54.35 52.02L47.73 55.05C45.91 55.86 44.07 56.68 42.31 57.5C40.17 58.52 37.95 59.46 35.81 60.47C33.99 61.29 32.16 62.17 30.26 62.99C28.75 63.68 27.24 64.32 25.79 65.01C25.67 65.08 25.54 65.12 25.41 65.14C25.35 65.14 25.35 65.14 25.28 65.07L26.99 62.23C30.26 56.81 33.48 51.45 36.76 46.03C40.23 40.23 43.76 34.43 47.23 28.63C50.44 23.27 53.72 17.91 56.94 12.55C59.27 8.64 61.67 4.73 64 0.82C64.06 0.69 64.13 0.63 64.13 0.51L64.19 0.51C64.13 0.57 64.19 0.63 64.19 0.69ZM102.91 65.08L102.97 65.14L93.7 70.62L64.57 87.83C64.44 87.89 64.31 87.96 64.25 88.02C64.06 88.02 64.06 87.83 64.06 87.77L64.06 48.25C64.06 48.05 64.06 47.8 64.13 47.61C64.19 47.35 64.38 47.42 64.57 47.48C65.39 47.86 66.27 48.24 67.09 48.62C69.55 49.76 72.01 50.89 74.47 51.96C76.62 52.91 78.69 53.92 80.83 54.86C82.98 55.81 85.13 56.82 87.27 57.76C89.09 58.58 90.99 59.46 92.82 60.28C94.64 61.1 96.54 61.99 98.37 62.81C99.81 63.44 101.26 64.13 102.72 64.76C102.72 64.95 102.78 65.01 102.91 65.08ZM64.19 127.18C64.19 127.24 64.13 127.31 64.13 127.37L64.06 127.37C64.06 127.24 63.94 127.18 63.87 127.05C59.97 121.57 56.05 116.02 52.15 110.54L40.17 93.64C36.32 88.21 32.41 82.73 28.56 77.31C27.56 75.85 26.55 74.47 25.54 73.02C25.47 72.89 25.41 72.83 25.28 72.64C25.47 72.64 25.6 72.77 25.66 72.83C31.15 76.04 36.57 79.26 42.06 82.47C48.36 86.2 54.6 89.92 60.91 93.63L64.13 95.53C64.25 95.65 64.25 95.78 64.25 95.91L64.25 126.3C64.25 126.61 64.25 126.93 64.19 127.18ZM25.35 65.08L25.61 65.08L25.61 65.33L25.09 65.33L25.09 65.08L25.35 65.08ZM64.38 1.08C64.13 1.08 64.13 0.82 64.13 0.56L64.38 0.56L64.38 1.08ZM25.22 65.2L25.22 65.14C27.24 64.25 29.19 63.31 31.21 62.42C33.8 61.23 36.38 60.09 38.97 58.89C40.92 58.01 42.94 57.06 44.89 56.18C47.8 54.86 50.63 53.6 53.53 52.27C55.49 51.39 57.44 50.51 59.46 49.56C60.85 48.93 62.3 48.3 63.68 47.67C63.81 47.61 64 47.54 64.06 47.42C64.13 47.42 64.13 47.48 64.06 47.54L64.06 87.58C64.06 87.77 64 87.96 64.13 88.08C64 88.27 63.87 88.08 63.81 88.02C63.23 87.71 62.66 87.37 62.11 87.01C49.94 79.83 37.71 72.58 25.54 65.39C25.44 65.31 25.33 65.25 25.22 65.2ZM102.78 72.64L102.84 72.64C102.84 72.77 102.72 72.89 102.65 73.02C91.05 89.35 79.45 105.74 67.85 122.07C66.65 123.78 65.39 125.48 64.19 127.18C64.13 127.12 64.13 127.05 64.13 126.99L64.13 95.47C66.78 93.89 69.36 92.38 72.01 90.8C82.22 84.75 92.44 78.76 102.59 72.7C102.65 72.77 102.72 72.7 102.78 72.64ZM64.13 47.54L64.13 1.26C64.13 1.07 64.06 0.95 64.19 0.75C76.99 22.01 89.79 43.19 102.53 64.45C102.65 64.63 102.84 64.88 102.91 65.14C102.02 64.82 101.2 64.38 100.38 64C99.37 63.56 98.3 63.05 97.29 62.62C96.66 62.3 95.97 62.04 95.34 61.73C94.26 61.23 93.19 60.78 92.12 60.28C91.48 60.01 90.85 59.72 90.23 59.4L86.07 57.5C85.38 57.19 84.68 56.87 83.93 56.56L80.9 55.23C80.27 54.98 79.64 54.67 79.01 54.35L74.84 52.46C74.15 52.15 73.46 51.83 72.7 51.52L69.67 50.19C68.98 49.87 68.35 49.56 67.66 49.24C66.46 48.68 65.26 48.11 64 47.61C64.19 47.54 64.13 47.54 64.13 47.54Z" />
	</Svg>
)
const USDT = ({ width, height, color }:ImageProps)=>(
	<Svg viewBox="0 0 128 128" width={width || 20} height={height || 20}>
		<Path fill={color || "#36f22c"} d="M76.9764 46.5751V64.1679C76.6824 64.1679 75.472 64.2398 73.3453 64.3837C71.2185 64.5275 68.2504 64.5995 64.441 64.5995C61.0694 64.5995 58.2108 64.5275 55.8651 64.3837C53.5194 64.2398 51.9807 64.1679 51.2488 64.1679V46.5751C38.3443 47.1631 27.5698 48.483 18.9251 50.5347C10.2804 52.5864 5.95494 54.9321 5.94869 57.5718C5.94243 60.2115 10.2304 62.5572 18.8125 64.6089C27.3946 66.6606 38.1348 67.9053 51.033 68.3432C51.915 68.3432 53.4537 68.4151 55.6493 68.559C57.8449 68.7029 60.6316 68.7748 64.0094 68.7748C68.2629 68.7748 71.4155 68.7029 73.4672 68.559C75.5189 68.4151 76.6918 68.3432 76.9858 68.3432C89.8903 67.9053 100.63 66.6606 109.206 64.6089C117.782 62.5572 122.07 60.2115 122.07 57.5718C122.07 54.9321 117.782 52.5864 109.206 50.5347C100.63 48.483 89.8903 47.1631 76.9858 46.5751H76.9764ZM76.9764 72.9595V123.317H51.0236V72.9595C36.3614 72.2277 24.192 70.5794 14.5152 68.0148C4.83839 65.4502 0 62.407 0 58.8854C0 55.3637 4.83839 52.3205 14.5152 49.7559C24.192 47.1913 36.3614 45.543 51.0236 44.8112V28.973H15.1814V5H112.819V28.973H76.9764V44.8112C91.6386 45.543 103.808 47.1913 113.485 49.7559C123.162 52.3205 128 55.3637 128 58.8854C128 62.407 123.162 65.4502 113.485 68.0148C103.808 70.5794 91.6386 72.2277 76.9764 72.9595Z"/>
	</Svg>
)

const BNB = ({ width, height, color }:ImageProps)=>(
	<Svg viewBox="0 0 128 128" width={width || 20} height={height || 20}>
		<Path fill={color || "#f1e601"} d="M25.37 40.42L64.21 1.58L103.06 40.43L88.77 54.71L64.21 30.15L39.66 54.7L25.37 40.42ZM1 64.79L15.29 50.5L29.57 64.79L15.29 79.08L1 64.79ZM64.21 99.43L88.77 74.87L103.06 89.14L64.21 128L25.37 89.16L25.35 89.14L39.66 74.88L64.21 99.43ZM98.85 64.79L113.13 50.5L127.42 64.79L113.13 79.08L98.85 64.79ZM78.71 64.78L78.71 64.79L64.21 79.29L49.73 64.82L49.7 64.79L49.73 64.77L52.26 62.23L53.5 61L64.21 50.29L78.7 64.78L78.7 64.78L78.71 64.78Z" />
	</Svg>
)
const BTC = ({ width, height, color }:ImageProps)=>(
	<Svg viewBox="0 0 128 128" width={width || 20} height={height || 20}>
		<Path fill={color || "#de5e07"} d="M112.451 51.4592C114.465 38.0105 104.219 30.7793 90.2181 25.9542L94.7608 7.73172L83.6734 4.97268L79.2461 22.7139C76.3331 21.9825 73.343 21.3023 70.3594 20.6222L74.8188 2.76545L63.7313 0L59.1885 18.216C56.776 17.6642 54.4019 17.1253 52.1049 16.5478L52.1177 16.49L36.8211 12.6723L33.8696 24.5169C33.8696 24.5169 42.1018 26.4033 41.9285 26.5188C46.42 27.6417 47.2284 30.6125 47.0937 32.9737L41.9221 53.7306C42.2301 53.8076 42.6279 53.9231 43.0771 54.0963L41.9029 53.8076L34.6524 82.8866C34.1006 84.2468 32.7082 86.2936 29.5642 85.5173C29.6797 85.6777 21.5052 83.5089 21.5052 83.5089L16 96.2005L30.4368 99.8001C33.1189 100.474 35.7496 101.18 38.3354 101.84L33.7477 120.268L44.8287 123.027L49.3715 104.805C52.4 105.62 55.3387 106.377 58.2133 107.095L53.6833 125.241L64.7708 128L69.3585 109.611C88.2739 113.191 102.493 111.747 108.479 94.6413C113.304 80.8718 108.242 72.922 98.2899 67.744C105.54 66.0757 110.994 61.3083 112.451 51.4592V51.4592ZM87.1061 86.993C83.6862 100.769 60.4911 93.3196 52.9711 91.4524L59.0666 67.0381C66.5866 68.9181 90.6929 72.6332 87.1061 86.993ZM90.5389 51.2603C87.4141 63.7915 68.1137 57.42 61.8577 55.8608L67.3758 33.7244C73.6318 35.2836 93.7984 38.1902 90.5389 51.2603Z" />
	</Svg>
)

const LTC = ({ width, height, color }:ImageProps)=>(
	<Svg viewBox="0 0 128 128" width={width || 20} height={height || 20}>
		<Path fill={color || "#206eff"} d="M56.5197 102.84L64.8346 71.5315L84.5158 64.343L89.4106 45.9418L89.2467 45.4861L69.8726 52.567L83.8298 0H44.2368L25.984 68.5978L10.7418 74.1683L5.70367 93.1328L20.9357 87.5725L10.1734 128H115.543L122.301 102.84H56.5146"/>
	</Svg>
)

const BTC2 = ({ width, height} : ImageProps)=>(
	<Svg  viewBox="0 0 32 32" width = {width || 25} height = {height || 25}><G fill="none" fillRule="evenodd"><Circle cx="16" cy="16" r="16" fill="#F7931A"/><Path fill="black" fillRule="nonzero" d="M23.189 14.02c.314-2.096-1.283-3.223-3.465-3.975l.708-2.84-1.728-.43-.69 2.765c-.454-.114-.92-.22-1.385-.326l.695-2.783L15.596 6l-.708 2.839c-.376-.086-.746-.17-1.104-.26l.002-.009-2.384-.595-.46 1.846s1.283.294 1.256.312c.7.175.826.638.805 1.006l-.806 3.235c.048.012.11.03.18.057l-.183-.045-1.13 4.532c-.086.212-.303.531-.793.41.018.025-1.256-.313-1.256-.313l-.858 1.978 2.25.561c.418.105.828.215 1.231.318l-.715 2.872 1.727.43.708-2.84c.472.127.93.245 1.378.357l-.706 2.828 1.728.43.715-2.866c2.948.558 5.164.333 6.097-2.333.752-2.146-.037-3.385-1.588-4.192 1.13-.26 1.98-1.003 2.207-2.538zm-3.95 5.538c-.533 2.147-4.148.986-5.32.695l.95-3.805c1.172.293 4.929.872 4.37 3.11zm.535-5.569c-.487 1.953-3.495.96-4.47.717l.86-3.45c.975.243 4.118.696 3.61 2.733z"/></G></Svg>
)

const ETH2 = ({ width, height} : ImageProps)=>(
	<Svg  viewBox="0 0 32 32" width = {width || 25} height = {height || 25}><G ><Circle cx="16" cy="16" r="16" fill="#627EEA"/><G fill="black" ><Path fillOpacity=".602" d="M16.498 4v8.87l7.497 3.35z"/><Path d="M16.498 4L9 16.22l7.498-3.35z"/><Path fillOpacity=".602" d="M16.498 21.968v6.027L24 17.616z"/><Path d="M16.498 27.995v-6.028L9 17.616z"/><Path fillOpacity=".2" d="M16.498 20.573l7.497-4.353-7.497-3.348z"/><Path fillOpacity=".602" d="M9 16.22l7.498 4.353v-7.701z"/></G></G></Svg>
)
const USDT2 = ({ width, height} : ImageProps)=>(
	<Svg  viewBox="0 0 32 32" width = {width || 25} height = {height || 25}><G fill="none" fillRule="evenodd"><Circle cx="16" cy="16" r="16" fill="#26A17B"/><Path fill="black" d="M17.922 17.383v-.002c-.11.008-.677.042-1.942.042-1.01 0-1.721-.03-1.971-.042v.003c-3.888-.171-6.79-.848-6.79-1.658 0-.809 2.902-1.486 6.79-1.66v2.644c.254.018.982.061 1.988.061 1.207 0 1.812-.05 1.925-.06v-2.643c3.88.173 6.775.85 6.775 1.658 0 .81-2.895 1.485-6.775 1.657m0-3.59v-2.366h5.414V7.819H8.595v3.608h5.414v2.365c-4.4.202-7.709 1.074-7.709 2.118 0 1.044 3.309 1.915 7.709 2.118v7.582h3.913v-7.584c4.393-.202 7.694-1.073 7.694-2.116 0-1.043-3.301-1.914-7.694-2.117"/></G></Svg>
)

const BNB2 = ({ width, height} : ImageProps)=>(
	<Svg  viewBox="0 0 32 32" width = {width || 25} height = {height || 25}><G fill="none"><Circle cx="16" cy="16" r="16" fill="#F3BA2F"/><Path fill="black" d="M12.116 14.404L16 10.52l3.886 3.886 2.26-2.26L16 6l-6.144 6.144 2.26 2.26zM6 16l2.26-2.26L10.52 16l-2.26 2.26L6 16zm6.116 1.596L16 21.48l3.886-3.886 2.26 2.259L16 26l-6.144-6.144-.003-.003 2.263-2.257zM21.48 16l2.26-2.26L26 16l-2.26 2.26L21.48 16zm-3.188-.002h.002V16L16 18.294l-2.291-2.29-.004-.004.004-.003.401-.402.195-.195L16 13.706l2.293 2.293z"/></G></Svg>
)

const LTC2 = ({ width, height} : ImageProps)=>(
	<Svg width={width || 24} height={height || 24} viewBox="0.847 0.876 329.256 329.256"><Path d="M330.102 165.503c0 90.922-73.705 164.629-164.626 164.629C74.554 330.132.848 256.425.848 165.503.848 74.582 74.554.876 165.476.876c90.92 0 164.626 73.706 164.626 164.627" fill="#bebebe"/><Path d="M295.15 165.505c0 71.613-58.057 129.675-129.674 129.675-71.616 0-129.677-58.062-129.677-129.675 0-71.619 58.061-129.677 129.677-129.677 71.618 0 129.674 58.057 129.674 129.677" fill="#bebebe"/><Path d="M155.854 209.482l10.693-40.264 25.316-9.249 6.297-23.663-.215-.587-24.92 9.104 17.955-67.608h-50.921l-23.481 88.23-19.605 7.162-6.478 24.395 19.59-7.156-13.839 51.998h135.521l8.688-32.362h-84.601" fill="black"/></Svg>
)
const dashboard = ({ width, height, color }:ImageProps)=>(
	<Svg viewBox="0 0 128 128" width={width || 20} height={height || 20}>
		<Path fill={color || "currentColor"} d="M7.5,0h107.9c4.1,0,7.5,3.4,7.5,7.5v70.6c0,4.1-3.4,7.5-7.5,7.5H7.5c-4.1,0-7.5-3.4-7.5-7.5V7.5 C0,3.4,3.4,0,7.5,0L7.5,0z M69.9,63.3h28.5v4H69.9V63.3L69.9,63.3z M69.9,53.1H109v4H69.9V53.1L69.9,53.1z M92.1,35h5.6 c0.3,0,0.5,0.2,0.5,0.5v11c0,0.3-0.2,0.5-0.5,0.5h-5.6c-0.3,0-0.5-0.2-0.5-0.5v-11C91.6,35.3,91.8,35,92.1,35L92.1,35L92.1,35z M70.5,28.3h5.6c0.3,0,0.5,0.2,0.5,0.5v17.8c0,0.3-0.2,0.5-0.5,0.5h-5.6c-0.3,0-0.5-0.2-0.5-0.5V28.8 C69.9,28.5,70.2,28.3,70.5,28.3L70.5,28.3L70.5,28.3L70.5,28.3z M81.3,24.5h5.6c0.3,0,0.5,0.2,0.5,0.5v21.6c0,0.3-0.2,0.5-0.5,0.5 h-5.6c-0.3,0-0.5-0.2-0.5-0.5V25C80.8,24.7,81,24.5,81.3,24.5L81.3,24.5L81.3,24.5z M39.3,48.2l17,0.3c0,6.1-3,11.7-8,15.1 L39.3,48.2L39.3,48.2L39.3,48.2z M37.6,45.3l-0.2-19.8l0-1.3l1.3,0.1h0h0c1.6,0.1,3.2,0.4,4.7,0.8c1.5,0.4,2.9,1,4.3,1.7 c6.9,3.6,11.7,10.8,12.1,19l0.1,1.3l-1.3,0l-19.7-0.6l-1.1,0L37.6,45.3L37.6,45.3L37.6,45.3z M39.8,26.7L40,44.1l17.3,0.5 c-0.7-6.8-4.9-12.7-10.7-15.8c-1.2-0.6-2.5-1.1-3.8-1.5C41.7,27.1,40.8,26.9,39.8,26.7L39.8,26.7L39.8,26.7z M35.9,47.2L45.6,64 c-3,1.7-6.3,2.6-9.7,2.6c-10.7,0-19.4-8.7-19.4-19.4c0-10.4,8.2-19,18.6-19.4L35.9,47.2L35.9,47.2L35.9,47.2z M115.6,14.1H7.2v64.4 h108.4V14.1L115.6,14.1L115.6,14.1z"/>
	</Svg>
)


const graph = ({ width, height, color }:ImageProps)=>(
	<Svg viewBox="0 0 24 24" width={width || 20} height={height || 20} > 
		<Path fill={color || "currentColor"} d="M5 19h-4v-4h4v4zm6 0h-4v-8h4v8zm6 0h-4v-13h4v13zm6 0h-4v-19h4v19zm1 2h-24v2h24v-2z"/>
	</Svg>
)

const exchange = ({ width, height, color }:ImageProps)=>(
	<Svg viewBox="0 0 24 24" width={width || 20} height={height || 20} > 
		<Path fill={color || "currentColor"} d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm2.085 14h-9v2h9v3l5-4-5-4v3zm-4-6v-3l-5 4 5 4v-3h9v-2h-9z"/>
	</Svg> 
)

const list = ({ width, height, color }:ImageProps)=>(
	<Svg viewBox="0 0 24 24" width={width || 20} height={height || 20} > 
		<Path fill={color || "currentColor"} 
		d="M6 6h-6v-6h6v6zm9-6h-6v6h6v-6zm9 0h-6v6h6v-6zm-18 9h-6v6h6v-6zm9 0h-6v6h6v-6zm9 0h-6v6h6v-6zm-18 9h-6v6h6v-6zm9 0h-6v6h6v-6zm9 0h-6v6h6v-6z"/>
	</Svg>
)

const voucher = ({ width, height, color }:ImageProps)=>(
	<Svg width = {width} height = {width} viewBox="0 0 512 512">
		<Path fill={color || "currentColor"}  d="m480.7,116.8h-157.2v-85.4c0-11.3-9.1-20.4-20.4-20.4h-173.3c-11.3,0-20.4,9.1-20.4,20.4v85.3h-77.9c-11.3,0-20.4,9.1-20.4,20.4v343.4c0,11.3 9.1,20.4 20.4,20.4h449.2c11.3,0 20.4-9.1 20.4-20.4v-343.3c5.68434e-14-11.3-9.2-20.4-20.4-20.4zm-330.5-65h132.4v157.2h-132.4v-157.2zm310,408.4h-408.3v-302.6h57.4v51.4h-4.3c-11.3,0-20.4,9.1-20.4,20.4 0,11.3 9.1,20.4 20.4,20.4h222.8c11.3,0 20.4-9.1 20.4-20.4 0-11.3-9.1-20.4-20.4-20.4h-4.3v-51.4h136.8v302.6z"/>
		<Path fill={color || "currentColor"} d="m392.9,418.8c11.3,0 20.4-9.1 20.4-20.4v-89.5c0-11.3-9.1-20.4-20.4-20.4-11.3,0-20.4,9.1-20.4,20.4v89.5c0,11.3 9.1,20.4 20.4,20.4z"/>
		<Circle  fill={color || "currentColor"} cx="147.2" cy="308.1" r="19.7"/>
		<Circle fill={color || "currentColor"} cx="285.6" cy="308.1" r="19.7"/>
		<Circle fill={color || "currentColor"} cx="147.2" cy="399.2" r="19.7"/>
		<Circle fill={color || "currentColor"} cx="285.6" cy="399.2" r="19.7"/>
	</Svg>
)

const setting = ({ width, height, color }:ImageProps)=>(
	<Svg viewBox="0 0 24 24" width={width || 20} height={height || 20} > 
		<Path fill={color || "currentColor"} 
	d="M24 13.616v-3.232c-1.651-.587-2.694-.752-3.219-2.019v-.001c-.527-1.271.1-2.134.847-3.707l-2.285-2.285c-1.561.742-2.433 1.375-3.707.847h-.001c-1.269-.526-1.435-1.576-2.019-3.219h-3.232c-.582 1.635-.749 2.692-2.019 3.219h-.001c-1.271.528-2.132-.098-3.707-.847l-2.285 2.285c.745 1.568 1.375 2.434.847 3.707-.527 1.271-1.584 1.438-3.219 2.02v3.232c1.632.58 2.692.749 3.219 2.019.53 1.282-.114 2.166-.847 3.707l2.285 2.286c1.562-.743 2.434-1.375 3.707-.847h.001c1.27.526 1.436 1.579 2.019 3.219h3.232c.582-1.636.75-2.69 2.027-3.222h.001c1.262-.524 2.12.101 3.698.851l2.285-2.286c-.744-1.563-1.375-2.433-.848-3.706.527-1.271 1.588-1.44 3.221-2.021zm-12 2.384c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z"/>
	</Svg>
)
const support = ({ width, height, color }:ImageProps)=>(
	<Svg viewBox="0 0 24 24" width={width || 20} height={height || 20} > 
		<Path fill={color || "currentColor"} transform="rotate(45 12 12)" strokeWidth="2"  stroke="#000"
		d="M12,23 C18.0751322,23 23,18.0751322 23,12 C23,5.92486775 18.0751322,1 12,1 C5.92486775,1 1,5.92486775 1,12 C1,18.0751322 5.92486775,23 12,23 Z M15,23 L15,17 M9,23 L9,17 M15,7 L15,1 M9,7 L9,1 M12,18 C15.3137085,18 18,15.3137085 18,12 C18,8.6862915 15.3137085,6 12,6 C8.6862915,6 6,8.6862915 6,12 C6,15.3137085 8.6862915,18 12,18 Z M1,15 L7,15 M1,9 L7,9 M17,15 L23,15 M17,9 L23,9"/>
	</Svg>
)
 
const resetPassword = ({ width, height, color }:ImageProps)=>(
	<Svg viewBox="0 0 50 50" width={width || 20} height={height || 20} > 
		<G>
			<Path fill={color} d="M42,23H10c-2.2,0-4,1.8-4,4v19c0,2.2,1.8,4,4,4h32c2.2,0,4-1.8,4-4V27C46,24.8,44.2,23,42,23z M31,44.5
				c-1.5,1-3.2,1.5-5,1.5c-0.6,0-1.2-0.1-1.8-0.2c-2.4-0.5-4.4-1.8-5.7-3.8l3.3-2.2c0.7,1.1,1.9,1.9,3.2,2.1c1.3,0.3,2.6,0,3.8-0.8
				c2.3-1.5,2.9-4.7,1.4-6.9c-0.7-1.1-1.9-1.9-3.2-2.1c-1.3-0.3-2.6,0-3.8,0.8c-0.3,0.2-0.5,0.4-0.7,0.6L26,37h-9v-9l2.6,2.6
				c0.4-0.4,0.9-0.8,1.3-1.1c2-1.3,4.4-1.8,6.8-1.4c2.4,0.5,4.4,1.8,5.7,3.8C36.2,36.1,35.1,41.7,31,44.5z"/>
			<Path fill={color} d="M10,18.1v0.4C10,18.4,10,18.3,10,18.1C10,18.1,10,18.1,10,18.1z"/>
			<Path fill={color} d="M11,19h4c0.6,0,1-0.3,1-0.9V18c0-5.7,4.9-10.4,10.7-10C32,8.4,36,13,36,18.4v-0.3c0,0.6,0.4,0.9,1,0.9h4
				c0.6,0,1-0.3,1-0.9V18c0-9.1-7.6-16.4-16.8-16c-8.5,0.4-15,7.6-15.2,16.1C10.1,18.6,10.5,19,11,19z"/>
		</G>
	</Svg>

)

const multiArrow = ({ width, height, color }:ImageProps)=>(
		<Svg viewBox="0 0 24 24" width={width || 20} height={height || 20} > 
			<G transform="translate(-4 -6)">
				<Path fill={color} d="M22.091,16.681a1.97,1.97,0,0,0,.278-.732,1,1,0,0,0-.278-.679L16.574,9.538a2.116,2.116,0,0,1-.01-2.887l.028-.03a1.958,1.958,0,0,1,2.854-.008l8.267,8.613a1.077,1.077,0,0,1,.287.723,2.115,2.115,0,0,1-.287.775l-8.267,8.665a1.959,1.959,0,0,1-2.854-.012l-.028-.036a2.134,2.134,0,0,1,.01-2.9Z"/>
				<Path fill={color} d="M10.091,16.681a1.97,1.97,0,0,0,.278-.732,1,1,0,0,0-.278-.679L4.574,9.538a2.116,2.116,0,0,1-.01-2.887l.028-.03a1.958,1.958,0,0,1,2.854-.008l8.267,8.613a1.077,1.077,0,0,1,.287.723,2.115,2.115,0,0,1-.287.775L7.446,25.389a1.959,1.959,0,0,1-2.854-.012l-.028-.036a2.134,2.134,0,0,1,.01-2.9Z"/>
			</G>
		</Svg>
  
)

const resetPincode = ({ width, height, color }:ImageProps)=>(
	<Svg viewBox="0 0 24 24" width={width || 20} height={height || 20} > 
		<G fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" transform="matrix(0 1 1 0 2.5 2.5)"><Path d="m3.98652376 1.07807068c-2.38377179 1.38514556-3.98652376 3.96636605-3.98652376 6.92192932 0 4.418278 3.581722 8 8 8s8-3.581722 8-8-3.581722-8-8-8"/><Circle cx="8" cy="8" fill="currentColor" r="2"/><Path d="m4 1v4h-4" transform="matrix(1 0 0 -1 0 6)"/></G>
	</Svg> 
)
const logout = ({ width, height, color="white" }:ImageProps)=>(
	<Svg viewBox="0 0 38 38" width={width || 20} height={height || 20} > 
		<Path fill={color || "currentColor"} d="M34.282,22.296c0,8.504-6.918,15.423-15.422,15.423c-8.506,0-15.424-6.919-15.424-15.423c0-4.87,2.352-9.511,6.291-12.413
		c1.334-0.984,3.213-0.698,4.193,0.636c0.984,1.334,0.699,3.212-0.635,4.194c-2.447,1.803-3.85,4.566-3.85,7.583
		c0,5.196,4.227,9.423,9.424,9.423c5.194,0,9.422-4.227,9.422-9.423c0-3.017-1.401-5.78-3.851-7.583
		c-1.334-0.982-1.616-2.86-0.635-4.194c0.981-1.333,2.86-1.618,4.192-0.636C31.931,12.784,34.282,17.424,34.282,22.296z M18.86,24
		c1.654,0,3-1.344,3-3V3c0-1.657-1.346-3-3-3c-1.658,0-3,1.343-3,3v18C15.86,22.656,17.202,24,18.86,24z"/>
	</Svg>
)

const arrowTopRight = ({ width, height, color="white" }:ImageProps)=>(
	<Svg viewBox="0 0 38 38" width={width || 20} height={height || 20} > 
		<Path
		d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
		fill={color || "currentColor"}
		/>
 	 </Svg>
)

const arrowBottomRight = ({ width, height, color="white" }:ImageProps)=>(
	<Svg viewBox="0 0 38 38" width={width || 20} height={height || 20} > 
		<Path
		d="M3.64645 3.64644C3.45118 3.8417 3.45118 4.15828 3.64645 4.35354L10.2929 11L6 11C5.72386 11 5.5 11.2239 5.5 11.5C5.5 11.7761 5.72386 12 6 12L11.5 12C11.6326 12 11.7598 11.9473 11.8536 11.8536C11.9473 11.7598 12 11.6326 12 11.5L12 5.99999C12 5.72385 11.7761 5.49999 11.5 5.49999C11.2239 5.49999 11 5.72385 11 5.99999V10.2929L4.35355 3.64643C4.15829 3.45117 3.84171 3.45117 3.64645 3.64644Z"
		fill={color || "currentColor"}
		/>
 	 </Svg>
)
const pending = ({ width, height, color="white" }:ImageProps)=>(
	<Svg width={width || 20} height={height || 20}  viewBox="0 0 30 30"  fill="none">
		<Path d="M14.0367 10.0367H16.0367V16.0367H10.0367V14.0367H12.6225L7.29297 8.70713L8.70718 7.29291L14.0367 12.6225L14.0367 10.0367Z"  fill={color || "currentColor"} />
		<Path
			d="M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
			fill={color || "currentColor"}
		/>
	</Svg>
)

const deposit = ({ width, height, color="white" }:ImageProps)=>(
	<Svg width = {width || 20} height = {height || 20} viewBox="0 0 16 16"  fill={color || "currentColor"}>
		<Path d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
		<Path d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
  </Svg>
)
const copy = ({ width, height, color } : ImageProps)=>(
	<Svg viewBox="0 0 64 64" width = {width || 20} height = {height || 20}>
		<G>
			<Path fill = {color || "currentColor"}  d="M56.34 17.27C56.2654 17.1214 56.1712 16.9835 56.06 16.86L42.13 2.94C41.8438 2.66648 41.4658 2.50958 41.07 2.5H20.92C19.6159 2.50264 18.3661 3.02185 17.444 3.94395C16.5218 4.86606 16.0026 6.11595 16 7.42V10.62H12.42C11.1159 10.6226 9.86606 11.1418 8.94395 12.064C8.02185 12.9861 7.50264 14.2359 7.5 15.54V56.54C7.50264 57.8441 8.02185 59.0939 8.94395 60.016C9.86606 60.9382 11.1159 61.4574 12.42 61.46H43.08C44.3772 61.4574 45.6211 60.9437 46.542 60.0302C47.463 59.1168 47.9868 57.8771 48 56.58V53.38H51.58C52.8841 53.3774 54.1339 52.8582 55.056 51.936C55.9782 51.0139 56.4974 49.7641 56.5 48.46V17.93C56.4993 17.7005 56.4445 17.4744 56.34 17.27V17.27ZM42.57 7.62L51.38 16.42H42.57V7.62ZM45 56.62C45 57.1292 44.7977 57.6176 44.4376 57.9776C44.0776 58.3377 43.5892 58.54 43.08 58.54H12.42C11.9108 58.54 11.4224 58.3377 11.0624 57.9776C10.7023 57.6176 10.5 57.1292 10.5 56.62V15.62C10.5 15.1108 10.7023 14.6224 11.0624 14.2624C11.4224 13.9023 11.9108 13.7 12.42 13.7H16V48.46C16.0026 49.7641 16.5218 51.0139 17.444 51.936C18.3661 52.8582 19.6159 53.3774 20.92 53.38H45V56.62Z"/>
		</G>
	</Svg> 
) 

const arrowBottom = ({ width, height, color } : ImageProps)=>(
	<Svg viewBox="0 0 50 50" width = {width || 50} height = {height || 50}>
		<Path fill = {color || "currentColor"}   d="M25 42c-9.4 0-17-7.6-17-17S15.6 8 25 8s17 7.6 17 17-7.6 17-17 17zm0-32c-8.3 0-15 6.7-15 15s6.7 15 15 15 15-6.7 15-15-6.7-15-15-15z"/>
		<Path fill = {color || "currentColor"}   d="M25 34.4l-9.7-9.7 1.4-1.4 8.3 8.3 8.3-8.3 1.4 1.4z"/>
		<Path fill = {color || "currentColor"}   d="M24 16h2v17h-2z"/>
	</Svg>
) 

const arrowDown = ({ width, height, color } : ImageProps)=>(
	<Svg viewBox="0 0 960 960" width = {width || 20} height = {height || 20}>
			<Path fill = {color || "currentColor"}  d="M480,344.181L268.869,131.889c-15.756-15.859-41.3-15.859-57.054,0c-15.754,15.857-15.754,41.57,0,57.431l237.632,238.937
				c8.395,8.451,19.562,12.254,30.553,11.698c10.993,0.556,22.159-3.247,30.555-11.698l237.631-238.937
				c15.756-15.86,15.756-41.571,0-57.431s-41.299-15.859-57.051,0L480,344.181z"/>
	</Svg> 
) 

export default {
	background,
	ICICB,
	BTC,
	ETH,
	USDT,
	BNB,
	LTC,
	BTC2,
	ETH2,
	USDT2,
	BNB2,
	LTC2,
	dashboard,
	graph, 
	exchange, 
	list,
	setting,
	support,
	resetPassword,
	resetPincode,
	logout,
	voucher,
	arrowTopRight,
	arrowBottomRight,
	pending,
	deposit,
	copy,
	arrowBottom,
	multiArrow,
	arrowDown
}