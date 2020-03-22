

//for changing date and month

var date_e1 = document.getElementById("start-date");
var date_e2 = document.getElementById("end-date");
const zero = '0';

let d = new Date();

// to fetch month and date
let month_start = d.getMonth()+2;
let date_start =d.getDate()-1; 

let month_end = d.getMonth()+3;

//add '0' if its number of digit is one 
if(month_start.toString().length==1){
    month_start = zero.concat(month_start);
}
if(month_end.toString().length==1){
    month_end = zero.concat(month_end);
}
if(date_start.toString().length==1){
    date_start = zero.concat(date_start);
}

// display date in e1 and e2
date_e1.innerHTML = date_start+' / '+ month_start ;

date_e2.innerHTML = date_start+' / '+ month_end ;


// for accordion

var accordion = document.getElementsByClassName("accordion");

for (let index = 0; index < accordion.length; index++) {

    accordion[index].onclick = function () {

        // to change psudo element (icon in the list)

        this.classList.toggle('is-open');

        // to open and close the clicked accordion

        var content = this.nextElementSibling;

        if(content.style.maxHeight){
            // close here >
            content.style.maxHeight = null;
        } else {
            // open here >
            content.style.maxHeight = content.scrollHeight + "px";
        }

        // to close rest all the accordion

        for (let i= 0; i < accordion.length; i++) {

            if(i!=index){
                var c = accordion[i].nextElementSibling;
                if(c.style.maxHeight){
                    // close here >
                    accordion[i].classList.toggle('is-open');
                    c.style.maxHeight = null;
                }
            }else {
                continue;
            }
        }   
    }
}