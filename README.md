calculator-app/
├── index.html        # Semantic HTML5 markup and accessible keypad grid
├── style.css         # Modern styling, CSS Grid, Flexbox, and media queries
├── script.js         # Math functions, parser, and keyboard event listener
└── README.md         # Project documentation and specifications

 Keyboard-First Architecture: Full control via physical keyboard with strict whitelist validation and error alerts for unauthorized keypresses.

 BODMAS / PEMDAS Expression Parsing: Evaluates complete inline equations containing multiple operations while maintaining strict operator precedence (*, /, % before +, -).

 Safe Evaluation (Zero eval()): Uses a custom token-based evaluation routine that executes each calculation step through dedicated atomic functions.

 Runtime Zero-Division Traps: Guards against dividing or performing modulo by zero (b === 0), returning clear visual error feedback.

 Responsive Layout: Centered flexbox layout with CSS Grid button matrix and responsive media queries optimized for desktops, tablets, and mobile screens.

 Clean Visual Hierarchy: Dual-tier display separating running expression history from active input, styled with accessible high-contrast colors and tactile active-state animations.
