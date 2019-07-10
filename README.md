# Git Pro
# GIt의 기초
## 1. Git 저장소 만들기
+ 기존 디렉토리를 Git 저장소로 만들기
	+ `$ cd /home/user/my_project` : 프로젝트의 디렉토리로 이동
	+ `$ git init` :  .git이라는 하위 디렉토리를 만든다.

	+ 파일관리
		+ add 명령으로 파일을 추가
		+ commit 명령으로 커밋
	```
	$ git add *.c
	$ git add  LICENSE
	$ git commit -m 'initial project version'
	```

+ 기존 저장소를 Clone하기
	+ `$ git clone <url>` : 저장소를 Clone한다.
	+ 추가 옵션으로 다른 디렉토리 이름으로 Clone할 수 있다.

## 2.  수정하고 저장소에 저장하기
+ 워킹 디렉토리의 파일은 Tracked(관리대상)와 Untracked(관리대상 아님)로 나뉨
+ Tracked 파일 : 이미 스냅샷에 포함돼 있던 파일. Git이 알고있는 파일.
	+ Unmodified : 수정하지 않음
	+ Modified : 수정함
	+ Staged : 커밋으로 저장소에 기록할 파일

+ Untracked 파일 : 워킹 디렉토리에 있는 파일 중 스냅샷에도 Staging Area에도 포함되지 않은 파일.

+ 파일의 상태 확인하기
	+ `$ git status`
	+ 현재 branch, 파일들의 상태에 대해서 알 수 있음
	
+ 파일을 새로 추적하기
	+ `$ git add <파일 또는 디렉토리의 경로>` : add 명령으로 파일을 새롭게 추적 가능
	+ 디렉토리의 경우 하위의 파일들까지 재귀적으로 추가
	+ 파일을 수정하고 commit을 실행한 다음 같은 파일을 수정하게되면 해당 파일은 staged 상태이면서 동시에 unstaged 상태로 확인된다.
	+ git add 명령을 실행한 후에 또 파일을 수정하면 다시 git add  명령을 통해서 최신 버전을 Staged 상태로 만들어야한다.
	
+ 파일 상태를 짤막하게 확인하기
	+ `$ git status -s` 또는 `$ git status --short`
	+ 왼쪽의 상태 정보에는 Staging Area의 상태와 Working Tree에서의 상태를 보여준다.
	+ A : 새로 생성한 파일
	+ M : 수정한 파일
	+ ?? : Untracked file
	
+ 파일 무시하기
	+ `.gitignore` 파일을 통해서 무시할 패턴을 작성하여 자동생성된 파일을 무시
		+ 아무것도 없는 라인이나 .'#'로 시작하는 라인은 무시한다.
		+ 표준 Glob 패턴을 사용한다. 이는 프로젝트 전체에 적용된다.
		+ 슬래시(/)로 시작하면 하위 디렉토리에 적용되지(Recursivity) 않는다.
		+ 디렉토리는 슬래시(/)를 끝에 사용하는 것으로 표현한다.
		+ 느낌표(!)로 시작하는 패턴의 파일은 무시하지 않는다.
		
+  Staged와 Unstaged 상태의 변경 내용을 보기
	+ `$ git diff` : 파일의 어떤 내용이 변경되었는지 확인
	+ --staged (--cached) : 저장소에 커밋한 것과 Staging Area에 있는 것을 비교
	
+ 변경사항 커밋하기
	+ `$ git commit`
	+ -m : 메시지를 인라인으로 첨부
	
+ Staging Area 생략하기
	+ `$ git commit -a` : Tracked 상태의 파일을 자동으로 Staging Area에 넣는다. (add 명령 생략)
	
+ 파일 삭제하기
	+ `$ git rm` : 파일을 삭제후 Staged 상태로 변경
	+ -f : 강제로 삭제
	+ --cached : Staging Area에서만 제거하고 워킹 디렉토리에 있는 파일은 지우지 않고 남겨둔다.

+ 파일 이름 변경하기
	+ `$ git mv`

	```
	$ mv README. md README
	$ git rm README.md
	$ git add README
	```
	+ 위의 둘은 같은 코드이다.

## 3. 커밋 히스토리 조회하기
+ `$ git log`
	+ 커밋 히스토리를 시간순으로 보여줌
	+ 각 커밋의 SHA-1 체크섬, 저자 이름, 저자 이메일, 커밋한 날짜, 커밋 메시지를 출력
	+ `-p, --patch` : 각 커밋의 diff 결과를 보여줌
	+ `-n` : 최근 n 개의 결과만 보여줌
	+ `--stat` : 히스토리의 통계 정보를 조회
	+ `--pretty=format : ` : 여러가지 형식을 통해 히스토리를 보여줌
	+ `--graph` : 브랜치와 머지 히스토리를 보여주는 아스키 그래프 출력
	
*** 저자(Author) : 원래 작업을 수행한 원작자***
*** 커미터(Committer) : 마지막으로 작업을 적용한 사람***

옵션 |설명
--|--
%H| 커밋 해시
%h|짧은 길이 커밋 해시
%T |트리 해시
%t|짧은 길이 트리 해시
%P|부모 해시
%p|짧은 길이 부모 해시
%an|저자 이름
%ae|저자 메일
%ad|저자 시각(형식은 --date=옵션 참고)
%ar|저자 상대적 시각
%cn|커미터 이름
%ce|커미터 메일
%cd|커미터 시각
%cr|커미터 상대적 시각
%s|요약

+ 조회를 제외한 조건

옵션 | 설명
--|--
-(n)|최근 n개의 커밋만 조회
--since,--after|명시한 날짜 이후의 커밋만 검색
--until,--before|명시한 날짜 이전의 커밋만 조회
--author|입력한 저자의 커밋만 보여준다
--committer|입력한 커미터의 커밋만 보여준다
--grep|커밋 메시지 안의 텍스트를 검색한다
-S|커밋 변경(추가/삭제) 내용 안의 텍스트를 검색한다.

## 4. 되돌리기
+ `$ git commit --amend` : Staging Area를 사용하여 커밋을 재작성

+ 파일 상태를 Unstage로 변경하기
+ ` $ git reset` 

## 5. 리모트 저장소 확인하기
+ 리모트 저장소 확인하기
	+ `$ git remote ` : 현재 프로젝트에 등록된 리모트 저장소를 확인
	+ 저장소를 clone하면 'origin'이라는 리모트 저장소가 자동으로 등록
	+ -v : 단축이름과 URL을 함께 볼 수 있음
	
+ 리모트 저장소 추가하기
	+ `$ git remote add <단축이름> <url>`
	
+ 리모트 저장소를 Pull하거나 Fetch하기
	+ `$ git fetch <remote>`
	
+ 리모트 저장소에 Push 하기
	+ `$ git push origin master`
	
+ 리모트 저장소 살펴보기
	+ `$ git remote show <리모트 저장소 이름>`
	
+ 리모트 저장소 이름을 바꾸거나 리모트 저장소를 삭제하기
	+ `$ git remote rename <이전 이름> <변경할 이름>`
	+ `$ git remote remove <리모트 저장소 이름>`
	
## 6. 태그
+ 태그 조회하기
	+ `$ git tag`
	+ -l, --list : 리스트 옵션
+ 태그 붙이기
	+ Annotated 태그(-a 옵션) : Git 데이터베이스에 태그를 만든 사람의 이름, 이메일과 태그를 만든 날짜, 그리고 태그 메시지도 같이 저장
	+ Lightweight 태그(-lw 옵션) : 파일에 커밋 체크섬을 저장
+ 태그 공유하기
	+ `git push origin <태그 이름>`
	+ --tags : 여러 태그를 한번에 push
+ 태그를 Checkout 하기

## 7. Git Alias
	+ `$ git config --global alias.<name> <명령>

# Git 브랜치
## 3.1 브랜치란 무엇인가.

# Docker
# 1. 시스템과 인프라 기초지식
* 시스템 기반 : 애플리케이션을 가동시키기 위해 필요한 하드웨어나 OS/미들웨어 등과 같은 인프라

### 1. 1 시스템 기반의 기초지식
##### 1. 시스템 기반의 구성요소
+ 기능요구사항(fucntional requirement)
	+ 시스템의 기능으로서 요구되는 사항
+ 비기능 요구사항(non-functional requirement)
	+ 시스템의 성능이나 신뢰성, 확장성, 운용성, 보안 등과 같은 요구사항
	+ 기능 요구사항 이외의 모든 요구사항
+ 하드웨어
	+ 시스템 기반을 구성하는 물리적인 요소
+ 네트워크
	+ 시스템 이용자가 원격지에서 액세스할 수 있도록 서버들을 연결하기 위한 요구사항
+ OS(운영체제)
	+ 하드웨어나 네트워크 장비를 제어하기 위한 기본 소프트웨어
	+ 하드웨어의 리소스나 프로세스 관리
	+ 클라이언트 OS : Windows/macOS 등
	+ 서버 OS : Windows Server, Unix, Linux 등
+ 미들웨어
	+ 서버 OS 상에서 서버가 특정 역할을 다하기 위한 기능을 갖고 있는 소프트웨어

##### 2. 클라우드와 온프레미스
+ 온프레미스(on-premises)
	+ 자사에서 데이터센터를 보유하고 시스템 구축부터 운용까지를 모두 수행하는 형태
	+ 초기 시스템 투자에 드는 비용 부담이 크며, 시스템 가동 후의 운용에 드는 비용도 시스템 이용량과 상관없이 일정 금액을 부담해야 함
+ 퍼블릭 클라우드(public cloud)
	+ 인터넷을 경유하여 불특정 다수에게 제공되는 클라우드 서비스
	+ Iaas/PaaS/SaaS
+ 프라이빗 클라우드(private cloud)
	+ 특정 기업 그룹에게만 제공되는 클라우드 서비스
	+ 이용자를 한정할 수 있어 보안을 확보하기 쉬우며 독자적인 기능이나 서비스 추가가 쉬움

##### 3. 클라우드가 적합한 케이스
+ 트래픽의 변동이 많은 시스템
	+ 직원용 시스템 : 이용자가 한정되어있어 트래픽 예상이 쉬움
	+ 고객용 시스템 : 정확한 트래픽을 예측하기 어려움
	+ 사이징(sizing) 트래픽 양에 따라 시스템 기반의 서버 사양이나 네트워크 대역을 설계
	+ **사이징이 어려운 시스템은 클라우드 시스템이 유용**
+ 재해 대책으로 해외에 백업을 구축하고 싶은 시스템
+ 서비스를 빨리 제공하고 싶은 시스템

##### 4. 온프레미스가 적합한 케이스
+ 높은 가용성이 요구되는 시스템
+ 기밀성이 높은 데이터를 다루는 시스템
+ 특수한 요구사항이 있는 시스템

##### 5. 시스템 기반의 구축/운용 흐름
**시스템화 계획 요구사항 정의 -> 인프라 설계 -> 인프라 구축 -> 운용**
+ Docker : 시스템 구축이나 시스템 운용에 있어서 지금까지 사람의 손으로 해왔던 작업을 자동화하고, 테스트가 끝난 안전한 애플리케이션을 지속적으로 제공할 수 있는 플랫폼.
+ 운용 단계
	+ 서버 프로세스, 네트워크, 리소스, 배치 Job 모니터링
	+ 데이터 백업 및 정기 유지보수
	+ OS, 미들웨어 버전 업그레이드
	+ 애플리케이션 버전 업그레이드
	+ 시스템 장애 시 대응
	+ 사용자 서포트(헬프 데스크)

# 
### 1. 2 하드웨어와 네트워크 기초 지식
##### 1. 서버장비
+ CPU
+ 메모리
+ 스토리지

##### 2. 네트워크주소
+ MAC 주소(물리 주소/이더넷 주소)
	+ 네트워크 부품에 물리적으로 할당되는 고유한 48비트 주소
+ IP 주소
	+ 네트워크에 연결된 컴퓨터나 네트워크장비에 할당되는 식별번호

##### 3. OSI 참조 모델과 통신 프로토콜
+ 응용 계층(레이어 7)
	+ 웹의 HTTP나 SMTP등과 같은 애플리케이션에 특화된 프로토콜을 규정
+ 표현 계층(레이어 6)
	+ 데이터의 저장 형식이나 압축, 문자 인코딩과 같은 데이터의 표현 형식을 규정
+ 세션 계층(레이어 5)
	+ 커넥션 확립 타이밍이나 데이터 전송타이밍을 규정
+ 표현 계층(레이어 4)
	+ 데이터 전송을 제어하는 계층. 전송 오류의 검출이나 재전송을 규정
	+ TCP, UDP
+ 전송 계층(레이어 3)
	+ 서로 다른 네트워크 간의 통신을 하기 위한 규정
+ 데이터 링크 계층(레이어 2)
	+ 동일한 네트워크 안에 있는 노드 간의 통신을 규정
	+ MAC 주소로 데이터를 전송
+ 물리 계층(레이어 1)
	+ 통신장비의 물리적 및 전기적 특성을 규정

##### 4. 방화벽
+ 패킷 필터형
	+ 통과하는 패킷을 포트번호나 IP 주소를 바탕으로 필터링
	+ ACL(Access Control List)
+ 애플리케이션 게이트웨이 형
	+ 패킷이 아니라 애플리케이션 프로토콜 레벨에서 통신을 대체 제어
	+ 프록시 서버

##### 5. 라우터/레이어 3 스위치
- 라우터 : 2개 이상의 서로 다른 네트워크 간을 중계하기 위한 통신장비
- 정적 경로, 동적 경로

# 
### 1.3 OS(Linux) 기초 지식
##### 1. Linux
+ 보안에 뛰어나며 안정적으로 작동
+ 오픈소스
+ 리눅스 커널 : OS의 코어가 되는 부분으로 메모리 관리, 파일 시스템, 프로세스 관리, 디바이스 제어 등 하드웨어나 애플리케이션 소프트 웨어를 제어하기 위한 기본적 기능을 갖고있는 소프트웨어

##### 2. Linux 커널
+ 디바이스 관리
+ 프로세스 관리
+ 메모리 관리

##### 3. Linux 파일시스템
+ Linux에서 하드디스크나 USB 메모리와 같은 데이터에 액세스하기 위한 장치
+ ext2, ext3, ext4, tmpfs, UnionFS, ISO-9660, NFS

##### 4. Linux 디렉토리 구성
+ /bin : 기본 커맨드
+ /boot : OS 시작에 필요한 파일
+ /dev : 디바이스 파일
+ /etc : 설정 파일
+ /home : 사용자 홈 디렉토리
+ /lib : 공유 라이브러리
+ /proc : 커널이나 프로세스에 관한 정보
+ /root : root용 홈 디렉토리
+ /tmp : 임시 디렉토리
+ /usr : 각종 프로그램이나 커널 소스를 놓아두는 디렉토리
+ /var :  로그나 메일 등 가변적인 파일을 놓아두는 디렉토리

##### 5. Linux 보안 기능
+ 계정에 대한 권한 설정 : 퍼미션(permission)
+ 네트워크 필터링을 사용한 보안 기능
+ SELinux(Security-Enhanced Linux)

# 
### 1.4 미들웨어 기초 지식
##### 1. 웹서버/웹 애플리케이션 서버
+ 웹 서버 : 클라이언트의 브라우저가 보내온 HTTP 요청을 받아, 웹 콘텐츠를 응답으로 반환하거나 다른 서버사이드 프로그램을 호출하는 기능을 갖고있는 서버
+ Apache, Internet Information Services, Nginx

##### 2. 데이터베이스 서버
+ 데이터베이스 서버 : 시스템이 생성하는 다양한 데이터를 관리하기 위한 미들웨어
+ DBMS : 데이터의 검색, 등록, 변경, 삭제 + 트랜잭션 처리
+ MySQL, PostgreSQL, Oracle Database
+ NoSQL : 병렬분산처리나 유연한 첩 설정등을 특징으로 갖는 DBMS

##### 3. 시스템 감시 툴
+ 시스템을 안정적으로 가동시키기 위해 시스템이 어떤 상태로 가동되는지 모니터링하는 툴
+ Zabbix, Datadog, Mackerel

# 
### 1.5 인프라 구성 관리 기초 지식
##### 1. 인프라 구성 관리
+ 인프라를 구성하는 하드웨어, 네트워크, OS, 미들웨어, 애플리케이션의 구성 정보를 관리하고 적절한 상태로 유지하는 작업

##### 2. 코드를 사용한 구성 관리
+ 애플리케이션 개발에서의 소스코드 관리와 똑같이 Git과 같은 버전 관리 소프트웨어로 변경 이력을 일원하여 관리 가능
+ 구성에 변경이 발생한 경우는 커미트 메세지를 붙임으로써 어떤 목적으로 어떤 구성을 변경했는지를 팀 멤보끼리 공유 가능
+ 소스코드로 구성을 가시화할 수 있어 인적 실수를 배제

##### 3. 대표적인 인프라 구성관리 툴
+ OS의 시작을 자동화하는 툴
	+ KickStart, Vagrant
+ OS나 미들웨어의 설정을 자동화하는 툴
	+ Chef, Ansible, Puppet, Itamae
+ 여러 서버의 관리를 자동화하는 툴
	+ Kubernetes

##### 4. 지속적 인티그레이션/지속적 딜리버리
+ 지속적 인티그레이션
	+ 애플리케이션의 코드를 추가 및 수정할 때마다 테스트를 실행하고 확실하게 작동하는 코드를 유지하는 방법
+ 지속적 딜리버리
	+ 모든 기능을 한 번에 다 만드는 것이 아니라 기능을 추가할 때마다 애플리케이션을 제품 환경에 배포하고, 시스템 이용자의 피드백에 기초하여 그 다음에 개발할 기능을 결정
	+ 짧은 사이클의 개발과 릴리스를 반복

# 2. 컨테이너 기술과 Docker의 개요
- Docker : 컨테이너 기술을 사용하여 애플리케이션의 실행 환경을 구축 및 운용하기 위한 플랫폼

### 2. 1 컨테이너 기술의 개요
##### 1. 컨테이너
+ 컨테이너 : 호스트 OS상에 논리적인 구획(컨테이너)을 만들고, 애플리케이션을 작동시키기 위해 필요한 라이브러리나 애플리케이션 등을 하나로 모아, 마치 별도의 서버인 것처럼 사용할 수 있게 만든 것
+ 호스트 OS의 리소스를 논리적으로 분리시키고, 여러 개의 컨테이너가 공유하여 사용
+ 오버헤드가 적기 때문에 가볍고 고속으로 작동
+ 서버 가상화 기술과의 차이
	+ 일반적 물리 서버 
		+ 하나의 OS 상에서 움직이는 여러 애플리케이션이 똑같은 시스템 리소스를 사용
		+ 디렉토리를 공유, 서버에 설정된 동일한 IP 주소로 통신
		+ 여러 애플리케이션에서 사용하고 있는 미들웨어나 라이브러리 버젼이 다른 경우 서로 영향을 받지 않도록 주의
	+ 컨테이너 기술
		+ OS나 디렉토리, IP 주소 등과 같은 시스템 자원을 마치 각 애플리케이션이 점유하고 있는 것처럼 보이게 할 수 있음
		+ 애플리케이션의 실행에 필요한 모듈을 컨테이너로 모을 수 있음
		+ 여러 개의 컨테이너를 조합하여 하나의 애플리케이션을 구축하는 마이크로 서비스형 애플리케이션과 친화성이 높음

##### 2. 컨테이너 역사
+ FreeBSD Jail
	+ 프로세스의 구획화
	+ 네트워크의 구획화
	+ 파일 시스템의 구획화
+ Solaris Containers
	+ Solaris 존 기능
	+ Solaris 리소스 매니저 기능
+ Linux Containers(LXC)

# 
### 2. 2 Docker의 개요
##### 1. 프로그래머에게 Docker란?
+ Docker를 사용하여 개발한 어플리케이션의 실행에 필요한 모든 것이 포함되어있는 Docker이미지를 작성
+ 이식성(portability)

# 
### 2. 3 Docker의 기능
##### 1. Docker 이미지를 만드는 기능(Build)
+ Docker는 애플리케이션의 실행에 필요한 프로그램 본체, 라이브러리, 미들웨어, OS나 네트워크 설정등을 하나로 모아 이미지 생성
+ Docker 이미지 : 애플리케이션의 실행에 필요한 파일들이 저장된 디렉토리
+ Docker 이미지는 겹쳐서 사용 가능

##### 2. Docker 이미지를 공유하는 기능(Ship)
+ Docker 이미지를 Docker 레지스트리에서 공유 가능
+ Docker Hub

##### 3. Docker 컨테이너를 작동시키는 기능(Run)
+ Docker는 Linux 상에서 컨테이너 단위로 서버 기능을 작동
+ Docker 이미지로 여러개의 컨테이너 기동 가능
+ Docker는 이미 움직이고 있는 OS상에서 프로세스를 실행시키는 것과 거의 똑같은 속도로 실행 가능

##### 4. Docker 에디션
+ Docker Community Edition(CE)
+ Docker Enterprise Edition(EE)
+ 지원 플랫폼
	+ 서버 OS용 : Ubuntu, Debian, CentOS, Fedora
	+ 퍼블릭 클라우드용 : Microsoft Azure
	+ 클라이언트 OS용 : Microsoft Windows 10, macOS
+ Docker 릴리스

##### 5. Docker 컴포넌트
+ Docker Engine(Docker의 핵심 기능)
+ Docker Registry(이미지 공개 및 공유)
+ Docker Compose(컨테이너 일원 관리)
+ Docker Machine(Docker 실행 환경 구축)
+ Docker Swarm(클러스터 관리)

# 
### 2. 4 Docker의 작동 구조
##### 1. 컨테이너를 구획화하는 장치(namespace)
+ namespace :
	+ 한 덩어리의 데이터에 이름을 붙여 분할함으로써 충돌 가능성을 줄이고, 쉽게 참조할 수 있게 하는 개념
	+ 이름과 연결된 실체는 그 이름이 어떤 namespace에 속해 있는지 고유하게 정해짐
	+ namespace가 다르면 동일한 이름이라도 다른 실체로 처리

+ PID namespace
	+ 프로세스에 할당한 고유한 ID로 프로세스 격리
+ Network namespace
	+ 호스트 OS상에서 사용중인 포트가 있더라도 컨테이너 안에서 동일한 번호의 포트 사용 가능
+ UID namespace
	+ UID, GID를 namespace별로 독립적으로 가져 관리 권한을 다르게 부여
+ MOUNT namespace
	+ MOUNT 조작으로 namespace 안에 격리된 파일시스템 트리를 생성
+ UTS namespace
	+ namespace별로 호스트명이나 도메인명을 독자적으로 가질 수 있음
+ IPC namespace
	+ 프로세스 간의 통신 오브젝트를 namespace별로 독립적으로 운용

##### 2. 릴리스 관리 장치(cgroups)
+ 자원을 여러 컨테이너가 공유하여 작동하기 때문에 control group기능으로 자원 할당등을 관리
+ cgroups는 계층 구조를 사용하여 프로세스를 그룹화하여 관리 가능

##### 3. 네트워크 구성(가상 브리지/가상 NIC)
+ Docker 컨테이너와 외부 네트워크가 통신을 할 때는 가상 브리지와 호스트OS의 NIC에서 패킷을 전송하는 장치가 필요한데 NAPT기능을 사용
+ NAPT(Network Address Port Translation) : 하나의 IP주소를 여러 컴퓨터가 공유하는 기술
	+ IP주소와 포트 번호를 변환하는 기능
	+ TCP/IP의 포트 번호까지 동적으로 변환하기 때문에 하나의 글로벌 IP주소로 여러 대의 머신이 동시에 연결 가능

##### 4. Docker 이미지의 데이터 관리장치
+ Copy on Write 방식으로 컨테이너 이미지를 관리
+ AUFS : 다른 파일 시스템의 파일이나 디렉토리를 투과적으로 겹쳐서 하나의 파일 트리를 구성할 수 있는 파일시스템
+ Btrfs : Linux용 Copy on Write 파일시스템으로 과거의 상태로 돌아갈 수 있는 롤백 기능이나, 어떤 시점에서의 상태를 저장할 수 있는 스냅샷 기능 포함
+ Device Mapper : 파일 시스템의 블록I/O와 디바이스의 매핑 관계를 관리
+ OverlayFS : 파일 시스템에 다른 파일 시스템을 투과적으로 머징하는 장치
+ ZFS : 볼륨 관리, 스냅샷, 체크섬 처리, 리플리케이션 등을 지원

# 3. Docker 설치와 튜토리얼

### 3. 1 Docker 설치와 작동 확인
##### 1. Docker의 클라이언트 툴

+ Linux
	+ 설치 사전준비
`$ sudo apt-get update`
`$ sudo apt-get install -y apt-transport-https ca-certificates curl software-properties-common`
`$ curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -`
`$ sudo apt-key fingerprint 0EBFCD88`
`$ sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"`
`$ sudo apt-get update`

	+ Docker 설치하기
`$ sudo apt-get install docker-ce`

+ Docker에서 'Hello world'
`$ docker container run ubuntu:latest /bin/echo 'Hello world'`

+ Docker 버전 확인(docker version)
`$ docker version`

+ Docker 실행 환경 확인(docker system info)
`$ docker system info`

+ Docker 디스크 이용 상황(docker system df)
`$ docker system df`

# 
### 3. 2 웹 서버를 작동시켜 보자
+ Docker 이미지 다운로드하기
	+ 이미지 다운로드
	`$ docker pull nginx`

	+ 이미지 확인
	`$ docker image ls`

+ Nginx를 작동시켜 보자
`$ docker container run --name webserver -d -p 80:80 nginx`

+ Nginx 작동 확인
	+ Nginx 서버의 상태 확인
	`$ docker container ps`
	+ 컨테이너 가동 확인
	`$ docker container stats webserver`

+ Nginx의 기동 및 정지
	`$ docker stop webserver`
	+ 컨테이너 기동
	`$ docker start webserver`

# 4. Docker 명령

### 4. 1 Docker 이미지 조작
##### 1. Docker Hub
+ [https://hubdocker.com](https://hubdocker.com)
	+ 공식 docker 이미지 : official
	+ [Repo Info] : Docker 이미지 상세 정보
	+ [Tags] 
	 `이미지명 [:태그명]`
	 - 태그명에 latest를 지정 가능

##### 2. 이미지 다운로드(docker image pull)
+ `docker image pull [옵션] 이미지명[:태그명]`
+ -a : 모든 태그 이미지 취득
+ URL을 지정하여 이미지 취득 가능

##### 3. 이미지 목록 표시(docker image ls)
+ `docker image ls [옵션] [리포지토리명]`
+ 옵션

|옵션 | 설명 |
| ---- | ---- |
| -all, -a |  모든 이미지를 표시 |
|--digests|다이제스트를 표시할지 말지
|--no-trunc|결과를 모두 표시|
|--quiet, -q| Docker 이미지 ID만 표시|
+ 결과

| 항목 | 설명 |
| ---- | ---- |
| REPOSITORY |  이미지 이름 |
|TAG|이미지 태그명
|IMAGE ID|이미지 ID|
|CREATED| 작성일|
|SIZE|이미지 크기

##### 4. 이미지 상세 정보 확인(docker image inspect)
+ `docker image insepct 이미지명[:태그명]`

##### 5. 이미지 태그 설정(docker image tag)
+ `<docker Hub 사용자명>/이미지명:[태그명]`

##### 6. 이미지 검색(docker search)
+ `docker search [옵션] <검색 키워드>`
+ 옵션

옵션|설명
----|----
--no-trunc|결과를 모두 표시
--limit|n건의 검색 결과를 표시
--filter=stars=n|즐겨찾기의 수(n 이상)를 지정
+ 결과

항목|설명
---|---
NAME|이미지 이름
DESCRIPTION|이미지 설명
STARS|즐겨찾기 수
OFFICIAL|공식 이미지인지 아닌지
AUTOMATED|Dockerfile을 바탕으로 자동 생성된 이미지인지 아닌지

##### 7. 이미지 삭제(docker image rm)
+ `docker image rm [옵션] 이미지명 [이미지명]`
+ 옵션

옵션|설명
----|----
--force, -f|이미지를 강제로 삭제
--no-prune|중간 이미지를 삭제하지 않음

+ `docker image prune [옵션]`
+ 사용하지 않는 Docker 이미지를 삭제
+ 옵션

옵션|설명
----|----
--all, -a|사용하지 않은 이미지를 모두 삭제
--force, -f|이미지를 강제로 삭제

##### 8. Docker Hub에 로그인(docker lgoin)
+ `docker login [옵션] [서버]`
+ 옵션

옵션|설명
---|--
--password, -p | 비밀번호
--username, -u| 사용자명
+ 옵션을 지정하지 않으면 사용자명과 비밀번호를 물어봄

##### 9. 이미지 업로드(docker image push)
+ `docker image push 이미지명[:태그명]`
+ `<Docker Hub 사용자명>/이미지명[:태그명]`

##### 10. Docker Hub에서 로그아웃(docker logout)
+ `docker logout [서버명]`

# 
### 4. 2 Docker 컨테이너 생성/시작/정지
##### 1. Docker 컨테이너의 라이프 사이클
+ 컨테이너 생성(docker container create 명령)
	+ 이미지로부터 컨테이너를 생성
	+ 이미지의 실체는 'Docker에서 서버 기능을 작동시키기 위해 필요한 디렉토리 및 파일들
	+ Linux의 작동에 필요한 /etc나 /bin 등과 같은 디렉토리 및 파일들
	+ 명령을 실행하면 이미지에 포함될 Linux의 디렉토리와 파일들의 스냅샷을 취함
+ 컨테이너 생성 및 시작(docker container run 명령)
	+ 컨테이너를 작성하기만 할 뿐  컨테이너를 시작하지는 않음 -> 컨테이너를 시작할 준비가 된 상태
	+ 이미지로부터 컨테이너를 생성하고, 컨테이너 상에서 임의의 프로세스를 시작
+ 컨테이너 시작(docker container start 명령)
	+ 정지 중인 컨테이너를 시작할 때 사용
+ 컨테이너 정지(docker container stop 명령)
	+ 실행 중인 컨테이너를 정지시킬 때 사용
+ 컨테이너 삭제(docker container rm 명령)
	+ 컨테이너를 삭제할 때 사용
+ 그 외
	+ 컨테이너의 상태 확인 : `docker container ps`
	+ 컨테이너 일시정지 : `docker container pause`

##### 2. 컨테이너 생성 및 시작(docker container run)
+ `docker container run [옵션] 이미지명[:태그명] [인수]`
+ 옵션

옵션|설명
---|---
--attach, -a|표준 입력(STDIN), 표준 출력(STDOUT), 표준 오류 출력(STDERR)에 어태치한다.
--cidfile|컨테이너 ID를 파일로 출력한다
--detach, -d|컨테이너를 생성하고 백그라운드에서 실행한다.
--interactive, -I | 컨테이너의 표준 입력을 연다.
--tty, -t|단말기 디바이스를 사용한다.

+ docker container run 대화식 실행
`docker container run -it --name "test1" centos /bin/cal`
	+ docker container run : 컨테이너를 생성 및 실행
	+ -it : 콘솔에 결과를 출력하는 옵션
	+ --name "test1" : 컨테이너 명
	+ centos : 이미지명
	+ /bin/cal : 컨테이너에서 실행할 명령

##### 3. 컨테이너의 백그라운드 실행(docker container run)
+ `docker container run [실행 옵션] 이미지명[:태그명] [인수]`
+ 옵션

옵션|설명
----|----
--detach, -d | 백그라운드에서 실행
--user, -u | 사용자명을 지정
--restart=[no &#124; on-failure &#124; on-failure:횟수n &#124; always &#124; unless-stopped] | 명령의 실행 결과에 따라 재시작을 하는 옵션
--rm | 명령 실행 완료 후에 컨테이너를 자동으로 삭제

+ docker container run의 백그라운드 실행
`docker container run -d centos /bin/ping localhost`
	+ docker container run : 컨테이너를 생성 및 실행
	+ -d : 백그라운드에서 실행하는 옵션
	+ centos : 이미지명
	+ /bin/ping localhost : 컨테이너에서 실행할 명령

+ --restart 옵션

설정값|설명
-----|----
no | 재시작하지 않는다.
on-failure | 종료 스테이터스가 0이 아닐 때 재시작한다.
on-failure:횟수 n|종료 스테이터스가 0이 아닐 때 n번 재시작한다.
always|항상 재시작한다.
unless-stopped | 최근 컨테이너가 정지 상태가 아니라면 항상 재시작한다.

##### 4. 컨테이너의 네트워크 설정(docker container run)
+` docker container run [네트워크 옵션] 이미지명[:태그명] [인수]`
+ 옵션

옵션 | 설명
----|----
--add-host=[호스트명:IP 주소]|컨테이너의 /etc/hosts에 호스트명과 IP주소를 정의
--dns=[IP 주소]|컨테이너용 DNS 서버의 IP 주소 지정
--expose | 지정한 범위의 포트 번호를 할당
--mac-address=[MAC 주소] | 컨테이너의 MAC 주소를 지정
--net=[birdge&#124;none&#124;container:&lt;name &#124; id>&#124; host&#124; NETWORK]|컨테이너의 네트워크를 지정
--hostname, -h | 컨테이너 자신의 호스트명을 지정
--publish, -p[호스트의 포트 번호]:[컨테이너의 포트 번호]|호스트와 컨테이너의 포트 매핑
--publish-all, -P | 호스트의 임의의 포트를 컨테이너에 할당

+ --net 옵션의 지정

설정값 | 설명
---|---
bridge | 브리지 연결(기본값)을 사용한다
none | 네트워크에 연결하지 않는다.
container:[name &#124; id ]|다른 컨테이너의 네트워크를 사용한다.
host|컨테이너가 호스트 OS의 네트워크를 사용한다.
NETWORK | 사용자 정의 네트워크를 사용한다.

##### 5. 자원을 지정하여 컨테이너 생성 및 실행(docker container run)
+ `docker container run [자원 옵션] 이미지명[:태그명] [인수]`
+ 옵션

옵션|설명
--|--
--cpu-shares, -c|CPU의 사용 배분(비율)
--memory, -m|사용할 메모리를 제한하여 실행(단위는 b, k, m, g 중 하나)
--volume=[호스트의 디렉토리]:[컨테이너의 디렉토리], -v | 호스트와 컨테이너의 디렉토리를 공유

##### 6. 컨테이너를 생성 및 시작하는 환경을 지정(docker container run)
+ `docker container run [환셩설정 옵션] 이미지명[:태그명] 인수`
+ 옵션

옵션|설명
--|--
--env=[환경변수], -e|환경변수를 설정한다.
--env-file=[파일명]|환경변수를 파일로부터 설정한다.
--read-only=[true &#124; false]|컨테이너의 파일 시스템을 읽기 전용으로 만든다.
--workdir=[패스], -w | 컨테이너의 작업 디렉토리를 지정한다.
--user=[사용자명], -u | 사용자명 또는 UID를 지정한다.

##### 7. 가동 컨테이너 목록 표시(docker container ls)
+ `docker container ls [옵션]`
+ 옵션

옵션|설명
----|----
--all, -a| 실행 중/ 정지 중인 것도 포함하여 모든 컨테이너를 표시
--filter, -f|표시할 컨테이너의 필터링
--format| 표시 포맷을 지정
--last, -n|마지막으로 실행된 n건의 컨테이너만 표시
--latest, -l | 마지막으로 실행된 컨테이너만 표시
--no-trunc | 정보를 생략하지 않고 표시
--quiet, -q|컨테이너 ID만 표시
--size, -s|파일 크기 표시

+ docker container ls 명령 결과

항목|설명
--|--
CONTAINER ID|컨테이너 ID
IMAGE|컨테이너의 바탕이 된 이미지
COMMAND|컨테이너 안에서 실행되고 있는 명령
CREATED|컨테이너 작성 후 경과 시간
STATUS|컨테이너의 상태(restarting &#124; running &#124; paused &#124; exited)
PORTS|할당된 포트
NAMES|컨테이너 이름

+ --format 출력 형식의 지정

플레이스 홀더|설명
--|--
.ID|컨테이너 ID
.Image|이미지 ID
.Command|실행 명령
.CreatedAt|컨테이너가 작성된 시간
.RunningFor|컨테이너의 가동 시간
.Ports|공개 포트
.Status|컨테이너 상태
.Size|컨테이너 디스크 크기
.Names|컨테이너명
.Mounts|볼륨 마운트
.Networks|네트워크명

##### 8. 컨테이너 가동 확인(docker container stats)
+ `docker container stats [컨테이너 식별자]`
+ 결과

항목|설명
---|---
CONTAINER ID|컨테이너 식별자
NAME|컨테이너명
CPU %|CPU 사용률
MEM USAGE/LIMIT|메모리 사용량/컨테이너에서 사용할 수 있는 메모리 제한
MEM %|메모리 사용률
NET I/O|네트워크 I/O
BLOCK I/O|블록 I/O
PIDS|PID(Windows 컨테이너 제외)

##### 9. 컨테이너 시작(docker container start)
+ `docker container start [옵션] <컨테이너 식별자> [컨테이너 식별자]`
+ 옵션

옵션|설명
---|---
--attach, -a|표준 출력, 표준 오류 출력을 연다.
--interactive, -I|컨테이너의 표준 입력을 연다.

##### 10. 컨테이너 정지(docker container stop)
+ `docker container stop [옵션] <컨테이너 식별자> [컨테이너 식별자]`
+ 옵션

옵션|설명
--|--
--time, -t|컨테이너의 정지 시간을 지정(기본값은 10초)

##### 11. 컨테이너 재시작(docker container restart)
+`docker container restart [옵션] <컨테이너 식별자> [컨테이너 식별자]`
+ 옵션

옵션|설명
--|--
--time, -t|컨테이너의 재시작 시간을 지정(기본값은 10초)

##### 12. 컨테이너 삭제(docker container rm)
+ `docker container rm [옵션] <컨테이너 식별자> [컨테이너 식별자]`
+ 옵션

옵션 | 설명
--|--
--force, -f|실행 중인 컨테이너를 강제로 삭제
--volumes, -v | 할당한 볼륨을 삭제

##### 13. 컨테이너 중단/재개(docker container pause/docker container unpause)
+ `docker container pause <컨테이너 식별자>`

+ 중단 컨테이너의 재개 : `docker container unpause webserver`

# 
### 4. 3 Docker 컨테이너 네트워크
##### 1. 네트워크 목록 표시(docker  network ls)
+ `docker network ls [옵션]`
+ 옵션

옵션|설명
--|--
--filter = [ ], -f | 출력을 필터링한다.
--no-trunc|상세 정보를 출력한다.
--quiet, -q | 네트워크 ID만 표시한다.

+ 필터링에서 이용할 수 있는 키

값|설명
--|--
driver|드라이버 지정
id|네트워크 ID
label | 네트워크에 설정된 라벨(label=&lt;key> 또는 label=&lt;key>=&lt;value>로 지정한다.)
name|네트워크명
scope|네트워크의 스코프(swarm/global/local)
type|네트워크의 타입(사용자 정의 네트워크 custom/정의 완료 네트워크 builtin)

##### 2. 네트워크 작성(docker network create)
+ `docker network create [옵션] 네트워크`
+ 옵션

옵션|설명
--|--
--driver, -d | 네트워크 브리지 또는 오버레이(기본값은 bridge)
--ip-range|컨테이너에 할당하는 IP 주소의 범위를 지정
--subnet|서브넷을 CIDR 형식으로 지정
--ipv6| IPv6 네트워크를 유효화할지 말지(true/false)
-label | 네트워크에 설정하는 라벨

##### 3. 네트워크 연결(docker network connect/docker network disconnect)
+ `docker network connect [옵션] 네트워크 컨테이너`
+ 옵션

옵션|설명
--|--
--ip|IPv4 주소
--ip6|IPv6 주소
--alias | 앨리어스명
--link|다른 컨테이너에 대한 링크

+ 네트워크에 대한 연결 해제 : `docker network disconnect <네트워크명> <컨테이너명>`

##### 4. 네트워크 상세 정보 확인(docker network insepct)
+ `docker network insepect [옵션] 네트워크`

##### 5. 네트워크 삭제(docker network rm)
+ `docker network rm [옵션] 네트워크`

# 
### 4. 4 가동 중인 Docker 컨테이너 조작
##### 1. 가동 컨테이너 연결(docker container attach)
+ `docker container attach <컨테이너명>`
+ 연결된 컨테이너를 종료 : Ctrl + C
+ 컨테이너에서 분리 : Ctrl + P, Ctrl + Q

##### 2. 가동 컨테이너에서 프로세스 실행(docker container exec)
+ `docker container exec [옵션] <컨테이너 식별자> <실행할 명령> [인수]
+ 옵션

옵션|설명
--|--
--detach, -d| 명령을 백그라운드에서 실행한다.
--interactive, -i| 컨테이너의 표준 입력을 연다.
--tty, -t | tty(단말 디바이스)를 사용한다.
--user, -u|사용자명을 지정한다.

+ exec 명령은 실행 중인 컨테이너에서만 실행 가능

##### 3. 가동 컨테이너의 프로세스 확인(docker container top)
+ `docker container top <컨테이너명>`

##### 4. 가동 컨테이너의 포트 전송 확인(docker container port)
+ `docker container port <컨테이너명>`

##### 5. 컨테이너의 이름 변경(docker container rename)
+ `docker container rename <컨테이너명> <변경할 컨테이너명>`

##### 6. 컨테이너 안의 파일을 복사(docker container cp)
+ `docker container cp <컨테이너 식별자:<컨테이너 안의 파일 경로> <호스트의 디렉토리 경로>`
+ `docker container cp <호스트의 파일> <컨테이너 식별자>:<컨테이너 안의 파일 경로>`

##### 7. 컨테이너 조작의 차분 확인(docker container diff)
+ `docker container diff <컨테이너 식별자>`
+ 변경의 구분

구분|설명
--|--
A|파일 추가
D|파일 삭제
C|파일 수정

# 
### 4. 5 Docker 이미지 생성
##### 1. 컨테이너로부터 이미지 작성(docker container commit)
+ `docker container commit [옵션] <컨테이너 식별자> [이미지 [:태그명]]`
+ 옵션

옵션|설명
--|--
--auther, -a | 작성자를 지정한다.
--message, -m | 메시지를 지정한다.
--change, -c | 커미트 시 Dockerfile 명령을 지정한다.
--pause, -p| 컨테이너를 일시 정지하고 커미트한다.

##### 2. 컨테이너를 tar 파일로 출력(docker container export)
+ `docker container export <컨테이너 식별자>`

##### 3. tar 파일로부터 이미지 작성(docker image improt)
+ `docker image import <파일 또는 URL> | - [이미지명 [:태그명]]`
+ image import 명령으로 지정할 수 있는 아카이브 파일 : tar, tar.gz, tgz, bzip, tar.xz, txz

##### 4. 이미지 저장(docker image save)
+ `docker image save [옵션] <저장 파일명> [이미지명]`
+ 저장할 파일명은 -o 옵션으로 저장

##### 5. 이미지 읽어 들이기(docker image load)
+ `docker image load [옵션]`
+ 읽어 들일 파일명은 -i 옵션으로 지정

##### 6. 불필요한 이미지/컨테이너를 일괄 삭제(docker system prune)
+ `docker system prune [옵션]`
+ 옵션

옵션|설명
--|--
--all, -a|사용하지 않는 리소스를 모두 삭제한다.
--force, -f|강제적으로 삭제한다.

