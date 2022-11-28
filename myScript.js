const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget)
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('active')
    })
    tabs.forEach(tab => {
      tab.classList.remove('active')
    })
    tab.classList.add('active')
    target.classList.add('active')
  })
})

/* This is where we will implement the different button functions.
*/
function myFunction() {
  alert("Hello, world 2!");
  console.log("Hello, world 2!");
  
}//end myFunction

//----------------------------------------------------------------
// NEW SET YOURSELF A NEW ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function openTabb(evt, tabNamee) {
  
  // Declare all variables
  let i, left_bar_content, left_bar_links;

  // Get all elements with class="left_bar_content" and hide them
  // MY UNDERSTANDING: remove the current open content (hide right screen)
  left_bar_content = document.getElementsByClassName("left_bar_content");
  for (i = 0; i < left_bar_content.length; i++) {
    left_bar_content[i].style.display = "none";
  }

  // Get all elements with class="left_bar_links" and remove the class "active"
  // MY UNDERSTANDING: find the element with "active" in it and remove it
  left_bar_links = document.getElementsByClassName("left_bar_links");
  for (i = 0; i < left_bar_links.length; i++) {
    left_bar_links[i].className = left_bar_links[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the link that opened the tab
  // MY UNDERSTANDING: display the content (right screen) for the respective tab and add "active" to it 
  document.getElementById(tabNamee).style.display = "block";
  evt.currentTarget.className += " active";

} // openTabb

function showEditButtons() {

  // alert("start crying");
  // let mainButtonStatus = document.getElementsByClassName("main_edit_button")[0].style.display;
  // let subButtonsStatus = document.getElementsByClassName("sub_edit_buttons")[0].style.display;
  let mainButtonStatus = document.getElementById("id_main_edit_button").style.display;  // hides big edit
  let subButtonsStatus = document.getElementById("id_sub_edit_buttons").style.display; // displays small edits

  if(mainButtonStatus != "none") { // hide main button and display sub buttons

    document.getElementById("id_main_edit_button").style.display = "none";
    document.getElementById("id_sub_edit_buttons").style.display = "block";

  } else { // hide sub button and display main button

    document.getElementById("id_main_edit_button").style.display = "block";
    document.getElementById("id_sub_edit_buttons").style.display = "none";

  } // if-else

} // showEditButtons

function actionAdd(whoCalled){

  // alert(whoCalled);
  let buttonName = document.getElementById("id_input_box");

  // only prompt user for input if there's no input box on screen
  if(buttonName == null) { // also fixes weird bug where it creates duplicates of the same new button

  showCheckBoxes("cancelChkBoxes"); // reomve check boxes
  getUserInput();

  let buttonName = document.getElementById("id_input_box"); // always exists (but input is invalid)

  let actionConfirm = document.getElementById("id_confirm_button");
  actionConfirm.addEventListener("click", function(){ 

    // alert("in ADD click listener");
    //name exists (we got valid input)
    if(buttonName.value != null && buttonName.value != undefined && buttonName.value.trim() != "") {

      console.log("--------" + buttonName.value);
      buttonName = buttonName.value; // get button name

      // Create button
      const newButton = document.createElement("button");
      newButton.innerText = buttonName;
      newButton.id = "id_new_tab_" + buttonName;
      newButton.className = "left_bar_links"; //buttonName + "_button_new";
      newButton.setAttribute("onclick",  "openTabb(event, 'id_new_"+ buttonName + "')");
      //<button class="left_bar_links" onclick="openTabb(event, 'id_music')">Music</button>

      // Need to add right screen content for new button
      // const newButtonContent = document.createElement("div");
      // newButtonContent.id = "id_new_" + buttonName;
      // newButtonContent.className = "left_bar_content";

      // Add to body:
      const parentElement = document.getElementById("id_sub_edit_buttons");
      parentElement.insertAdjacentElement("afterend",newButton);

      // remove input box
      const toRemove = document.getElementById("id_input_box");
      if(toRemove != null){
        toRemove.remove();
      }

      

    } else { // user inputs nothing close input box
      
      // remove input box
      const toRemove = document.getElementById("id_input_box");
      toRemove.remove();

    } // if-else
    
  }); // addEventListener
  
} // if 

} // actionAdd

function actionRemove(whoCalled){
  // alert(whoCalled);

  showCheckBoxes("checkbox");


    let actionConfirm = document.getElementById("id_confirm_button");
    actionConfirm.addEventListener("click", function(){
      
      // remove input box
      const inputBoxIsOpen = document.getElementById("id_input_box");

      if(inputBoxIsOpen != null) {
      inputBoxIsOpen.remove(); // cancel "add" action and remove input box
      } // if
      
      // document.getElementsByClassName("chkboxes")[0].style.display = "none";

      let allButtons = document.getElementById("id_left_bar");
      allButtons = allButtons.getElementsByTagName("button"); // get all buttons
      // alert(allButtons.length);
      
      let toRemove; // one we are removing currently
      let allToRemove = []; // all the recorded tabs we're going to delete
      let isSelected; // find which ones user selectd
      // alert(isSelected.checked == true);
      // alert(allButtons[6].getElementsByClassName("chkboxes")[0].checked == true);

      // find all selected tabs
      for(k = 6; k < allButtons.length; k++){
        isSelected = allButtons[k].getElementsByClassName("chkboxes")[0];
        if(isSelected != null && isSelected.checked == true){
          allToRemove.push(allButtons[k].id); // add to removable
        }
 
      } // for

      // alert("removing: " + allToRemove); // shows whats being removed

      // remove selected buttons
      for(i = 0; i < allToRemove.length; i++){
        toRemove = document.getElementById(allToRemove[i]);
        toRemove.remove();
      } //for

      openTabb(this, 'id_home'); // idk what to send for 'event' parameter
      
    }); //addEventListener

  // } //if

  // NOTE: if there are multiple elements with the same ID the last made element will be removed first
  // const toRemove = document.getElementById("id_new_button");
  // toRemove.remove()

} // actionRemove

function actionRename(whoCalled){
  // alert(whoCalled);

  showCheckBoxes("radio");


  let selectedButton = document.getElementsByTagName("input")[0];
  // alert(selectedButton.length);

  selectedButton.addEventListener("click", function(){

    alert("hello");

  });

  let actionConfirm = document.getElementById("id_confirm_button");
  actionConfirm.addEventListener("click", function(){
    
    
    
    // document.getElementsByClassName("chkboxes")[0].style.display = "none";

    let allButtons = document.getElementById("id_left_bar");
    allButtons = allButtons.getElementsByTagName("button"); // get all buttons
    // alert(allButtons.length);
    
    let isSelected; // find which one user selectd
    let foundSelected = false;

    // find selected tab
    for(k = 6; k < allButtons.length && !foundSelected; k++){
      isSelected = allButtons[k].getElementsByClassName("chkboxes")[0];
      if(isSelected != null && isSelected.checked == true){
        foundSelected = true;
      } // if

    } // for

    let toRename = isSelected.id.replace("chkbox", "tab");
    alert("renaming: " + toRename);
    isSelected.id.replace("tab", "chkbox"); // return to regular state

    let rrr = document.getElementById(toRename).innerText;
    alert(rrr);

  }); //addEventListener


} // actionRename

function actionConfirm(whoCalled){
  // alert(whoCalled);
  showCheckBoxes("cancelChkBoxes"); // reomve check boxes
  showEditButtons();
} // actionConfirm

function getUserInput(){
  
  let inputBox = null;

  if(document.getElementById("id_input_box") == null){ // only create an input box if it exists
    //     // alert("does NOT exist");
    
    inputBox = document.createElement("input");
    inputBox.id = "id_input_box";
    inputBox.className = "input_box";
    inputBox.placeholder = "Enter text here";
    inputBox.value = "";
      
    const parentElement = document.getElementById("id_sub_edit_buttons");
    parentElement.insertAdjacentElement("afterend",inputBox);    

//if(buttonName.value != null && buttonName.value != undefined && buttonName.value.trim() != "") { 

  } // if 

} // getUserInput

function showCheckBoxes(boxType) {
   // show all the checkboxes
  // NOTE: one select works for radio since they're in the same group. Defined by 'name' in html file
  let allChkBoxes = document.getElementsByClassName("chkboxes");
  for(k = 0; k < allChkBoxes.length; k++){
  
    if(boxType != "cancelChkBoxes" && (allChkBoxes[allChkBoxes.length-1].type != boxType || allChkBoxes[allChkBoxes.length-1].style.display != "inline")){
      allChkBoxes[k].type = boxType;
      allChkBoxes[k].style.display = "inline";
    } else {
      allChkBoxes[k].style.display = "none";
    } // if-else

  } // for

} // showCheckBoxes

// ~~~~~~~~~~~~~~~~~~~~~~~~~



//-------------------------------------------------------------
//search function to compare input with database
function search_title()
{
  div=document.getElementById("myDropdown");
  title = div.getElementsByTagName("title");

  input = document.getElementById('search').value;
  input=input.toLowerCase();
  console.log(input);
    for (i = 0; i < title.length; i++) {
      filter=title[i].textContent.toLowerCase() || title[i].innerText.toLowerCase();
      text=title[i].textContent || title[i].innerText;
        if (filter.indexOf(input)>-1) {
          title[i].style.display = "";
          console.log(text);
        }
        else {  
          //title[i].style.display = "none";
        }
    }
    //still need to figure out how to display results
}



/*ALL OF THE BELOW IS FOR ITEM-CARDS*/


/*============ FOR HTTYD ==========*/
var httydCard = document.getElementById("httyd");
var httydBtn = document.getElementById("small-httyd");
var httydClose = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
httydBtn.onclick = function() {
  httydCard.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
httydClose.onclick = function() {
  httydCard.style.display = "none";
}

var httydAdd = document.getElementById("httyd-add");
var httydRemove = document.getElementById("httyd-remove");
var httydAdded = false;

httydRemove.onclick = function() {
  if ( confirm("Are you sure that you want to remove How To Train Your Dragon from your list?") ) {
    httydAdd.style.display = "block";
    httydRemove.style.display = "none";
    httydCard.style.display = "none";
    httydAdded = false;
  }
}

httydAdd.onclick = function() {
  if (   confirm("Are you sure that you want to add How To Train Your Dragon to your list?") ) {
    httydRemove.style.display = "block";
    httydAdd.style.display = "none";
    httydCard.style.display = "none";
    httydAdded = true;
  }
}


/*============ FOR PRINCESS MONONOKE ==========*/
var princessMononokeCard = document.getElementById("princess-mononoke");
var princessMononokeBtn = document.getElementById("small-princess-mononoke");
var princessMononokeClose = document.getElementsByClassName("close")[1];

// When the user clicks on the button, open the modal
princessMononokeBtn.onclick = function() {
  princessMononokeCard.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
princessMononokeClose.onclick = function() {
  princessMononokeCard.style.display = "none";
}

var princessMononokeAdd = document.getElementById("princess-mononoke-add");
var princessMononokeRemove = document.getElementById("princess-mononoke-remove");
var princessMononokeAdded = false;

princessMononokeRemove.onclick = function() {
  if (   confirm("Are you sure that you want to remove Princess Mononoke from your list?") ) {
    princessMononokeAdd.style.display = "block";
    princessMononokeRemove.style.display = "none";
    princessMononokeCard.style.display = "none";
    princessMononokeAdded = false;
  }
}

princessMononokeAdd.onclick = function() {
  if (  confirm("Are you sure that you want to add Princess Mononoke to your list?") ) {
    princessMononokeRemove.style.display = "block";
    princessMononokeAdd.style.display = "none";
    princessMononokeCard.style.display = "none";
    princessMononokeAdded = true;
  }
}


/*============ FOR SHREK ==========*/
var shrekCard = document.getElementById("shrek");
var shrekBtn = document.getElementById("small-shrek");
var shrekClose = document.getElementsByClassName("close")[2];

// When the user clicks on the button, open the modal
shrekBtn.onclick = function() {
  shrekCard.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
shrekClose.onclick = function() {
  shrekCard.style.display = "none";
}

var shrekAdd = document.getElementById("shrek-add");
var shrekRemove = document.getElementById("shrek-remove");
var shrekAdded = false;

shrekRemove.onclick = function() {
  if (  confirm("Are you sure that you want to remove Shrek from your list?") ) {
    shrekAdd.style.display = "block";
    shrekRemove.style.display = "none";
    shrekCard.style.display = "none";
    shrekAdded = false;
  }
}

shrekAdd.onclick = function() {
  if (  confirm("Are you sure that you want to add Shrek to your list?") ) {
    shrekRemove.style.display = "block";
    shrekAdd.style.display = "none";
    shrekCard.style.display = "none";
    shrekAdded = true;
  }
}


/*============ FOR THE LAST OF THE REAL ONES ==========*/
var lastRealOnesCard = document.getElementById("last-real-ones");
var lastRealOnesBtn = document.getElementById("small-last-real-ones");
var lastRealOnesClose = document.getElementsByClassName("close")[3];

// When the user clicks on the button, open the modal
lastRealOnesBtn.onclick = function() {
  lastRealOnesCard.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
lastRealOnesClose.onclick = function() {
  lastRealOnesCard.style.display = "none";
}

var lastRealOnesAdd = document.getElementById("last-real-ones-add");
var lastRealOnesRemove = document.getElementById("last-real-ones-remove");
var lastRealOnesAdded = false;

lastRealOnesRemove.onclick = function() {
  if (  confirm("Are you sure that you want to remove The Last Of The Real Ones from your list?") ) {
    lastRealOnesAdd.style.display = "block";
    lastRealOnesRemove.style.display = "none";
    lastRealOnesCard.style.display = "none";
    lastRealOnesAdded = false;
  }
}

lastRealOnesAdd.onclick = function() {
  if (  confirm("Are you sure that you want to add The Last Of The Real Ones to your list?") ) {
    lastRealOnesRemove.style.display = "block";
    lastRealOnesAdd.style.display = "none";
    lastRealOnesCard.style.display = "none";
    lastRealOnesAdded = true;
  }
}


/*============ FOR FADED ==========*/
var fadedCard = document.getElementById("faded");
var fadedBtn = document.getElementById("small-faded");
var fadedClose = document.getElementsByClassName("close")[4];

// When the user clicks on the button, open the modal
fadedBtn.onclick = function() {
  fadedCard.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
fadedClose.onclick = function() {
  fadedCard.style.display = "none";
}

var fadedAdd = document.getElementById("faded-add");
var fadedRemove = document.getElementById("faded-remove");
var fadedAdded = false;

fadedRemove.onclick = function() {
  if (   confirm("Are you sure that you want to remove Faded from your list?") ) {
    fadedAdd.style.display = "block";
    fadedRemove.style.display = "none";
    fadedCard.style.display = "none";
    fadedAdded = false;
  }
}

fadedAdd.onclick = function() {
  if (  confirm("Are you sure that you want to add Faded to your list?") ) {
    fadedRemove.style.display = "block";
    fadedAdd.style.display = "none";
    fadedCard.style.display = "none";
    fadedAdded = true;
  }
}


/*============ FOR SICK OF U ==========*/
var sickOfUCard = document.getElementById("sick-of-u");
var sickOfUBtn = document.getElementById("small-sick-of-u");
var sickOfUClose = document.getElementsByClassName("close")[5];

// When the user clicks on the button, open the modal
sickOfUBtn.onclick = function() {
  sickOfUCard.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
sickOfUClose.onclick = function() {
  sickOfUCard.style.display = "none";
}

var sickOfUAdd = document.getElementById("sick-of-u-add");
var sickOfURemove = document.getElementById("sick-of-u-remove");
var sickOfUAdded = false;

sickOfURemove.onclick = function() {
  if (  confirm("Are you sure that you want to remove Sick Of U from your list?") ) {
    sickOfUAdd.style.display = "block";
    sickOfURemove.style.display = "none";
    sickOfUCard.style.display = "none";
    sickOfUAdded = false;
  }
}

sickOfUAdd.onclick = function() {
  if (  confirm("Are you sure that you want to add Sick Of U to your list?") ) {
    sickOfURemove.style.display = "block";
    sickOfUAdd.style.display = "none";
    sickOfUCard.style.display = "none";
    sickOfUAdded = true;
  }
}


/*============ FOR MARIO KART ==========*/
var marioKartCard = document.getElementById("mario-kart");
var marioKartBtn = document.getElementById("small-mario-kart");
var marioKartClose = document.getElementsByClassName("close")[6];

// When the user clicks on the button, open the modal
marioKartBtn.onclick = function() {
  marioKartCard.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
marioKartClose.onclick = function() {
  marioKartCard.style.display = "none";
}

var marioKartAdd = document.getElementById("mario-kart-add");
var marioKartRemove = document.getElementById("mario-kart-remove");
var marioKartAdded = false;

marioKartRemove.onclick = function() {
  if (  confirm("Are you sure that you want to remove Mario Kart 8 Deluxe from your list?") ) {
    marioKartAdd.style.display = "block";
    marioKartRemove.style.display = "none";
    marioKartCard.style.display = "none";
    marioKartAdded = false;
  }
}

marioKartAdd.onclick = function() {
  if (  confirm("Are you sure that you want to add Mario Kart 8 Deluxe to your list?") ) {
    marioKartRemove.style.display = "block";
    marioKartAdd.style.display = "none";
    marioKartCard.style.display = "none";
    marioKartAdded = true;
  }
}


/*============ FOR CYBERPUNK 2077 ==========*/
var cyberpunk2077Card = document.getElementById("cyberpunk2077");
var cyberpunk2077Btn = document.getElementById("small-cyberpunk2077");
var cyberpunk2077Close = document.getElementsByClassName("close")[7];

// When the user clicks on the button, open the modal
cyberpunk2077Btn.onclick = function() {
  cyberpunk2077Card.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
cyberpunk2077Close.onclick = function() {
  cyberpunk2077Card.style.display = "none";
}

var cyberpunk2077Add = document.getElementById("cyberpunk2077-add");
var cyberpunk2077Remove = document.getElementById("cyberpunk2077-remove");
var cyberpunk2077Added = false;

cyberpunk2077Remove.onclick = function() {
  if (  confirm("Are you sure that you want to remove Cyberpunk 2077 from your list?") ) {
    cyberpunk2077Add.style.display = "block";
    cyberpunk2077Remove.style.display = "none";
    cyberpunk2077Card.style.display = "none";
    cyberpunk2077Added = false;
  }
}

cyberpunk2077Add.onclick = function() {
  if (  confirm("Are you sure that you want to add Cyberpunk 2077 to your list?") ) {
    cyberpunk2077Remove.style.display = "block";
    cyberpunk2077Add.style.display = "none";
    cyberpunk2077Card.style.display = "none";
    cyberpunk2077Added = true;
  }
}


/*============ FOR XELDA ==========*/
var xeldaCard = document.getElementById("xelda");
var xeldaBtn = document.getElementById("small-xelda");
var xeldaClose = document.getElementsByClassName("close")[8];

// When the user clicks on the button, open the modal
xeldaBtn.onclick = function() {
  xeldaCard.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
xeldaClose.onclick = function() {
  xeldaCard.style.display = "none";
}

var xeldaAdd = document.getElementById("xelda-add");
var xeldaRemove = document.getElementById("xelda-remove");
var xeldaAdded = false;

xeldaRemove.onclick = function() {
  if (  confirm("Are you sure that you want to remove Xelda from your list?") ) {
    xeldaAdd.style.display = "block";
    xeldaRemove.style.display = "none";
    xeldaCard.style.display = "none";
    xeldaAdded = false;
  }
}

xeldaAdd.onclick = function() {
  if (  confirm("Are you sure that you want to add Xelda to your list?") ) {
    xeldaRemove.style.display = "block";
    xeldaAdd.style.display = "none";
    xeldaCard.style.display = "none";
    xeldaAdded = true;
  }
}


/*============ FOR DRAGON BALL ==========*/
var dragonBallCard = document.getElementById("dragon-ball");
var dragonBallBtn = document.getElementById("small-dragon-ball");
var dragonBallClose = document.getElementsByClassName("close")[9];

// When the user clicks on the button, open the modal
dragonBallBtn.onclick = function() {
  dragonBallCard.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
dragonBallClose.onclick = function() {
  dragonBallCard.style.display = "none";
}

var dragonBallAdd = document.getElementById("dragon-ball-add");
var dragonBallRemove = document.getElementById("dragon-ball-remove");
var dragonBallAdded = false;

dragonBallRemove.onclick = function() {
  if (  confirm("Are you sure that you want to remove Dragon Ball from your list?") ) {
    dragonBallAdd.style.display = "block";
    dragonBallRemove.style.display = "none";
    dragonBallCard.style.display = "none";
    dragonBallAdded = false;
  }
}

dragonBallAdd.onclick = function() {
  if (  confirm("Are you sure that you want to add Dragon Ball to your list?") ) {
    dragonBallRemove.style.display = "block";
    dragonBallAdd.style.display = "none";
    dragonBallCard.style.display = "none";
    dragonBallAdded = true;
  }
}


/*============ FOR FRIENDS ==========*/
var friendsCard = document.getElementById("friends");
var friendsBtn = document.getElementById("small-friends");
var friendsClose = document.getElementsByClassName("close")[10];

// When the user clicks on the button, open the modal
friendsBtn.onclick = function() {
  friendsCard.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
friendsClose.onclick = function() {
  friendsCard.style.display = "none";
}

var friendsAdd = document.getElementById("friends-add");
var friendsRemove = document.getElementById("friends-remove");
var friendsAdded = false;

friendsRemove.onclick = function() {
  if (  confirm("Are you sure that you want to remove Friends from your list?") ) {
    friendsAdd.style.display = "block";
    friendsRemove.style.display = "none";
    friendsCard.style.display = "none";
    friendsAdded = false;
  }
}

friendsAdd.onclick = function() {
  if (  confirm("Are you sure that you want to add Friends to your list?") ) {
    friendsRemove.style.display = "block";
    friendsAdd.style.display = "none";
    friendsCard.style.display = "none";
    friendsAdded = true;
  }
}


/*============ FOR THE OFFICE ==========*/
var theOfficeCard = document.getElementById("office");
var theOfficeBtn = document.getElementById("small-office");
var theOfficeClose = document.getElementsByClassName("close")[11];

// When the user clicks on the button, open the modal
theOfficeBtn.onclick = function() {
  theOfficeCard.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
theOfficeClose.onclick = function() {
  theOfficeCard.style.display = "none";
}

var theOfficeAdd = document.getElementById("office-add");
var theOfficeRemove = document.getElementById("office-remove");
var theOfficeAdded = false;

theOfficeRemove.onclick = function() {
  if (  confirm("Are you sure that you want to remove The Office (US) from your list?")  ) {
    theOfficeAdd.style.display = "block";
    theOfficeRemove.style.display = "none";
    theOfficeCard.style.display = "none";
    theOfficeAdded = false;
  }
}

theOfficeAdd.onclick = function() {
  if (  confirm("Are you sure that you want to add The Office (US) to your list?") ) {
    theOfficeRemove.style.display = "block";
    theOfficeAdd.style.display = "none";
    theOfficeCard.style.display = "none";
    theOfficeAdded = true;
  }
}


/*============ FOR HARRY POTTER ==========*/
var harryPotterCard = document.getElementById("harry-potter");
var harryPotterBtn = document.getElementById("small-harry-potter");
var harryPotterClose = document.getElementsByClassName("close")[12];

// When the user clicks on the button, open the modal
harryPotterBtn.onclick = function() {
  harryPotterCard.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
harryPotterClose.onclick = function() {
  harryPotterCard.style.display = "none";
}

var harryPotterAdd = document.getElementById("harry-potter-add");
var harryPotterRemove = document.getElementById("harry-potter-remove");
var harryPotterAdded = false;

harryPotterRemove.onclick = function() {
  if (  confirm("Are you sure that you want to remove Harry Potter and the Philosopher's Stone from your list?") ) {
    harryPotterAdd.style.display = "block";
    harryPotterRemove.style.display = "none";
    harryPotterCard.style.display = "none";
    harryPotterAdded = false;
  }
}

harryPotterAdd.onclick = function() {
  if (  confirm("Are you sure that you want to add Harry Potter and the Philosopher's Stone to your list?") ) {
    harryPotterRemove.style.display = "block";
    harryPotterAdd.style.display = "none";
    harryPotterCard.style.display = "none";
    harryPotterAdded = true;
  }
}


/*============ FOR MULTIPLE PIECE ==========*/
var multiplePieceCard = document.getElementById("multiple-piece");
var multiplePieceBtn = document.getElementById("small-multiple-piece");
var multiplePieceClose = document.getElementsByClassName("close")[13];

// When the user clicks on the button, open the modal
multiplePieceBtn.onclick = function() {
  multiplePieceCard.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
multiplePieceClose.onclick = function() {
  multiplePieceCard.style.display = "none";
}

var multiplePieceAdd = document.getElementById("multiple-piece-add");
var multiplePieceRemove = document.getElementById("multiple-piece-remove");
var multiplePieceAdded = false;

multiplePieceRemove.onclick = function() {
  if (  confirm("Are you sure that you want to remove Multiple Piece from your list?") ) {
    multiplePieceAdd.style.display = "block";
    multiplePieceRemove.style.display = "none";
    multiplePieceCard.style.display = "none";
    multiplePieceAdded = false;
  }
}

multiplePieceAdd.onclick = function() {
  if (  confirm("Are you sure that you want to add Multiple Piece to your list?") ) {
    multiplePieceRemove.style.display = "block";
    multiplePieceAdd.style.display = "none";
    multiplePieceCard.style.display = "none";
    multiplePieceAdded = true;
  }
}


/*============ FOR I AM NUMBER FOUR ==========*/
var numberFourCard = document.getElementById("number-four");
var numberFourBtn = document.getElementById("small-number-four");
var numberFourClose = document.getElementsByClassName("close")[14];

// When the user clicks on the button, open the modal
numberFourBtn.onclick = function() {
  numberFourCard.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
numberFourClose.onclick = function() {
  numberFourCard.style.display = "none";
}

var numberFourAdd = document.getElementById("number-four-add");
var numberFourRemove = document.getElementById("number-four-remove");
var numberFourAdded = false;

numberFourRemove.onclick = function() {
  if (  confirm("Are you sure that you want to remove I Am Number Four from your list?") ) {
    numberFourAdd.style.display = "block";
    numberFourRemove.style.display = "none";
    numberFourCard.style.display = "none";
    numberFourAdded = false;
  }
}

numberFourAdd.onclick = function() {
  if (  confirm("Are you sure that you want to add I Am Number Four to your list?") ) {
    numberFourRemove.style.display = "block";
    numberFourAdd.style.display = "none";
    numberFourCard.style.display = "none";
    numberFourAdded = true;
  }
}

/* END PORTION FOR ITEM CARDS */


const search = () => {

  const searchbox = document.getElementById("search-item").value.toUpperCase();
  const availablecards = document.getElementById("gamecards")
  const heading = document.querySelectorAll(".title")
  const individualcards = availablecards.getElementsByTagName("h3")

  for(var i = 0; i < individualcards.length; i++)
  {
    let match = heading[i].getElementsByTagName('h3')[0];


    if(match){
      let textvalue = match.textContent || match.innerHTML;

      if(textvalue.toUpperCase().indexOf(searchbox) > -1){
        heading[i].style.display = "";
      }else{
        heading[i].style.display = "none";
      }
    }
  }
}