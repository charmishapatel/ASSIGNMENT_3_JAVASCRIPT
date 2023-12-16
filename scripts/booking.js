/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

var  the_cost_per_day = 35;
var the_number_of_days_selected = 0;
var mon = document.getElementById('monday');
var tues = document.getElementById('tuesday');
var wed = document.getElementById('wednesday');
var thurs = document.getElementById('thursday');
var fri = document.getElementById('friday');
var full = document.getElementById('full');
var half = document.getElementById('half');
var clear_days = document.getElementById('clear-button');

// var calculated_cost = document.getElementById('calculated-cost')


/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

function add_color(){
    if (this.classList.contains('blue-hover')){
        this.classList.add('clicked');
        the_number_of_days_selected++;
    }
    
    recalculate();
}

mon.addEventListener("click", add_color);
tues.addEventListener("click", add_color);
wed.addEventListener("click", add_color);
thurs.addEventListener("click", add_color);
fri.addEventListener("click", add_color);
/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

function remove_color(){
    
    mon.classList.remove('clicked');
    tues.classList.remove('clicked');
    wed.classList.remove('clicked');
    thurs.classList.remove('clicked');
    fri.classList.remove('clicked');

    the_number_of_days_selected = 0;
    recalculate();

 } 

 clear_days.addEventListener("click", remove_color);

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.


function half_day() {
    the_cost_per_day = 20;
    half.classList.add('clicked');
    full.classList.remove('clicked');
    recalculate();
}

half.addEventListener("click", half_day);


// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

function full_day() {
    the_cost_per_day = 35;
    full.classList.add('clicked');
    half.classList.remove('clicked');
    recalculate();
}

full.addEventListener("click", full_day);

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function recalculate(){
  let calculated_cost = document.getElementById('calculated-cost');
    calculated_cost.innerHTML = the_number_of_days_selected * the_cost_per_day;
}
