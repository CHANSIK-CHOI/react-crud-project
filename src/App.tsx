import { UsersContainer } from '@/features/users'

function App() {
  return (
    <main className="page">
      <div className="layout-center">
        <section className="hero">
          <div className="hero__text">
            <span className="hero__eyebrow">Personal Portfolio Project</span>
            <h1 className="hero__title">사용자 관리 CRUD 프로젝트</h1>
            <p className="hero__subtitle">
              React와 TypeScript, Fetch API를 기반으로 사용자 조회, 생성, 개별 및 일괄 수정,
              삭제 흐름을 구현한 개인 포트폴리오 프로젝트입니다.
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
              로딩, 에러 처리, 유효성 검사, 선택 기반 일괄 작업까지 한 화면에서 확인할 수
              있습니다.
            </p>
            <div className="hero__cardMeta">
              <span>CRUD Flow</span>
              <span>Validation</span>
              <span>Batch Actions</span>
            </div>
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
