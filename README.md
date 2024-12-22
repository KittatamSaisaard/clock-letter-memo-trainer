# Clock Letter Memo Trainer

## Project Overview
The **Clock Letter Memo Trainer** is a web-based application designed to help users memorise and strengthen their associations between letters and clock hour hands. This tool is especially useful for those practising the no-flip method for solving a Rubik's Clock. 

The app displays letters corresponding to clock hour positions (A–K for 1–11 and O for 0) and challenges users to select the correct hour by clicking on a circular button interface. After each round, users receive feedback on their performance.

## Features
- **Interactive Button Input Mode**: Users select the clock hour associated with a displayed letter using a circular button interface.
- **Dynamic Challenge**: Letters are shuffled each round to keep the exercise engaging and varied.
- **Responsive Design**: Optimised for all screen sizes, making it accessible on desktops, tablets, and smartphones.

## How It Works
1. A letter (e.g., A, G, or O) is displayed at the centre of the screen.
2. Users click the button corresponding to the correct clock hour for the displayed letter.
3. At the end of each round, the app provides feedback:
   - Incorrect selections.
   - The correct hour-hand positions for any errors.

## Setup Instructions
### Prerequisites
- A modern web browser (e.g., Chrome, Firefox, Edge).

### Steps to Run
1. Download or clone the project repository:
   ```bash
   git clone https://github.com/KittatamSaisaard/clock-letter-memo-trainer.git
   ```
2. Open the `index.html` file in your preferred browser.

## User Interface
- **Letter Display**: Displays the current letter to memorise.
- **Circular Button Grid**: Buttons for selecting the corresponding number.
- **Feedback Section**: Displays results at the end of each round, highlighting errors and providing correct answers.

## Customisation
- Modify the `letters` and `correctAnswers` arrays in the script to change the letter-number associations.
- Adjust button positioning or layout in the `initializeButtons` function in the script.

## Contributing
Feel free to submit issues or contribute enhancements via pull requests. Ensure code quality by following best practices.

## License
This project is open-source and available under the [MIT License](LICENSE).
