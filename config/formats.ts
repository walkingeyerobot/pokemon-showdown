// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.ts
/*
If you want to add custom formats, create a file in this folder named: "custom-formats.ts"

Paste the following code into the file and add your desired formats and their sections between the brackets:
--------------------------------------------------------------------------------
// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.ts

export const Formats: FormatList = [
];
--------------------------------------------------------------------------------

If you specify a section that already exists, your format will be added to the bottom of that section.
New sections will be added to the bottom of the specified column.
The column value will be ignored for repeat sections.
*/

export const Formats: import('../sim/dex-formats').FormatList = [

	{
		section: "DPP Doubles",
		column: 4,
	},
	{
		name: "[Gen 4] VGC 2009",
		mod: 'gen4pt',
		gameType: 'doubles',
		searchShow: true,
                ruleset: ['Flat Rules', '! Adjust Level Down', 'Max Level = 50', 'Team Preview', 'Picked Team Size = 4'],
		banlist: ['Tyranitar', 'Rotom', 'Judgment', 'Soul Dew'],
	},
];
