import { UsersContainer } from '@/features/users'

type TechIconName = 'react' | 'reactHookForm' | 'classnames' | 'typescript' | 'vite' | 'sass'

type TechItem = {
  name: string
  description: string
  icon: TechIconName
}

type TechGroup = {
  title: string
  items: TechItem[]
}

const techGroups: TechGroup[] = [
  {
    title: 'Libraries & Tools',
    items: [
      {
        name: 'React',
        description: '컴포넌트 기반 UI 구성과 화면 렌더링의 중심이 되는 라이브러리입니다.',
        icon: 'react',
      },
      {
        name: 'React Hook Form',
        description: '폼 상태 관리와 유효성 검사를 단순하게 유지하기 위해 사용했습니다.',
        icon: 'reactHookForm',
      },
      {
        name: 'classnames',
        description: '상태에 따라 조건부 클래스를 조합할 때 사용했습니다.',
        icon: 'classnames',
      },
      {
        name: 'TypeScript',
        description: '정적 타입으로 사용자 데이터 구조와 함수 계약을 명확하게 관리합니다.',
        icon: 'typescript',
      },
      {
        name: 'Vite',
        description: '빠른 개발 서버와 번들링 환경을 제공하는 빌드 도구입니다.',
        icon: 'vite',
      },
      {
        name: 'Sass',
        description: 'SCSS 기반으로 스타일을 파일 단위로 분리해 관리합니다.',
        icon: 'sass',
      },
    ],
  },
]

function TechIcon({ name }: { name: TechIconName }) {
  switch (name) {
    case 'react':
      return (
        <svg viewBox="0 0 64 64" aria-hidden="true">
          <circle cx="32" cy="32" r="5.5" fill="#61dafb" />
          <g fill="none" stroke="#61dafb" strokeWidth="3.6">
            <ellipse cx="32" cy="32" rx="22" ry="9.5" />
            <ellipse cx="32" cy="32" rx="22" ry="9.5" transform="rotate(60 32 32)" />
            <ellipse cx="32" cy="32" rx="22" ry="9.5" transform="rotate(120 32 32)" />
          </g>
        </svg>
      )
    case 'reactHookForm':
      return (
        <svg viewBox="0 0 64 64" aria-hidden="true">
          <defs>
            <linearGradient id="rhf-gradient" x1="0%" x2="100%" y1="0%" y2="100%">
              <stop offset="0%" stopColor="#16c3ff" />
              <stop offset="100%" stopColor="#ff5fa2" />
            </linearGradient>
          </defs>
          <rect x="8" y="8" width="48" height="48" rx="16" fill="url(#rhf-gradient)" />
          <rect x="18" y="16" width="28" height="32" rx="6" fill="rgba(255,255,255,0.18)" />
          <path
            d="M23 25h18M23 32h18M23 39h12"
            stroke="#fff"
            strokeLinecap="round"
            strokeWidth="3.2"
          />
          <circle cx="45" cy="40" r="7" fill="#fff" />
          <path d="m42 40 2 2 4-5" fill="none" stroke="#ff5fa2" strokeWidth="2.8" />
        </svg>
      )
    case 'classnames':
      return (
        <svg viewBox="0 0 64 64" aria-hidden="true">
          <rect x="8" y="8" width="48" height="48" rx="14" fill="#1b1e28" />
          <rect x="15" y="15" width="34" height="34" rx="10" fill="#2d7ff9" opacity="0.9" />
          <rect x="25" y="25" width="24" height="24" rx="8" fill="#0b6b6f" opacity="0.9" />
          <path
            d="M20 35c0-4 2.6-6.8 6.2-6.8 2.5 0 4.2.8 5.8 2.2l-2.7 3.1c-.9-.8-1.8-1.2-2.9-1.2-1.7 0-2.9 1.2-2.9 2.8s1.1 2.8 3 2.8c1.1 0 2-.4 2.8-1.1l2.7 3c-1.7 1.6-3.8 2.4-6 2.4-3.7 0-6-2.7-6-7.2Z"
            fill="#fff"
          />
          <path
            d="M35 35.2c0-4.3 2.6-7 6.1-7 3.6 0 6.2 2.7 6.2 7 0 4.4-2.6 7.1-6.2 7.1-3.5 0-6.1-2.7-6.1-7.1Zm8.7 0c0-1.8-1-3-2.6-3-1.5 0-2.5 1.2-2.5 3s1 3.1 2.5 3.1c1.6 0 2.6-1.3 2.6-3.1Z"
            fill="#fff"
          />
        </svg>
      )
    case 'typescript':
      return (
        <svg viewBox="0 0 64 64" aria-hidden="true">
          <rect x="8" y="8" width="48" height="48" rx="12" fill="#3178c6" />
          <path d="M20 23h24v6h-9v22h-6V29h-9v-6Z" fill="#fff" />
          <path
            d="M46 29.4c-2.1 0-3.4 1-3.4 2.4 0 1.5 1.3 2 3.8 2.6 3.6.9 5.6 2.4 5.6 5.7 0 4.1-3.4 6.4-7.7 6.4-3.2 0-6.2-1.1-8.3-3.1l3.3-3.9c1.5 1.2 3.2 2 5 2 1.9 0 3-.6 3-1.8 0-1.1-.9-1.6-3.5-2.3-4-.9-5.9-2.5-5.9-6 0-3.8 3.1-6.7 8-6.7 3 0 5.4.8 7.2 2.3l-3 4c-1.3-1-2.6-1.6-4.1-1.6Z"
            fill="#fff"
          />
        </svg>
      )
    case 'vite':
      return (
        <svg viewBox="0 0 64 64" aria-hidden="true">
          <defs>
            <linearGradient id="vite-gradient" x1="0%" x2="100%" y1="0%" y2="100%">
              <stop offset="0%" stopColor="#7c5cff" />
              <stop offset="100%" stopColor="#ffd84d" />
            </linearGradient>
          </defs>
          <path d="M33 8 15 18l14 34 20-39-16-5Z" fill="url(#vite-gradient)" />
          <path d="m35 13-8 16 8 5 12-17-12-4Z" fill="#fff3b0" opacity="0.9" />
          <path d="M29 31h8l-5 18 4-14h-7l5-20-5 16Z" fill="#2d2d62" />
        </svg>
      )
    case 'sass':
      return (
        <svg viewBox="0 0 64 64" aria-hidden="true">
          <circle cx="32" cy="32" r="24" fill="#cd6799" />
          <path
            d="M38 18c-6.5 0-12 3.9-12 8.8 0 2.4 1.5 4.1 3.7 5.2-1.6 1.2-2.8 2.8-2.8 4.8 0 2.4 1.8 4.2 4.9 4.2 2 0 4-.6 5.8-1.6.7 1.6 1.1 3.4 1.2 5.6h4.3c0-3.3-.8-6-2.2-8.2 2.9-2.7 4.7-6.1 4.7-10.1 0-5.2-3.7-8.7-9.6-8.7Zm-2.3 18.2c-1.2.7-2.2 1-3.2 1-1.1 0-1.8-.5-1.8-1.3 0-.8.7-1.7 1.8-2.6 1.1.2 2.2.3 3.3.3h.7c.3.7.6 1.7.9 2.6-.5 0-1.1 0-1.7 0Zm1-6.2c-4.1 0-6.3-1.3-6.3-3.3 0-2.4 3.2-4.7 7.2-4.7 2.8 0 4.5 1.5 4.5 4 0 1.7-.6 3.2-1.7 4.6-.8-.3-1.8-.5-3-.6h-.7Z"
            fill="#fff"
          />
        </svg>
      )
  }
}

function App() {
  return (
    <main className="page">
      <div className="layout-center">
        <section className="hero">
          <div className="hero__text">
            <span className="hero__eyebrow">Personal Portfolio Project</span>
            <h1 className="hero__title">사용자 관리 CRUD 프로젝트</h1>
            <p className="hero__subtitle">
              React와 TypeScript, Fetch API를 기반으로 사용자 조회, 생성, 개별 및 일괄 수정, 삭제
              흐름을 구현한 개인 포트폴리오 프로젝트입니다.
            </p>
            <div className="hero__badges">
              <span className="badge">React</span>
              <span className="badge">TypeScript</span>
              <span className="badge">Fetch API</span>
              <span className="badge">Portfolio</span>
            </div>
          </div>
          <div className="hero__card">
            <span className="hero__cardLabel">Mock API 기반 구현</span>
            <h2 className="hero__cardTitle">User Management Dashboard</h2>
            <p className="hero__cardText">
              로딩, 에러 처리, 유효성 검사, 선택 기반 일괄 작업까지 한 화면에서 확인할 수 있습니다.
            </p>
            <div className="hero__cardMeta">
              <span>CRUD Flow</span>
              <span>Validation</span>
              <span>Batch Actions</span>
            </div>
          </div>
        </section>

        <section className="panel stack">
          <div className="stack__header">
            <div>
              <h2 className="stack__title">사용 라이브러리와 개발 도구</h2>
              <p className="stack__subtitle">핵심 스택만 빠르게 확인할 수 있도록 정리했습니다.</p>
            </div>
            <div className="stack__summary" aria-label="핵심 구현 포인트">
              <span className="stack__summaryTag">Form: React Hook Form</span>
              <span className="stack__summaryTag">Data: Fetch API</span>
            </div>
          </div>

          <div className="stack__grid">
            {techGroups.map((group) => (
              <article key={group.title} className="stack__group">
                <div className="stack__groupHeader">
                  <h3 className="stack__groupTitle">{group.title}</h3>
                </div>

                <ul className="stack__list">
                  {group.items.map((item) => (
                    <li key={item.name} className="stack__item" title={item.description}>
                      <div className="stack__icon" aria-hidden="true">
                        <TechIcon name={item.icon} />
                      </div>
                      <strong className="stack__itemName">{item.name}</strong>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="panel">
          <div className="panel__header">
            <div>
              <h2 className="panel__title">Users Dashboard</h2>
              <p className="panel__subtitle">
                사용자 목록을 확인하고 생성, 수정, 삭제 흐름을 직접 테스트할 수 있습니다.
              </p>
            </div>
            <div className="panel__hint">
              상단 액션에서 신규 등록, 일괄 수정, 선택 삭제를 진행할 수 있습니다.
            </div>
          </div>
          <UsersContainer />
        </section>
      </div>
    </main>
  )
}

export default App
