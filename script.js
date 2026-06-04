// 1. 학생 작품 데이터 (여기에 280명을 엑셀에서 복사해 넣으면 됩니다)
const stories = [
  {
    classNum: 1,
    id: "10101",
    title: "화성의 마지막 편지",
    keywords: ["우주", "고립", "기억"],
    desc: "화성 기지에 홀로 남은 인물이 지구로 보내는 마지막 송신 기록을 담은 이야기입니다.",
    link: "https://docs.google.com/..." // 작품 Google Docs 링크 등
  },
  {
    classNum: 1,
    id: "10102",
    title: "안드로이드의 꿈",
    keywords: ["AI", "정체성", "미래사회"],
    desc: "인간과 똑같은 감정을 가지게 된 폐기 직전의 안드로이드가 꾸는 꿈에 대한 단편.",
    link: "https://docs.google.com/..."
  },
  {
    classNum: 2,
    id: "10201",
    title: "시간 세탁소",
    keywords: ["시간여행", "기억", "가족"],
    desc: "지우고 싶은 과거의 1분을 세탁해 주는 비밀스러운 세탁소 이야기.",
    link: "https://docs.google.com/..."
  }
];

// 2. 화면에 표를 그리는 함수
function renderTable(data, viewTitle) {
  document.getElementById('current-view-title').innerText = viewTitle;
  const tbody = document.getElementById('story-tbody');
  tbody.innerHTML = ''; // 기존 내용 지우기

  if(data.length === 0) {
    tbody.innerHTML = '<tr><td colspan="3" style="text-align:center;">해당하는 작품이 없습니다.</td></tr>';
    return;
  }

  data.forEach(story => {
    const tr = document.createElement('tr');
    
    // 키워드를 각각 클릭 가능한 버튼으로 만들기
    const keywordHTML = story.keywords.map(kw => 
      `<span class="keyword" onclick="filterByKeyword('${kw}')">${kw}</span>`
    ).join('');

    tr.innerHTML = `
      <td>${story.id}</td>
      <td>
        <a class="title-link" onclick='openModal(${JSON.stringify(story)})'>
          ${story.title}
        </a>
      </td>
      <td>${keywordHTML}</td>
    `;
    tbody.appendChild(tr);
  });
}

// 3. 반별로 모아보기
function filterByClass(classNum) {
  const filtered = stories.filter(story => story.classNum === classNum);
  renderTable(filtered, `${classNum}반 작품 목록`);
}

// 4. 키워드로 모아보기 (이것이 요청하신 기능입니다!)
function filterByKeyword(keyword) {
  // 모달이 열려있다면 닫기
  closeModal(); 
  
  // 해당 키워드가 포함된 소설만 필터링
  const filtered = stories.filter(story => story.keywords.includes(keyword));
  renderTable(filtered, `키워드 검색 결과 : #${keyword} (${filtered.length}건)`);
}

// 5. 전체 보기
function showAll() {
  renderTable(stories, "전체 작품 목록");
}

// 6. 팝업(모달) 열기
function openModal(story) {
  document.getElementById('modal-author').innerText = `학번: ${story.id}`;
  document.getElementById('modal-title').innerText = story.title;
  document.getElementById('modal-desc').innerText = story.desc;
  document.getElementById('modal-link').href = story.link;

  // 팝업 안에서도 키워드 누르면 필터링 되도록 적용
  const keywordHTML = story.keywords.map(kw => 
    `<span class="keyword" onclick="filterByKeyword('${kw}')">${kw}</span>`
  ).join('');
  document.getElementById('modal-keywords').innerHTML = keywordHTML;

  document.getElementById('modal').style.display = 'flex';
}

// 7. 팝업(모달) 닫기
function closeModal() {
  document.getElementById('modal').style.display = 'none';
}

// 초기 화면 로딩 시 전체 목록 보여주기
window.onload = () => {
  filterClass('1반');
};
