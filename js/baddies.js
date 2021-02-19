
let brCounter= 0;
let br= [];  //a counting variable for how many rats have been created

function BigRat()  {
	let attackQuotesArray= ["The big rat makes an impossible leap and lunges for your throat!", "The big rat tries to bite your ankles!", "The big rat sniffs your feet before attempting to take a big bite out of them!"];
	let bigRatHP= 1;
	let bigRatAttack= 1;
}

function baddieDeployer()  {
	let sec= Math.floor((Math.random()*4)+1);  //this will produce a number between and including 1-4
	let krNum= currentRoomBreakdown();
	if (keyRoom[krNum].baddies===0)  {  //if there is no rat in the room
		function timer()  {
			if (sec>0)  {
				setInterval(function(){}, 1000);
				sec--;
				return timer();
			} else if (sec===0)  {
				br[brCounter]= new BigRat();  //this creates a new rat in the room
				keyRoom[krNum].baddies++;
				brCounter++;
			}
		}
		timer();
	}
}