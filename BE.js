/*
 * Be careful editing the file because other localizations fall back here.
 */

".country": "Belgium",

"109.params": {
    "n": 6,
},
"150.enabled": true,
"150.problemLink": "W:Benelux_Freeway",
"151.enabled": true,
"151.problemLink": "W:Benelux_Major_Highway",
"152.enabled": true,
"152.problemLink": "W:Benelux_Minor_Highway",
"154.enabled": true,
"154.problemLink": "W:Benelux_Primary_Street",

"160.enabled": true,
"160.problemLink": "W:Benelux_Freeway",
"160.params": {
    "solutionEN": "Rename the Freeway segment to a 'Anum' or 'Anum - Enum' or 'Anum ri Dir1 / Dir2'",
    "regexp": "!/^(A|B|E)[0-9]+( - (A|E)[0-9]+)*( ri [^\\/]+( \\/ [^\\/]+)*)?$/",
},

"163.enabled": true,
"163.problemLink": "W:Benelux_Roads#Highways",
"163.solutionLink": "W:Benelux_Ramp",
"163.params": {
    "titleEN": "Ramp name starts with a number",
    "problemEN": "The Ramp name starts with a number",
    "solutionEN": "Rename the Ramp in accordance with the guidelines",
    "regexp": "/^([0-9]+)/",
},
"171.enabled": true,
"171.problemLink": "W:Benelux_Ramp#Text_To_Speech_.28TTS.29_-_ri_-_di",
"171.params": {
    "problemEN": "The street name contains incorrect 'ri.' abbreviation",
    "solutionEN": "Change the 'ri.' abbreviation to 'ri' (no dot)",
    "regexp": "/(^|\\b)ri\\./i",
},
