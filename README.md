/ -> All coins
/:id -> /btc -> Coin Detail

/btc/information
/btc/chart

# 2022-02-21 
### Coin List, image API 이용해서 불러오기, 페이징 처리 파리미터 오류 예외처리 완료
### (추가) => Coin 상세 Data, Price 불러오기 완료
### (추가) => TypeScript 이용하여 받아오는 코인 데이터 Type 완료 + 개발환경 추가 셋팅(TypeScript Interface)

# 2022-02-22
### Nested Routes 기본 완료 -> Coin부분에 path마지막부분에 명시적으로 /* 추가하여 route내부에서 nested route가 render될수 있음을 추가적으로 표기
### 자식 route를 element내부에서 작성
### Chart, Price탑 생성 및 링크로 연결완료, isActive props추가해서 선택 링크에따라 색상 체인지되도록 구현완료(accentColor)

# 2022-02-23
### Outlet 이용해서 상태 받아오려다 실패 .. 구글링해도 일단 자료가 많이 없어서 일반 상태넘김으로 구현하고 추후에 수정해야함(아직 수정x)
