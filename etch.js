      const contaiNer = document.querySelector('#container');

        let cellColour = "fixed"; // for Step 5 in the Assignment. Must initialise before can use updateDivColour().

        createSquareDiv(4); // 7 sq does not work. Ask at TOP.

        function createSquareDiv(numberSqPerSide) {

            let startSquareDiv = 1;
            let endSquareDiv = numberSqPerSide;
            let measureHeightWidth = numberSqPerSide;
            let divCell = 1;

            for (startSquareDiv = 1; startSquareDiv <= endSquareDiv; startSquareDiv++) {
                const contentSquareDiv = document.createElement('div');
                for (divCell = 1; divCell <= endSquareDiv; divCell++) {
                    const divCellColumn = document.createElement('div');
                    divCellColumn.classList.add("column");
                    divCellColumn.textContent = divCell;
                    contentSquareDiv.appendChild(divCellColumn);
                    divCellColumn.style.height = (600 / measureHeightWidth) + "px";
                    divCellColumn.style.width = (600 / measureHeightWidth) + "px";
                    divCellColumn.addEventListener("mouseover", function (e) { updateDivColour(e.target) });
                    // here, I pass "e" specifically "e.target" from the function (e) to the updateDivColour function
                }
                const divToClearFloat = document.createElement('div');
                divToClearFloat.classList.add('row');
                contentSquareDiv.appendChild(divToClearFloat);
                contaiNer.appendChild(contentSquareDiv);
            }
        }

        function updateDivColour(newColourForSquareDiv) { // receives "e.target"
            switch (cellColour) {
                case "fixed":
                    newColourForSquareDiv.style.background = 'blue'; // Step 3 in the Assignment 
                    newColourForSquareDiv.style.opacity = 1.0; // this is to ensure the squareDiv is not affected by "increase10" opacity.
                    break;
                case "crazy":
                    newColourForSquareDiv.style.background = createRGBRandomColour();   // Step 5 Random Colour in the Assignment 
                    newColourForSquareDiv.style.opacity = 1.0; // this is to ensure the squareDiv is not affected by "increase10" opacity.
                    break;
                case "increase10": // Step 5 10% increase to Black in the Assignment. Default for Opacity is 1. 
                    newColourForSquareDiv.style.background = 'black';
                    let currentOpacity = Number(newColourForSquareDiv.style.opacity); // to convert "opacity object" equivalent to a number.
                    currentOpacity += 0.1;
                    newColourForSquareDiv.style.opacity = currentOpacity;
                    break;
                default:
                    alert("Technical Error");
            }
        }

        const clearColour = document.querySelector('#clearColourSquareDiv');
        clearColour.addEventListener("click", resetColourSquareDiv);

        function resetColourSquareDiv() {  // Step 4, to remove the CURRENT Grid in the Assignment 
            while (contaiNer.firstChild) {
                contaiNer.removeChild(contaiNer.firstChild);
            }
            let newSquareDiv = prompt("Please enter the number of squares per side you woud like?", "2");
            createSquareDiv(newSquareDiv); // Step 4, to populate the NEW Grid in the Assignment 
        }

        const createRGBColour = document.querySelector('#createRandomRGB'); // Step 5 Random Colour in the Assignment. 
        createRGBColour.addEventListener("click", function () { cellColour = "crazy" });
        // this pass NO parameter from "function ()" to the "{}". Here the function produces STATIC argument. 

        const createFixedColour = document.querySelector('#createFixedColour'); // Extra step 5 in the Assignment.
        createFixedColour.addEventListener("click", function () { cellColour = "fixed" });

        function createRGBRandomColour() { // Step 5 Random Colour in the Assignment. 
            let red = Math.floor(Math.random() * 255); // to create random number from 0 to 256.
            let green = Math.floor(Math.random() * 255);
            let blue = Math.floor(Math.random() * 255);
            return "rgb(" + red + ", " + green + ", " + blue + ")"; // example rgb(2, 255, 0)
        }

        const create10PercentBlack = document.querySelector('#createIncrementBlack'); // Step 5 10% increase to Black in the Assignment. 
        create10PercentBlack.addEventListener("click", function () { cellColour = "increase10" });

        /*
        to ask TOP about my issue with GRID for 7x7, 11x11
        */
