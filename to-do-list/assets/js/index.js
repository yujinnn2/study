function addTodo(){
    const input = document.getElementById('todo');
    // 입력창 가져오기
    const text = input.value;
    // 입력한 글자를 텍스트로 변환하기 
    if(text === '') return;
    // 입력창이 비어있으면 그냥 끝! 
    // 빈칸은 아무것도 안하도록 막는 기능  
    const li = document.createElement('li');
    // li를 담는 공간 
    li.innerText = text;
    // 우리가 입력한 글자를 박스 안에 추가 
    document.getElementById('list').appendChild(li);
    // <ul id="list"> -> 리스트를 찾아 오고 li를 자식에게 추가 
    input.value='';
    // 입력이 완료가 되었으면 빈값으로 처리 
}