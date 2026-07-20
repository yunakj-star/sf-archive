// 1. 구글 스프레드시트 '웹에 게시(CSV)' 링크를 아래 따옴표 안에 넣으세요.
const SHEET_CSV_URL = "여기에_구글_시트_CSV_링크를_넣어주세요";

let stories = [];

// 2. 초기 화면 로딩 시 데이터 가져오기
window.onload = () => {
  document.getElementById('story-tbody').innerHTML = '<tr><td colspan="3" style="text-align:center;">구글 시트에서 데이터를 불러오는 중입니다...</td></tr>';

  Papa.parse(SHEET_CSV_URL, {
    download: true,
    header: true,
    complete: function(results) {
      const data = results.data;
      
      // 구글 시트 데이터를 웹사이트 형태에 맞게 변환
      stories = data.filter(row => row['소설 제목']).map(row => {
        // 키워드를 쉼표(,)로 분리하여 배열로 만듭니다.
        const keywordString = row['키워드'] || "";
        const keywordsArray = keywordString.split(',').map(k => k.trim()).filter(k => k);
        
        return {
          classNum: row['반'] ? row['반'].toString().trim() : '익명',
          id: row['학번'] || '익명', 
          title: row['소설 제목'],
          keywords: keywordsArray,
          desc: row['작품 소개'],
          link: row['링크'],
// ▼ 새로 추가된 부분: 교사 추천 열에 'O'나 'o'가 있으면 true로 설정
          isRecommended: row['교사 추천'] === 'O' || row['교사 추천'] === 'o'
        };
      });
      
      // 처음 로딩 시 '익명' 반을 먼저 보여줍니다.
      filterByClass('익명');
    },
    error: function(error) {
      console.error("데이터 로드 실패:", error);
      document.getElementById('story-tbody').innerHTML = '<tr><td colspan="3" style="text-align:center;">데이터를 불러오는 중 오류가 발생했습니다. 링크를 확인해주세요.</td></tr>';
    }
  });
};

// 3. 화면에 표를 그리는 함수
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

// ▼ 새로 추가된 부분: 추천작이면 별 아이콘 생성
    const starBadge = story.isRecommended ? `<span class="star-icon">★</span>` : '';

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

// 4. 반별로 모아보기
function filterByClass(classNum) {
  const filtered = stories.filter(story => story.classNum === classNum);
  const viewTitle = classNum === '익명' ? "익명반 작품 목록" : `${classNum}반 작품 목록`;
  renderTable(filtered, viewTitle);
}

// 5. 키워드로 모아보기
function filterByKeyword(keyword) {
  closeModal(); 
  const filtered = stories.filter(story => story.keywords.includes(keyword));
  renderTable(filtered, `키워드 검색 결과 : #${keyword} (${filtered.length}건)`);
}

// 6. 전체 보기
function showAll() {
  renderTable(stories, "전체 작품 목록");
}

// 7. 팝업(모달) 열기
function openModal(story) {
  document.getElementById('modal-author').innerText = `학번: ${story.id}`;

// ▼ 새로 추가된 부분: 모달 제목에도 별 아이콘 추가
  const starBadge = story.isRecommended ? `<span class="star-icon">★</span> ` : '';
  document.getElementById('modal-title').innerHTML = starBadge + story.title;
  
  document.getElementById('modal-desc').innerText = story.desc;
  document.getElementById('modal-link').href = story.link;


  document.getElementById('modal-title').innerText = story.title;
  document.getElementById('modal-desc').innerText = story.desc;
  document.getElementById('modal-link').href = story.link;

  const keywordHTML = story.keywords.map(kw => 
    `<span class="keyword" onclick="filterByKeyword('${kw}')">${kw}</span>`
  ).join('');
  document.getElementById('modal-keywords').innerHTML = keywordHTML;

  document.getElementById('modal').style.display = 'flex';
}

// 8. 팝업(모달) 닫기
function closeModal() {
  document.getElementById('modal').style.display = 'none';
}


// 9. 추천작 모아보기
function filterByRecommended() {
  closeModal(); 
  const filtered = stories.filter(story => story.isRecommended);
  renderTable(filtered, "★ 추천 목록");
}
