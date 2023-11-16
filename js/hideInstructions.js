let btnInstruction = document.getElementById('btnInstructions');
let nextBtn = document.querySelectorAll('.nextBtn');
let prevBtn = document.querySelectorAll('.prevBtn');
let exitBtn = document.querySelectorAll('.exitBtn');
let instrSection = document.getElementById('instrSection');
let page1 = document.getElementById('instrPg1');
let page2 = document.getElementById('instrPg2');
let page3 = document.getElementById('instrPg3');
let page4 = document.getElementById('instrPg4');
let page5 = document.getElementById('instrPg5');
let currentPageIndex = 0;

let pageArray = [page1, page2, page3,page4, page5];

function hideInstructions(){
  for(let i = 0; i < pageArray.length; i++){
    pageArray[i].style.display = 'none';
    instrSection.style.display = 'none';
    btnInstruction.style.display = 'block';
  }
}

function showInstructions(){
  hideInstructions();
  pageArray[currentPageIndex].style.display = 'block';
  instrSection.style.display = 'block';
  btnInstruction.style.display = 'none';
  // for(let i = 0; i < pageArray.length; i++){
  //   pageArray[currentPageIndex].style.display = 'block';
  // }
}

function nextPage(){
  if(currentPageIndex < pageArray.length - 1){
    currentPageIndex++;
    showInstructions();
  }
}


function prevPage(){
  if (currentPageIndex > 0){
    currentPageIndex--;
    showInstructions();
  }
}
nextBtn.forEach(function(nextBtn) {
  nextBtn.addEventListener('click', nextPage);
});

prevBtn.forEach(function(prevBtn){
  prevBtn.addEventListener('click', prevPage)
})
btnInstruction.addEventListener('click', showInstructions);

exitBtn.forEach(function(exitBtn){
  exitBtn.addEventListener('click', hideInstructions);
})


hideInstructions();


