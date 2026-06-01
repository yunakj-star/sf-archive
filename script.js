/* 우주 & 미래지향적 컬러 테마 변수 */
:root {
  --bg-color: #050b14; /* 깊은 우주 같은 아주 어두운 남색 */
  --panel-bg: rgba(15, 23, 42, 0.85); /* 반투명한 패널 배경 */
  --text-main: #e2e8f0; /* 읽기 편한 밝은 회색 */
  --text-muted: #94a3b8;
  --accent-cyan: #00f0ff; /* 네온 시안 (사이버펑크 느낌의 메인 컬러) */
  --accent-blue: #3b82f6; 
  --border-color: #1e293b;
  --glow-effect: 0 0 10px rgba(0, 240, 255, 0.4);
}

body {
  font-family: 'Pretendard', -apple-system, monospace, sans-serif;
  background-color: var(--bg-color);
  /* 우주 느낌을 더해주는 은은한 배경 그라데이션 */
  background-image: 
    radial-gradient(circle at 15% 50%, rgba(0, 240, 255, 0.03), transparent 30%),
    radial-gradient(circle at 85% 30%, rgba(138, 43, 226, 0.03), transparent 30%);
  color: var(--text-main);
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
  line-height: 1.6;
}

header {
  text-align: center;
  margin-bottom: 50px;
  padding-top: 20px;
}

h1 {
  color: var(--accent-cyan);
  font-size: 2.5rem;
  letter-spacing: 2px;
  text-shadow: 0 0 15px rgba(0, 240, 255, 0.5); /* 네온 글로우 효과 */
  margin-bottom: 10px;
}

header p {
  color: var(--text-muted);
  font-size: 1.1rem;
}

/* 네비게이션 버튼 (미래형 인터페이스 느낌) */
.class-nav {
  margin-top: 30px;
  display: flex;
  justify-content: center;
  gap: 15px;
  flex-wrap: wrap;
}

.class-nav button {
  padding: 10px 20px;
  background-color: transparent;
  color: var(--accent-cyan);
  border: 1px solid var(--accent-cyan);
  border-radius: 4px; /* SF 느낌을 위해 둥근 테두리 대신 각진 테두리 */
  cursor: pointer;
  font-weight: bold;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: all 0.3s ease;
  box-shadow: inset 0 0 5px rgba(0, 240, 255, 0.1);
}

.class-nav button:hover {
  background-color: var(--accent-cyan);
  color: #000;
  box-shadow: var(--glow-effect);
}

/* 테이블(작품 목록) 영역 */
#current-view-title {
  color: #fff;
  border-left: 4px solid var(--accent-cyan);
  padding-left: 15px;
  margin-bottom: 20px;
  font-weight: normal;
  letter-spacing: 1px;
}

.table-container {
  overflow-x: auto;
  background: var(--panel-bg);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  backdrop-filter: blur(10px); /* 뒤가 살짝 비치는 유리 효과 */
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  padding: 16px;
  text-align: left;
  border-bottom: 1px solid var(--border-color);
}

th {
  background-color: rgba(30, 41, 59, 0.8);
  font-weight: 600;
  color: var(--accent-cyan);
  border-bottom: 2px solid var(--accent-blue);
  letter-spacing: 1px;
}

td {
  color: var(--text-main);
}

/* 제목 링크 (마우스 올리면 네온으로 빛남) */
td a.title-link {
  color: #fff;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s;
}

td a.title-link:hover {
  color: var(--accent-cyan);
  text-shadow: var(--glow-effect);
}

/* 키워드 태그 (디지털 칩셋 느낌) */
.keyword {
  display: inline-block;
  padding: 4px 10px;
  margin: 2px 4px 2px 0;
  background-color: transparent;
  color: var(--accent-blue);
  border: 1px solid var(--accent-blue);
  border-radius: 12px;
  font-size: 0.85em;
  cursor: pointer;
  transition: all 0.2s;
}

.keyword:hover {
  background-color: var(--accent-blue);
  color: #fff;
  box-shadow: 0 0 8px rgba(59, 130, 246, 0.6);
}

/* 팝업(모달) - 미래 홀로그램 화면 느낌 */
.modal {
  display: none;
  position: fixed;
  top: 0; left: 0; width: 100%; height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(4px);
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background-color: #0f172a;
  border: 1px solid var(--accent-cyan);
  box-shadow: 0 0 25px rgba(0, 240, 255, 0.15);
  padding: 30px;
  border-radius: 8px;
  width: 90%;
  max-width: 600px;
  position: relative;
  color: var(--text-main);
}

.close {
  position: absolute;
  top: 15px; right: 20px;
  font-size: 32px;
  cursor: pointer;
  color: var(--text-muted);
  transition: color 0.2s;
}

.close:hover {
  color: var(--accent-cyan);
}

.badge {
  background: transparent;
  color: var(--accent-cyan);
  border: 1px solid var(--accent-cyan);
  padding: 4px 12px;
  border-radius: 4px;
  font-size: 0.9em;
  letter-spacing: 1px;
}

#modal-title {
  color: #fff;
  margin: 20px 0 15px 0;
  font-size: 1.8rem;
}

/* 작품 소개글 박스 */
.modal-body {
  margin: 20px 0;
  padding: 20px;
  background: rgba(30, 41, 59, 0.5);
  border-left: 3px solid var(--accent-cyan); /* 왼쪽에 강조선 */
  border-radius: 0 8px 8px 0;
}

.modal-body h3 {
  margin-top: 0;
  color: var(--accent-cyan);
  font-size: 1.1rem;
}

/* 작품 읽으러 가기 버튼 */
.read-btn {
  display: block;
  text-align: center;
  background: linear-gradient(90deg, #00f0ff, #3b82f6); /* 형광 파란색 그라데이션 */
  color: #000;
  padding: 15px;
  border-radius: 4px;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.1rem;
  letter-spacing: 1px;
  transition: all 0.3s;
}

.read-btn:hover {
  box-shadow: 0 0 20px rgba(0, 240, 255, 0.5);
  transform: translateY(-2px);
}
