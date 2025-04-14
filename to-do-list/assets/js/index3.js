const input = document.getElementById('todo-input');
const button = document.getElementById('add-btn');
const list = document.getElementById('todo-list');

const addTodo = () => {
    const text = input.value.trim();
    if (!text) return;

    const li = document.createElement('li');
    li.textContent = text;

    // 삭제 버튼 만들기
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'delete'; //''안에 원하는 거 넣으셈
    deleteBtn.ClassName = 'delete-btn';

    // 삭제 기능 추가
    deleteBtn.addEventListener('click', () => {
        li.remove(); // 해당 항목 삭제
    });

    // 리스트 항목에 삭제 버튼 붙이기 
    li.appendChild(deleteBtn);

    // 전체 리스트에 항목 추가 
    list.appendChild(li);

    // 입력창 초기화
    input.value = '';
};

// 버튼 클릭 -> 할 일 추가
button.addEventListener('click', addTodo);

//엔터 키 -> 할 일 추가 
input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') addTodo();
});