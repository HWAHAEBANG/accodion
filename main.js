const btnCollapse = document.getElementById('btn-collapse');
const heading = document.getElementsByClassName('panel-heading');
const question = document.getElementsByClassName('panel-question');
const answer = document.getElementsByClassName('panel-body');


// 제목을 클릭하면 할 일
// 헷갈릴 수 있는데 잘 생각해봐. 헤딩을 하나 눌렀을 때 3개가 다 unactive 돼야햐니까. 
// 1:3관계라서 이중 포문 인거!!
for(let i = 0; i < heading.length; i++){ //헤딩들 마다 할 일
  heading[i].addEventListener('click', (ev)=>{
    for(let j = 0; j < question.length; j++){ // question마다 할 일
      question[j].classList.remove('active');
      ev.target.parentNode.classList.add('active'); 
      // 클릭 이벤트가 발생하는 것을 타겟으로 지정해서, 그것의 부모노드에 클래스 이름을 추가하는거지
      shut();
    }
    //shut(); 왜 여기가 아니지? 음..
  })
}


function shut(){ // panel-body 안보이도록
  for(let x = 0; x < answer.length; x++){
    answer[x].style.display = 'none';
  }
  // 클래스명 active panel-question 자식중 panel-body 나타나도록.
  let activePanel = document.querySelector('.panel-question.active .panel-body') // 종속 관계에 있는 클래스를 뜰어오려면 이런식으로.
  //querry selector로 받은건 [0]안붙여야함. 배열아님
  activePanel.style.display = 'block'
}

shut(); // 처음부터 active붙어있던 건 열려야하니깐.


// collapse all 버튼을 클릭하면 모든 answer이 안보이도록한다.
btnCollapse.addEventListener('click',()=>{ //getElementById로 받은건 [0]안붙여야함. 배열아님
  for(let y = 0; y < answer.length; y++){
    answer[y].style.display = 'none';
  }
})