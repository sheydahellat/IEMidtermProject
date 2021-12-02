const answer = document.getElementById('gender-ans');
const persent = document.getElementById('gender-persent');

const male_choice = document.getElementById('male');
const female_choice = document.getElementById('female');

const savedAnswer = document.getElementById('saved');

const saveBtn = document.getElementById('save');
const clearBtn = document.getElementById('clear');


// current name value
let currentValue;




document.getElementById('submit').addEventListener('click', () => {
    let input = document.getElementById('name').value;
    currentValue = input;
    fetch(`https://api.genderize.io/?name=${input}`).then(response => response.json())
    .then(data => {
        answer.innerHTML = data.gender == null ?  "NotFound" : data.gender;
        persent.innerHTML = data.probability;
      });
    //   if(data.gender == null){
    //     answer.innerHTML = "notFound";
    //     persent.innerHTML = "0";
    //   }
      if(localStorage.getItem(input)){
          savedAnswer.innerHTML = localStorage.getItem(input);
      }
});




saveBtn.addEventListener('click', () => {

    let input = document.getElementById('name').value;
    if(male_choice.checked || female_choice.checked){
        localStorage.setItem(input, document.querySelector('input[name="gender"]:checked').value);
    }
    else{
        localStorage.setItem(input, answer.innerHTML);
    }
});



clearBtn.addEventListener('click', () => {
    localStorage.removeItem(currentValue)
    savedAnswer.innerHTML = '...';
})