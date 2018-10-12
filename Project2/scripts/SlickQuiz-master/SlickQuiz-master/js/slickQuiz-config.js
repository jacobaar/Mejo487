// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Let's see what you've learned.",
        "main":    "<p>This test will determine just how ready you are to enter the gamingspace as a developer.</p>",
        "results": "<h5>To Learn More:</h5><p>Check back through the slides to get a better feel for how the development cycle works.</p>",
        "level1":  "I'm convinced you are already a Game Developer",
        "level2":  "Huh... Do you do this in your spare time?",
        "level3":  "I have a feeling you're an intern.",
        "level4":  "You may just have some potential",
        "level5":  "Keep your day job friendo..." // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "Which step has you planning the nitty-gritty details of your game?",
            "a": [
                {"option": "Coding Stage",      "correct": false},
                {"option": "Envision Stage",     "correct": true},
                {"option": "Choosing your Engine Stage",      "correct": false},
                {"option": "Naming Stage",     "correct": false} // no comma here
            ],
            "correct": "<p><span>YES!!!</span> The Envision Stage is the time for you to decide on as many details as you can. Don't be afraid to go as detailed as possible!</p>",
            "incorrect": "<p><span>You tried... I guess.</span> It's the Envision Stage. This is the ONLY stage where you should be focusing on the nitty-gritty details.</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "What's the best way to ensure the quality of your game?",
            "a": [
                {"option": "Coding",               "correct": false},
                {"option": "Playtesting",   "correct": true},
                {"option": "Envisioning",               "correct": false},
                {"option": "Art Direction", "correct": false} // no comma here
            ],
            "select_any": true,
            "correct": "<p><span>YES!!!</span> Playtesting is the best way to ensure quality. By playtesting, players can give you valuable feedback on pieces of the game that work and don't work.</p>",
            "incorrect": "<p><span>You tried... I guess</span> Nope! The playtesting is the best way to quality test your game. The playtesting stage is where QA testing happens.</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "How should you choose your studio name and logo?",
            "a": [
                {"option": "Choosing something unique",           "correct": true},
                {"option": "Randomly",                  "correct": false},
                {"option": "Choosing something common",  "correct": false},
                {"option": "Choosing something memorable",          "correct": true} // no comma here
            ],
            "correct": "<p><span>YES!!!</span> Unique and memorable are the best way to be remembered.</p>",
            "incorrect": "<p><span>You tried... I guess.</span> Nope! You want to be unique and memorable. This way people will know exactly who you are.</p>" // no comma here
        },
        { // Question 4
            "q": "How should you go about picking your engine?",
            "a": [
                {"option": "Choosing something that fits your needs.",    "correct": true},
                {"option": "If a good one isn't available, make your own.",     "correct": true},
                {"option": "Choose the first one you find.",      "correct": false},
                {"option": "Pick the one that comes highly recommended by someone you know who.",   "correct": false} // no comma here
            ],
            "correct": "<p><span>YES!!!</span> Bingo! You need an engine that fits your needs. If one doesn't exist, make one. EZ.</p>",
            "incorrect": "<p><span>You tried... I guess.</span> You want one that fits your needs. Picking the first one or going with one based on a recommendation doesn't always work.</p>" // no comma here
        },
        { // Question 5
            "q": "Which stage of Game Development yields satisfaction?",
            "a": [
                {"option": "Naming Stage",    "correct": true},
                {"option": "Finalization Stage",     "correct": true},
                {"option": "Playtesting Stage",     "correct": true},
                {"option": "Coding Stage",     "correct": true} // no comma here
            ],
            "correct": "<p><span>YES!!!</span> Yes! Exactly! You have to be proud and satisfied with the work you do the entire way through. If you're not satisfied, then how can players be satisfied?</p>",
            "incorrect": "<p><span>You tried... I guess.</span> Mmmmm close but not quite. You must be satisfied with your work the entire time you are working. If you aren't, something needs to be addressed.</p>" // no comma here
        } // no comma here
    ]
};
