/**
 * 남은 군 복무 D-Day Badge Image를 만들어주는 함수입니다.
 * @param leftDate 남은 군 복무 기간을 인자로 받습니다.
 * @returns SVG String
 */
export function createBadge(leftDate: number): string {
	return `<img alt="soldier" src="https://img.shields.io/badge/R.O.K.A- D -- ${leftDate} - %23097a27"/>`;
}

