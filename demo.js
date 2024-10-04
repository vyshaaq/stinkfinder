// Offensive word library
const offensiveWords = [
  'bad', 'awful', 'hate', 'stupid', 'terrible', 'nasty', 'fuck', 'idiot', 'dumb', 
  'horrible', 'trash', 'fool', 'useless', 'annoying', 'suck', 'disgusting', 'crap', 
  'moron', 'asshole', 'bitch', 'bastard', 'shit', 'damn', 'hell', 'retard', 'jerk', 
  'prick', 'douche', 'scum', 'scumbag', 'wanker', 'slut', 'whore', 'cunt', 'piss', 'bad', 'awful', 'hate', 'stupid', 'terrible', 'nasty', 'fuck', 'idiot', 'dumb', 
  'horrible', 'trash', 'fool', 'useless', 'annoying', 'suck', 'disgusting', 'crap', 
  'moron', 'asshole', 'bitch', 'bastard', 'shit', 'damn', 'hell', 'retard', 'jerk', 
  'prick', 'douche', 'scum', 'scumbag', 'wanker', 'slut', 'whore', 'cunt', 'piss', 
  'freak', 'psycho', 'loser', 'maniac', 'dipshit', 'fuckhead', 'motherfucker', 'cock', 
  'dick', 'pussy', 'twat', 'knob', 'bollocks', 'arse', 'arsehole', 'numbnuts', 'bitchy', 
  'douchebag', 'fuckwit', 'shithead', 'dickhead', 'fuckface', 'screw', 'fucked', 
  'twatface', 'whorebag', 'bastards', 'bullshit', 'asswipe', 'dipshit', 'pissant', 
  'bugger', 'scumbag', 'ratbag', 'douchebag', 'sonofabitch', 'shite', 'jackass', 
  'arsewipe', 'meanie', 'jerkoff', 'cocksucker', 'cockwomble', 'shitbag', 'twatwaffle', 
  'wankstain', 'prickhead', 'arsehead', 'fucktard', 'spaz', 'nazi', 'twathead', 'slutbag', 
  'whoreface', 'clown', 'nigger', 'weirdo', 'nigga', 'turd', 'queer', 'nutjob', 'knucklehead', 
  'bonehead', 'butthead', 'fart', 'dickwad', 'asshat', 'idiotic', 'shitstorm', 'fuckup', 
  'skank', 'bimbo', 'airhead', 'dimwit', 'twit', 'dumbass', 'dumbfuck', 'goon', 'halfwit', 
  'lowlife', 'no-good', 'scuzzball', 'trashbag', 'bitchface', 'skankbag', 'screwup', 
  'whorebitch', 'shitpile', 'fucker', 'fuckboy', 'assmunch', 'shitfaced', 'asslicker', 
  'tit', 'shiteater', 'losers', 'cockknocker', 'tosser', 'githead', 'cuntface', 'shitstain', 
  'dipfuck', 'shitweasel', 'fuckstick', 'wankerhead', 'shitface', 'arselicker', 'assbandit', 
  'maggot', 'bitchass', 'stupidfuck', 'whoreface', 'buttmunch', 'clownfuck', 'turdface', 
  'scumbucket', 'cocksuck', 'fuckhole', 'assclown', 'scumbag', 'fuckwit', 'dipshit', 
  'cuntbag', 'bastardized', 'shitter', 'gobshite', 'fuckbag', 'dickface', 'numbnut', 
  'fuckwit', 'pissant', 'dickbrain', 'asswipe', 'ballbreaker', 'dogshit', 'greaser', 
  'lardass', 'fucking', 'prickface', 'scumfuck', 'shitstick', 'cockbrain', 'jerkbrain', 
  'assbrain', 'fuckrag', 'craphole', 'screwy', 'twatsucker', 'dicknose', 'buttwad', 
  'jerkass', 'stinkhole', 'fuckbutt', 'bitchhole', 'fucktoy', 'nipplehead', 'jizzstain', 
  'assgoblin', 'shitbrick', 'douchewaffle', 'twatwaffle', 'fuckstain', 'cocksplat', 
  'pissrag', 'dicksplat', 'fuckrag', 'knobhead', 'dickwad', 'arsewipe', 'sackface', 
  'gobshite', 'twatbrain', 'cockwad', 'shitspitter', 'cockspit', 'fudgepacker', 
  'buttsniffer', 'shithawk', 'fuckwit', 'shitlips', 'arsebrain', 'fannyfucker', 
  'pisshead', 'shitflinger', 'pisslicker', 'jerkwad', 'sodoff', 'shitlicker', 
  'assfuck', 'arselicker', 'pissface', 'clitlicker', 'dickbag', 'asscock', 'pissrag', 
  'fuckrag', 'shitsucker', 'dickbreath', 'pissmop', 'wankpuffin', 'fuckwhistle', 
  'shitpouch', 'cockmongler', 'fucksack', 'cockwaffle', 'shitturd', 'dickbag', 
  'fuckbiscuit', 'pisshat', 'shitnugget', 'arsemonkey', 'cockwaffle', 'fuckbiscuit', 
  'arsewaffle', 'shitwaffle', 'dickwaffle', 'shittaco', 'fuckcanoe', 'cockcanoe', 
  'asscanoe', 'fucknugget', 'cocknozzle', 'assnozzle', 'fuckbucket', 'assbucket', 
  'fuckmuffin', 'dickmuffin', 'pissbucket', 'pissflap', 'fuckflap', 'arseflap', 
  'fucktrumpet', 'shittrumpet', 'cocktrumpet', 'arsetrumpet', 'fuckhat', 'pisshat', 
  'shitwaffle', 'fuckspanner', 'cockspanner', 'fuckstick', 'arsehead', 'fuckwagon', 'myre','മൈരേ’,
  'fuckstick', 'arseface', 'shitwagon', 'fucknoodle', 'cocknoodle', 'assnoodle', 
  'shitnoodle', 'fuckpuppet', 'cockpuppet', 'asspuppet', 'shitpuppet', 'fuckhelmet', 
  'cockhelmet', 'asshelmet', 'shithelmet', 'fuckknuckle', 'cockknuckle', 'arseknuckle', 
  'shitknuckle', 'fucknugget', 'cocknugget', 'assnugget', 'shitnugget', 'fuckbarrel', 
  'cockbarrel', 'assbarrel', 'shitbarrel', 'fuckmonkey', 'cockmonkey', 'assmonkey', 
  'shitmonkey', 'fuckdonkey', 'cockdonkey', 'assdonkey', 'shitdonkey', 'fuckweasel', 
  'cockweasel', 'assweasel', 'shitweasel'
  // (Shortened for brevity)
];

// Buttons
const analyzeButton = document.getElementById('analyze-button');
const clearButton = document.getElementById('clear-button');

// Elements
const inputText = document.getElementById('input-text');
const resultsBox = document.getElementById('results-box');

// Analyze the sentiment based on offensive words
analyzeButton.onclick = function () {
    const text = inputText.value.trim().toLowerCase();
    let sentiment = 'neutral'; // Default sentiment

    if (text) {
        let offensiveCount = 0;

        // Check offensive words count
        offensiveWords.forEach((word) => {
            if (text.includes(word)) offensiveCount++;
        });

        // Sentiment classification
        if (offensiveCount > 0) {
            sentiment = 'negative'; // Red for offensive content
        } else if (text.match(/\w+/g).length > 3) { // More than 3 words considered positive
            sentiment = 'positive'; // Green for positive content
        } else {
            sentiment = 'neutral'; // Blue for neutral
        }

        // Display sentiment result
        resultsBox.innerHTML = `<p>Sentiment: <strong>${sentiment}</strong></p>`;
        resultsBox.classList.remove('neutral', 'positive', 'negative');
        resultsBox.classList.add(sentiment); // Assign corresponding class
    } else {
        resultsBox.innerHTML = `<p>Please enter a valid sentence!</p>`;
    }
};

// Clear the input and results
clearButton.onclick = function () {
    inputText.value = '';
    resultsBox.innerHTML = '';
    resultsBox.classList.remove('neutral', 'positive', 'negative');
};