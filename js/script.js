// Step 1: Grab Tabs and Panels
const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.panel');

// Menu hamburger
const btn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');
const logo = document.getElementById('logo');

// Step 2: Event Listener for Tabs menu
tabs.forEach(tabItem => {
  // Add event listener to each tab
  tabItem.addEventListener('click', onTabClick);
});

// Menu Hamburger Event Listener
btn.addEventListener('click', navToggle);

// Menu Hamburger Function
function navToggle() {
  // When clicking the nav hamburger:
  // Add the 'open' class to the button to turn it into an 'X'
  // Then add the overlay Menu
  btn.classList.toggle('open');
  menu.classList.toggle('flex');
  menu.classList.toggle('hidden');

  // Check if the oevrlay is in 'flex' mode
  if(menu.classList.contains('flex')) {
    logo.setAttribute('src', './images/logo-bookmark-footer.svg');
  } else {
    logo.setAttribute('src', './images/logo-bookmark.svg');
  }
}

function onTabClick(e) {
  if(e.target.className === 'py-5 cursor-pointer hover:text-softRed'){

  tabs.forEach((tabItem)=>{
    // tabItem.children[0] gives you all of the tabs
    // Remove the active classes for each tab
    tabItem.children[0].classList.remove(
      'border-softRed',
      'border-b-4',
      'md:border-b-0'
      );
    })
    
    // Hide all panels
    panels.forEach((panelItem)=>{
      panelItem.classList.add('hidden');
    })
    
    
  // Activate a new tab and panel based on the target clicked (tab clicked)
  // e.target => pertains to the exact element / tab you clicked on
  e.target.classList.add('border-softRed', 'border-b-4');

  // Get the data target of the class you clicked on
  const classString = e.target.getAttribute('data-target');
  
  // Remove the hidden class of the panel with the class similar to that of the data-target
  document.getElementById('panels').getElementsByClassName(classString)[0].classList.remove('hidden')
}
}