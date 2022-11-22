//array of composers (12 in total)
const composerList = ['Brahms', 'Mozart', 'Beethoven', 'Mendelssohn', 'Bach', 'Vivaldi', 'Wagner', 'Richard Strauss', 'Stravinsky', 'Schoenberg', 'Rachmaninoff', 'Shostakovich'];

//array of locationactions (4 in total)
const locationActions = ['once went to',
                        'once stayed in',
                        'once travelled through',
                        'once performed in'];

//array of locations (12 in total)
const locationList = ['London',
                    'Paris',
                    'Bolivia',
                    'Pyongyang',
                    'Guadalajara',
                    'Timbuktu',
                    'Ouagadougou',
                    'Transylvania',
                    'Newcastle-upon-Tyne',
                    'Darkest Peru',
                    'Petropavlovsk',
                    'Djibouti'];

//array of verbs (12 in total)
const verbList = ['bonked',
                'ate fondue off',
                'gave an unwanted sensual massage to',
                'invented Reddit with',
                'very ineffectually punched',
                'pretended to be',
                'ran away from a murderous horde with',
                'played Dungeons and Dragons with',
                'roundly insulted',
                'defenstrated',
                'played naked leapfrog with'];

//array of other people (12 in total)
const otherPersonList = ['the Pope',
                        "Joe Biden's great-great-great-grandmother",
                        'Bruce Forsyth',
                        'the Holy Roman Emperor',
                        "a pulsating green blob from Kwx'trrrmooool",
                        'Zaphod Beebelbrox',
                        'a human statue',
                        "the period's greatest ostrich tickler",
                        'the entire nation of Macedonia',
                        'a Russian eunuch',
                        'the Emperor of Prussia',
                        "the first person ever to say 'Wazaaap'"];

const fact = function() {
    const randomNum = function(array) {
        return Math.floor(Math.random() * array.length);
    };
        
    const composer = composerList[randomNum(composerList)];
    const locationA = locationActions[randomNum(locationActions)];
    const locationL = locationList[randomNum(locationList)];
    const verb = verbList[randomNum(verbList)];
    const otherPerson = otherPersonList[randomNum(otherPersonList)];
    
    const sentence = `${composer} ${locationA} ${locationL} and ${verb} ${otherPerson}`;

    console.log(sentence);
}

fact();