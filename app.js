// Array.from(document.getElementsByTagName('input')).forEach((e,i)=>{
//     e.addEventListener('keyup',(el)=>{
//         if(e.value.length > 0){
//             document.getElementsByClassName('bi-caret-down-fill')[i].style.transform ="rotate(180deg)";
//         }else{
//             document.getElementsByClassName('bi-caret-down-fill')[i].style.transform ="rotate(0deg)";
//         }
//     })
// })

Array.from(document.getElementsByTagName('input')).forEach((e, i) => {
    e.addEventListener('keyup', (el) => {
        if (e.value.length >= 0) {
            document.getElementsByClassName('bi bi-caret-down-fill')[i-1].style.transform = "rotate(180deg)";
        } else {
            document.getElementsByClassName('bi bi-caret-down-fill')[i-1].style.transform = "rotate(0deg)";
        }
    });
});