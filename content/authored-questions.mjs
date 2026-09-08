// Individually written questions. Each row is tier (0/1/2), page (1-based),
// prompt, correct choice, distractor, target word. Editorial approval is separate.
const banks = {
'ch01-a': `
0|1|What does Pip have?|a letter|a cup|name
0|2|Who does Pip see?|a friend|a train|friend
0|3|What does Nori have?|a name card|a lunch box|name
0|4|Who waves to Pip?|a child|a kitten|child
0|5|Who gets the letter?|the child|a farmer|give
0|6|How do the friends look at the end?|They smile.|They cry.|smile
1|1|What is missing from the letter?|a name|a window|name
1|2|What greeting does Pip use?|hello|goodbye|hello
1|3|What color is Nori's card?|blue|red|blue
1|4|Which card does the child have?|a leaf card|a star card|leaf
1|5|What does the letter say?|welcome|stop|letter
1|6|Where do the friends walk together?|to the club|to the beach|together
1|2|Who hears Pip's hello?|Nori|Bea|hello
2|1|What shows the letter belongs to the Explorer Club?|a leaf-shaped seal|a price tag|leaf
2|2|What does Nori stop doing to listen?|painting|swimming|listen
2|3|Why does Nori's card not solve the puzzle?|The shapes do not match.|The card is wet.|card
2|4|What fits the space on the envelope?|the leaf|a spoon|leaf
2|5|What is the new explorer invited to help make?|the Wonderwood Atlas|a real train|help
2|6|What is waiting for their first discovery?|an empty page|a full lunch box|page
2|3|Where does Nori place her name card?|beside the letter|under a tree|card`,
'ch01-b': `
0|1|What does Nori set out?|a chair|a boat|chair
0|2|Who brings a blanket?|Nori's brother|a farmer|brother
0|3|Who comes with an adult?|a baby|a tiger|baby
0|4|Who has no chair?|Pip|Nori|chair
0|5|What does Nori move?|her chair|a tree|chair
0|6|What does every friend have at the end?|a seat|a ticket|friend
1|1|Who is coming to the club?|Nori's family|a bus driver|family
1|2|Where does the blanket go?|beside the chairs|on the roof|blanket
1|3|Who does the baby sit with?|the adult|Pip alone|baby
1|4|How many more friends need a place?|one|ten|one
1|5|What do the friends make?|more room|more rain|more
1|6|What do they do together?|tell a story|wash a car|together
1|4|What is the problem with Pip's place?|He has no chair.|His chair is broken.|chair
2|1|Why are the chairs in a circle?|Everyone can see one another.|They block the door.|chair
2|2|Who might use the blanket?|someone who prefers the floor|only someone standing up|blanket
2|3|What does Nori leave space for beside the seat?|the bag|a tree|bag
2|4|Where do the friends not want Pip to stand?|outside the circle|beside the storybook|circle
2|5|Where does the extra chair come from?|the reading corner|the pond|chair
2|6|How has the circle changed?|It is wider.|It has disappeared.|together
2|5|Who brings the extra chair?|Nori's brother|the baby|brother`,
'ch02-a': `
0|1|What does Pip see?|a shadow|a rainbow|look
0|2|What does Pip lift?|his hand|a box|hand
0|3|What does Pip bend?|one knee|a stick|knee
0|4|What hides the sun?|a cloud|a hat|cloud
0|5|What comes out again?|the sun|the moon|sun
0|6|What new thing does Pip make?|a pose|a sandwich|body
1|1|Where is the shadow?|beside Pip's foot|inside a cup|foot
1|2|What does the shadow lift too?|a hand|a book|hand
1|3|How does Pip's shadow look?|funny|green|body
1|4|What is hard to see when the cloud arrives?|the shadow|Pip's shoes|cloud
1|5|How many arms does Pip stretch?|both arms|no arms|arm
1|6|Who draws the shadow?|Nori|Bea|draw
1|2|Which movement does the shadow copy?|lifting a hand|eating an apple|hand
2|1|What makes the shadow stretch across the meadow?|the low afternoon sun|a torch in a box|sun
2|2|When does the dark shape move?|when Pip's body moves|only when Nori claps|body
2|3|What does Nori draw around?|the bent leg|a flying kite|leg
2|4|What does Pip do while the sun is hidden?|waits|tries to catch the shadow|wait
2|5|Where does the shadow return?|beside the chalk drawing|inside the treehouse|draw
2|6|Which body parts are labeled on the page?|head, arms, and legs|wings and a tail|head
2|3|What does Nori use to make the line?|chalk|string|draw`,
'ch02-b': `
0|1|What does Nori see?|a mark|a storm|look
0|2|What does Pip show?|his hand|his lunch|hand
0|3|What does Nori look at?|her foot|a cloud|foot
0|4|Where does Nori press her foot?|in the sand|in paint|foot
0|5|What do the two marks do?|match|float|look
0|6|What does Nori put on?|her shoe|a hat|shoe
1|1|What is the mark in?|soft sand|deep snow|soft
1|2|What makes Pip's new mark?|his fingers|his tail|finger
1|3|What does Nori wiggle?|her toes|her ears|toe
1|4|What size is Nori's footprint?|small|huge|small
1|5|Whose footprint was the old mark?|Nori's|Bea's|foot
1|6|What does Pip draw?|the two prints|a bus|two
1|4|Which body part makes a footprint?|a foot|a hand|foot
2|1|What does Nori want to find out?|which explorer made the mark|the price of a shoe|look
2|2|How many finger shapes are in the handprint?|five|two|five
2|3|Where is Nori sitting when she removes a shoe?|on the blanket|on a moving train|blanket
2|4|Why is the new print beside the old one?|to compare them|to cover it up|look
2|5|Which features help the prints match?|curved edges and toe marks|different paint colors|toe
2|6|What helped solve the mystery?|looking closely|guessing without looking|look
2|2|How do the finger shapes spread?|out from the handprint|in a straight row of shoes|finger`,
'ch03-a': `
0|1|What does Bea paint?|a rainbow|a boat|color
0|2|What paint does Pip bring?|blue|pink|blue
0|3|What color does Bea need?|green|gray|green
0|4|Which two paints does Bea mix?|blue and yellow|red and black|yellow
0|5|What stripe does Bea paint?|green|orange|green
0|6|What is ready at the end?|the rainbow|the train|color
1|1|Which paints does Bea already have?|red and yellow|black and white|red
1|2|Where does Pip put the blue paint?|by the yellow paint|under the bed|blue
1|3|What is in the green jar?|nothing; it is empty|a full jar of paint|green
1|4|What color does the mixed paint become?|green|purple|green
1|5|What does Pip add?|a purple flower|a blue boat|purple
1|6|What does everyone find?|a favorite color|a lost key|color
1|3|Which empty jar creates the problem?|the green jar|the blue jar|green
2|1|Why does the mural need another stripe?|It is being finished for the parade.|It is a map of the pond.|color
2|2|Why are both jars closed?|so paint does not spill|so the paint changes color|blue
2|3|What does Bea check when the jar is empty?|the colors she already has|the train tickets|color
2|4|Where does Bea test the new paint first?|on spare paper|on Pip's clothes|paper
2|5|Why do the friends leave the picture alone?|to let the paint dry|to make it rain|dry
2|6|What does Bea write down?|how she made green|how to build a train|green
2|5|Which action do the friends avoid?|touching wet paint|looking at the picture|wet`,
'ch03-b': `
0|1|Which shape does Nori draw first?|a square|a circle|square
0|2|What shape does Pip bring?|a triangle|an oval|triangle
0|3|Which shape does Bea add?|a rectangle|a heart|rectangle
0|4|What is missing from the house?|the window|the roof|window
0|5|What does Pip add next?|a star|a wheel|star
0|6|What have the friends finished?|a shape house|a real bridge|house
1|1|What will Nori's square become?|a little house|a fish|square
1|2|Which part is the triangle?|the roof|the door|roof
1|3|What does the rectangle become?|a tall door|a round plate|door
1|4|What color is the circle?|blue|yellow|blue
1|5|Where does the star go?|above the house|inside the door|above
1|6|What do the friends point to?|each shape|each cloud|shape
1|4|Which shape fills the missing window space?|a circle|a triangle|circle
2|1|Where on the paper is the square?|in the middle|off the edge|middle
2|2|How many straight sides does the roof shape have?|three|four|three
2|3|Why does Bea leave space beside the door?|for a window|for a pond|window
2|4|Where does the round piece fit?|beside the door|over the star|circle
2|5|Why does Pip choose the sky for his star?|so it does not cover the window|so it blocks the door|star
2|6|Which pair of shapes is used in the finished picture?|a square and a triangle|an oval and a heart|square
2|2|Where does the triangle make a point?|above the square|under the paper|triangle`
};
Object.assign(banks,{
'ch04-a': `
0|1|How many tickets does Pip have?|ten|two|ten
0|2|Who brings more tickets?|Nori|Bea|more
0|3|How many tickets do the friends count together?|twenty|five|twenty
0|4|What falls?|one ticket|one cup|one
0|5|Who gets the fallen ticket?|Bea|Nori|ticket
0|6|What is ready?|the little train|the picnic|train
1|1|What color is Pip's box?|red|blue|red
1|2|What color is Nori's box?|blue|green|blue
1|3|Which two groups make twenty?|ten and ten|two and two|ten
1|4|Where does the ticket land?|under a seat|on the roof|under
1|5|What does Pip do after Bea gets the ticket?|counts again|throws the tickets away|count
1|6|How many tickets does each rider get?|one|ten|one
1|2|How many tickets does Nori bring?|ten more|one more|ten
2|1|Why does Pip lay his tickets in a row?|to check the number|to hide the tickets|ticket
2|2|Where does Nori put her row?|below Pip's row|inside his pocket|below
2|3|Why do they touch each ticket once?|to avoid counting it twice|to make it change color|twenty
2|4|What clue does Bea see near the chair leg?|a red corner|a blue feather|red
2|5|How do they know none are missing?|There are still twenty.|The boxes are closed.|twenty
2|6|Why does Pip keep the boxes?|for another counting game|to feed the puppy|box
2|4|Which place should Bea look closely at?|near the chair leg|inside the lamp|chair`,
'ch04-b': `
0|1|How many lanterns does Nori hang?|three|six|three
0|2|How many lanterns does Pip bring?|two|ten|two
0|3|Who finds one more lantern?|Bea|Pip|one
0|4|What is wrong with one lantern?|It is dark.|It is missing.|one
0|5|Who turns on the light?|an adult|a kitten|light
0|6|How does the path look at the end?|bright|dark|path
1|1|Where do the lanterns glow?|over the path|under the pond|path
1|2|What do three and two make?|five|four|five
1|3|How many lanterns are there now?|six|three|six
1|4|Which lantern is dark?|number four|number one|four
1|5|How many lanterns glow after the switch is on?|all six|only one|six
1|6|How do the friends go home?|together|one by one alone|together
1|2|Which pair of numbers is added on this page?|three and two|six and six|three
2|1|What has an adult checked?|the lights are safe to use|the price of paint|light
2|2|What helps the friends place the lanterns?|painted numbers on the railing|a recipe on the table|number
2|3|Where does Bea carry the last lantern?|to the empty hook|into the water|empty
2|4|Why is lantern four dark?|Its switch is off.|It fell off the railing.|four
2|5|What does Nori count?|the lanterns themselves|only the lights that were already on|six
2|6|How are lanterns shown in the journal?|in order from one to six|all hidden in a box|one
2|4|Is the dark lantern still there?|Yes, its switch is off.|No, it was lost.|four`,
'ch05-a': `
0|1|What does Pip bring?|a bed|a boat|bed
0|2|What does Nori bring?|a pillow|a clock|pillow
0|3|What does Bea find?|a blanket|a key|blanket
0|4|What does Pip want to see?|the stars|a fish|star
0|5|What does Nori open?|the curtain|the door|window
0|6|What does Pip do in bed?|reads|paints|bed
1|1|Where does the bed go?|in the treehouse|in the garden|bed
1|2|How does the pillow feel?|soft|sharp|soft
1|3|Where does Bea fold the blanket?|on the bed|under the stairs|blanket
1|4|What covers the window?|a curtain|a map|window
1|5|Where do the stars shine?|outside|inside a box|star
1|6|Where do Pip's friends sit?|nearby|on a bus|friend
1|2|Which soft object does Nori bring?|a pillow|a stone|pillow
2|1|Where is the bed placed for a clear doorway?|on the flat floor away from it|across the doorway|floor
2|2|Where does Nori put the pillow?|at the head of the bed|on the roof|head
2|3|When might the blanket be useful?|on a cool evening|while washing dishes|blanket
2|4|Does Pip need to go outside to see the sky?|No, he can look from indoors.|Yes, he must climb onto the roof.|window
2|5|What stays closed while the friends get cozy?|the window|the curtain|window
2|6|What kind of place has the treehouse become?|a warm home for a story|a busy road|home
2|1|Who helps Pip place the bed?|Bea|a driver|help`,
'ch05-b': `
0|1|What does Bea have?|a key|a coin|key
0|2|What does Bea put down?|a book|a plate|book
0|3|What is missing?|the key|the lamp|key
0|4|Where does Pip look?|under the book|above the window|under
0|5|What does Bea open?|the cupboard|the window|open
0|6|How does the room sound at the end?|quiet|very noisy|quiet
1|1|What does the key open?|the book cupboard|a car|key
1|2|Where is the book?|beside the lamp|inside a shoe|lamp
1|3|Where does Bea look for the key?|on the shelf|in the pond|shelf
1|4|What is under the book?|the key|a sandwich|key
1|5|What does Bea take out?|a story|a coat|story
1|6|Who do the friends listen to?|Bea|a bus driver|listen
1|4|Who finds where the key is?|Pip|Nori|key
2|1|When does Bea bring the key?|before the reading club arrives|after everyone goes home|key
2|2|What does Bea arrange after putting down the book?|the cushions|the train seats|book
2|3|What is actually on the shelf?|a bowl and two storybooks|the missing key|shelf
2|4|Why was the key difficult to see?|A corner was hidden under the cover.|It was inside a locked box.|key
2|5|Where does Pip put the key for everyone to find?|in the little bowl|under another book|bowl
2|6|What is the new rule after reading?|Put the key in the bowl.|Leave the key on the floor.|key
2|4|Which object covered part of the key?|the book's cover|the curtain|book`,
'ch06-a': `
0|1|What fruit does Nori pack first?|an apple|a peach|apple
0|2|What fruit does Pip bring?|a pear|a lemon|pear
0|3|What rolls out?|the apple|the carrot|apple
0|4|Who stops the apple?|Bea|Pip|stop
0|5|Who washes the apple?|an adult|the puppy|apple
0|6|What do the friends share?|the picnic|a train ticket|share
1|1|Where does Nori put the apple?|in a basket|in a shoe|basket
1|2|What vegetable does Nori add?|a carrot|a potato|carrot
1|3|Where does the apple roll?|down the path|up a tree|path
1|4|Where does the apple land?|by Bea's shoe|in the creek|shoe
1|5|What does Nori close?|the basket|a window|basket
1|6|Which fruit is back at the picnic?|the apple|a banana|apple
1|2|Which two foods join the apple?|a pear and a carrot|rice and milk|pear
2|1|What else is on the picnic list?|a pear and a carrot|paint and glue|carrot
2|2|What do they check before leaving?|the list|the train timetable|basket
2|3|Why did the basket tip?|Pip set it on a sloping stone.|The apple had wings.|apple
2|4|What does Bea show Nori?|where the apple went|how to paint a leaf|apple
2|5|What do they do differently with the basket?|put it on flat ground|put it higher on the slope|flat
2|6|What does Nori draw for the packing guide?|a basket with a lid|an open paper bag|basket
2|3|What caused the apple to roll away?|the tipped basket|a passing train|basket`,
'ch06-b': `
0|1|What does Pip bring?|bread|soup|bread
0|2|What does Bea bring?|cheese|paint|cheese
0|3|What drink does Nori want?|water|milk|water
0|4|Who gives Nori water?|Pip|the farmer|give
0|5|Who chooses food?|each friend|only Pip|food
0|6|How does the picnic feel?|kind|lonely|kind
1|1|What does Nori bring?|rice|corn|rice
1|2|Who checks the food?|an adult|a puppy|food
1|3|Which drink does Nori not want?|milk|water|milk
1|4|Which polite words does Nori use?|please and thank you|go away|please
1|5|Does everyone have to try every food?|No.|Yes.|food
1|6|What do the friends do together afterward?|clean up|hide the cups|together
1|4|Which drink does Pip actually give Nori?|water|milk|water
2|1|What do they ask before serving?|what each friend would like|who can eat fastest|friend
2|2|Why does the adult ask about allergies?|to check food needs|to choose a song|food
2|3|How does Pip respect Nori's choice?|He listens to her.|He chooses milk for her.|listen
2|4|What does Bea put beside Nori's plate?|a clean cup|a dirty shoe|cup
2|5|What has room on the picnic blanket?|different lunches and tastes|only one kind of food|food
2|6|What helps everyone feel welcome?|asking and listening|making everyone eat the same thing|listen
2|2|What does the adult keep separate where needed?|foods|the friends' chairs|food`,
'ch07-a': `
0|1|Who does Pip visit?|a kitten|a whale|kitten
0|2|What covers the kitten?|fur|feathers|fur
0|3|What does the kitten need?|a bed|a bicycle|bed
0|4|Who sets down a bowl?|the adult|the kitten|bowl
0|5|Where does the kitten lie?|on the blanket|on the roof|blanket
0|6|What does the kitten do at the end?|goes to sleep|starts a race|sleep
1|1|Who stays with Pip?|an adult|a crab|adult
1|2|How does the kitten's fur look?|soft|spiky|soft
1|3|What does Pip find for the bed?|a blanket|a rock|blanket
1|4|What is in the bowl?|fresh water|paint|water
1|5|What kind of voice does Pip use?|a quiet voice|a loud shout|quiet
1|6|What does Pip let the kitten do?|rest|climb onto him|rest
1|3|Which object helps make a bed?|the blanket|the water bowl|bed
2|1|Is this kitten a wild animal in the story?|No, it is a pet at the care club.|Yes, it lives in the forest.|kitten
2|2|What does Pip wait for?|the adult to explain a gentle approach|the kitten to fetch a stick|gentle
2|3|Where does Pip make the bed?|in a quiet corner away from busy feet|in the doorway|quiet
2|4|What does Pip avoid doing without asking?|giving food|watching quietly|food
2|5|Who gets to choose whether to come closer?|the kitten|only Pip|kitten
2|6|What does the care-club note say a sleeping pet needs?|a peaceful place|a loud game|sleep
2|3|Why is the quiet corner a suitable choice?|It is away from busy feet.|It is the loudest place.|quiet`,
'ch07-b': `
0|1|What does the puppy have?|a ball|a key|ball
0|2|Which body part does the page name?|a nose|a wing|nose
0|3|What does the puppy stop doing?|playing|sleeping|puppy
0|4|What does Pip put away?|the ball|the water|ball
0|5|Who brings water?|the adult|the puppy|water
0|6|What does the club draw?|the puppy|a train|puppy
1|1|Who plays with the puppy?|an adult|a wild fox|adult
1|2|What does the puppy sniff?|the grass|a cloud|grass
1|3|Where does the puppy lie down?|in the shade|on the road|shade
1|4|What can the puppy do when the ball is put away?|rest|drive|rest
1|5|What does the puppy take?|a drink|a ticket|drink
1|6|What voices do the friends use?|gentle voices|shouting voices|gentle
1|2|Which part helps the puppy sniff?|its nose|its tail|nose
2|1|Where does the club watch the game from?|a little distance|on top of the puppy|look
2|2|Where does the puppy's nose move?|close to the ground|high above the tree|nose
2|3|What change does Pip notice?|The puppy no longer brings the ball back.|The puppy asks for more running.|ball
2|4|What does the adult say they should not do?|pull the puppy back into the game|let the puppy rest|puppy
2|5|What does Nori keep clear?|the quiet resting corner|the train track|quiet
2|6|What can caring mean in this story?|stopping a game and giving space|making a pet keep playing|gentle
2|3|Which clue suggests it is time for a break?|The puppy stops returning the ball.|The ball changes color.|ball`
});
export const authoredQuestions=Object.fromEntries(Object.entries(banks).map(([id,text])=>[id,text.trim().split('\n').map(row=>{const[t,p,prompt,answer,wrong,target]=row.split('|');return {tier:Number(t),page:Number(p)-1,prompt,answer,wrong,target};})]));
