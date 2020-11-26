# health-server

#### [가상호스트 셋팅](https://github.com/dlgustn555/health-server/issues/3)
※Host OS가 잠금화면 등등 시간이 오래 지난 후, GuestOS로 접근이 안되는 경우가 있음※<br/><br/>
이럴때 ipconfig로 네트워크 설정IP 확인을 해보면, IP가 변경되어있었음<br/>
VirtualBox의 호스트네트워크설정을 다시 변경해 줌

#### 방화벽해제
```
$ sudo systemctl stop firewalld
```

## Mongo DB

- database: health
  - diary: 운동 계획,실행 기록
    - todoDate: YYYY.MM.DD
    - modifyDate: YYYY.MM.DD.HH:MM:SS
    - program: 프로그램 (ex 가슴+삼두, 등+이두, 하체+어깨)
    - plan: 운동 계획
    - practice: 운동 실행
