/*declare value of container and initialize all functions to defaults*/
const container = document.querySelector('.container');

const button = document.getElementById('button')

populateGrid(newsize = 16)
changeGridDimensions(newsize = 16)
changeDivs()

/*prompts user input, resets, resizes and repopulates grid according to specified value*/
button.addEventListener('click', clearAndResize)

/*addDivToContainer creates element newDiv, gives class name, and appends to container*/
function addDivToContainer() {
    const newDiv = document.createElement('div');
    newDiv.className = 'cells'
    container.appendChild(newDiv)
    
};


/*populateGrid creates enough divs to evenly fill the grid and calls addDivToContainer to append
 (16 default; variable named newSize as it is called later when resizing) */ 
function populateGrid(newSize = 16) {
    let divNumber = newSize * newSize;
    for (i = 0; i < divNumber; i ++) {
    addDivToContainer();
    }
};

/*changeGridDimensions alters the grid dimensions to match the new user specified grid size */
function changeGridDimensions(newSize = 16) {
    container.style.gridTemplateColumns = (`repeat(${newSize}, 1fr)`);
    container.style.gridTemplateRows = (`repeat(${newSize}, 1fr)`);
}

/*changeDivs is the function that changes the color of the divs upon mouseover of the specific div; 
uses forEach and querySelectorAll to loop through Divs*/
function changeDivs() {
    const divs = document.querySelectorAll('.cells');
    divs.forEach( div => {
    div.addEventListener('mouseover', (e) => {
        div.classList.add('change');
    })
})
};

/*get new size asks the user for their new preferred grid size; added to button eventlistener*/
function getNewSize() {
    newSize = prompt('How many squares per side would you like?')
    return newSize
}

/*clearAndResize removes the .change class from changed divs to reset, and also asks for user input of new size, 
and resizes the grid and fills it using all the functions previously defined*/

function clearAndResize() {
    changedDivs = document.querySelectorAll('.change')
    changedDivs.forEach (changedDiv => {
        changedDiv.classList.remove('change')
    })
    newSize = getNewSize()
    populateGrid(newSize)
    changeGridDimensions(newSize)
    changeDivs()
}



