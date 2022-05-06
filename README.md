# 군복무 D - Day 뱃지


## ‼ 도메인 만료로 URL이 변경되었습니다!!! (2022/05/02)- 도메인 재연장 완료
![soldierDate](https://soldierdate.herokuapp.com/?endDate=20211218)
![soldierDate](https://soldierdate.herokuapp.com/?division=navy&endDate=20211218)
![soldierDate](https://soldierdate.herokuapp.com/?division=airforce&endDate=20211218)
![soldierDate](https://soldierdate.herokuapp.com/?division=marine&endDate=20211218)



현재 군 복무 중인 개발자 분들을 위해 만들었습니다.  
일반 Github Badge와 동일한 방식을 가지고 있습니다.


## Usage

```markdown
![soldierDate](https://soldierdate.herokuapp.com/?endDate=YYYYMMDD&division=DIVISION)
```

> `YYYYMMDD`를 `전역일자`로 변경해주세요. ( 예시 : 20211218 )  
> `DIVISION` 군별 지정은 `Optional` 이며, 아래와 같은 Parameter를 가집니다. 

- army : 육군 **(default)**
- navy : 해군 
- marine : 해병대 
- airforce : 공군  



## Configuration & Setup

### Project Cloning

```sh
https://github.com/Resten1497/soldier_badge
cd soldier_badge
npm i
```

### Build

```sh
tsc
```

### Run

```sh
node dist/index.js # 서버 PORT 기본 값 = 3000
```

or

```sh
npm start # 서버 PORT 기본 값 = 3000
```
## Contribute  
<a href="https://github.com/Resten1497/soldier_badge/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=Resten1497/soldier_badge" />
</a>

Made with [contributors-img](https://contrib.rocks).

## Dependency
[Shield.io](https://shields.io/)


## Questions

* GitHub - [open issue](https://github.com/Resten1497/soldier_badge/issues)

## License
MIT
