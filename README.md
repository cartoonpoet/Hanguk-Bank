# Hanguk-Bank (한국은행 모바일 금융 서비스 선호도 조사)

이 프로젝트는 어르신을 대상으로 한 모바일 금융 서비스 사용 선호도 조사를 위한 웹뷰 애플리케이션입니다.

## 기술 스택

## 사용한 언어, 프레임워크

### Next.js

- React 생태계의 문제점들을 해결하고, 다양한 렌더링 옵션과 더불어 개발에 필요한 포괄적인 기능을 제공하기 떄문에 사용하였습니다.

1. 먼저 React는 CSR방식으로 애플리케이션의 javascript를 모두 다운로드하고 실행한 후 콘텐츠를 표시하므로 초기 로드 시간이 느려질 수 있습니다. 그렇지만 Next.js에서는 SSR과 SSG를 통해 서버에서 HTML을 생성해서 주므로 초기 로드 시간을 개선할 수 있습니다.
2. React에서는 수동으로 라우팅을 설정하고 코드 스플리팅을 개발자가 직접 해주어야 합니다. Next.js에서는 디렉토리 구조에 따라 자동으로 라우팅을 생성하고 자동으로 코드 스플리팅이 되어 사용하지 않는 코드는 로드되지가 않는다는 장점이 있습니다.

### TypeScript

- 타입을 명시함으로써, 개발자가 코드의 의도를 명확히 이해할 수 있게하기 위해 적용하게 되었습니다.

1. 변수 타입 오류를 컴파일 단계에서 잡을 수 있었고, 코드의 가독성과 유지보수성이 크게 향상 되었습니다. 자바스크립트를 사용했을경우 변수의 타입과 용도를 알기 위해 콘솔 로그를 찍어가며 분석을 해야하므로 생산성이 저하되는 문제가 있었습니다.

### Styled-Components

- 컴포넌트 기반의 스타일링 솔루션
- 동적 스타일링 및 테마 관리 용이

### TailWind CSS

- 미리 정의된 유틸리티 클래스로 빠르게 개발을 진행할 수 있다는 장점을 가지고 있어 간단한 레이아웃을 설정하는데 사용하였습니다.
- 사용하면 할수록 코드가 지저분해진다는 느낌을 받을 수 있어 간단한 레이아웃을 잡는데에만 사용하였습니다.

### AI/ML

- **Soulmachine AI**
  - AI 기반의 음성 인식 및 상호작용 모델

## 프로젝트 구조

```text
project/
├── public/                # 정적 파일
├── src/
│   ├── _components/      # UI 컴포넌트
│   │   ├── common/      # 공통 컴포넌트
│   │   ├── Transfer/    # 계좌이체 관련 컴포넌트
│   │   ├── Product/     # 금융상품 관련 컴포넌트
│   │   ├── Inquiry/     # 조회 서비스 컴포넌트
│   │   ├── Manual/      # 사용 설명서 컴포넌트
│   │   ├── CustomerService/ # 고객 서비스 컴포넌트
│   │   ├── Calling/     # 전화 상담 관련 컴포넌트
│   │   └── ChatBot/     # AI 챗봇 컴포넌트
│   ├── _assets/         # 이미지, 아이콘 등 정적 자산
│   ├── _constants/      # 상수 정의
│   │   ├── api/        # API 관련 상수
│   │   └── config/     # 설정 관련 상수
│   ├── _contexts/       # React Context API
│   ├── _hooks/          # 커스텀 훅
│   │   ├── useAuth     # 인증 관련 훅
│   │   └── useForm     # 폼 관련 훅
│   ├── _types/          # TypeScript 타입 정의
│   ├── _utils/          # 유틸리티 함수
│   └── app/             # Next.js 페이지 및 라우팅
│       ├── home/       # 메인 홈페이지
│       ├── ai/         # AI 서비스 페이지
│       ├── test/       # 테스트 페이지
│       ├── _styles/    # 스타일 관련 파일
│       ├── _fonts/     # 폰트 파일
│       ├── layout.tsx  # 전역 레이아웃
│       └── page.tsx    # 메인 페이지
├── tailwind.config.js    # Tailwind CSS 설정
├── tsconfig.json        # TypeScript 설정
├── next.config.ts       # Next.js 설정
├── postcss.config.js    # PostCSS 설정
├── .eslintrc.json      # ESLint 설정
├── .prettierrc         # Prettier 설정
└── package.json        # 프로젝트 의존성 및 스크립트
```

## 시작하기

먼저, 개발 서버를 실행하세요:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)를 열어 결과를 확인하세요.

## 주요 기능

### 1. 금융 서비스 접근성

- 직관적인 UI/UX를 통한 어르신 친화적 인터페이스
- 큰 글씨와 명확한 콘트라스트로 가독성 향상
- 음성 안내 지원

### 2. 금융 서비스 기능

- 계좌 조회 및 이체
- 금융 상품 안내
- 고객 서비스 지원
- AI 챗봇 상담

### 3. AI 기반 기능

- Soulmachine AI를 활용한 사용자 행동 분석
- 맞춤형 서비스 추천
- 사용성 데이터 수집 및 분석

### 4. 접근성 향상 기능

- 화면 확대/축소 기능
- 음성 안내 지원
- 고대비 모드 지원
- 전화 상담 연결 기능

## 개발 환경 설정

1. 저장소 클론

```bash
git clone https://github.com/your-username/Hanguk-Bank.git
```

2. 의존성 설치

```bash
npm install
# or
yarn install
```

3. 환경 변수 설정

```bash
cp .env.example .env.local
```

4. 개발 서버 실행

```bash
npm run dev
```

## 라이선스

이 프로젝트는 [MIT 라이선스](LICENSE)하에 있습니다.
