/*	-WHAT IS THIS?-
	The script featured here is an explanation of how to make your own custom addition to MPMB's D&D 5e Character Tools.
	To add your own content to the Character Sheet, use the syntax below and save it in a file. You can then import this file directly to the sheet using the "Import" button and "Import/Export" bookmark.
	There you can either import the file as a whole or just copy the text into a dialogue.

	-KEEP IN MIND-
	Note that you can add as many custom codes as you want, either by importing consecutive files or pasting the scripts into the dialogue.
	It is recommended to enter the code in a freshly downloaded or reset sheet before adding any other information so that there won't be any conflicts.
*/

/*	-INFORMATION-
	Subject:	Subclass (a.k.a. Archetype)
	Effect:		This is the syntax for adding a new subclass/archetype to a class that is defined in the sheet, or to a class you made yourself
	Sheet:		v12.999 (2017-11-29)
*/

var iFileName = "Bard College of Discord.js"; // Optional; This is how the file will be named in the sheet if you import it as a file and not copy-paste its content. Only the first occurrence of this variable will be used
RequiredSheetVersion(12.999); // Optional; This is the minimum required version number of the sheet for the script to work. If the sheet being used to import the script is of an earlier version, the user will be warned

AddSubClass( // this is the function you will be calling to add the variant

	"bard", // Parent Class object name; Required; This has to be the exact name of the class of which you are adding a subclass. Look for the name of the class in the ClassList variable. For the default 12 classes these names are: "barbarian", "bard", "cleric", "druid", "fighter", "monk", "paladin", "ranger", "rogue", "sorcerer", "warlock", and "wizard"
	
	"College of Discord", // Object name; Required; The name the entry in the ClassSubList will have. This can be anything, it is just something that the sheet uses to reference the new entry and it will never be printed anywhere
	
	{ // don't forget this opening bracket

		regExpSearch : /^(?=.*special)(?=.*me).*$/i, //required; regular expression of what to look for (i.e. now it looks for any entry that has both the words "special" and "me" in it, disregarding capitalization). If this looks to complicated, just write: /specialme/i
		
		subname : "College of Discord", //required; the name of the subclass
		
		source : ["HB", 0], //required; the source and the page number. "HB" stands for homebrew. See the "Complete SourceList" for an overview of sources that are already defined. Or define a new source using the "Homebrew Syntax - SourceList.js". // This can be an array of arrays to indicate the things appears in multiple sources. For example, if something appears on page 7 of the Elemental Evil Player's Companion and on page 115 of the Sword Coast Adventure Guide, use the following: [["E", 7], ["S", 115]]
		
		// after defining the above three, you don't need to define anything more, but you can. Defining more stuff will overwrite the entries as they are given in the ClassList. So if you do not need something to be different than the basics of the class (for example, you subclass uses the same spellcasting ability), then you don't need to define it again.
		// For the syntax of how to define more stuff, look at the ClassList (see "Homebrew Syntax - ClassList.js"). You can define all the same stuff in the same way. The below are a couple of examples:
		
		fullname : "College of Discord Bard", //if no fullname is defined it will be automatically generated as "Class Name (Subclass name)". In this example that would be: "MyClass (Path of SpecialMe)"
		
		abilitySave : 6, //overwrites the abilitySave that was defined in the ClassList
		abilitySaveAlt : 6,//overwrites the abilitySaveAlt that was defined in the ClassList
		spellcastingFactor : 1, //overwrites the spellcastingFactor that was defined in the ClassList
		
		features : { //unlike the other entries, "features" will not delete all the features from the ClassList, but will add to the features in the ClassList. For this to work properly, the feature object has to be named "subclassfeatureX" and not something appropriate for the feature. The below are the features of the purple Dragon Knight
			"subclassfeature3" : {
				name : "Bonus Proficiencies",
				source : ["HB", 0],
				minlevel : 3,
				description : "/n  " + " When you join the College of Discord at 3rd level, you gain proficiency with medium armor and one additional musical instrument.",
				armor : [true, true, false, false], //optional; the 4 entries are for proficiency in: ["light", "medium", "heavy", "shields"]. Be sure to always add all four statements of true/false!
				toolProfs : [["Musical instrument", 1],
			},
			"subclassfeature3" : {
				name : "Melodic Mayhem",
				source : ["HB", 0],
				minlevel : 3,
				description : "/n  " + " Beginning at 3rd level, you gain the ability to use your musical instruments effectively in martial combat. When you wield your musical instrument in one or two hands, and no other weapons, it becomes a weapon that deals 1d6 bludgeoning damage and has the versatile (1d8) property. When used in one hand, it gains the finesse property. Wielded with two hands, your Armor Class increases by 2.",
				weapons : [true, false, ["hand crossbow, longswords, rapiers, shortswords, instruments"]], //optional; the 3 entries are for: ["simple", "martial", "other"]. Be sure to always add both statements of true/false!
		},
			"subclassfeature3" : { // has to start with "subclassfeature" followed by a number. Note that the name has to be unique for this subclass, but it can be the same name as one of the features of the class in the ClassList variable. If you use the same name as a feature in the ClassList variable, it will be overwritten with this entry
				name : "Battaglia",
				source : ["HB", 0],
				minlevel : 3,
				description : "\n   " + " As a bonus action on your turn, you can choose to teleport to an unoccupied square adjacent to any number of creatures you can see within 30 feet of you.", + "/n  " + " Any Large or smaller creature within 5 feet of your new location must succeed on a Strength saving throw or be knocked prone. At 6th level, the radius of this effect increases to 10 feet, and to 15 feet at 14th level.",
				usages : ["Cha mod per"],
				recovery : ["short rest"],
				action : ["bonus action"],
				
			},
			"subclassfeature6" : {
				name : "Encore",
				source : ["HB", 0],
				minlevel : 6,
				description : "\n   " + " When you succeed on a Strength, Dexterity, or Constitution saving throw in combat, you gain advantage on your next skill check, saving throw, or attack roll until the end of your next turn." + "/n  " + " Additionally, your attacks with your musical instruments count as magical for the purpose of overcoming resistance and immunity to nonmagical attacks and damage.",
				atkAdd : ["if (WeaponName.match(/instrument/i)) {fields.Description += 'Counts as magical';}; ", "My Instruments count as magical for overcoming resistances and immunities."],
				},
			"subclassfeature10" : {
				name : "Pandemonium",
				source : ["HB", 0],
				minlevel : 14,
				description : "within 300 feet of you. Using your action to activate this feature, in a 30-foot cube which requires concentration and lasts for 1 minute When the field appears, friendly creatures within the field experience a haste-like effect and gain a +2 bonus to AC, have advantage on Dexterity saving throws, and gain an additional action on each turn. That action can be used only to take the Attack (one weapon attack only), Dash, Disengage, Hide, or Use an Object action. A creature can only benefit from one such effect at a time. While you concentrate on this effect, your speed is 0, and you can only make melee attacks against creatures within 5 feet of you. If you have a fly speed, or are held in place my magical means, you can hover in place." + "/n  " + "when a hostile creature starts its turn within the field, or moves there for the first time, must make a Wisdom saving throw or be affected for the duration. Affected creatures’ speed is halved, takes a –2 penalty to AC and Dexterity saving throws, and can’t use reactions. On an affected creature’s turn, it can use either an action or a bonus action, not both. Regardless of the creature’s abilities or magic items, it can’t make more than one melee or ranged attack during its turn." + "/n  " + " If the creature attempts to cast a spell with a casting time of 1 action, roll a d20. On an 11 or higher, the spell doesn’t take effect until the creature’s next turn, and the creature must use its action on that turn to complete the spell. If it can’t, the spell is wasted. If a creature affected by this feature exits the field, the effect ends for it at the start of its next turn." + "/n  " + " When your solo ends, you can’t move or take actions until after your next turn." + "/n  " + "Once you use this feature, you must finish a long rest before you can use it again.", 
				usages : [ "1 "],
				recovery : ["long rest"],
				action : ["action"],
			
			},
		}
	}
);