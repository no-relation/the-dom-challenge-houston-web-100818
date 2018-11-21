const counter = document.getElementById('counter')
let timeRunning = true;
setInterval(function(){
    if(timeRunning){
        counter.innerText++;}
}, 1000)

const minus = document.getElementById('-');
const plus = document.getElementById('+');
const heart = document.getElementById('<3');
const pause = document.getElementById('pause');
const form = document.getElementById('comment-form');
const submit = document.getElementById('submit');

minus.addEventListener('click', function(e){
    if (timeRunning){
        counter.innerText--;
    }
})

plus.addEventListener('click', function(e){
    if (timeRunning){
        counter.innerText++;
    }
})

heart.addEventListener('click', function(e){
    if(timeRunning){
        const currentCounter = counter.innerText;
        const likesClass = document.querySelector('.likes');
                
        let likeListItem = document.querySelector(`[data-count='${currentCounter}']`)
        
        if (likeListItem){
            likeListItem.dataset.likes++
        } else {
            likeListItem = document.createElement('p')
            likeListItem.dataset.count = currentCounter
            likeListItem.dataset.likes = 1
            likesClass.append(likeListItem)
        }
        likeListItem.innerText = (`There are ${likeListItem.dataset.likes} likes for ${currentCounter}`)
    }
})

pause.addEventListener('click', function(e){
    if (timeRunning){
        timeRunning = false;
        pause.innerText = "resume"
    }else {
        timeRunning = true;
        pause.innerText = "pause"
    }
})

submit.addEventListener('click', function(e){
    e.preventDefault()
    const comment = form.querySelector("#comment-field").value
    const commentList = document.querySelector("#list")
    const commentItem = document.createElement('p');
    commentItem.innerText = (comment)
    commentList.append(commentItem)
})