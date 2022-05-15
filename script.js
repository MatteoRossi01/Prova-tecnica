
const items = [
    'img/img-back_1.jpg',
    'img/img-back_2.jpg',
    'img/img-back_3.jpg',
];
    
const numbers = [
    '1',
    '2',
    '3',
]
    
const text = [
    'As at. Ihil essit estist ut di consequat pedit quo eatem alia ius aut esecumque recab illitii sciant mi, iumque.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti ',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]

const itemsRef = document.getElementsByClassName('jumbotron')[0];
let item = '';

for (let i = 0; i < items.length; i++) {
    item += `
        <div style="background-image: url(${items[i]});" class="container-jumbotron fade">
    
            <!-- Text jumbo -->
            <div class="box-text-jumbo">
                <p class="text-jumbo">
                    ${text[i]}
                </p>
            </div>
            <!-- Text jumbo -->
            
            <!-- Slider counter -->
            <div class="box-counter phone-hidden">
                <sup id="counter">${numbers[i]}</sup><span>&frasl;</span><sub>3</sub>
            </div>
                
            <!-- Slider counter -->
    
        </div>
        `
}

itemsRef.innerHTML = item;
document.getElementsByClassName('container-jumbotron');

let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let item = document.getElementsByClassName("container-jumbotron");
    for (i = 0; i < item.length; i++) {
      item[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > item.length) {slideIndex = 1}
    item[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 8000);
} 

