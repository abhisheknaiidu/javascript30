const words = ["abhishek.naidu","Technologist","Innovator","Developer"]
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
    if(count===words.length) {
        count=0;
    }
    currentText=words[count];
    letter=currentText.slice(0,++index);

    document.querySelector(".typing").textContent = letter;
    if(letter.length === currentText.length) {
        count++;
        index=0;
    }

    setTimeout(type,500);
}

) ();