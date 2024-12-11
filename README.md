# Letter Memorisation Trainer

## Project Overview
The **Letter Memorisation Trainer** is a web-based application designed to test and improve users' ability to memorise associations between letters and numbers. The app challenges the user by displaying letters sequentially and prompting them to select the corresponding number through a circular button interface. At the end of each round, the application provides detailed results, showing incorrect answers along with the correct ones.

## Features
- **Interactive Button Input Mode**: Users select their answers using buttons arranged in a circular interface.
- **Round-by-Round Feedback**: After each round, the app displays:
  - A summary of incorrect answers.
  - The correct answers for any mistakes.
- **Letter-Number Associations**: Predefined associations between letters and numbers are shuffled each round to keep the challenge dynamic.
- **Responsive Design**: Optimised for various screen sizes, ensuring usability across devices.

## How It Works
1. A letter is displayed at the centre of the screen.
2. Users select the corresponding number by clicking on the correct button in the circular interface.
3. At the end of the round, results are displayed, highlighting:
   - Incorrect answers.
   - The correct answers for each mistake.

## Setup Instructions
### Prerequisites
- A modern web browser (e.g., Chrome, Firefox, Edge).

### Steps to Run
1. Download or clone the project repository.
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
