import axios from 'axios';

/**
 * 남은 군 복무 D-Day Badge Image를 만들어주는 함수입니다.
 * @param leftDate 남은 군 복무 기간을 인자로 받습니다.
 * @returns SVG String
 */
export async function createBadge(leftDate: number){
	let url =  `https://img.shields.io/badge/R.O.K.A- D -- ${leftDate} - %23097a27`;
	let svg = await downloadSvg(url)
	return svg.data;

}

function downloadSvg(url : string) {
		return axios.get(url);
}
