import axios from 'axios';

/**
 * 남은 군 복무 D-Day Badge Image를 만들어주는 함수입니다.
 * @param leftDate 남은 군 복무 기간을 인자로 받습니다.
 * @returns SVG String
 */
export async function createBadge(division:string, leftDate: any){

	let armydivision = getDivisionName(division)
	let url = "";
	if(leftDate < 0){
		leftDate  = "전역";
		url =  `https://img.shields.io/badge/${armydivision['name']}- ${encodeURIComponent(leftDate)} -${armydivision['color']}`;
	}
	else if(leftDate == 0){
		leftDate = "Day";
		url =  `https://img.shields.io/badge/${armydivision['name']}- D -- ${encodeURIComponent(leftDate)} -${armydivision['color']}`;
	}
	else{
		url =  `https://img.shields.io/badge/${armydivision['name']}- D -- ${leftDate} -${armydivision['color']}`;
	}
	console.debug(url)
	let svg = await downloadSvg(url)
	return svg.data;

}


/**
 * URL 요청
 * @param 요청 url을 인자로 받습니다
 * @returns 요청 data
 */

function downloadSvg(url : string) {
		return axios.get(url);
}

/**
 * 군별 명칭 값을 리턴합니다.
 * @param 요청 url을 인자로 받습니다
 * @returns R.O.K.A 등의 이름을 리턴합니다.
 */
function getDivisionName(division:string):Object{
	const result = {name:"",color:""}
	switch(division){
		// 공군
		case "airforce":
			result.color= "45c4ff"
			result.name= "R.O.K.A.F"
			break;
		// 육군
		case "army":
			result.color= "097a27"
			result.name= "R.O.K.A"
			break;
		// 해병대
		case "marine":
			result.color= "ff1919"
			result.name= "R.O.K.M.C"
			break;

		// 해군
		case "navy":
			result.color= "005be3"
			result.name= "R.O.K.N"
			break;
		// 기본 값
		default: 
			result.color= "097a27"
			result.name= "R.O.K.A"
			break;
		
	}

	return result
}