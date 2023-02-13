# issue-house 프로젝트

https://issue-house.netlify.app
<br/><br/>

# 📋 프로젝트 개요

- 깃허브 이슈를 모아볼 수 있는 프로젝트입니다.
  <br/><br/>

# 🏗️ 페이지 소개

## 메인페이지

[![2023-02-13-12-19-32.png](https://i.postimg.cc/bwPFqx4d/2023-02-13-12-19-32.png)](https://postimg.cc/rKh9JrVL)

- Tailwind CSS로 전반적인 레이아웃을 잡았습니다.
- 구독한 레파지토리의 이슈를 볼 수 있습니다.

## 상세페이지

[![2023-02-13-12-19-55.png](https://i.postimg.cc/tTJ3XJXs/2023-02-13-12-19-55.png)](https://postimg.cc/Q9L9mXKD)

- 아이디를 검색해 레파지토리를 구독할 수 있습니다.
- 구독한 레파 히토리는 메인 페이지에서 볼 수 있습니다.

  <br/><br/>

# 👟 실행 방법

```bash
npm install
npm start
```

<br/><br/>

# 👷 기능 구현사항

- 깃허브 유저 검색기능
- 이슈 페이지네이션
- 구독된 레파지토리는 로컬스토리지 저장

<br/>

# ⚙️ 기술스택

### TypeScript, React

### postcss, tailwind CSS

<br/>

# 🚀 미해결 이슈 & 개선 가능 사항

- 이슈 WaterFall 현상 -> Suspense,Error Boundary 사용
- 로딩시 스켈레톤 -> 사용자 경험 개선
