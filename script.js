cardArray=[
    {
        'name':'Css',
        'image':"https://th.bing.com/th/id/OIP.jiuXfQfSdjrIoV_6YQ4LNwHaHa?w=194&h=194&c=7&r=0&o=5&dpr=1.3&pid=1.7"
    },
    {
        'name':'Html',
        'image':"https://th.bing.com/th/id/OIP.RFkyHE5hrcWMWEqgB4jRSAHaGY?w=212&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    },
    {
        'name':'jquery',
        'image':'https://th.bing.com/th/id/OIP.xOMH3SfS9m20k9CtR2SyrAHaE4?w=242&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    },
    {
        'name':'Javasript',
        'image':'https://th.bing.com/th/id/OIP.PHBTJoshbg880IH9z_PB6QHaHa?w=198&h=197&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    },
    {
        'name':'python',
        'image':'https://th.bing.com/th/id/OIP.HfmhwCHC2kbVafk1QzbdzQHaHa?w=166&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    },
    {
        'name':'Node',
        'image':'https://th.bing.com/th/id/OIP.nIOCFID1DJg3iMfAAscpRAHaHa?w=178&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    }
];




const gameCard=cardArray.concat(cardArray)

let shuffleChild=Array.from(gameCard).sort(()=> 0.5-Math.random())


const parentDiv=document.querySelector('#card-section');
for(let i=0;i<shuffleChild.length;i++){

    const childDiv=document.createElement('div');
    childDiv.classList.add("card");
    childDiv.dataset.name=shuffleChild[i].name;
    // childDiv.style.background=`url(${shuffleChild[i].image})`;

    const front_card=document.createElement('div');
    front_card.classList.add('front_card');


    const back_card=document.createElement('div');
    back_card.classList.add('back_card');
    back_card.style.background=`url(${shuffleChild[i].image})`;


    parentDiv.appendChild(childDiv);
    childDiv.appendChild(front_card);
    childDiv.appendChild(back_card);
}

let firstCard="";
let secondCard="";

let clickCount=0;

 const card_matches=()=>{
    let card_selected=document.querySelectorAll(".card_selected")
    card_selected.forEach((curElem)=>{
        curElem.classList.add("card-match")
    })
 }


const resetGame=()=>{
    firstCard="";
    secondCard="";
    clickCount=0;
    let card_selected=document.querySelectorAll(".card_selected")
    card_selected.forEach((curElem)=>{
        curElem.classList.remove('card_selected')
    })
}

parentDiv.addEventListener('click',(event)=>{
    let cuCard=event.target;




    clickCount++;
if(clickCount<3){
    if(clickCount===1){
        firstCard=cuCard.parentNode.dataset.name;
        cuCard.parentNode.classList.add('card_selected')
    }else{
        secondCard=cuCard.parentNode.dataset.name;
        cuCard.parentNode.classList.add('card_selected')
    }
    

    if(firstCard!=="" && secondCard!==""){
        if(firstCard===secondCard){
            cuCard.classList.add("card-match")

            setTimeout(()=>{
                card_matches()
                resetGame()
            },1000)

        }else{
            setTimeout(()=>{
                resetGame()
            },1000)
        }
    }
}
 

})

