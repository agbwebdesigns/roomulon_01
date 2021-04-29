
//-future upgrades to the room creator
  //-different sized rooms
    //-there can be an object for each sized room as well
  //-multiple floors
  	//-a different floor array for each floor
  	//-which floor array you are accessing will determine which floor you are on
  //-different sized maps
  //-a journal for keeping notes about different rooms
  //-finding a staircase that leads to another floor
  //-there can be an object for the overall game that creates the first floor
  //-each game and each floor and each room can all be their own objects
    //-the game object will hold all of the directions and commands as well as the objects for everything else
  //baddies that randomly are created and show up in the room that you are in
    //an object for each different kind of baddie
  //-a way to keep notes on different rooms to remember which is which
  //a way to fast travel between rooms
    //or at least a way to see the path that needs to be travelled on the map
  //create an object for the hero
    //must include: hit points, giving damage unarmed, the ability to take damaged
      //-addons for later: armor worn on the body, rings to buff, damage armed, the ability to equip weapons, each weapon should be its own object, the ability to lvl up
  //need a display for hero stats and equipment
  //-baddies
  	//-large scorpion - if you get stung by a large scorpion the venom will poison you and drain your health by 1hp per minute
  	//-small scorpion - these are more dangerous than the large ones, if you get stung by a large scorpion the venom will poison you and drain your health by 10hp per minute, also you don't get hit for as much during the attach but, the venom is more poisonous.
  //-reset game button
  //-stop combat button
  //if a baddie is created and you are not in the room then it should start to wander around the map and you will be notified when you enter a room with a baddie or if a baddie enters a room that you are in
  	//if a baddie walks into a room that you are in then combat needs to be started
  //-as you level up, the baddies get tougher, they level up too, or higher level baddies are created
  	//-does the player need to lvl up or will the baddie spawn at higher lvls based on player skill?
  	//-as your lvl of skill increases baddies will spawn based on those lvl increases
  	//-have different baddies spawn based on which skills are leveling up
  //-if you make a lot of noise while walking around the different rooms and killing the baddies then then baddies in the other rooms will hear you and walk towards you and come into the room you are in and attack you
  	//-sneaking skill
  	  //-baddies need the ability to hear you
  //tracking all of the baddies running around and knowing where they are doesn't matter
  //-there needs to be a check when in combat and trying to click the direcion buttons to see if an escape is possible
  //-as you walk into a new room the next text message after, ex. ('you travel north'), should be, ("you have entered a new room") or ("you enter a new area"), if you are entering a new room but, not if you enter a room that already exists
  //-create a new combat engine
  	//-this governs combat between the hero and the baddie
  	//-right now this is part of the player object


  //-stats at the end of the game
	//-how many rooms created
	//-how many baddies created/defeated
	//-how long the game lasted


  //-add doors to the game
  	//-as each new room is created the directions available can also randomly have a door or not and it can be locked or not
  		//-having a locked door could indicate that there is something of value behind the door, weapon, armor, etc.
  	//-lockpicking skill
  	//-booby traps
  	  //-disarm skill
  //-chests with things to use throughout the game
  	//-need an inventory
  	//-weapons
  	//-potions
  	//-locked chests
  	  //-lockpicking skill
  	  //-boobie traps that destroy contents inside if a fail to disarm happens
  	    //-disarm skill
  	  //-the ability to smash the lock and open it with force
  //-merchants that travel throughout the game that you can run into and trade with


  //- baddies have a main baddie that spawn the rest of the baddies
  	//-rats have a rat king, spiders have a spider queen, slimes have a great slime, snakes have a cobra king, zombies have a necromancer, etc.
  	  //-you have to fight each one differently
  	  //-there are only rats in the rat quest, spiders in the spider quest etc, ending in the boss


  //the ability to pick up weapons, a knife or a pipe
  //maybe don't change the chance of a baddie being spawned but, add a weapon to see how this changes the balance
  	//the weapon will need to be added to inventory
  	//need the ability to equip the weapon from the inventory
  	//the weapon gives an extra die roll
  //a look button to see if and how many baddies there are in a room
  //a search room ability to see what is in the room

  //-weapon
	  //the weapon needs to be an object with only one attribute, how many dice rolls to add to the weapon bonus
	  //then i need a way to read how many dice rolls and add that to augment the player
	  //need a way to equip the weapon
	  //the weapon should move from inventory to equiped, or show that it is equiped in inventory

  //-container
  	  //the weapon needs to be spawned by a container, which is spawned by the room
	  //it should be kept in a container until retrieved by the hero
	  //the hero needs to see the container
	  //open the container
	  //look into the container
	  //take items out of the container
	  //transfer the items to the players inventory
	  //put them into inventory of the player
	  //-possibly equip items from the container
	  //a container object needs an array to keep its objects in
	  //it also needs a function to create its contents, randomly or otherwise
	  //the container needs to only be created in the first room and the first room shouldn't create a baddie
	  //need the container to create healthpacks too
	  	//one use item
	  	//needs to disappear when used / counter decrements upon use
	  	//need a way to use the healthpack
	  		//the heal button should have an indicator for how many uses the player has depending on how many health packs have been picked up
	  	//pick up the health pack
	  	//it gets added to inventory
	  	//-the health pack use indicator increments by 1 and allows you to use the heal button
	  		//otherwise you get a message saying that you have no health packs
	  	//-when you use the health pack the indicator decrements by 1
	  	//the health pack is removed from inventory

  //-when combat starts a new window opens that is the combat window
  	//-maybe an overlay window
  	//-combat can commence from there
  	  //-a picture/image of the baddie being faught
  	  //-take turns doing combat, heal, run or whathaveyou
  	  	//-the baddie could have a chance at running too
  	  	  //-if they are successful they run off but, their health doesn't heal and they get a nickname
  	  	    //-if they run into other baddies they embolden them and the other baddies get a buff too
  	  	      //-if the named baddie gets killed later on their death further emboldens the other baddies and they get another buff
  	  	        //-there could also be a chance that their death demoralizes the other baddies and they get a negative buff / "lose the will to fight"

  //-need to change the text of the hero attack from punch to slice or bash or smash or whatever the case is depending on if attacking unarmed or with a weapon

  //-info upon death
  	//-how many rooms created
  	//-how many baddies created/killed

  //increase the size of the text box and add all text above it to the text box

  //the look button
	  //directions/how many doors
	  //how many baddies
	  //any chests

  //-change the player cursor to a dot at the center of the screen so the player can see the directions available on the map in the current room
  	//-right now it is a class that is being applied to the current room that turns the entire room square on the map white
  	//-it should be a div that is being moved around so that the css only applies to that div

  //change the text when fighting baddies and leveling up to only display this information when the player stats are being increased.

  //-spawn uber-baddies
  	//-maybe when you reach a certain level they begin to spawn
  	  //-or maybe random
  	//-maybe a random baddie generator that creates baddies and randomly increases the badness of the baddie

  //-have the baddies drop gold when they are killed that the hero can collect
  	//-create a shopkeeper that gets randomly created that you can spend the gold with
  	//-he will have health packs, maps of the area, weapons, armor, etc.

  //-fix the map creating rooms past the boundaries of the map, it should not do this

  //-there needs to be a counter for how many available direction of travel there are on the map at one time
  	//-when a new room is created, the counter needs to increment by the number of available directions in the new room
  	//-the counter needs to decrement by 1 whenever a new room is entered
  	//-there should be a 10% chance that a staircase can be created in a new room
  	//-if the counter drops to 0, you are in the final room that can be created and no new rooms can be made
  		//-in this last room, if the staircase hasn't been created, it needs to be created here

  //-stairs to another level
  	//-get the staircase working in the first room again like the chest
  		//-the staircase is really just a way to create a new map
  	//-then get it to randmonly appear in a room

  	//-need the ability to level up the health, attack and defense power
  	//-mobile first

/**************************************************************************************************************************************************************************************/
	let hero;
/**************************************************************************************************************************************************************************************/
	//an array and counter for new maps (new levels)
	let q= 0;
	let aNewMap= []; 
/**************************************************************************************************************************************************************************************/
	//an array and counter for new rooms
	let y= 0;  //counter for built rooms
	let keyRoom= [];  //this is an array of all of the new room Objects that are created
/**************************************************************************************************************************************************************************************/	
	let joinedArray= [];  //an array that thePath() uses to join directionArray into a string for scanning
	let lastDirection= [];  //this is the last direction that you have travelled
	let currentRoom= [];
	let a= 0;  //x map positioning, (0,0) is the starting room
	let b= 0;  //y map positioning
	let roomPosition= [];  //an array for all of the created rooms
	let combatOnOff= 0;  //has combat been started or not?
	let targetedBaddie= [];
/**************************************************************************************************************************************************************************************/
	//an array and counter for new big rats
	// let brCounter= 0;  //a counting variable for how many rats have been created
	// let br= [];  //an array for all created rats
/**************************************************************************************************************************************************************************************/
	//an array for large spiders
	// let lsCounter= 0;
	// let ls= [];
/**************************************************************************************************************************************************************************************/

	function currentRoomBreakdown()  {  //this function pulls the y number out of the currentRoom array and turns it into an integer so that properties of the current room can be accessed
		let currentRoomSplit= currentRoom[0].split("");
		let currentRoomRange= currentRoomSplit[8];
		let numberWestNine= currentRoomSplit[9];
		let currentRoomParse= parseInt(currentRoomRange);
		let nwn= parseInt(numberWestNine);
		if (isNaN(nwn))  {  //this checks to see if the keyRoom number is greater than 10
			//console.log("this is not a number!");
			return currentRoomParse;
		} else {
			console.log("the ninth number"+nwn);
			let numberNew= (currentRoomParse*10)+nwn;
			console.log(numberNew);
			return numberNew;
		}
	}

	function roomIndexBreakdown(thisRoom)  {  //this function pulls the y number out of the currentRoom array and turns it into an integer so that properties of the current room can be accessed
		console.log(thisRoom);
		let thisRoomArray= [];
		thisRoomArray.push(thisRoom);
		console.log('this room array '+thisRoomArray[0]);
		let thisRoomSplit= thisRoomArray[0].split("");
		let thisRoomEight= thisRoomSplit[8];
		let thisRoomNine= thisRoomSplit[9];
		let thisRoomParse= parseInt(thisRoomEight);
		let trn= parseInt(thisRoomNine);
		if (isNaN(trn))  {  //this checks to see if the keyRoom number is greater than 10
			console.log("this is the next room number: "+thisRoomParse);
			return thisRoomParse;
		} else {
			console.log("the ninth number"+trn);
			let numberNew= (thisRoomParse*10)+trn;
			console.log("this is the next room number: "+numberNew);
			return numberNew;
		}
	}

	function whichBaddieChecker(thisBaddie)  {  //this is the same as the room index breakdown function and the current room breakdown function, though this checks which baddie you are engaging
		console.log(thisBaddie);
		let thisBaddieArray= [];
		let theAnswer= [];
		thisBaddieArray.push(thisBaddie);
		console.log("this Baddie Array: "+thisBaddieArray[0]);
		let thisBaddieSplit= thisBaddieArray[0].split("");
		let thisBaddieThree= thisBaddieSplit[3];
		let thisBaddieFour= thisBaddieSplit[4];
		let thisBaddieParse= parseInt(thisBaddieThree);
		let trn= parseInt(thisBaddieFour);
		let thisBaddieWhichBaddie= thisBaddieSplit.slice(2,3);
		let theAnswerArray= [];
		theAnswerArray.push(thisBaddieWhichBaddie);
		if (isNaN(trn))  {  //this checks to see if the keyRoom number is greater than 10
			console.log("this is the baddie being referred to: "+thisBaddieParse);
			theAnswerArray.push(thisBaddieParse);
			return theAnswerArray
		} else {
			console.log("the fourth number"+trn);
			let numberNew= (thisBaddieParse*10)+trn;
			theAnswerArray.push(numberNew);
			return theAnswerArray;
		}
	}

/**************************************************************************************************************************************************************************************/
	let scrollerCounter= 0;
	function textWindowScroller()  {  //this scrolls textwindow when it is run
		if (scrollerCounter<20)  {
			let twl= $("#textwindow p").length;
			let twh= $("#textwindow p").height();
			let twlh= twl*twh+twh
			$("#textwindow").scrollTop(twlh);
			scrollerCounter++;
		} else if (scrollerCounter>=20)  {
			$('#textwindow').find('p').first().remove();
			let twl= $("#textwindow p").length;
			let twh= $("#textwindow p").height();
			let twlh= twl*twh+twh
			$("#textwindow").scrollTop(twlh);
			//scrollerCounter++;
		}
	}
/**************************************************************************************************************************************************************************************/
/**************************************************************************************************************************************************************************************/
/**************************************************************************************************************************************************************************************/
/**************************************************************************************************************************************************************************************/
/**************************************************************************************************************************************************************************************/

	//one object for all of the creatures including the player, then they can share the attack and defend prototypes
	//create a way to load different info about the different creatures, name, hp, skills, etc.

	function Player()  {
		this.playerName= " ";
		this.playerHP= 0;  //***
		this.playerTarget= 0;
		this.room= [];
		this.turn= 0;
		this.knowThyCounter= 0;
		this.inventory= [];
		this.playerSkills= {
			'weaponBonus': '0',  //bonus from carried weapon  ..attack
			'weaponSkill': '0',  //skill with using weapons
			'attackSkill': '0',  //overall skill in attacking  ..attack  //***
			'attackCounter': '0',
			'armorBonus': '0',  //bonus from equiped armor  ..defense
			//'armorSkill': '0',  //skill in wearing armor  ..defense
			//'armorCounter': '0',
			'defenseSkill': '0',  //overall skill in defense  ..defense  //***
			'defenseCounter': '0',
			//block, parry and luck should be random as to whether they help or not
			//block and parry can be affected by armor skill and defense skill
			//also need the ability to miss
			  //what percent chance should the player have to miss an attack? (30%, 25%, 15%, 10%)
			    //it could be all and which percent chance is random and then hit or miss is calculated
			'block': '0',  //bonus from equiped shield, can only happen when shield is equiped and can only represent a block chance, not a definite block roll  ..defense
			'blockCounter': '0',
			'parry': '0',  //done if a melee weapon is equiped and can only represent a parry chance, not a definite parry roll  ..defense
			'parryCounter': '0',
			'luck': '0',  //you were born lucky, get as many random dice rolls as points in luck you have  ..attack  ..defense  //***
			'luckCounter': '0'
		};
		this.playerEquiped= {
			'weapon': []
			//'mainHand': ''  //what is equiped in the main fighting hand

		};
	}

	Player.prototype={

		blockAndParryRoller: function()  {  //you shouldn't be able to block and parry at the same time
			let that= this;
			let block= this.playerSkills.block;
			let parry= this.playerSkills.parry;
			let luckyNumber= 0;
			function blockRunner()  {  //need to have a shield to be able to do this
				if (block>0)  {
					let chanceRoll= Math.floor((Math.random()*20)+1);
					if (chanceRoll>15)  {
						let ln= Math.floor((Math.random()*6)+1);  //what is the lucky number this time?
						console.log("your lucky number is "+ln+"!");
						luckyNumber+= ln;
						if (ln===6)  {  //if the rolled number is equal to 6
							that.playerSkills.blockCounter++;  //increase the luck counter plus 1
							console.log("Your block counter has increased +1");
						}
						block--;
						return blockRunner();  //roll again if applicable
					}
				}
			}
			blockRunner();

			function parryRunner()  {  //need to have a blade weapon to be able to do this and so does your opponent
				if (parry>0)  {
					let chanceRoll= Math.floor((Math.random()*20)+1);
					if (chanceRoll>15)  {
						let ln= Math.floor((Math.random()*6)+1);  //what is the lucky number this time?
						console.log("your lucky number is "+ln+"!");
						luckyNumber+= ln;
						if (ln===6)  {  //if the rolled number is equal to 6
							that.playerSkills.parryCounter++;  //increase the luck counter plus 1
							console.log("Your parry counter has increased +1");
						}
						parry--;
						return parryRunner();  //roll again if applicable
					}
				}
			}
			parryRunner();

			return luckyNumber;  //return the lucky number
		},
	
		attackRoller: function()  {  //need to write this as though the attacker and defender are ambiguous
			//a point in each skill only determines the amount of rolls that can happen, the more skill points you have in each skill the more rolls you get, rolling a 6 increases the points in each skill counter
			let that= this;
			let weapon= this.playerSkills.weaponBonus;
			let attack= this.playerSkills.attackSkill;
			let luckyroll= this.playerSkills.luck;  //how many times can you roll?
			let luckyNumber=0;
			function weaponRunner()  {  //a check to see if you have a weapon equiped
				if (weapon>0)  { //if you have one or more rolls available
					let ln= Math.floor((Math.random()*6)+1);  //what is the lucky number this time?
					console.log("your weapon bonus is "+ln+"!");
					luckyNumber+= ln;
					if (ln===6)  {  //if the rolled number is equal to 6
						that.playerSkills.weaponSkill++;  //increase the luck counter plus 1
						console.log("Your attack counter has increased +1");
					}
					weapon--;
					return weaponRunner();  //roll again if applicable
				}
			}
			weaponRunner();
	
			function attackRunner()  {  //if you are able to attack, everyone should be able to
				if (attack>0)  { //if you have one or more rolls available
					let ln= Math.floor((Math.random()*6)+1);  //what is the lucky number this time?
					console.log("your attack bonus is "+ln+"!");
					luckyNumber+= ln;
					if (ln===6)  {  //if the rolled number is equal to 6
						that.playerSkills.attackCounter++;  //increase the luck counter plus 1
						console.log("Your attack counter has increased +1");
					}
					attack--;
					return attackRunner();  //roll again if applicable
				}
			}
			attackRunner();
	
			function luckRunner()  {  //roll for luck
				let chanceRoll= Math.floor((Math.random()*20)+1);
				if (chanceRoll>15)  {  //will you have a luck roll?
					console.log("a lucky roll!");
					if (luckyroll>0)  { //if you have one or more rolls available
						let ln= Math.floor((Math.random()*6)+1);  //what is the lucky number this time?
						console.log("your lucky number is "+ln+"!");
						luckyNumber+= ln;
						if (ln===6)  {  //if the rolled number is equal to 6
							that.playerSkills.luckCounter++;  //increase the luck counter plus 1
							console.log("Your luck counter has increased +1");
						}
						luckyroll--;
						return luckRunner();  //roll again if applicable
					}
				} else if (chanceRoll<16)  {
					console.log("no luck this time");
				}
			}
			luckRunner();
			console.log("this is the attack bonus number "+luckyNumber);
			return luckyNumber;  //return the lucky number
		},
	
		defendRoller: function()  {  //need to write this as though the attacker and defender are ambiguous
			//a point in each skill only determines the amount of rolls that can happen, the more skill points you have in each skill the more rolls you get, rolling a 6 increases the points in each skill counter
			let that=this;
			let armor= this.playerSkills.armorbonus;
			let defend= this.playerSkills.defenseSkill;
			let luckyroll= this.playerSkills.luck;  //how many times can you roll?
			let luckyNumber=0;
			function armorRunner()  {  //are you wearing armor?
				if (armor>0)  { //if you have one or more rolls available
					let ln= Math.floor((Math.random()*6)+1);  //what is the lucky number this time?
					console.log("your armor bonus is "+ln+"!");
					luckyNumber+= ln;
					armor--;
					return armorRunner();  //roll again if applicable
				}
			}
			armorRunner();
	
			function defendRunner()  {  //are you able to defend?
				if (defend>0)  { //if you have one or more rolls available
					let ln= Math.floor((Math.random()*6)+1);  //what is the lucky number this time?
					console.log("your defense bonus is "+ln+"!");
					luckyNumber+= ln;
					if (ln===6)  {  //if the rolled number is equal to 6
						that.playerSkills.defenseCounter++;  //increase the luck counter plus 1
						console.log("Your defense counter has increased +1");
					}
					defend--;
					return defendRunner();
				}
			}
			defendRunner();
	
			function luckRunner()  {  //roll for luck
				let chanceRoll= Math.floor((Math.random()*20)+1);
				if (chanceRoll>15)  {  //will you get a luck roll?
					console.log("a lucky roll!");
					if (luckyroll>0)  { //if you have one or more rolls available
						let ln= Math.floor((Math.random()*6)+1);  //what is the lucky number this time?
						console.log("your defense luck bonus is "+ln+"!");
						luckyNumber+= ln;
						if (ln===6)  {  //if the rolled number is equal to 6
							that.playerSkills.luckCounter++;  //increase the luck counter plus 1
							console.log("Your luck counter has increased +1");
						}
						luckyroll--;
						return luckRunner();  //roll again if applicable
					}
				} else if (chanceRoll<16)  {
					console.log("no luck this time");
				}
			}
			luckRunner();
			console.log("this is the defense bonus number "+luckyNumber);
			return luckyNumber;  //return the lucky number
		},

		baddieAttack: function()  {
			let number = currentRoomBreakdown();  //saves the number for which room the player is in
			if (this.playerTarget===0)  {
				this.playerTarget++;
			}
			let dr= hero.defendRoller();  //when you attack the baddie runs the defense roller to get a defense roll number
			let bp= hero.blockAndParryRoller();
			let ar= this.attackRoller();  //you run an attack roll to get an attack number
			console.log("this is the hero's defense roll: "+dr);
			console.log("this is the hero's block and parry roll: "+bp);
			console.log("this is the baddies attack roll: "+ar);
			//keyRoom[number].baddies[0].playerHP-=hero.playerSkills.attackSkill;  //need to replace this with a combat and defense algorithm
			//$("#six").html(" ");
			if (hero.playerSkills.blockCounter===10)  {  //if luckCounter is equal to 10
				hero.playerSkills.block++;  //luck is increased plus 1
				$("#textwindow").append("<p>Your skill at blocking has increased.</p>");
				textWindowScroller();
				hero.playerSkills.blockCounter-=10
			}
			if (hero.playerSkills.parryCounter===10)  {  //if luckCounter is equal to 10
				hero.playerSkills.parry++;  //luck is increased plus 1
				$("#textwindow").append("<p>You feel more able to parry.</p>");
				textWindowScroller();
				hero.playerSkills.parryCounter-=10
			}
			if (hero.playerSkills.defenseCounter===10)  {  //if luckCounter is equal to 10
				hero.playerSkills.defenseSkill++;  //luck is increased plus 1
				$("#textwindow").append("<p>You feel a little more knowledgable about defense.</p>");
				$("#defenseskill").html("Defense Skill: "+hero.playerSkills.defenseSkill);
				textWindowScroller();
				hero.playerSkills.defenseCounter-=10
			}
			if (hero.playerSkills.luckCounter===10)  {  //if luckCounter is equal to 10
				hero.playerSkills.luck++;  //luck is increased plus 1
				$("#textwindow").append("<p>Your luck has increased +1</p>");
				$("#luck").html(this.playerSkills.luck);
				textWindowScroller();
				hero.playerSkills.luckCounter-=10
			}
			if (ar>(dr+bp))  {
				hero.playerHP-=(ar-(dr+bp));  //if your attack roll is greater than the baddies defense roll you will land a blow for the difference
				$("#herohp").html("HP: "+hero.playerHP);
				$("#textwindow").append("<p>"+this.playerName+" lands a blow for "+(ar-(dr+bp))+ " damage!</p>");
				textWindowScroller();
				/*setTimeout(function()  {
					$("#seven").html(" ");
				}, 3000);*/
			} else if (ar<(dr+bp))  {  //if your attack roll is less than the baddies defense roll you will miss
				$("#textwindow").append("<p>"+this.playerName+" lunges at you wildly and misses!</p>");
				textWindowScroller();
			} else if (ar===(dr+bp))  {
				$("#textwindow").append("<p>"+this.playerName+" snaps at you and barely misses!</p>");
				textWindowScroller();
			}
			if (hero.playerHP<=0)  {  //when the hero loses all of their hitpoints
				this.playerTarget--;
				//$("#five").html(" ");
				setTimeout(function()  {
					//$("#five").html(" ");
					$("#textwindow").append("<p>You have been slain!</p>");
					textWindowScroller();
					$("#textwindow").append("<p>The game will reload in 10 seconds.</p>");
					textWindowScroller();
					setTimeout(function()  {
						window.location.reload();
					}, 10000);
				}, 3000);
			}
		},

		heroAttack: function()  {
			let number = currentRoomBreakdown();  //saves the number for which room the player is in
			if (this.playerTarget===0)  {
				$("#textwindow").append("<p>You must target something first!</p>");
				textWindowScroller();
			} else if (this.playerTarget===1)  {  //if the hero has targeted a baddie
				//luckRoller();
				let dr= keyRoom[number].baddies[0].defendRoller();  //when you attack the baddie runs the defense roller to get a defense roll number
				let bp= keyRoom[number].baddies[0].blockAndParryRoller();
				let ar= this.attackRoller();  //you run an attack roll to get an attack number
				console.log("this is the baddies defense roll: "+dr);
				console.log("this is the baddies block and parry roll: "+bp);
				console.log("this is the hero's attack roll: "+ar);
				//keyRoom[number].baddies[0].playerHP-=hero.playerSkills.attackSkill;  //need to replace this with a combat and defense algorithm
				//$("#six").html(" ");
				if (this.playerSkills.weaponSkill===10)  {  //if luckCounter is equal to 10
					this.playerSkills.weaponBonus++;  //luck is increased plus 1
					$("#textwindow").append("<p>You feel a little more skilled at using a weapon.</p>");
					$("#attackskill").html("Weapon Skill: "+hero.playerSkills.attackSkill);
					textWindowScroller();
					this.playerSkills.attackCounter-=10
				}
				if (this.playerSkills.attackCounter===10)  {  //if luckCounter is equal to 10
					this.playerSkills.attackSkill++;  //luck is increased plus 1
					$("#textwindow").append("<p>You feel a little more knowledgable about attacking.</p>");
					$("#attackskill").html("Attack Skill: "+hero.playerSkills.attackSkill);
					textWindowScroller();
					this.playerSkills.attackCounter-=10
				}
				if (this.playerSkills.luckCounter===10)  {  //if luckCounter is equal to 10
					this.playerSkills.luck++;  //luck is increased plus 1
					$("#textwindow").append("<p>Your luck has increased +1</p>");
					$("#luck").html(this.playerSkills.luck);
					textWindowScroller();
					this.playerSkills.luckCounter-=10
				}
				if (ar>(dr+bp))  {
					keyRoom[number].baddies[0].playerHP-=(ar-(dr+bp));  //if your attack roll is greater than the baddies defense roll you will land a blow for the difference
					$("#textwindow").append("<p>You punch "+keyRoom[number].baddies[0].playerName+" for "+(ar-(dr+bp))+ " damage!</p>");
					textWindowScroller();
					/*setTimeout(function()  {
						$("#seven").html(" ");
					}, 3000);*/
				} else if (ar<(dr+bp))  {  //if your attack roll is less than the baddies defense roll you will miss
					$("#textwindow").append("<p>You swing wildly and miss!</p>");
					textWindowScroller();
				} else if (ar===(dr+bp))  {
					$("#textwindow").append("<p>You barely miss hitting "+keyRoom[number].baddies[0].playerName+"!</p>");
					textWindowScroller();
				}
				if (keyRoom[number].baddies[0].playerHP<=0)  {  //when the baddie loses all of their hitpoints
					//$("#five").html(" ");
					this.playerTarget--;
					combatOnOff--;
					setTimeout(function()  {
						//$("#five").html(" ");
						//$("#six").html(" ");
						$("#textwindow").append("<p>You have slain "+keyRoom[number].baddies[0].playerName+ "!</p>");
						textWindowScroller();
						/*setTimeout(function()  {
							$("#seven").html(" ");
						}, 3000);*/
						keyRoom[number].baddies.shift();
					}, 3000);
				}
			}
		},

		battleTurner: function(wgf, krNum, thatBaddie)  {  //wgf is who goes first, 1 for the hero or 2 for the baddie
			let wgeef= wgf;
			// let whichBaddie= whichBaddieChecker(thatBaddie);
			// console.log("which baddie: "+whichBaddie);
			// console.log("which baddie array integer test: "+isNaN(whichBaddietoInt));
			// whichBaddie.splice(0,1);
			// console.log("this is the baddie that is being referred to: "+whichBaddie[0]);
			//if (thatBaddie===1)  {
			//let keyRoom[krNum].baddies[0]= keyRoom[krNum].baddies[0];
			//}
			//console.log("which baddie constructed: "+keyRoom[krNum].baddies[0]);
			function wgfRunner()  {
				console.log("which baddie test: "+keyRoom[krNum].baddies[0].playerHP);
				if (hero.playerHP>0 && keyRoom[krNum].baddies[0].playerHP>0)  {
					if (wgeef===1)  {  //the hero claims the turn
						hero.turn++;
						setTimeout(function()  {
							console.log("hero attack commencing!");
							hero.heroAttack();
							wgeef++;
							hero.turn--;
							return wgfRunner();
						}, 10000)
					} else if (wgeef===2)  {  //the baddie claims the turn
						keyRoom[krNum].baddies[0].turn++;
						setTimeout(function()  {
							keyRoom[krNum].baddies[0].baddieAttack();
							console.log("baddie attack commencing!");
							wgeef--;
							keyRoom[krNum].baddies[0].turn--;
							return wgfRunner();
						}, 10000)
					}
				} else {
					console.log("combat has ended! "+keyRoom[krNum].baddies[0].playerName);
				}
			}
			wgfRunner();
		}

	}


	//things attack needs
		//agro
		//defense modifier
		//turn based attacking
		//a timer for when the actions you choose take effect
		//a random choice for who gets to attack first
		//does the baddie enter the room with haste?

/**************************************************************************************************************************************************************************************/
/**************************************************************************************************************************************************************************************/
/**************************************************************************************************************************************************************************************/
/**************************************************************************************************************************************************************************************/

	function ItemCreator()  {   //this object creates new items to go into the containers
		this.itemName= "";
		this.weaponBonus;
		this.playerHP;
	}

	ItemCreator.prototype=  {
		knife: function()  {
			this.itemName= "knife";
			this.weaponBonus= 1;
			this.designator= "weapon";
		},

		medpack: function()  {
			this.itemName= "medpack";
			this.playerHP= 15;
			this.designator= "health";

		}
	}

/**************************************************************************************************************************************************************************************/

	function RoomContainer()  {  //this object creates a container in the room where items can be found
		this.rcName= "an old wooden box";
		this.roomContainer= [];  //items are created and stored in this array, it represents the inside of the container
		this.rcStatus= 0;  //this tells if the container is 1 for open or 0 for closed
	}

	RoomContainer.prototype=  {
		containerFiller: function()  {  //this function fills the container with weapons and healthpacks for the player to use
			let krNum= currentRoomBreakdown();
			let anotherItem= new ItemCreator();
			if (roomPosition.length===1)  {
				anotherItem.knife();
				this.roomContainer.push(anotherItem);
			} else if (roomPosition.length>1)  {
				anotherItem.medpack();
				this.roomContainer.push(anotherItem);
			}
		}
	}

/**************************************************************************************************************************************************************************************/
/**************************************************************************************************************************************************************************************/
/**************************************************************************************************************************************************************************************/


	function Room()  {
		this.whichWayArray= ["North", "South", "East", "West"];  //the array from which directions are taken
		this.directionArray= [];  //this array is created when a new room is created, it is filled with the random directions that a player may travel in
		this.randomNumber= [];  //this decides how many doors are in the new room, gotten from running randomDoors()
		this.whichChoice= [];  //this gives a random number to be able to choose directions from the remaining whichWayArray, gotten from running randomArray()
		this.roomConnectionsArray= [["North"],["South"],["East"],["West"]];  //an array for which rooms connect to this room
		this.mapPosition= [];
		this.baddies= [];  //an array for live baddies in a given room
		this.mRunner;
		this.roomContainer= [];  //these are the items in the room, right now only a container can in this array
	}

	Room.prototype={

			oneReader: function()  {
				//$("#one").html("You see " + this.randomNumber + " doors.");
				$("#textwindow").append("<p>You see " + this.randomNumber + " doors.</p>");
				textWindowScroller();
			},

			randomDoors: function()  {
				return Math.floor((Math.random()*4)+1);  //this will produce a number between and including 1-4
			},

			whichDirections: function()  {  //this function chooses a number of directions equal to the number created by randomDoors(), the directions are chosen randomly from whichWayArray
				let that= this;
				let w= 0;
				//console.log("this is the room position array length "+j-1);
				function  innerWhich()  {
					function randomArray()  {
						return Math.floor(Math.random()*that.whichWayArray.length);  //this will return a number no larger than the length of whichWayArray which is variable
					}
					if (lastDirection.length> 0)  {  //a check for if you are coming from a created room, so that direction is one you can travel back to
						//$(".roomtext h1").html("Your Quest continues... ");
						if (w===0)  {  //after one check w will be increased by one so the check cannot be done again
							let number= currentRoomBreakdown();
							if (lastDirection[0]==="North")  {  //this makes sure that the direction you are coming from is a direction you can go back to
								that.directionArray.push(that.whichWayArray.splice(1, 1));
								that.roomConnectionsArray[1].push(currentRoom[0]);  //this pushes the previous room into the south index for the roomConnectionsArray of the new room
								keyRoom[number].roomConnectionsArray[0].push("keyRoom["+ y +"]");
								console.log("there is a room to the south, it is at position "+a+","+(b-1)+"and is "+ that.roomConnectionsArray[1][1]);
								//$("#x"+a+"y"+b).addClass("topborder");
								//console.log("last direction array -->" + that.directionArray); //what has been put into directionArray
								that.randomNumber -=1;
								//console.log("random number after an insert from north" + that.randomNumber);
								w++;
								dccn();
								dcce();
								dccw();
							} else if (lastDirection[0]==="South")  {
								that.directionArray.push(that.whichWayArray.splice(0, 1));
								that.roomConnectionsArray[0].push(currentRoom[0]);
								keyRoom[number].roomConnectionsArray[1].push("keyRoom["+ y +"]");
								console.log("there is a room to the north, it is at position "+a+","+(b+1)+"and is "+ that.roomConnectionsArray[0][1]);
								//$("#x"+a+"y"+b).addClass("bottomborder");
								//console.log("last direction array -->" + that.directionArray); //what has been put into directionArray
								that.randomNumber -=1;
								//console.log("random number after an insert from south" + that.randomNumber);
								w++;
								dccs();
								dcce();
								dccw();
							} else if (lastDirection[0]==="East")  {
								that.directionArray.push(that.whichWayArray.splice(3, 1));
								that.roomConnectionsArray[3].push(currentRoom[0]);
								keyRoom[number].roomConnectionsArray[2].push("keyRoom["+ y +"]");
								console.log("there is a room to the west, it is at position "+(a-1)+","+b+"and is "+ that.roomConnectionsArray[3][1]);
								//$("#x"+a+"y"+b).addClass("rightborder");
								//console.log("last direction array -->" + that.directionArray); //what has been put into directionArray
								that.randomNumber -=1;
								//console.log("random number after an insert from east" + that.randomNumber);
								w++;
								dccn();
								dccs();
								dcce();
							} else if (lastDirection[0]==="West")  {
								that.directionArray.push(that.whichWayArray.splice(2, 1));
								that.roomConnectionsArray[2].push(currentRoom[0]);
								keyRoom[number].roomConnectionsArray[3].push("keyRoom["+ y +"]");
								console.log("there is a room to the east, it is at position "+(a+1)+","+b+"and is "+ that.roomConnectionsArray[2][1]);
								//$("#x"+a+"y"+b).addClass("leftborder");
								//console.log("last direction array -->" + that.directionArray); //what has been put into directionArray
								that.randomNumber -=1;
								//console.log("random number after an insert from west" + that.randomNumber);
								w++;
								dccn();
								dccs();
								dccw();
							}
						}
						function dccn()  {  //check to see if there is a room in (a+1,b)
							let j= roomPosition.length;  //a number greater than 0 indicates that rooms have been created.
							//console.log(j);
							//console.log("this is the xy position for the room to the north("+a+","+(b+1)+")");
							function dccnRunner()  {
								if (b<9)  {
									if (j>0)  {  //if rooms have been created
										//console.log("north, this is a + 1, " + (a+1) + ", and this is b," + b);
										//console.log("this is j "+j);
										//console.log("this is the roomPosition array "+ roomPosition[j-1]);
										if (roomPosition[j-1][0]===a && roomPosition[j-1][1]===(b+1))  {  //if the room in the north position exists, check to see if it has a connection to the south, if it does not then don't create one in the new room
											console.log("there is a room to the north");
											let rp= roomPosition[j-1][2].split("");
											//console.log("this is rp "+rp);
											function roomConnector()  {
												let rpRange= rp[8];
												let rpRangePlusOne= rp[9];
												let rpParse= parseInt(rpRange);
												let rpParsePlusOne= parseInt(rpRangePlusOne);
												if (isNaN(rpParsePlusOne)===true)  {  //this checks to see if the keyRoom number is greater than 10
													console.log("this is not a number!");
													return rpParse;
												} else if (isNaN(rpParsePlusOne)===false)  {
													console.log("the ninth number"+rpParsePlusOne);
													let numberNew= (rpParse*10)+rpParsePlusOne;
													console.log(numberNew);
													return numberNew;
												}
											}
											let keyNew= roomConnector();
											let rpDirArr= keyRoom[keyNew].directionArray.join();
											if (rpDirArr.indexOf("South")!==-1)  {
												//console.log("This is the index of a south connection in the room to the north" + rpDirArr.indexOf("South"));
												//let rpda= rpDirArr.indexOf("South");
												that.directionArray.push(that.whichWayArray.splice(0, 1));
												that.randomNumber -=1;
												keyRoom[keyNew].roomConnectionsArray[1].push('keyRoom['+ y +']');
												keyRoom[y].roomConnectionsArray[0].push('keyRoom['+ keyNew +']');
												//$("#x"+a+"y"+b).addClass("topborder");
											} else if (rpDirArr.indexOf("South")===-1)  {  //if there is not an existing room in the north position with a connection to a south room
												console.log("false, there is no connection to the room to the north");
												that.whichWayArray.splice(0, 1)  //remove north as an option for direction in the current new room
												if (that.randomNumber>that.whichWayArray.length)  {  //if the number of doors in the new room exceeds the number of available directions
													that.randomNumber -=1;  //remove a doorway
													//$("#one").html("You see " + that.randomNumber + " doors.")  //relay the new number of available directions
													$("#textwindow").append("<p>You see " + that.randomNumber + " doors.</p>");
													textWindowScroller();
												}
											}
										} else {
											j--;
											return dccnRunner();
										}
									}
									//console.log("there is no room to the north");
								} else if (b===9)  {
									that.whichWayArray.splice(0, 1)  //remove north as an option for direction in the current new room
								}
							}
							dccnRunner();
						}
						function dccs()  {
							let j= roomPosition.length;  //a number greater than 0 indicates that rooms have been created.
							//console.log(j);
							//console.log("this is the xy position for the room to the south("+a+","+(b-1)+")");
							function dccsRunner()  {
								if (b>-9)  {
									if (j>0)  {
										//console.log("south, this is a - 1, "+ (a-1) + ", and this is b," + b);
										//console.log("this is j "+j);
										//console.log("this is the roomPosition array "+ roomPosition[j-1]);
										if (roomPosition[j-1][0]===a && roomPosition[j-1][1]===(b-1))  {  //if the room in the south position exists, check to see if it has a connection to the south, if it does not then don't create one in the new room
											console.log("there is a room to the south");
											let rp= roomPosition[j-1][2].split("");
											//console.log("this is rp "+rp);
											function roomConnector()  {
												let rpRange= rp[8];
												let rpRangePlusOne= rp[9];
												let rpParse= parseInt(rpRange);
												let rpParsePlusOne= parseInt(rpRangePlusOne);
												if (isNaN(rpParsePlusOne)===true)  {  //this checks to see if the keyRoom number is greater than 10
													console.log("this is not a number!");
													return rpParse;
												} else if (isNaN(rpParsePlusOne)===false)  {
													console.log("the ninth number"+rpParsePlusOne);
													let numberNew= (rpParse*10)+rpParsePlusOne;
													console.log(numberNew);
													return numberNew;
												}
											}
											let keyNew= roomConnector();
											let rpDirArr= keyRoom[keyNew].directionArray.join();
											if (rpDirArr.indexOf("North")!==-1)  {
												//console.log("This is the index of a north connection in the room to the south" + rpDirArr.indexOf("North"));
												let rpda= that.whichWayArray.indexOf("South");
												if (rpda===1) {
													that.directionArray.push(that.whichWayArray.splice(1, 1));
													that.randomNumber -=1;
												} else if (rpda===0)  {
													that.directionArray.push(that.whichWayArray.splice(0, 1));
													that.randomNumber -=1;
												}
												keyRoom[keyNew].roomConnectionsArray[0].push('keyRoom['+ y +']');
												keyRoom[y].roomConnectionsArray[1].push('keyRoom['+ keyNew +']');
												//$("#x"+a+"y"+b).addClass("bottomborder");
											} else if (rpDirArr.indexOf("North")===-1)  {
												console.log("false, no connection to the room to the south");
												let rpda= that.whichWayArray.indexOf("South");
												console.log("this is the index of south"+rpda);
												if (rpda===1)  {
													that.whichWayArray.splice(1, 1);
												} else if (rpda===0)  {
													that.whichWayArray.splice(0, 1);
												}
												if (that.randomNumber>that.whichWayArray.length)  {  //if the number of doors in the new room exceeds the number of available directions
													that.randomNumber -=1;  //remove a doorway
													//$("#one").html("You see " + that.randomNumber + " doors.")  //relay the new number of available directions
													$("#textwindow").append("<p>You see " + that.randomNumber + " doors.</p>");
													textWindowScroller();
												}
											}
										} else {
											j--;
											return dccsRunner();
										}
									}
									//console.log("there is no room to the south");
								} else if (b===-9)  {
									let rpda= that.whichWayArray.indexOf("South");
									console.log(rpda);
									if (rpda===1)  {
										that.whichWayArray.splice(1, 1);
									} else if (rpda===0)  {
										that.whichWayArray.splice(0, 1);
									}
								}
							}
							dccsRunner();
						}
						function dcce()  {
							let j= roomPosition.length;  //a number greater than 0 indicates that rooms have been created.
							//console.log(j);
							//console.log("this is the xy position for the room to the east ("+(a+1)+","+b+")");
							function dcceRunner()  {
								if (a<12)  {
									if (j>0)  {
										//console.log("east, this is a,"+ a + ", and this is b + 1," + (b + 1));
										//console.log("this is j "+j);
										//console.log("this is the roomPosition array "+ roomPosition[j-1]);
										if (roomPosition[j-1][0]===(a+1) && roomPosition[j-1][1]===b)  {  //if the room in the east position exists, check to see if it has a connection to the south, if it does not then don't create one in the new room
											console.log("there is a room to the east");
											let rp= roomPosition[j-1][2].split("");
											//console.log("this is rp "+rp);
											function roomConnector()  {
												let rpRange= rp[8];
												let rpRangePlusOne= rp[9];
												let rpParse= parseInt(rpRange);
												let rpParsePlusOne= parseInt(rpRangePlusOne);
												if (isNaN(rpParsePlusOne)===true)  {  //this checks to see if the keyRoom number is greater than 10
													console.log("this is not a number!");
													return rpParse;
												} else if (isNaN(rpParsePlusOne)===false)  {
													console.log("the ninth number"+rpParsePlusOne);
													let numberNew= (rpParse*10)+rpParsePlusOne;
													console.log(numberNew);
													return numberNew;
												}
											}
											let keyNew= roomConnector();
											let rpDirArr= keyRoom[keyNew].directionArray.join();  //this joins directionArray in the east room 
											if (rpDirArr.indexOf("West")!==-1)  {  //this checks directionArray in the east room to see if it has an existing connection to the room to it's west
												//console.log("This is the index of a west connection in the room to the east" + rpDirArr.indexOf("West"));
												let rpda= that.whichWayArray.indexOf("East");  //this saves that index
												if (rpda===2)  {  //and runs this check to be sure we are removing west from the array
													that.directionArray.push(that.whichWayArray.splice(2, 1));
													that.randomNumber -=1;
												} else if (rpda===1)  {
													that.directionArray.push(that.whichWayArray.splice(1, 1));
													that.randomNumber -=1;
												} else if (rpda===0)  {
													that.directionArray.push(that.whichWayArray.splice(0, 1));
													that.randomNumber -=1;
												}
												keyRoom[keyNew].roomConnectionsArray[3].push('keyRoom['+ y +']');
												keyRoom[y].roomConnectionsArray[2].push('keyRoom['+ keyNew +']');
												//$("#x"+a+"y"+b).addClass("rightborder");
											} else if (rpDirArr.indexOf("West")===-1)  {  //if the room to the east doesn't have a connection to the west
												console.log("false, no connection to the room to the east");
												let rpda= that.whichWayArray.indexOf("East");
												console.log(rpda);
												if (rpda===2)  {  //check to see where east is in whichWayArray and remove it so it cannot be chosen
													that.whichWayArray.splice(2, 1);
												} else if (rpda===1)  {
													that.whichWayArray.splice(1, 1);
												} else if (rpda===0)  {
													that.whichWayArray.splice(0, 1);
												}
												if (that.randomNumber>that.whichWayArray.length)  {  //if the number of possible doors exceeds the number of possible directions
													that.randomNumber -=1;  //remove one from the number of possible directions
													//$("#one").html("You see " + that.randomNumber + " doors.")  //correct the displayed number of possible doors
													$("#textwindow").append("<p>You see " + that.randomNumber + " doors.</p>");
													textWindowScroller();
												}
											}
										} else {
											j--;
											return dcceRunner();
										}
									}
									//console.log("there is no room to the east");
								} else if (a===12)  {
									let rpda= that.whichWayArray.indexOf("East");
									console.log(rpda);
									if (rpda===2)  {  //check to see where east is in whichWayArray and remove it so it cannot be chosen
										that.whichWayArray.splice(2, 1);
									} else if (rpda===1)  {
										that.whichWayArray.splice(1, 1);
									} else if (rpda===0)  {
										that.whichWayArray.splice(0, 1);
									}
								}
							}
							dcceRunner();
						}
						function dccw()  {
							let j= roomPosition.length;  //a number greater than 0 indicates that rooms have been created.
							//console.log(j);
							//console.log("this is the xy position for the room to the west ("+(a-1)+","+b+")");
							function dccwRunner()  {
								if (a>-12)  {
									if (j>0)  {
										//console.log("west, this is a,"+ a + ", and this is b - 1," + (b - 1));
										//console.log("this is j "+j);
										//console.log("this is the roomPosition array "+ roomPosition[j-1]);
										if (roomPosition[j-1][0]===(a-1) && roomPosition[j-1][1]===b)  {  //if the room in the west position exists, check to see if it has a connection to the south, if it does not then don't create one in the new room
											console.log("there is a room to the west");
											let rp= roomPosition[j-1][2].split("");
											//console.log("this is rp "+rp);
											function roomConnector()  {
												let rpRange= rp[8];
												let rpRangePlusOne= rp[9];
												let rpParse= parseInt(rpRange);
												let rpParsePlusOne= parseInt(rpRangePlusOne);
												if (isNaN(rpParsePlusOne)===true)  {  //this checks to see if the keyRoom number is greater than 10
													console.log("this is not a number!");
													return rpParse;
												} else if (isNaN(rpParsePlusOne)===false)  {
													console.log("the ninth number"+rpParsePlusOne);
													let numberNew= (rpParse*10)+rpParsePlusOne;
													console.log(numberNew);
													return numberNew;
												}
											}
											let keyNew= roomConnector();
											let rpDirArr= keyRoom[keyNew].directionArray.join();
											if (rpDirArr.indexOf("East")!==-1)  {  //does the room to the West have a connection to the east room?
												//console.log("This is the index of an east connection in the room to the west" + rpDirArr.indexOf("East"));
												let rpda= that.whichWayArray.indexOf("West");
												if (rpda===3) {
													that.directionArray.push(that.whichWayArray.splice(3, 1));
												} else if (rpda===2)  {
													that.directionArray.push(that.whichWayArray.splice(2, 1));
												} else if (rpda===1)  {
													that.directionArray.push(that.whichWayArray.splice(1, 1));
												} else if (rpda===0)  {
													that.directionArray.push(that.whichWayArray.splice(0, 1));
												}
												that.randomNumber -=1;
												keyRoom[keyNew].roomConnectionsArray[2].push('keyRoom['+ y +']');
												keyRoom[y].roomConnectionsArray[3].push('keyRoom['+ keyNew +']');
												//$("#x"+a+"y"+b).addClass("leftborder");
											} else if (rpDirArr.indexOf("East")===-1)  {  //if the existing room to the west doesn't have a connection to the east
												console.log("false, no connection to the room to the west");
												let rpda= that.whichWayArray.indexOf("West");
												console.log(rpda);
												if (rpda===3)  {  //and runs this check to be sure we are removing west from the array
													that.whichWayArray.splice(3, 1);
												} else if (rpda===2)  {
													that.whichWayArray.splice(2, 1);
												} else if (rpda===1)  {
													that.whichWayArray.splice(1, 1);
												} else if (rpda===0)  {
													that.whichWayArray.splice(0, 1);
												}
												if (that.randomNumber>that.whichWayArray.length)  {  //if the number of doors in the new room exceeds the number of available directions
													that.randomNumber -=1;  //remove a doorway
													//$("#one").html("You see " + that.randomNumber + " doors.")  //relay the new number of available directions
													$("#textwindow").append("<p>You see " + that.randomNumber + " doors.</p>");
													textWindowScroller();
												}
											}
										} else {
											j--;
											return dccwRunner();
										}
									}
									//console.log("there is no room to the west");
								} else if (a===-12)  {
									let rpda= that.whichWayArray.indexOf("West");
									console.log(rpda);
									if (rpda===3)  {  //and runs this check to be sure we are removing west from the array
										that.whichWayArray.splice(3, 1);
									} else if (rpda===2)  {  //check to see where east is in whichWayArray and remove it so it cannot be chosen
										that.whichWayArray.splice(2, 1);
									} else if (rpda===1)  {
										that.whichWayArray.splice(1, 1);
									} else if (rpda===0)  {
										that.whichWayArray.splice(0, 1);
									}
								}
							}
							dccwRunner();
						}
					} else if (lastDirection.length===0)  {
						//add the container here, this should be the first room created so the container will only be created once
					}
					if (that.randomNumber>0)  {
						that.whichChoice.pop();
						that.whichChoice.push(randomArray());  //this gives a random number to be able to choose directions from the remaining whichWayArray
						let randomDirection= that.whichWayArray.splice(that.whichChoice, 1);
						//console.log(randomDirection[0]);
						that.directionArray.push(randomDirection);  //push to directionArray a random choice from whichWayArray
						//console.log("which way array -->" + that.whichWayArray);  //what is left in whichWayArray
						//console.log("direction array -->" + that.directionArray); //what has been put into directionArray
						that.randomNumber -=1;
						//console.log("random number after a random insert" + that.randomNumber);
						return innerWhich();
					}
				}
				innerWhich();
			},

			mapIndicator: function()  {
				let directionCounter= 0;
				let that = this;
				function mapDirectionRunner(that)  {
					if (that.directionArray.length===1)  {
						console.log('length of the direction array: '+that.directionArray.length);
						if (that.directionArray[0].indexOf("North")!==-1)  {
							console.log('the only direction is north!');
							$("#x"+a+"y"+b).addClass("ndirections");
						} else if (that.directionArray[0].indexOf("South")!==-1)  {
							console.log('the only direction is south!');
							$("#x"+a+"y"+b).addClass("sdirections");
						} else if (that.directionArray[0].indexOf("East")!==-1)  {
							console.log('the only direction is east!');
							$("#x"+a+"y"+b).addClass("edirections");
						} else if (that.directionArray[0].indexOf("West")!==-1)  {
							console.log('the only direction is west!');
							$("#x"+a+"y"+b).addClass("wdirections");
						}
					} else if (that.directionArray.length===2)  {
						if (that.directionArray[0].indexOf("North")!==-1) {
							if (that.directionArray[1].indexOf("South")!==-1)  {
								$("#x"+a+"y"+b).addClass("nsdirections");
							} else if (that.directionArray[1].indexOf("East")!==-1)  {
								$("#x"+a+"y"+b).addClass("nedirections");
							} else if (that.directionArray[1].indexOf("West")!==-1)  {
								$("#x"+a+"y"+b).addClass("nwdirections");
							}
						} else if (that.directionArray[0].indexOf("South")!==-1)  {
							if (that.directionArray[1].indexOf("North")!==-1)  {
								$("#x"+a+"y"+b).addClass("nsdirections");
							} else if (that.directionArray[1].indexOf("East")!==-1)  {
								$("#x"+a+"y"+b).addClass("sedirections");
							} else if (that.directionArray[1].indexOf("West")!==-1)  {
								$("#x"+a+"y"+b).addClass("swdirections");
							}
						} else if (that.directionArray[0].indexOf("East")!==-1)  {
							if (that.directionArray[1].indexOf("North")!==-1)  {
								$("#x"+a+"y"+b).addClass("nedirections");
							} else if (that.directionArray[1].indexOf("South")!==-1)  {
								$("#x"+a+"y"+b).addClass("sedirections");
							} else if (that.directionArray[1].indexOf("West")!==-1)  {
								$("#x"+a+"y"+b).addClass("ewdirections");
							}
						} else if (that.directionArray[0].indexOf("West")!==-1)  {
							if (that.directionArray[1].indexOf("North")!==-1)  {
								$("#x"+a+"y"+b).addClass("nwdirections");
							} else if (that.directionArray[1].indexOf("South")!==-1)  {
								$("#x"+a+"y"+b).addClass("swdirections");
							} else if (that.directionArray[1].indexOf("East")!==-1)  {
								$("#x"+a+"y"+b).addClass("ewdirections");
							}
						}
					} else if (that.directionArray.length===3)  {
						if (that.directionArray[0].indexOf("North")!==-1)  {
							if (that.directionArray[1].indexOf("South")!==-1)  {
								if (that.directionArray[2].indexOf("East")!==-1)  {
									$("#x"+a+"y"+b).addClass("nsedirections");
								} else if (that.directionArray[2].indexOf("West")!==-1)  {
									$("#x"+a+"y"+b).addClass("nswdirections");
								}
							} else if (that.directionArray[1].indexOf("East")!==-1)  {
								if (that.directionArray[2].indexOf("South")!==-1)  {
									$("#x"+a+"y"+b).addClass("nsedirections");
								} else if (that.directionArray[2].indexOf("West")!==-1)  {
									$("#x"+a+"y"+b).addClass("newdirections");
								}
							} else if (that.directionArray[1].indexOf("West")!==-1)  {
								if (that.directionArray[2].indexOf("South")!==-1)  {
									$("#x"+a+"y"+b).addClass("nswdirections");
								} else if (that.directionArray[2].indexOf("East")!==-1)  {
									$("#x"+a+"y"+b).addClass("newdirections");
								}
							}
						} else if (that.directionArray[0].indexOf("South")!==-1)  {
							if (that.directionArray[1].indexOf("North")!==-1)  {
								if (that.directionArray[2].indexOf("East")!==-1)  {
									$("#x"+a+"y"+b).addClass("nsedirections");
								} else if (that.directionArray[2].indexOf("West")!==-1)  {
									$("#x"+a+"y"+b).addClass("nswdirections");
								}
							} else if (that.directionArray[1].indexOf("East")!==-1)  {
								if (that.directionArray[2].indexOf("North")!==-1)  {
									$("#x"+a+"y"+b).addClass("nsedirections");
								} else if (that.directionArray[2].indexOf("West")!==-1)  {
									$("#x"+a+"y"+b).addClass("sewdirections");
								}
							} else if (that.directionArray[1].indexOf("West")!==-1)  {
								if (that.directionArray[2].indexOf("North")!==-1)  {
									$("#x"+a+"y"+b).addClass("nswdirections");
								} else if (that.directionArray[2].indexOf("East")!==-1)  {
									$("#x"+a+"y"+b).addClass("sewdirections");
								}
							}
						} else if (that.directionArray[0].indexOf("East")!==-1)  {
							if (that.directionArray[1].indexOf("South")!==-1)  {
								if (that.directionArray[2].indexOf("North")!==-1)  {
									$("#x"+a+"y"+b).addClass("nsedirections");
								} else if (that.directionArray[2].indexOf("West")!==-1)  {
									$("#x"+a+"y"+b).addClass("sewdirections");
								}
							} else if (that.directionArray[1].indexOf("North")!==-1)  {
								if (that.directionArray[2].indexOf("South")!==-1)  {
									$("#x"+a+"y"+b).addClass("nsedirections");
								} else if (that.directionArray[2].indexOf("West")!==-1)  {
									$("#x"+a+"y"+b).addClass("newdirections");
								}
							} else if (that.directionArray[1].indexOf("West")!==-1)  {
								if (that.directionArray[2].indexOf("South")!==-1)  {
									$("#x"+a+"y"+b).addClass("sewdirections");
								} else if (that.directionArray[2].indexOf("North")!==-1)  {
									$("#x"+a+"y"+b).addClass("newdirections");
								}
							}
						} else if (that.directionArray[0].indexOf("West")!==-1)  {
							if (that.directionArray[1].indexOf("South")!==-1)  {
								if (that.directionArray[2].indexOf("East")!==-1)  {
									$("#x"+a+"y"+b).addClass("sewdirections");
								} else if (that.directionArray[2].indexOf("North")!==-1)  {
									$("#x"+a+"y"+b).addClass("nswdirections");
								}
							} else if (that.directionArray[1].indexOf("East")!==-1)  {
								if (that.directionArray[2].indexOf("South")!==-1)  {
									$("#x"+a+"y"+b).addClass("sewdirections");
								} else if (that.directionArray[2].indexOf("North")!==-1)  {
									$("#x"+a+"y"+b).addClass("newdirections");
								}
							} else if (that.directionArray[1].indexOf(" North")!==-1)  {
								if (that.directionArray[2].indexOf("South")!==-1)  {
									$("#x"+a+"y"+b).addClass("nswdirections");
								} else if (that.directionArray[2].indexOf("East")!==-1)  {
									$("#x"+a+"y"+b).addClass("newdirections");
								}
							}
						}
					} else if (that.directionArray.length===4)  {
						$("#x"+a+"y"+b).addClass("fourdirections");
					}
				}
				mapDirectionRunner(that);
			},

			thePath: function()  {  //this function takes the entries from directionArray and reads them out on the screen
				let x=this.directionArray.length-1;
				let directionString=[];
				//console.log(x);
				if (x === 0)  {  //if there is only one direction of travel
					//$("#twopointfive").append(this.directionArray[x] + ".");
					directionString.push(this.directionArray[x]);
					$("#textwindow").append("<p>You can travel "+ directionString +".</p>");
					textWindowScroller();
					console.log("direction string -->"+directionString);
					joinedArray= this.directionArray.join();
					return directionString;
				} else {
					let that= this;
					function readThePath()  {  //if there are several directions of travel
						if (x !== 0)  {
							//$("#twopointfive").append(" " + that.directionArray[x] + ",");
							directionString.push(" " + that.directionArray[x]);
							console.log("direction string -->"+directionString);
							x-=1;
							return readThePath();
						} else if (x === 0)  {
							//$("#twopointfive").append(" and " + that.directionArray[x] + ".");
							directionString.push(" and " + that.directionArray[x] + ".");
							$("#textwindow").append("<p>You can travel "+ directionString +".</p>");
							textWindowScroller();
							console.log("direction string -->"+directionString);
							joinedArray= that.directionArray.join();
							return directionString;
						}
					}
					readThePath();
				}
			},

			// RandomWeapon: function()  {
			// 	this.name= "knife";
			// 	this.weaponRoll= "1";
			// },

			baddieMover: function()  {

				// as soon as the baddie enters the room the baddieMover function needs to be run
				// a check needs to be run to see if the hero is in the room that is being left and that is being entered
				// if the hero is in either room then a notification will be displayed that a baddie is entering or leaving a room
				// if there is no hero then the counter will need to be started to move the baddie out of the room and into another one
				// a check will need to be run on if there are available directions of travel
				// those directions need to be put into an array
				// a random direction will be chosen from the array
				// the integer will need to be taken out of the string ex. keyRoom[0]
				// the baddie at index 0 will be taken out of the keyRoom[x].baddies array
				// and then moved to the chosen room
				// then a check to see if the hero is in the room
				// if the hero is in the room, notify the hero that the baddie has entered from x direction
				//- combat needs to interrupt baddieMover() for both the player and the baddie
				//- after successful combat, the baddie keeps trying to move even though he is dead, how do we stop this?  Technically it is stopped already when it finds undefined.

				let moveTimeChoice= Math.floor((Math.random()*180)+1);
				console.log("this is how long it will be before the baddie switches rooms: "+moveTimeChoice);
				let that= this;
				let travelCounter= 0;
				let travelArray= [];
				console.log(that);
				let rib;
				//let thisRoom= this.room;
				//let thisRoomNumber= roomIndexBreakdown(thisRoom);
				//console.log("connections array entry length: "+keyRoom[thisRoomNumber].roomConnectionsArray[0].length);

					//need to create a counter that cycles through the roomConnectionsArray to check if each array index is equal to 2, if so, the baddie can travel in that direction
					//if the counter detects a direction that can be travelled then that index number needs to be saved in an array
					//then a random number should be chosen based on the length of that array and that will be the direction travelled

					function rcaCounter(that)  {  //roomConnectionsArray counter, this creates an array of available directions
						console.log('inside rca counter, that: '+that);
						if (travelCounter<=3)  {
							if (that.roomConnectionsArray[travelCounter].length===2)  {  //if there is a room in this direction
								console.log("connections array entry length: "+that.roomConnectionsArray[travelCounter].length);
								travelArray.push(that.roomConnectionsArray[travelCounter][1]);
								travelCounter++;
								return rcaCounter(that);
							} else if (that.roomConnectionsArray[travelCounter].length<2)  {
								travelCounter++;
								return rcaCounter(that);
							}
						}
						return console.log('this is the travel array: '+travelArray);
					}
					rcaCounter(that);
					let tal= travelArray.length;
					function moverRunner(that)  {
						if (travelArray.length===1)  {
							rib= roomIndexBreakdown(travelArray[0]);
							that.baddies[0].room.splice(0,1,'keyRoom['+rib+']');
							keyRoom[rib].baddies.push(that.baddies.shift());
							console.log('the baddie has moved to keyRoom['+rib+']');
							if (travelArray[0]===currentRoom[0])  {
								let baddieName= keyRoom[rib].baddies[0].playerName;
								$("#textwindow").append("<p>" + baddieName + " has entered the room!");
								textWindowScroller();
								return;
							}
						} else if (travelArray.length>1)  {
							let rtaNum= Math.floor(Math.random()*tal);
							console.log('rtaNum '+rtaNum);
							rib= roomIndexBreakdown(travelArray[rtaNum]);
							that.baddies[0].room.splice(0,1,'keyRoom['+rib+']');
							keyRoom[rib].baddies.push(that.baddies.shift());
							console.log('the baddie has moved to keyRoom['+rib+']');
							if (travelArray[rtaNum]===currentRoom[0])  {
								let baddieName= keyRoom[rib].baddies[0].playerName;
								$("#textwindow").append("<p>" + baddieName + " has entered the room!");
								textWindowScroller();
								return;
							}
						}
						return keyRoom[rib].baddieMover();
					}

				this.mRunner= setTimeout(function()  {  //this will be the counter to decide how long to wait before moving to another room, up to 3 minutes
					moverRunner(that);
				}, moveTimeChoice*1000);

			},

			baddieStopper: function()  {  // this stops the baddie from moving around the map anymore when you enter the room with him in it
				clearTimeout(this.mRunner);
			}

	}

	/**************************************************************************************************************************************************************************************/
	/**************************************************************************************************************************************************************************************/
	/**************************************************************************************************************************************************************************************/
	/**************************************************************************************************************************************************************************************/
	/**************************************************************************************************************************************************************************************/

	//-this is an Object that builds the map based on the size of the screen

	function MapBuilder()  {  //this function will build the map grid of possible rooms
		const mw1993 = window.matchMedia("(min-width: 1993px)");
		const mw1921 = window.matchMedia("(min-width: 1920px) and (max-width: 1992px)");  //this sets y to match a screensize check of at least 1921px wide
		const mw1849 = window.matchMedia("(min-width: 1849px) and (max-width: 1919px)");
		const mw1777 = window.matchMedia("(min-width: 1777px) and (max-width: 1848px)");
		const mw1633 = window.matchMedia("(min-width: 1633px) and (max-width: 1776px)");
		const mw1561 = window.matchMedia("(min-width: 1561px) and (max-width: 1632px)");
		const mw1488 = window.matchMedia("(min-width: 1488px) and (max-width: 1560px)");
		const mw1416 = window.matchMedia("(min-width: 1416px) and (max-width: 1487px)");
		const mw1344 = window.matchMedia("(min-width: 1344px) and (max-width: 1415px)");

		if (mw1993.matches)  {
			console.log('---------------1993 is a match!');
			this.xy= 520;
			this.x_axis= -13;
			this.xright= 12;
			this.xsubtract= 25;
			this.y_axis= 9;
		} else if (mw1921.matches)  {
			console.log('---------------1921 is a match!');
			this.xy= 500;
			this.x_axis= -12;
			this.xright= 12;
			this.xsubtract= 24;
			this.y_axis= 9;
		} else if (mw1849.matches)  {
			console.log('---------------1849 is a match!');
			this.xy= 456;
			this.x_axis= -11;
			this.xright= 12;
			this.xsubtract= 23;
			this.y_axis= 9;
		} else if (mw1777.matches)  {
			this.xy= 437;
			this.x_axis= -11;
			this.xright= 11;
			this.xsubtract= 22;
			this.y_axis= 9;
		} else if (mw1633.matches)  {
			this.xy= 420;
			this.x_axis= -10;
			this.xright= 10;
			this.xsubtract= 20;
			this.y_axis= 9;
		} else if (mw1561.matches)  {
			this.xy= 420;
			this.x_axis= -9;
			this.xright= 10;
			this.xsubtract= 19;
			this.y_axis= 10;
		} else if (mw1488.matches)  {
			this.xy= 418;
			this.x_axis= -9;
			this.xright= 9;
			this.xsubtract= 18;
			this.y_axis= 10;
		} else if (mw1416.matches)  {
			this.xy= 396;
			this.x_axis= -8;
			this.xright= 9;
			this.xsubtract= 17;
			this.y_axis= 11;
		} else if (mw1344.matches)  {
			this.xy= 374;
			this.x_axis= -8;
			this.xright= 8;
			this.xsubtract= 16;
			this.y_axis= 11;
		}
		console.log('before the command to build the map! '+this.xright);
	}
		
	MapBuilder.prototype=  {
		buildTheMap: function(xright,xsubtract)  {  //this function creates a grid giving each square (x,y) coordinates with (0,0) at the center of the map
			const roomOnMap= "<div id= 'x" + this.x_axis + "y" + this.y_axis + "' class= 'maproom'></div>";
			if (this.xy>0)  {
				$("#mapback").append(roomOnMap);
				this.xy--;
				console.log(this.x_axis,xright);
				if (this.x_axis<xright)  {
					this.x_axis++;
				} else if (this.x_axis===xright)  {
					this.x_axis-=xsubtract;
					this.y_axis--;
					console.log("y_axis"+this.y_axis)
				}
				console.log('This is the x_axis! '+this.x_axis);
				return this.buildTheMap(this.xright,this.xsubtract);
			}
		}
	}

	function makeAMap()  {
		aNewMap[q]= new MapBuilder();
		aNewMap[q].buildTheMap(aNewMap[q].xright,aNewMap[q].xsubtract);
		q++;

	}
	makeAMap();

	/**************************************************************************************************************************************************************************************/
	/**************************************************************************************************************************************************************************************/
	/**************************************************************************************************************************************************************************************/
	/**************************************************************************************************************************************************************************************/
	/**************************************************************************************************************************************************************************************/

	function roomBuilder()  {  //this function creates new rooms
		//$("#six").html(" ");
		keyRoom[y]= new Room();
		keyRoom[y].randomNumber.push(keyRoom[y].randomDoors());  //this decides how many doors are in the new room
		keyRoom[y].oneReader();  //displays how many doors on the screen
		//console.log("how many doors in this room " + keyRoom[y].randomNumber);
		keyRoom[y].mapPosition.push(a);
		keyRoom[y].mapPosition.push(b);
		//console.log(keyRoom[y].mapPosition);
		keyRoom[y].whichDirections();  //chooses the directions
		keyRoom[y].thePath();  //displays them on the screen
		currentRoom.pop();
		currentRoom.push('keyRoom[' + y + ']');  //updates what the current room is
		//console.log("this is the current room " + currentRoom[0]);
		//let roomPosishArray= [a,b,'keyRoom[' + y + ']'];
		roomPosition.push([a,b,'keyRoom[' + y + ']']);  //creates a new room listing with object and room position in the roomPosition array
		console.log("this is the length of the room position array --->" + roomPosition.length);
		keyRoom[y].mapIndicator();
		if (roomPosition.length===1)  {  //this makes sure the chest is only created in the first room
			let theRoomContainer= new RoomContainer();  //this creates a chest in the room
			theRoomContainer.containerFiller();  //this creates an object inside of the chest in the room
			keyRoom[y].roomContainer.push(theRoomContainer);  //this puts the newly created chest in the roomContainer array
			$("#textwindow").append("<p>You see "+ keyRoom[y].roomContainer[0].rcName +".</p>");
			textWindowScroller();
		} else if (roomPosition.length>1)  {
			let randomChest= Math.floor((Math.random()*10)+1);
			console.log('this is the random chest number: '+randomChest);
			baddieDeployer();
			if (randomChest===1)  {
				let theRoomContainer= new RoomContainer();  //this creates a chest in the room
				theRoomContainer.containerFiller();  //this creates an object inside of the chest in the room
				keyRoom[y].roomContainer.push(theRoomContainer);  //this puts the newly created chest in the roomContainer array
				$("#textwindow").append("<p>You see "+ keyRoom[y].roomContainer[0].rcName +".</p>");
				textWindowScroller();
			}
		}
		//keyRoom[y].containerFiller();
		//$("#x"+a+"y"+b).css({"background":"black"});
		console.log("a new room has been created");
	}

	/**************************************************************************************************************************************************************************************/

	function gameStart()  {
		hero= new Player();
		hero.playerName= prompt("Salutations hero!  What ist thy name for recording into thy holy scrolls??");
		$("#heroname").html("Name: "+hero.playerName);
		hero.playerHP+=30;
		hero.playerSkills.attackSkill++;
		hero.playerSkills.defenseSkill++;
		hero.playerSkills.luck++;
		$("#herohp").html("HP: "+hero.playerHP);
		$("#weapon").html("Weapon: ");
		$("#armor").html("Armor: ");
		$("#weaponbonus").html("Weapon: "+"<br>"+hero.playerSkills.weaponBonus);
		$("#attackskill").html("Attack: "+"<br>"+hero.playerSkills.attackSkill);
		$("#armorbonus").html("Armor: "+"<br>"+hero.playerSkills.armorBonus);
		$("#defenseskill").html("Defense: "+"<br>"+hero.playerSkills.defenseSkill);
		$("#block").html("Block: "+"<br>"+hero.playerSkills.block);
		$("#parry").html("Parry: "+"<br>"+hero.playerSkills.parry);
		$("#luck").html("Luck: "+"<br>"+hero.playerSkills.luck);
		console.log("this is the name of our hero "+hero.playerName);
		roomBuilder();  //this builds the first room
		//$("#attackbutton").setAttribute('disabled', " ");
		//$("#x"+0+"y"+0).css({"background":"green"});
		$("#x"+a+"y"+b).addClass("currentroom");
	}
	gameStart();

	/**************************************************************************************************************************************************************************************/
	
	//there could be a random yes or no counter that runs before the timer to see if a baddie will even appear
		//this could rerun every 30 seconds or every minute to redecide if a baddie will appear

	function baddieDeployer()  {
		//$("#five").html(" ");
		let binaryChoice= Math.floor(Math.random()*2);
		if (binaryChoice===0)  {  //if a baddie will not enter the game
			console.log("no baddies this time!");
		} else if (binaryChoice===1)  {  //if a baddie will enter the game
			let sec= Math.floor((Math.random()*30)+1);  //this will produce a number between and including 1-30, time before baddie enters
			console.log("and now, your grand champion will enter in "+sec+ " seconds!");
			let krNum= currentRoomBreakdown();
			let anotherBinary= Math.floor(Math.random()*3);
			if (anotherBinary===0)  {
				ratMaker(sec, krNum);
			} else if (anotherBinary===1)  {
				spiderMaker(sec, krNum);
			} else if (anotherBinary===2)  {
				blueSlime(sec, krNum);
			}
		}
	}

	/**************************************************************************************************************************************************************************************/

	//whoever targets the other first gets the first attack
	//when targeting happens the 10 second counter starts in which time you can choose the action you want to take for this turn
	//at the end of the counter the action will be taken or after if the selection is made after 10 seconds
	//the turn won't advance until an action is taken
	//when the action it taken then the timer for the next players turn will start during which time they can choose an action
	//and it will rotate thusly until either the player or the baddie are dead

	/**************************************************************************************************************************************************************************************/

	function ratMaker(sec, krNum)  {  //this function will call the baddie deployer and specifically create rats
		setTimeout(function()  {  //this function runs in sec(variable) seconds
			
			let br= new Player();  //this creates a new rat in the room
			br.room.push('keyRoom['+krNum+']');
			br.playerName= "A Big Rat";
			br.playerHP+=5;
			br.playerSkills.attackSkill+=1;
			br.playerSkills.defenseSkill+=1;
			br.playerSkills.luck+=1;
			br.knowThyCounter+=1;

			keyRoom[krNum].baddies.push(br);
			console.log("is there a baddie in the room? "+keyRoom[krNum].baddies[0].playerName);

			// br[brCounter]= new Player();  //this creates a new rat in the room
			// br[brCounter].room.push('keyRoom['+krNum+']');
			// br[brCounter].playerName= "A Big Rat";
			// br[brCounter].playerHP+=5;
			// br[brCounter].playerSkills.attackSkill+=1;
			// br[brCounter].playerSkills.defenseSkill+=1;
			// br[brCounter].playerSkills.luck+=1;
			// br[brCounter].knowThyCounter+=1;
			console.log("know thy counter: "+br.knowThyCounter);
			if (br.room[0]===currentRoom[0])  {  //this checks to see if the room the rat started in is the same as the current room
				if (keyRoom[krNum].baddies.length===0)  {  //if there is no baddie in the room
					console.log('The baddie is in the same room as the player!');
					$("#textwindow").append("<p>"+br.playerName+" has entered the room.</p>");  //if it is then notify the player
					textWindowScroller();
					//keyRoom[krNum].baddies.push(br.knowThyCounter);  //push the rat object to the current room baddies array
					let chanceRoll= Math.floor((Math.random()*20)+1);
					if (chanceRoll>15)  {  //if chanceRoll is 15 or greater then the baddie has haste
						console.log("this is which baddie is attacking: "+br.playerName);
						br.turn++;  //this indicates that it is the baddies turn to attack
						br.playerTarget++;
						console.log("the baddie attacks!");
						$("#textwindow").append("<p>Startled, "+br.playerName+" excitedly lunges at you in a fit of rage!</p>");
						textWindowScroller();
						combatOnOff++;
						$("#textwindow").append("<p>"+br.playerName+" takes initiative.</p>");
						br.battleTurner(2, krNum, br.knowThyCounter);
						//brCounter++;
					} else if (chanceRoll<15)  {  //if there is no haste roll
						console.log("sorry, no baddie sneak attack this time!");
						setTimeout(function()  {
							if (combatOnOff===0)  {
								//keyRoom[krNum].baddies[0].turn++;  //this indicates that it is the baddies turn to attack
								console.log("this is which baddie is attacking: "+br.playerName);
								br.playerTarget++;
								textWindowScroller();
								combatOnOff++;
								$("#textwindow").append("<p>"+br.playerName+" takes initiative, you brace for attack.</p>");
								br.battleTurner(2, krNum, br.knowThyCounter);
								//brCounter++;
								//keyRoom[krNum].baddies[0].turn--;
								//hero.turn++;
							}
						}, chanceRoll*1000)
					}
					}
			} else if (br.room[0]!==currentRoom[0]){ //if it is not the same room
				//keyRoom[krNum].baddies.push(br.knowThyCounter);  //push the rat object to the current room baddies array
				console.log('The baddie is not in the same room as the player.');
				let rib= roomIndexBreakdown(br.room[0]);
				console.log('rib'+rib);
				keyRoom[rib].baddieMover();
				//br.baddieMover();
				//brCounter++;;
			}
		}, sec*1000);  //this function runs in sec(variable) seconds
	}

	function spiderMaker(sec, krNum)  {  //this function will call the baddie deployer and specifically create rats
		setTimeout(function()  {  //this function runs in sec(variable) seconds
			ls= new Player();  //this creates a new rat in the room
			ls.room.push('keyRoom['+krNum+"]");
			ls.playerName= "A Large Spider";
			ls.playerHP+=5;
			ls.playerSkills.attackSkill+=1;
			ls.playerSkills.defenseSkill+=1;
			ls.playerSkills.luck+=1;
			ls.knowThyCounter+=2;

			keyRoom[krNum].baddies.push(ls);
			console.log("is there a baddie in the room? "+keyRoom[krNum].baddies[0].playerName);

			console.log("know thy counter: "+ls.knowThyCounter);
			if (ls.room[0]===currentRoom[0])  {  //this checks to see if the room the rat started in is the same as the current room
				if (keyRoom[krNum].baddies.length===0)  {  //if there is no baddie in the room
					console.log('The baddie is in the same room as the player!');
					$("#textwindow").append("<p>"+ls.playerName+" has entered the room.</p>");  //if it is then notify the player
					textWindowScroller();
					//keyRoom[krNum].baddies.push(ls.knowThyCounter);  //push the rat object to the occupied room
					let chanceRoll= Math.floor((Math.random()*20)+1);
					if (chanceRoll>15)  {  //this is where it is decided if a baddie has haste or not
						console.log("this is which baddie is attacking: "+ls.playerName);
						ls.turn++;  //this indicates that it is the baddies turn to attack
						ls.playerTarget++;
						console.log("the baddie attacks!");
						$("#textwindow").append("<p>Startled, "+ls.playerName+" excitedly lunges at you in a fit of rage!</p>");
						textWindowScroller();
						combatOnOff++;
						$("#textwindow").append("<p>"+ls.playerName+" takes initiative.</p>");
						ls.battleTurner(2, krNum, ls.knowThyCounter);
						//lsCounter++;

						//*************************if the baddie has haste the player needs to be prevented from leaving the room****************************

					} else if (chanceRoll<15)  {  //if there is no haste roll
						console.log("sorry, no baddie sneak attack this time!");
						setTimeout(function()  {
							if (combatOnOff===0)  {
								//keyRoom[krNum].baddies[0].turn++;  //this indicates that it is the baddies turn to attack
								console.log("this is which baddie is attacking: "+ls.playerName);
								ls.playerTarget++;
								textWindowScroller();
								combatOnOff++;
								$("#textwindow").append("<p>"+ls.playerName+" takes initiative, you brace for attack.</p>");
								ls.battleTurner(2, krNum, ls.knowThyCounter);
								//lsCounter++;
								//keyRoom[krNum].baddies[0].turn--;
								//hero.turn++;
							}
						}, chanceRoll*1000)
					}
				}
			} else if (ls.room[0]!==currentRoom[0])  { //if it is not the same room
				//keyRoom[krNum].baddies.push(ls.knowThyCounter);  //push the rat object to the occupied room
				console.log('The baddie is not in the same room as the player.');
				let rib= roomIndexBreakdown(ls.room[0]);
				console.log('rib'+rib);
				keyRoom[rib].baddieMover();
				//ls.baddieMover();
			}
		}, sec*1000);  //this function runs in sec(variable) seconds
	}

	function blueSlime(sec, krNum)  {  //this function will call the baddie deployer and specifically create rats
		setTimeout(function()  {  //this function runs in sec(variable) seconds
			bs= new Player();  //this creates a new rat in the room
			bs.room.push('keyRoom['+krNum+"]");
			bs.playerName= "A Blue Slime";
			bs.playerHP+=10;
			bs.playerSkills.attackSkill+=1;
			bs.playerSkills.defenseSkill+=1;
			bs.playerSkills.luck+=1;
			bs.knowThyCounter+=2;

			keyRoom[krNum].baddies.push(bs);
			console.log("is there a baddie in the room? "+keyRoom[krNum].baddies[0].playerName);

			console.log("know thy counter: "+bs.knowThyCounter);
			if (bs.room[0]===currentRoom[0])  {  //this checks to see if the room the rat started in is the same as the current room
				if (keyRoom[krNum].baddies.length===0)  {  //if there is no baddie in the room
					console.log('The baddie is in the same room as the player!');
					$("#textwindow").append("<p>"+bs.playerName+" has oozed into the room.</p>");  //if it is then notify the player
					textWindowScroller();
					//keyRoom[krNum].baddies.push(bs.knowThyCounter);  //push the rat object to the occupied room
					let chanceRoll= Math.floor((Math.random()*20)+1);
					if (chanceRoll>15)  {  //this is where it is decided if a baddie has haste or not
						console.log("this is which baddie is attacking: "+bs.playerName);
						bs.turn++;  //this indicates that it is the baddies turn to attack
						bs.playerTarget++;
						console.log("the baddie attacks!");
						$("#textwindow").append("<p>Startled, "+bs.playerName+" excitedly lunges at you in a fit of rage!</p>");
						textWindowScroller();
						combatOnOff++;
						$("#textwindow").append("<p>"+bs.playerName+" takes initiative.</p>");
						bs.battleTurner(2, krNum, bs.knowThyCounter);
						//lsCounter++;

						//*************************if the baddie has haste the player needs to be prevented from leaving the room****************************

					} else if (chanceRoll<15)  {  //if there is no haste roll
						console.log("sorry, no baddie sneak attack this time!");
						setTimeout(function()  {
							if (combatOnOff===0)  {
								//keyRoom[krNum].baddies[0].turn++;  //this indicates that it is the baddies turn to attack
								console.log("this is which baddie is attacking: "+bs.playerName);
								bs.playerTarget++;
								textWindowScroller();
								combatOnOff++;
								$("#textwindow").append("<p>"+bs.playerName+" takes initiative, you brace for attack.</p>");
								bs.battleTurner(2, krNum, bs.knowThyCounter);
								//lsCounter++;
								//keyRoom[krNum].baddies[0].turn--;
								//hero.turn++;
							}
						}, chanceRoll*1000)
					}
				}
			} else if (bs.room[0]!==currentRoom[0])  { //if it is not the same room
				//keyRoom[krNum].baddies.push(bs.knowThyCounter);  //push the rat object to the occupied room
				console.log('The baddie is not in the same room as the player.');
				let rib= roomIndexBreakdown(bs.room[0]);
				console.log('rib'+rib);
				keyRoom[rib].baddieMover();
				//bs.baddieMover();
			}
		}, sec*1000);  //this function runs in sec(variable) seconds
	}

	/**************************************************************************************************************************************************************************************/
	/**************************************************************************************************************************************************************************************/
	/**************************************************************************************************************************************************************************************/
	/**************************************************************************************************************************************************************************************/

	$("#north").click(function()  {
		//$("#six").html(" ");
		let number = currentRoomBreakdown();
		//console.log(joinedArray);
		//console.log("last direction --------->" + lastDirection);
		//console.log("the length of the keyroom array " + keyRoom.length);
		if (keyRoom[number].baddies.length===0)  {
			if (joinedArray.indexOf("North") !== -1)  {  //is North one of the optional directions?
				lastDirection.pop();
				lastDirection.push("North");
				//console.log(joinedArray.indexOf("North"));
				$("#textwindow").append("<p>You travel North.</p>");
				textWindowScroller();
				$("#twopointfive").html("");  //this clears the twopointfive id so that roomBuilder() can insert new information
				if (keyRoom[number].roomConnectionsArray[0].length===1)  {  //if there is no room created in the direction of north yet
					//keyRoom[number].roomConnectionsArray[0].push('keyRoom['+ (y+1) +']');  //this saves the new room into the roomConnectionsArray of the current for future navigation
					//console.log("new room saved in old rooms connections array" + keyRoom[number].roomConnectionsArray[0]);
					$("#x"+a+"y"+b).removeClass("currentroom");
					$("#x"+a+"y"+b).addClass("previousroom");
					y++;
					b++;
					roomBuilder();
					$("#x"+a+"y"+b).addClass("currentroom");
					//keyRoom[(y-1)].roomConnectionsArray[0].push('keyRoom[' + y + ']');  //this saves the previous room into the roomConnectionsArray of the new room for future navigation
					//console.log("old room saved in new rooms connections array" + keyRoom[y].roomConnectionsArray[1]);
				} else if (keyRoom[number].roomConnectionsArray[0].length>1)  {  //if there is a room created in this direction already
					function currentRoomConnectionsArrayBreakdown()  {  //extract the string number from the array entry and return an integer
						let numberWest= keyRoom[number].roomConnectionsArray[0][1].split("");
						let westRoomRange= numberWest[8];
						let numberWestNine= numberWest[9];
						console.log("this is the ninth placing "+numberWestNine);
						let numberWestParse= parseInt(westRoomRange);
						let nwn= parseInt(numberWestNine);
						if (isNaN(nwn)===true)  {  //this checks to see if the keyRoom number is greater than 10
							console.log("this is not a number!");
							return numberWestParse;
						} else if (isNaN(nwn)===false)  {
							console.log("the ninth number"+nwn);
							let numberNew= (numberWestParse*10)+nwn;
							console.log(numberNew);
							return numberNew;
						}
					}
					let crcab= currentRoomConnectionsArrayBreakdown();
					//$("#one").html("You see " + keyRoom[crcab].directionArray.length + " doors.");
					$("#textwindow").append("<p>You see " + keyRoom[crcab].directionArray.length + " doors.</p>");
					textWindowScroller();
					keyRoom[crcab].thePath();  //displays them on the screen
					currentRoom.pop();
					currentRoom.push('keyRoom[' + crcab + ']');  //updates what the current room is
					console.log("this is the current room " + currentRoom[0]);
					$("#x"+a+"y"+b).removeClass("currentroom");
					b++;  //this increments the x axis
					$("#x"+a+"y"+b).addClass("currentroom");
					//console.log(keyRoom[crcab].mapPosition);
					if (keyRoom[crcab].baddies.length===0)  {
						baddieDeployer();
					} else if (keyRoom[crcab].baddies.length>0)  {
						keyRoom[crcab].baddieStopper();
						$("#textwindow").append("<p>You see "+keyRoom[crcab].baddies[0].playerName+"</p>");
						textWindowScroller();
						//$("#five").html("You see "+keyRoom[crcab].baddies[0].playerName);
					}
				}
			} else {
				$("#textwindow").append("<p>You cannot travel North.</p>");
				textWindowScroller();
			}
		} else if (keyRoom[number].baddies.length>0)  {
			$("#textwindow").append('<p>You are unable to leave.  There are baddies in the room!</p>');
			textWindowScroller();
		}
	});

	$("#south").click(function()  {
		//$("#six").html(" ");
		let number = currentRoomBreakdown();
		//let joinedArray= directionArray.join();
		//console.log(joinedArray);
		//console.log("last direction --------->" + lastDirection);
		//console.log("the length of the keyroom array " + keyRoom.length);
		if (keyRoom[number].baddies.length===0)  {
			if (joinedArray.indexOf("South") !== -1)  {  //is South one of the optional directions?
				lastDirection.pop();
				lastDirection.push("South");
				//console.log(joinedArray.indexOf("South"));
				$("#textwindow").append("<p>You travel South.</p>");
				textWindowScroller();
				$("#twopointfive").html("");
				if (keyRoom[number].roomConnectionsArray[1].length===1)  {  //if there is no room created in the direction of south yet
					//keyRoom[number].roomConnectionsArray[1].push('keyRoom['+ (y+1) +']');  //this saves the new room into the roomConnectionsArray of the current for future navigation
					//console.log("new room saved in old rooms connections array" + keyRoom[number].roomConnectionsArray[1]);
					$("#x"+a+"y"+b).removeClass("currentroom");
					$("#x"+a+"y"+b).addClass("previousroom");
					y++;
					b--;
					roomBuilder();
					$("#x"+a+"y"+b).addClass("currentroom");
					//keyRoom[(y-1)].roomConnectionsArray[1].push('keyRoom[' + y + ']');  //this saves the previous room into the roomConnectionsArray of the new room for future navigation
					//console.log("old room saved in new rooms connections array" + keyRoom[y].roomConnectionsArray[0]);
				} else if (keyRoom[number].roomConnectionsArray[1].length>1)  {  //if there is a room created in this direction already
					function currentRoomConnectionsArrayBreakdown()  {  //extract the string number from the array entry and return an integer
						let numberWest= keyRoom[number].roomConnectionsArray[1][1].split("");
						let westRoomRange= numberWest[8];
						let numberWestNine= numberWest[9];
						console.log("this is the ninth placing "+numberWestNine);
						let numberWestParse= parseInt(westRoomRange);
						let nwn= parseInt(numberWestNine);
						if (isNaN(nwn)===true)  {
							console.log("this is not a number!");
							return numberWestParse;
						} else if (isNaN(nwn)===false)  {
							console.log("the ninth number"+nwn);
							let numberNew= (numberWestParse*10)+nwn;
							console.log(numberNew);
							return numberNew;
						}
					}
					let crcab= currentRoomConnectionsArrayBreakdown();
					//$("#one").html("You see " + keyRoom[crcab].directionArray.length + " doors.");
					$("#textwindow").append("<p>You see " + keyRoom[crcab].directionArray.length + " doors.</p>");
					textWindowScroller();
					keyRoom[crcab].thePath();  //displays them on the screen
					currentRoom.pop();
					currentRoom.push('keyRoom[' + crcab + ']');  //updates what the current room is
					console.log("this is the current room " + currentRoom[0]);
					$("#x"+a+"y"+b).removeClass("currentroom");
					b--;  //this decrements the x axis
					$("#x"+a+"y"+b).addClass("currentroom");
					//console.log(keyRoom[crcab].mapPosition);
					if (keyRoom[crcab].baddies.length===0)  {
						baddieDeployer();
					} else if (keyRoom[crcab].baddies.length>0)  {
						keyRoom[crcab].baddieStopper();
						$("#textwindow").append("<p>You see "+keyRoom[crcab].baddies[0].playerName+"</p>");
						textWindowScroller();
					}
				}
			} else {
				$("#textwindow").append("<p>You cannot travel South.</p>");
				textWindowScroller();
			}
		} else if (keyRoom[number].baddies.length>0)  {
			$("#textwindow").append('<p>You are unable to leave.  There are baddies in the room!</p>');
			textWindowScroller();
		}
	});

	$("#east").click(function()  {
		//$("#six").html(" ");
		let number = currentRoomBreakdown();
		//let joinedArray= directionArray.join();
		//console.log(joinedArray);
		//console.log("last direction --------->" + lastDirection);
		//console.log("the length of the keyroom array " + keyRoom.length);
		if (keyRoom[number].baddies.length===0)  {
			if (joinedArray.indexOf("East") !== -1)  {  //is East one of the optional directions?
				lastDirection.pop();
				lastDirection.push("East");
				//console.log(joinedArray.indexOf("East"));
				$("#textwindow").append("<p>You travel East.</p>");
				textWindowScroller();
				$("#twopointfive").html("");
				if (keyRoom[number].roomConnectionsArray[2].length===1)  {  //if there is no room created in the direction of east yet
					//keyRoom[number].roomConnectionsArray[2].push('keyRoom['+ (y+1) +']');  //this saves the new room into the roomConnectionsArray of the current for future navigation
					//console.log("new room saved in old rooms connections array" + keyRoom[number].roomConnectionsArray[2]);
					$("#x"+a+"y"+b).removeClass("currentroom");
					$("#x"+a+"y"+b).addClass("previousroom");
					y++;
					a++;
					roomBuilder();
					$("#x"+a+"y"+b).addClass("currentroom");
					//keyRoom[(y-1)].roomConnectionsArray[2].push('keyRoom[' + y + ']');  //this saves the previous room into the roomConnectionsArray of the new room for future navigation
					//console.log("old room saved in new rooms connections array" + keyRoom[y].roomConnectionsArray[3]);
				} else if (keyRoom[number].roomConnectionsArray[2].length>1)  {  //if there is a room created in this direction already
					function currentRoomConnectionsArrayBreakdown()  {  //extract the string number from the array entry and return an integer
						let numberWest= keyRoom[number].roomConnectionsArray[2][1].split("");
						let westRoomRange= numberWest[8];
						let numberWestNine= numberWest[9];
						console.log("this is the ninth placing "+numberWestNine);
						let numberWestParse= parseInt(westRoomRange);
						let nwn= parseInt(numberWestNine);
						if (isNaN(nwn)===true)  {
							console.log("this is not a number!");
							return numberWestParse;
						} else if (isNaN(nwn)===false)  {
							console.log("the ninth number"+nwn);
							let numberNew= (numberWestParse*10)+nwn;
							console.log(numberNew);
							return numberNew;
						}
					}
					let crcab= currentRoomConnectionsArrayBreakdown();
					//$("#one").html("You see " + keyRoom[crcab].directionArray.length + " doors.");
					$("#textwindow").append("<p>You see " + keyRoom[crcab].directionArray.length + " doors.</p>");
					textWindowScroller();
					keyRoom[crcab].thePath();  //displays them on the screen
					currentRoom.pop();
					currentRoom.push('keyRoom[' + crcab + ']');  //updates what the current room is
					console.log("this is the current room " + currentRoom[0]);
					$("#x"+a+"y"+b).removeClass("currentroom");
					a++;  //this increments the y axis
					$("#x"+a+"y"+b).addClass("currentroom");
					//console.log(keyRoom[crcab].mapPosition);
					if (keyRoom[crcab].baddies.length===0)  {
						baddieDeployer();
					} else if (keyRoom[crcab].baddies.length>0)  {
						keyRoom[crcab].baddieStopper();
						$("#textwindow").append("<p>You see "+keyRoom[crcab].baddies[0].playerName+"</p>");
						textWindowScroller();
					}
				}
			} else {
				$("#textwindow").append("<p>You cannot travel East.</p>");
				textWindowScroller();
			}
		} else if (keyRoom[number].baddies.length>0)  {
			$("#textwindow").append('<p>You are unable to leave.  There are baddies in the room!</p>');
			textWindowScroller();
		}
	});

	$("#west").click(function()  {
		//$("#six").html(" ");
		let number = currentRoomBreakdown();  //this saves what the current keyRoom number is before clicking west
		//let joinedArray= directionArray.join();
		//console.log(joinedArray);
		//console.log("last direction --------->" + lastDirection);
		//console.log("the length of the keyroom array " + keyRoom.length);
		if (keyRoom[number].baddies.length===0)  {
			if (joinedArray.indexOf("West") !== -1)  {  //is West one of the optional directions?
				lastDirection.pop();
				lastDirection.push("West");
				//console.log(joinedArray.indexOf("West"));
				$("#textwindow").append("<p>You travel West.</p>");
				textWindowScroller();
				//$("#twopointfive").html("");
				if (keyRoom[number].roomConnectionsArray[3].length===1)  {  //if there is no room created in the direction of west yet
					//keyRoom[number].roomConnectionsArray[3].push('keyRoom['+ (y+1) +']');  //this saves the new room into the roomConnectionsArray of the current for future navigation
					//console.log("new room saved in old rooms connections array" + keyRoom[number].roomConnectionsArray[3]);
					$("#x"+a+"y"+b).removeClass("currentroom");
					$("#x"+a+"y"+b).addClass("previousroom");
					y++;  //counter for created rooms
					a--;
					roomBuilder();
					$("#x"+a+"y"+b).addClass("currentroom");
					//keyRoom[(y-1)].roomConnectionsArray[3].push('keyRoom[' + y + ']');  //this saves the previous room into the roomConnectionsArray of the new room for future navigation
					//console.log("old room saved in new rooms connections array" + keyRoom[number].roomConnectionsArray[2]);
				} else if (keyRoom[number].roomConnectionsArray[3].length>1)  {  //if there is a room created in this direction already
					function currentRoomConnectionsArrayBreakdown()  {  //extract the string number from the array entry and return an integer
						let numberWest= keyRoom[number].roomConnectionsArray[3][1].split("");
						let westRoomRange= numberWest[8];
						let numberWestNine= numberWest[9];
						console.log("this is the ninth placing "+numberWestNine);
						let numberWestParse= parseInt(westRoomRange);
						let nwn= parseInt(numberWestNine);
						if (isNaN(nwn)===true)  {
							console.log("this is not a number!");
							return numberWestParse;
						} else if (isNaN(nwn)===false){
							console.log("the ninth number"+nwn);
							let numberNew= (numberWestParse*10)+nwn;
							console.log(numberNew);
							return numberNew;
						}
					}
					let crcab= currentRoomConnectionsArrayBreakdown();
					//$("#one").html("You see " + keyRoom[crcab].directionArray.length + " doors.");
					$("#textwindow").append("<p>You see " + keyRoom[crcab].directionArray.length + " doors.</p>");
					textWindowScroller();
					keyRoom[crcab].thePath();  //displays them on the screen
					currentRoom.pop();
					currentRoom.push('keyRoom[' + crcab + ']');  //updates what the current room is
					console.log("this is the current room " + currentRoom[0]);
					$("#x"+a+"y"+b).removeClass("currentroom");
					a--;  //this decrements the y axis
					$("#x"+a+"y"+b).addClass("currentroom");
					//console.log(keyRoom[crcab].mapPosition);
					if (keyRoom[crcab].baddies.length===0)  {
						baddieDeployer();
					} else if (keyRoom[crcab].baddies.length>0)  {
						keyRoom[crcab].baddieStopper();
						$("#textwindow").append("<p>You see "+keyRoom[crcab].baddies[0].playerName+"</p>");
						textWindowScroller();
					}
				}
			} else {
				$("#textwindow").append("<p>You cannot travel West.</p>");
				textWindowScroller();
			}
		} else if (keyRoom[number].baddies.length>0)  {
			$("#textwindow").append('<p>You are unable to leave.  There are baddies in the room!</p>');
			textWindowScroller();
		}
	});

	$("#targetbutton").click(function()  {  //this targets the baddie in the room
		let number = currentRoomBreakdown();  //saves the number for which room the player is in
		console.log("the current room number: "+number);
		// let pushedBaddie= whichBaddieChecker(keyRoom[number].baddies[0]);
		// targetedBaddie.push(pushedBaddie);
		if (keyRoom[number].baddies.length>0)  {
			$("#textwindow").append("<p>You target "+keyRoom[number].baddies[0].playerName+"</p>");
			textWindowScroller();
			$("#attackbutton").removeAttr('disabled');
			hero.playerTarget++;
			hero.turn++;
			//$("#five").html(" ");
		} else {
			//$("#five").html(" ");
			$("#textwindow").append("<p>There is nothing to target!</p>");
			textWindowScroller();
		}
	});

	$("#attackbutton").click(function()  {  //this attacks the baddie in the room that you have targeted
		if (combatOnOff===0)  {
			let krNum= currentRoomBreakdown();
			combatOnOff++;
			hero.battleTurner(1, krNum);
			$("#textwindow").append("<p>You take initiative and prepare to strike!</p>");
			textWindowScroller();
		} else if (combatOnOff===1)  {
			//$("#five six seven").html(" ");
			$("#textwindow").append("<p>Combat has already been started!</p>");
			textWindowScroller();
		}
	});

	$("#healbutton").click(function()  {
		if (hero.inventory.length>0)  {
			let hiLength= hero.inventory.length
			let hiLengthCounter= 0;
			function medpackSearch()  {
				if (hiLengthCounter<hiLength)  {
					if (hero.inventory[hiLengthCounter].designator==='health')  {
						hero.playerHP+=hero.inventory[hiLengthCounter].playerHP;  //this applies the bonus to the heroes skills
						$("#herohp").html("HP: "+hero.playerHP);  //refreshing the value on the screen
						$("#textwindow").append("<p>You take the "+hero.inventory[hiLengthCounter].itemName+" from your inventory and use it to mend your wounds.</p>");
						textWindowScroller();
						hero.inventory.splice(hiLengthCounter,1);
					} else if (hero.inventory[hiLengthCounter].designator!=='health')  {
						hiLengthCounter++;
						return medpackSearch();
					}
				} else if (hiLengthCounter===hiLength)  {
					$("#textwindow").append("<p>You don't have any medpacks to use!</p>");
					textWindowScroller();
				}
			}
			medpackSearch();
			console.log('there is an item!');
		} else {
			$("#textwindow").append("<p>You don't have any medpacks to use!</p>");
			textWindowScroller();
			console.log('you are not carrying anything!');
		}

		// hero.playerHP+=30;
		// $("#textwindow").append("<p>You cast a spell of mending on yourself.  You feel better.</p>");
		// textWindowScroller();
	});

	$("#lookbutton").click(function()  {
		let krNum= currentRoomBreakdown();
		if (keyRoom[krNum].roomContainer.length>0)  {  //if there is a chest in the room
			if (keyRoom[krNum].roomContainer[0].roomContainer.length>0)  {  //if there is something in the chest
				//let rcStat= "";
				if (keyRoom[krNum].roomContainer[0].rcStatus===0)  {  //closed
					$("#openbutton").removeAttr('disabled');
					$("#textwindow").append("<p>You look around the room and see "+ keyRoom[krNum].roomContainer[0].rcName +".</p>");
					textWindowScroller();
					keyRoom[krNum].thePath();  //this reads out the available directions of travel in the text window, it reads out after everthing else runs in the click function
				} else if (keyRoom[krNum].roomContainer[0].rcStatus!==0)  {  //open
					$("#takebutton").removeAttr('disabled');
					$("#textwindow").append("<p>You peer into "+ keyRoom[krNum].roomContainer[0].rcName +", and see a "+ keyRoom[krNum].roomContainer[0].roomContainer[0].itemName +".</p>");
					textWindowScroller();
				}
			} else if (keyRoom[krNum].roomContainer[0].roomContainer.length===0)  {  //if there is nothing in the chest
				if (keyRoom[krNum].roomContainer[0].rcStatus===0)  {  //the container is unopened
					//here should go if there are any containers in the room, how many doors, which directions, how many baddies if any and what they are
					$("#textwindow").append("<p>You look around the room and see "+ keyRoom[krNum].roomContainer[0].rcName +".</p>");
					textWindowScroller();
				} else if (keyRoom[krNum].roomContainer[0].rcStatus===1)  {  //the container is opened and empty
					$("#textwindow").append("<p>You peer into "+ keyRoom[krNum].roomContainer[0].rcName +" and see absolutely nothing.</p>");
					textWindowScroller();
				} else if (keyRoom[krNum].roomContainer[0].rcStatus===2)  {  //the container is closed forever
					//here should go if there are any opened containers in the room, how many doors, which directions, how many baddies if any and what they are
					$("#textwindow").append("<p>You look around the room and see "+ keyRoom[krNum].roomContainer[0].rcName +", closed forever.</p>");
					textWindowScroller();
				}
				keyRoom[krNum].thePath();  //this reads out the available directions of travel in the text window, it reads out after everthing else runs in the click function
			}
		} else if (keyRoom[krNum].roomContainer.length===0)  {  //no chest in room
			keyRoom[krNum].thePath();  //this reads out the available directions of travel in the text window, it reads out after everthing else runs in the click function
		}
		if (keyRoom[krNum].baddies.length>0)  {  //if there are baddies in the room
			$("#textwindow").append("<p>You also see "+ keyRoom[krNum].baddies.length +" baddies in the room.</p>");
			textWindowScroller();
		}
	});

	$("#openbutton").click(function()  {
		let krNum= currentRoomBreakdown();
		if (keyRoom[krNum].roomContainer[0].rcStatus===0)  {
			keyRoom[krNum].roomContainer[0].rcStatus+=1;
			$("#textwindow").append("<p>You open "+ keyRoom[krNum].roomContainer[0].rcName +" with some effort to the sound of old rusty hinges creaking in protest.</p>");
			textWindowScroller();
		} else if (keyRoom[krNum].roomContainer[0].rcStatus===2)  {
			$("#textwindow").append("<p>Sadly, the container can never be opened again.</p>");
			textWindowScroller();
		}
	});

	$("#takebutton").click(function()  {
		let krNum= currentRoomBreakdown();
		if (keyRoom[krNum].roomContainer[0].rcStatus===0)  {
			$("#textwindow").append("<p>You cannot take the box but, you might be able to open it.</p>");
			textWindowScroller();
		} else if (keyRoom[krNum].roomContainer[0].rcStatus===1)  {
			hero.inventory.push(keyRoom[krNum].roomContainer[0].roomContainer.shift());  //taking the item from the container and putting it into inventory
			keyRoom[krNum].roomContainer[0].rcStatus+=1;  //this changes the status of the room container so that it can never be opened again
			$("#textwindow").append("<p>You take the "+ hero.inventory[0].itemName +" from "+ keyRoom[krNum].roomContainer[0].rcName +" and add it to your inventory.</p>");
			textWindowScroller();
			setTimeout(function()  {
				$("#textwindow").append("<p>Once you take the item from the chest you hear a subtle click and the container snaps shut, never to be opened again.</p>");
				textWindowScroller();
			}, 1500);
		}
	});

	$("#weaponbutton").click(function()  {
		if (hero.inventory.length>0)  {
			let hiLength= hero.inventory.length
			let hiLengthCounter= 0;
			function weaponSearch()  {
				if (hiLengthCounter<hiLength)  {
					if (hero.inventory[hiLengthCounter].designator==='weapon')  {
						hero.playerEquiped.weapon.push(hero.inventory.splice(hiLengthCounter,1));
						hero.playerSkills.weaponBonus=hero.playerEquiped.weapon[0][0].weaponBonus;  //this applies the bonus to the heroes skills
						$("#weaponbonus").html("Weapon: "+"<br>"+hero.playerSkills.weaponBonus);  //refreshing the value on the screen
						$("#textwindow").append("<p>You take the "+hero.playerEquiped.weapon[0][0].itemName+" from your inventory and you ponder how many baddies will fall to this mighty weapon.</p>");
						textWindowScroller();
					} else if (hero.inventory[hiLengthCounter].designator!=='weapon')  {
						console.log(hiLengthCounter);
						hiLengthCounter++;
						return weaponSearch();
					}
				} else if (hiLengthCounter===hiLength)  {
					$("#textwindow").append("<p>You look through your inventory but, see no weapons to equip.</p>");
					textWindowScroller();
				}
			}
			weaponSearch();
			console.log('there is an item!');
		} else {
			console.log('There is nothing in your inventory!');
		}
	});