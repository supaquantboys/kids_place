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
Object.assign(banks,{
'ch08-b': `
0|1|Where does Bea swim?|in the pond|in the sky|pond
0|2|What is Bea's home called?|a lodge|a school|lodge
0|3|Where does Bea go?|under the water|up a ladder|water
0|4|What kind of room is inside?|a dry room|a room full of water|dry
0|5|What else does Pip draw?|a dam|a bus|dam
0|6|Where does Bea rest?|in her home|on the road|home
1|1|What is Bea near?|her lodge|a shop|lodge
1|2|What materials make the lodge?|sticks and mud|paper and glue|mud
1|3|Where is the entrance?|below the surface|above the roof|water
1|4|Where is the dry room?|above the water|below the pond floor|above
1|5|What does the dam slow?|the stream|a clock|dam
1|6|What does Pip leave alone?|the lodge|his drawing|lodge
1|2|Which structure is a home in this story?|the lodge|the dam|home
2|1|Where does Pip watch with a grown-up?|from the bank|inside the lodge|bank
2|2|What do the thick walls shelter?|a living space|a train platform|lodge
2|3|Where does the underwater entrance lead?|into the lodge|into a shop|lodge
2|4|How do the explorers see the room without disturbing Bea?|in a guidebook picture|by crawling inside|room
2|5|Why does Pip label dam and lodge separately?|They do different jobs.|They are the same thing.|dam
2|6|What do the explorers take away from the visit?|a drawing|Bea's sticks|draw
2|6|Which visit do the explorers avoid?|going inside an animal's home|watching from the bank|home`,
'ch09-a': `
0|1|What does the squirrel have?|a nut|a ticket|nut
0|2|What is bushy?|the squirrel's tail|the map|tail
0|3|Where does the squirrel run?|to the soil|into a classroom|soil
0|4|What does Nori drop?|her map|her hat|map
0|5|Who finds the map?|Pip|Bea|map
0|6|What do the explorers draw?|the tree|a bus|tree
1|1|Where does the squirrel sit?|beside a tree|on a boat|tree
1|2|How does it hold the nut?|in its front paws|on its ears|nut
1|3|What does it do with the nut?|buries it|paints it|nut
1|4|Where does the map land?|beside a root|in the ocean|root
1|5|What does Pip leave alone?|the buried nut|the lost map|nut
1|6|What do they mark on their drawing?|where they stood|a place to dig|tree
1|2|Which body part is described as bushy?|the tail|the nose|tail
2|1|Where are the explorers when they see the squirrel?|on a woodland path|in a barn|path
2|2|What does Nori do instead of moving closer to touch it?|draws its tail|throws it food|tail
2|3|Why do some squirrels hide food?|to eat later|to make paint|food
2|4|What folds the map under a leaf?|a breeze|the squirrel's paws|leaf
2|5|Why does Pip leave the nut where it is?|It is in the animal's food store.|It belongs in the club's basket.|nut
2|6|What does their map avoid marking?|a place to dig|where they observed|map
2|4|What covers the folded paper?|a dry leaf|a wet coat|leaf`,
'ch09-b': `
0|1|What does Pip find?|a track|a shell|track
0|2|Which bird sits above him?|an owl|a duck|owl
0|3|What does the track look like?|a paw|a wheel|paw
0|4|Which animal walks along the path?|a fox|a whale|fox
0|5|What does Pip compare?|the tracks|two sandwiches|track
0|6|Where does the owl stay?|on the branch|in the pond|branch
1|1|Where is the track?|under the reading tree|inside a cupboard|tree
1|2|What covers the owl?|feathers|scales|feather
1|3|What is the mark not?|a feather|a paw-like track|feather
1|4|What leaves new tracks?|the fox's paws|the owl's feathers|paw
1|5|Which animal may have passed here?|a fox|a dolphin|fox
1|6|How do the friends leave?|quietly|shouting|quiet
1|4|Where does the fox walk?|along the path|across the roof|path
2|1|What does Pip avoid stepping on?|the mark|the empty path|track
2|2|What do the owl's feet grip?|the branch|a pencil|branch
2|3|What does Nori do before seeking more clues?|draws the print|erases the print|draw
2|4|How are the new marks like the old one?|They resemble it.|They are a different kind of mark.|track
2|5|Why does Pip say a fox may have passed?|He did not see who made the first print.|He saw the fox make that first print.|fox
2|6|What two things does the journal separate?|what they saw and what they think|large and small lunches|look
2|5|Which statement is careful about the evidence?|A fox may have passed.|We know for certain who made it.|fox`,
'ch10-a': `
0|1|What does Nori see?|a snail|a seal|snail
0|2|What does the snail have?|a shell|feathers|shell
0|3|How does the snail move?|slowly|like a racing car|slow
0|4|What tips over?|a watering can|a train|water
0|5|What does Nori draw?|the shell|the sun|shell
0|6|Where does the snail arrive?|another leaf|a classroom|leaf
1|1|What color is the leaf?|green|purple|green
1|2|Where is the soft body?|below the shell|above the clouds|soft
1|3|What is behind the snail?|a silvery trail|a row of cups|snail
1|4|Who stands the watering can up?|an adult|the snail|adult
1|5|What does Pip draw?|the trail|the train|draw
1|6|What do the explorers give the snail?|space|a ride in a box|snail
1|2|Which part is described as soft?|the body|the shell|body
2|1|What does Nori avoid pulling away?|the leaf|her drawing|leaf
2|2|Why must the shell not be removed?|It is part of the snail's body.|It is a borrowed toy.|shell
2|3|How does Pip follow the trail?|with his eyes|by touching the snail|eye
2|4|Why do the friends move the heavy can away?|to keep it away from the small guest|to make the snail carry it|small
2|5|What do the two drawings show separately?|appearance and movement|prices and dates|draw
2|6|Why was this animal a special discovery?|It was easy to miss.|It was the biggest animal.|small
2|2|Which idea about the shell is rejected?|It is a borrowed house.|It is part of the body.|shell`,
'ch10-b': `
0|1|What does the bee visit?|a flower|a shop|bee
0|2|What does the bee have?|wings|flippers|wing
0|3|Which animal sits nearby?|a spider|a giraffe|spider
0|4|What does Pip have?|two picture cards|two real bees|two
0|5|Which card does Pip choose?|the bee card|the seal card|bee
0|6|How does the flower gate sound?|quiet|full of shouting|quiet
1|1|How many legs does the bee have?|six|eight|six
1|2|Where does the bee move?|between flowers|between train seats|flower
1|3|How many legs does the spider have?|eight|six|eight
1|4|How many legs are on one picture card?|six|two|six
1|5|Where does the spider picture go?|on its own page|on the bee's body|spider
1|6|Where do the explorers watch from?|a distance|inside the web|look
1|3|Which animal has eight legs in this story?|the spider|the bee|spider
2|1|How do the explorers count the bee's legs closely?|using a guidebook picture|by holding a real bee|picture
2|2|What can bees carry between flowers?|pollen|train tickets|flower
2|3|What does the guidebook call the spider?|an arachnid|an insect|spider
2|4|Which journal page needs a matching card?|the insect page|the ocean page|insect
2|5|Does every tiny animal count as an insect?|No, size alone does not tell us.|Yes, all tiny animals are insects.|insect
2|6|What do the explorers leave undamaged?|the spider's web|the picture cards only|spider
2|2|Why does the bee visit flowers in the explanation?|to collect food|to borrow a book|food`,
'ch11-a': `
0|1|Which animal does the Atlas show?|a giraffe|a penguin|giraffe
0|2|What is long on the giraffe?|its neck|its ears|neck
0|3|What food does the giraffe reach?|leaves|cookies|leaf
0|4|What does Pip drop?|a leaf card|a real giraffe|leaf
0|5|Who finds the card?|Nori|Bea|card
0|6|What gets a stamp?|the passport|the giraffe|stamp
1|1|Where does the giraffe stand?|an African grassland|a snowy mountain|giraffe
1|2|What pattern does its coat have?|patches|straight stripes|giraffe
1|3|Where are the leaves?|high in a tree|under the water|tree
1|4|Where does the card fall?|beside a short bush|on the roof|short
1|5|Where does Nori put the card?|on the giraffe page|in the river|page
1|6|What does the club close?|the book|a cage|book
1|3|Which animal reaches the high leaves?|the giraffe|the snail|giraffe
2|1|How does the club visit the grassland?|through a book|by moving the giraffe to Wonderwood|book
2|2|What does Nori sketch before writing the name?|neck and coat features|a price tag|neck
2|3|How does height help the giraffe here?|It can reach high food.|It can fit under a low chair.|tall
2|4|Is Pip's leaf card food for the animal?|No, it is a drawing.|Yes, it is a fresh leaf.|leaf
2|5|Which two clues does Nori connect?|high leaves and a long neck|a shell and a tide pool|neck
2|6|What does their page describe?|appearance and the food seen|every food every giraffe eats|giraffe
2|2|Which feature accompanies the long neck?|coat patches|a beak|neck`,
'ch11-b': `
0|1|Which animal does the Atlas show?|a zebra|a turtle|zebra
0|2|What pattern does the zebra have?|stripes|stars|stripe
0|3|What card does Pip find?|a spotted card|a blank card|spot
0|4|Who finds a striped card?|Nori|Bea|stripe
0|5|Where do the cards go?|on separate pages|in the water|page
0|6|What is ready at the end?|the field guide|the soup|guide
1|1|What is the zebra eating?|grass|cheese|grass
1|2|What colors are the stripes?|black and white|pink and green|black
1|3|What is wrong with the spotted card?|It is on the wrong page.|It is wet.|page
1|4|What does the striped card match?|the zebra|the giraffe|zebra
1|5|What does the zebra keep doing?|eating grass|painting|grass
1|6|What does Pip point to?|the stripes|the clouds|stripe
1|2|Which word means the long bands on the zebra?|stripes|spots|stripe
2|1|Which habitat is on this Atlas page?|African grassland|Arctic ice|grass
2|2|Are all zebras' stripe patterns identical?|No, their patterns differ.|Yes, every stripe is identical.|stripe
2|3|Which animal belongs with the spotted card?|the giraffe|the zebra|giraffe
2|4|What does Nori compare besides color?|the whole pattern|the price|color
2|5|What food claim does the club record?|the food visible in the picture|a guess about all animals|food
2|6|How is a stripe different from a spot?|It is a long band.|It is always a circle.|stripe
2|4|Why is color alone not enough for this match?|Nori needs to compare the pattern.|The card has no color.|color`,
'ch12-a': `
0|1|Which animal is on the postcard?|a seal|a tiger|seal
0|2|What body parts does the seal have?|flippers|wings|flipper
0|3|Where does the seal go?|into the ocean|into a barn|ocean
0|4|What kind of card does Pip have?|a fish card|a bird card|fish
0|5|Who finds the seal card?|Nori|Bea|seal
0|6|What does the club draw?|the flippers|the train|flipper
1|1|Where does the seal rest?|on a beach|in a tree|beach
1|2|What does the seal not have?|walking hands|flippers|hand
1|3|What does it swim away from?|the sand|a classroom|sand
1|4|Does the fish card show flippers?|No.|Yes.|fish
1|5|Where does Nori place the seal card?|beside the postcard|under the water|card
1|6|What do the friends do with real seals?|leave them alone|take them home|seal
1|3|Which action does the seal do in the ocean?|swims|flies|swim
2|1|Which kind of seal is described?|a harbor seal|a seal made of wax|seal
2|2|What are the seal's limbs shaped for?|movement in water|holding pencils|water
2|3|How does the club follow the action?|across postcard pictures|by chasing the seal|picture
2|4|What does Pip check before identifying the animal?|body parts|only whether it swims|body
2|5|What animal group do seals belong to?|mammals|fish|seal
2|6|Why does the club watch from far away?|The beach animal needs space.|They want to feed it.|beach
2|4|Which assumption does Pip avoid?|Everything that swims is a fish.|Body parts can help identify animals.|fish`,
'ch12-b': `
0|1|What animal does Nori see?|a crab|a bear|crab
0|2|What is hard on the crab?|its shell|its shadow|shell
0|3|What reaches the sand?|a wave|a bus|wave
0|4|What does the club do as water comes closer?|moves back|moves into the waves|back
0|5|What does Pip draw?|a shell|a snowman|shell
0|6|What is finished?|the postcard|a real boat|card
1|1|Where is the crab?|beside a tide pool|inside a house|tide
1|2|Where are its claws?|in front|on its shell's roof|front
1|3|Which way does the water move?|closer|farther away|water
1|4|Where does the club stay?|on the safe path|in deep water|path
1|5|What does Nori draw?|the wave|a mitten|wave
1|6|Where does the crab stay?|by the pool|in Pip's bag|crab
1|2|Which word describes the shell?|hard|soft|hard
2|1|Who watches with Nori?|an adult|only a baby|adult
2|2|What does the outer covering do?|protects the crab's body|helps it read|body
2|3|What can the changing tide affect?|the space on the beach|the number of stars|tide
2|4|What do the explorers leave undisturbed?|the crab and tide pool|only their drawing|crab
2|5|What do they take home instead of an animal?|a picture of the visit|the crab's shell|picture
2|6|What do they remember about the shore?|It is an animal's habitat.|It is only a place for toys.|animal
2|1|What kind of place do they watch from?|stable and away from waves|slippery and beside big waves|wave`
});
Object.assign(banks,{
'ch13-a': `
0|1|Who opens the barn?|the farmer|Pip|farmer
0|2|What does the hen have?|feathers|wool|hen
0|3|What does the cow eat?|hay|cookies|hay
0|4|What picture does Pip find?|an egg|a shell|egg
0|5|What does Nori draw?|the chick|the tractor|chick
0|6|What ends on the last page?|the barn visit|the parade|barn
1|1|Who visits with the club?|an adult|a whale|adult
1|2|Who follows the hen?|her chick|a fox|chick
1|3|Where does the farmer put hay?|in a feeder|in a backpack|hay
1|4|Where does the egg picture belong?|on the hen page|on the cow page|hen
1|5|What color crayon does Nori use?|yellow|blue|yellow
1|6|What do the friends wash?|their hands|the barn roof|hand
1|2|Which animal has feathers in this scene?|the hen|the cow|feather
2|1|What does Pip wait for at the gate?|the farmer's invitation|a train ticket|wait
2|2|What is a chick?|a young chicken|a young cow|chick
2|3|What do the visitors avoid doing?|reaching through the fence|watching the cow|cow
2|4|Is Pip collecting real eggs alone?|No, he is sorting picture cards.|Yes, he takes real eggs.|egg
2|5|Does the yellow crayon mean every chick is yellow?|No, it describes this chick.|Yes, all chicks are yellow.|yellow
2|6|What does the farm page record?|the animals and things observed|imaginary ocean creatures|farm
2|2|What does the chick have before adult feathers grow?|soft down|hard scales|soft`,
'ch13-b': `
0|1|Where does the sheep stand?|in a field|on a boat|sheep
0|2|How does the sky change?|It turns cloudy.|It becomes clear.|cloudy
0|3|What does Nori bring?|her coat|a ladder|coat
0|4|What starts to fall?|rain|snow|rain
0|5|What does Pip draw?|the sheep's wool|a fish's fin|wool
0|6|What weather does the report name?|rainy|sunny|rain
1|1|What covers the sheep's body?|wool|feathers|wool
1|2|What does Pip feel?|a cool wind|hot sand|wind
1|3|How does Nori's coat feel?|warm|wet|warm
1|4|Who leads the visitors inside?|the farmer|the sheep|farmer
1|5|What does Nori draw beside the wool picture?|her coat|a bus|coat
1|6|Does the club get wet indoors?|No, it stays dry.|Yes, it goes into the rain.|dry
1|1|Which animal has wool in this story?|the sheep|the hen|sheep
2|1|What name does the farmer give the woolly coat?|fleece|feather|wool
2|2|What does the club check before continuing?|the weather|the price of hay|weather
2|3|Must Nori touch the sheep to compare coverings?|No.|Yes.|coat
2|4|What do the visitors follow?|the farm's instructions|the sheep into a muddy pool|farm
2|5|Which covering is natural to the sheep?|its wool|Nori's coat|wool
2|6|What does the weather page explain?|why the outdoor plan changed|how to drive a tractor|rain
2|4|What do the animals have when rain arrives?|suitable shelter|paper umbrellas only|rain`,
'ch14-a': `
0|1|What does Pip find?|a mitten|a shoe|mitten
0|2|What does Nori have?|a glove|a scarf|glove
0|3|What does Bea check?|her pocket|a window|pocket
0|4|How does the child look?|worried|sleepy|child
0|5|Who helps return the mitten?|the adult|the driver alone|adult
0|6|Where does the train arrive?|the station|the forest|train
1|1|Where is the lost mitten?|on a train seat|in the creek|seat
1|2|What does the glove have?|finger spaces|a zipper for a pocket|finger
1|3|What is in Bea's pocket?|her scarf|the mitten|scarf
1|4|How many mittens does the child have at first?|one|three|one
1|5|How many mittens does the child have after the return?|two|one|two
1|6|What does the child do before leaving?|waves goodbye|hides the mitten|goodbye
1|1|Which piece of clothing has been left behind?|a mitten|a coat|mitten
2|1|Who does Pip tell about the found item?|the adult with the club|a stranger outside|adult
2|2|How is the mitten different from the glove?|It has a shared space for four fingers.|It has a separate space for every finger.|mitten
2|3|Why does Bea not take the mitten?|It is not hers.|She cannot see it.|mitten
2|4|What helps connect the mitten to the child?|a matching green pattern|the color of the train|green
2|5|What does Pip let the adult check?|that it goes to its owner|that it fits Pip|adult
2|6|Which two items does Nori draw for comparison?|a mitten and a glove|a hat and a shoe|glove
2|2|Which finger has its own space in the mitten?|the thumb|each finger separately|finger`,
'ch14-b': `
0|1|What does Nori pack first?|a shirt|a blanket|shirt
0|2|What is the sky like?|cloudy|clear|cloudy
0|3|What does Nori add to her bag?|a coat|a piano|coat
0|4|What does Bea bring?|an umbrella|a sled|umbrella
0|5|What do the friends take?|a short walk|a long swim|walk
0|6|What does Nori hang up afterward?|her coat|the map|coat
1|1|Where does Nori want to play?|outside|in bed|outside
1|2|What taps on the roof?|rain|a bird's drawing|rain
1|3|What does Pip bring?|his boots|his pillow|boot
1|4|Who checks the path?|an adult|a kitten|path
1|5|How do their feet stay?|dry|muddy|dry
1|6|Where does Pip put his boots?|by the door|on the bed|door
1|2|Which clue shows it is raining?|rain tapping on the roof|a dry empty sky|rain
2|1|What does Nori do before closing her bag?|looks through the window|puts on sunglasses|window
2|2|What confirms the wet afternoon?|a weather picture|a shopping list|wet
2|3|What guides their clothing choice?|the day's weather|the train timetable|coat
2|4|What will they do if the weather becomes unsafe?|stay indoors|keep walking anyway|inside
2|5|When do they return?|before the rain gets heavier|after the path floods|rain
2|6|What helped them choose their clothes?|looking outside|guessing without looking|outside
2|4|Whose check helps decide whether to go?|the adult's path check|the puppy's game|adult`,
'ch15-a': `
0|1|What does Pip plan?|an outdoor game|a bath|outside
0|2|What covers the sun?|a cloud|a blanket|cloud
0|3|What begins to fall?|rain|leaves only|rain
0|4|Who carries the map inside?|Nori|Pip|map
0|5|Where do the friends play?|indoors|in the creek|inside
0|6|What does Pip draw?|a rain cloud|a giraffe|cloud
1|1|How does the sun feel at first?|warm|cold|sun
1|2|What blows the map?|the wind|a fan in the room|wind
1|3|What happens to the paper?|It gets wet.|It turns to stone.|wet
1|4|Who dries the table?|Bea|Nori|dry
1|5|Does the game still work indoors?|Yes.|No.|game
1|6|What does Pip write?|a new plan|a price tag|plan
1|3|Which weather change makes the paper wet?|rain|sunshine|rain
2|1|Where is the map at the beginning?|on the picnic table|inside a drawer|map
2|2|Why does Bea hold one corner?|so it does not fly into the creek|so Pip cannot see it|creek
2|3|What does the adult ask the club to do?|bring the game indoors|keep playing in the rain|inside
2|4|Where does Pip move the picture cards?|to the treehouse floor|to the wet path|floor
2|5|Does changing location end the adventure?|No, they continue playing.|Yes, they must stop forever.|game
2|6|What choices does the new plan include?|an outdoor and an indoor choice|only an outdoor choice|outside
2|2|What danger to the map does Bea prevent?|blowing into the creek|being put on a shelf|map`,
'ch15-b': `
0|1|What is ready at the start?|the parade banner|the soup|parade
0|2|What falls on the path?|rain|snow|rain
0|3|Where do the friends move?|inside|into the ocean|inside
0|4|What does Bea paint?|a new rainbow|a bus|rainbow
0|5|What happens to the rain?|It stops.|It gets heavier.|rain
0|6|What begins at the end?|the parade|a storm|parade
1|1|Where does the banner hang?|outside the club|under a bed|outside
1|2|What does Pip notice about the banner?|It is wet.|It is missing.|wet
1|3|How do the friends place the banner?|flat|rolled in a tight ball|flat
1|4|What stripe does Nori fix?|blue|black|blue
1|5|Who checks outside?|the adult|the puppy|adult
1|6|How does the banner look again?|bright|blank|parade
1|3|Which place shelters the banner from the rain?|inside|the wet path|inside
2|1|What is the banner made from?|paper|metal|paper
2|2|Who does Pip ask to help take it down?|an adult|a baby|help
2|3|What must happen before repairing the colors?|The paper must dry.|More rain must fall on it.|dry
2|4|What does Pip bring dry paper for?|a small welcome sign|a new rain cloud|paper
2|5|When may the club continue outside?|after the path is safe|as soon as anyone runs out|path
2|6|What did the delay give the friends time to do?|help|lose all their plans|help
2|2|Why does Pip ask for help with the banner?|to take it down safely|to throw it into the rain|help`,
'ch16-a': `
0|1|What does Pip bring?|a backpack|a basket|backpack
0|2|Who also has a blue backpack?|Nori|Bea|blue
0|3|What mistake does Pip make?|opens the wrong bag|drops his book in water|backpack
0|4|What does Nori check?|the name cards|the weather|name
0|5|What do the friends swap?|bags|shoes|backpack
0|6|What is ready at the end?|the class|the train|class
1|1|What color is Pip's backpack?|blue|red|blue
1|2|How do the two bags look?|alike|very different|backpack
1|3|Whose crayons does Pip find?|Nori's|Bea's|crayon
1|4|Whose name is on one bag?|Nori's|the farmer's|name
1|5|What does Pip find in his own bag?|his book|a toy boat|book
1|6|What does Nori share?|a crayon|a hat|crayon
1|3|Which items show Pip opened Nori's bag?|her crayons|his own book|crayon
2|1|Where does this school adventure start?|the treehouse classroom|the beach|school
2|2|Where does Nori put her bag?|beside Pip's near the door|inside the cupboard|door
2|3|What should Pip's own bag contain?|a book and a pencil|only crayons|pencil
2|4|Why do names help more than colors here?|The bags are the same color.|The names are the same.|name
2|5|How do they make the next check easier?|make the name cards easier to see|hide the cards inside|name
2|6|What is the new classroom rule?|check a name before taking a bag|take the first blue bag|name
2|3|Why are Nori's crayons a useful clue?|They are not what Pip expects in his bag.|Every bag must hold those crayons.|crayon`,
'ch16-b': `
0|1|Who comes into the room?|a new student|a farmer|student
0|2|What does the student see?|a book|a bike|book
0|3|What looks difficult?|a word|the door|word
0|4|Who reads the page?|the teacher|the puppy|teacher
0|5|What does the student turn?|a page|a wheel|page
0|6|What do the friends finish?|the story|a race|story
1|1|What does the teacher say?|hello|go away|hello
1|2|What animal is on the cover?|a beaver|a tiger|beaver
1|3|What does the student ask for?|help|money|help
1|4|What does the student point to?|the tail|the sky|tail
1|5|How does Nori wait?|patiently|by shouting|wait
1|6|What does the student choose next?|another book|a new bicycle|book
1|3|Which action helps when a word is difficult?|asking for help|hiding the book|help
2|1|How does Nori welcome the student?|makes space at the table|takes away the chair|student
2|2|What does the student do before trying to read the name?|points to the animal|closes the book|animal
2|3|What does Pip offer?|to listen to the page together|to skip every story|listen
2|4|How does the picture help?|connects the spoken word to the story|makes the page turn by itself|picture
2|5|Must someone read quickly to belong here?|No.|Yes.|read
2|6|What does the welcome page say about asking for help?|It is part of learning.|It means you cannot join.|help
2|5|Why is Nori's patient waiting helpful?|There is no need to rush reading.|The group is timing a race.|wait`
});
Object.assign(banks,{
'ch17-a': `
0|1|What does Pip roll?|a ball|a wheel of cheese|ball
0|2|What rolls too far?|the ball|the bridge|ball
0|3|Where does Pip stop?|at the line|in the creek|stop
0|4|Who does Pip ask for help?|an adult|a bird|adult
0|5|Who brings the ball back?|the adult|Pip alone|ball
0|6|How does Pip roll this time?|gently|as hard as possible|roll
1|1|What is the ball moving toward?|a bridge|a barn|bridge
1|2|Where does the ball stop?|beyond the bridge|inside the treehouse|bridge
1|3|What does Pip not do?|chase the ball|stop at the line|ball
1|4|Who waits with Pip?|Nori|the farmer|wait
1|5|What do the friends move?|the game|the bridge|game
1|6|Who catches the ball?|Nori|Bea|ball
1|3|Which action keeps Pip in the play area?|stopping at the line|running after the ball|stop
2|1|Where is the club playing?|a marked play area|anywhere they like|play
2|2|What is different about the path ahead?|The adult has not checked it.|It is the checked play area.|path
2|3|What matters more than retrieving the toy?|staying safe|winning a race|help
2|4|What does the adult do before getting the ball?|checks the route|asks Pip to run first|adult
2|5|What place do the friends choose for the game?|a flat area farther from the bridge|a steep path by the water|flat
2|6|Which actions go on the motion page?|stopping and asking for help|chasing toys anywhere|stop
2|5|Why does moving the game help?|It is farther from the bridge.|It makes the ball heavier.|bridge`,
'ch17-b': `
0|1|What does Bea draw?|a path|a meal|path
0|2|Where does Pip hop?|to a circle|to a roof|hop
0|3|What instruction is on the card?|turn|sleep|turn
0|4|What does Pip want?|a break|a bigger race|stop
0|5|Who starts again?|Nori|Bea|start
0|6|Where does everyone arrive?|the end|the moon|end
1|1|Which shapes are on the path?|circles and squares|only stars|circle
1|2|How does Nori move to the square?|walks|flies|walk
1|3|Where does Bea turn?|at the arrow|at the window|turn
1|4|What do the friends do when Pip needs a break?|stop together|leave him behind|together
1|5|How many small steps does Nori take?|two|ten|two
1|6|What do they do at the end?|wave to one another|hide from each other|wave
1|2|Which explorer hops?|Pip|Nori|hop
2|1|What kind of surface holds the pretend course?|a safe flat floor|a steep slippery roof|floor
2|2|How does each explorer choose a movement?|by what feels comfortable|by who is fastest|walk
2|3|What does Bea do before moving to the next shape?|looks ahead|closes her eyes|look
2|4|Can the friends finish later without losing their place?|Yes.|No.|stop
2|5|How can a seated explorer join?|move a token along the course|only watch without joining|move
2|6|Who does this adventure work for?|different bodies and movements|only fast runners|body
2|5|What follows the same course as the walkers?|a seated explorer's token|a real car|step`,
'ch18-a': `
0|1|How does the festival sound?|loud|silent|loud
0|2|What does Pip ask Nori?|a question|to carry a drum|friend
0|3|What place do they find?|a reading corner|a deep pool|quiet
0|4|What does Nori sit with?|a book|a drum|book
0|5|How does Nori feel after resting?|calm|more upset|calm
0|6|What does Pip make?|a quiet sign|a louder drum|quiet
1|1|What does Nori cover?|her ears|her shoes|ear
1|2|What does Nori want?|a quiet place|a louder song|quiet
1|3|What is the corner away from?|the drums|the books|drum
1|4|Where does Pip sit?|nearby|on the parade float|sit
1|5|What does Nori choose to watch?|the parade|a storm|parade
1|6|Who is the corner for?|everyone|only Pip|everyone
1|1|Which clue shows the noise bothers Nori?|She covers her ears.|She asks for louder drums.|ear
2|1|Which sounds fill the square?|drums and excited voices|only bird calls|loud
2|2|How does Pip learn what Nori needs?|listens to her words|guesses without asking|listen
2|3|Who can still see the friends from the festival table?|an adult|nobody|adult
2|4|What does Pip avoid making Nori do?|talk while resting|sit comfortably|rest
2|5|When can Nori return to the quiet corner?|whenever she needs a break|only after the festival ends|quiet
2|6|What does the friendship page say about fun?|It can be quiet or loud.|It must always be loud.|fun
2|2|Which choice shows listening to a friend?|finding the quiet place she asks for|choosing more drums for her|friend`,
'ch18-b': `
0|1|Who plays the game at first?|Pip and Bea|Nori and an adult|play
0|2|What does Nori want?|to join|to leave the club|together
0|3|Who invites Nori to play?|Pip|the farmer|play
0|4|What do the friends take?|turns|each other's tokens|turn
0|5|Who helps Pip count?|Nori|Bea|help
0|6|How many friends reach the treehouse?|three|two|three
1|1|Where is Nori at the start?|watching beside them|already moving a token|look
1|2|How does Nori feel outside the game?|lonely|proud|lonely
1|3|Who finds another token?|Bea|Pip|another
1|4|When does Nori wait?|while Bea moves|after everyone has left|wait
1|5|What does Pip do when Nori helps?|thanks his friend|hides her token|friend
1|6|Who has room in the game now?|everyone|only two players|everyone
1|3|What extra object lets Nori join?|another token|another table|another
2|1|How many tokens are on the board at first?|two|three|two
2|2|Where does Pip notice Nori standing?|near the empty chair|behind a closed door|chair
2|3|What becomes the new player's marker?|a smooth leaf|a hot coal|leaf
2|4|What shows whose turn is next?|an arrow card|the loudest voice|turn
2|5|What are the friends working toward?|a shared finish|beating one another|together
2|6|What changed the afternoon?|one small invitation|a new price tag|friend
2|3|How do the friends make space for a player?|invite her and add a token|tell her to watch silently|play`,
'ch19-a': `
0|1|What does the club wait for?|a bus|a boat|bus
0|2|What stops?|the bus|the rain|stop
0|3|What does Pip find?|a seat|a shell|seat
0|4|What comes into view?|the library|the ocean|library
0|5|What does Nori return?|a book|a bike|book
0|6|How does the club go home?|together|separately alone|together
1|1|Who waits with the club?|an adult|a kitten|adult
1|2|Who opens the door?|the driver|Pip|driver
1|3|What does Pip hold?|his book|a bowl of soup|book
1|4|Who checks the stop?|the adult|a fox in the road|stop
1|5|What does Pip choose?|a new story|a new seat for home|story
1|6|Where is the new book?|in a bag|under the bus|book
1|2|What opens after the bus stops?|the door|the book cupboard|door
2|1|Where does the club stand while waiting?|back from the road at the marked stop|in the road|road
2|2|What do they wait for before boarding?|the adult|a race signal|wait
2|3|Who sits beside Pip?|Nori|the driver|sit
2|4|When do they stand to leave?|after the bus stops|while the bus is moving|stop
2|5|What shelf does the librarian show them?|the picture-book shelf|the food shelf|shelf
2|6|What places does the town map connect?|the bus stop and library|the farm and beach|map
2|4|Why do they wait before standing?|The bus is still moving until it stops.|They want to miss the stop.|bus`,
'ch19-b': `
0|1|What does Nori have?|a bike|a boat|bike
0|2|What does Nori find?|her helmet|her flute|helmet
0|3|What picture does Pip check?|a wheel|a flower|wheel
0|4|Who chooses the route?|the adult|Pip alone|adult
0|5|Where does Nori arrive?|the park|the moon|park
0|6|What do the friends draw?|the journey|the soup recipe|draw
1|1|What visit is the club planning?|a park visit|a farm visit|park
1|2|What does the adult check about the helmet?|its fit|its price|helmet
1|3|What does the wheel picture show?|a loose part|a missing book|wheel
1|4|How does the club travel?|together|in different directions|together
1|5|What does Nori park carefully?|her bike|a bus|bike
1|6|What do they add to the drawing first?|the helmet|a cloud|helmet
1|2|Who checks the helmet fit?|the adult|a puppy|adult
2|1|What is checked before the trip?|the bike|the picnic recipe|bike
2|2|When are helmet straps adjusted?|before riding|after the whole journey|helmet
2|3|What does Pip do about the loose part in the picture?|tells the adult|repairs a real bike alone|adult
2|4|Whose directions does the club follow?|the adult's|a pretend racing card's|road
2|5|How long does Nori keep the helmet on?|until she finishes riding|only until she starts|helmet
2|6|What does the map remind the friends?|getting ready is part of adventure|preparation does not matter|map
2|4|Which rules do the travelers follow?|local crossing rules|a made-up rule to race across|road`,
'ch20-a': `
0|1|What plan does Bea make?|a soup plan|a train plan|soup
0|2|What card does Pip find?|a carrot|a mitten|carrot
0|3|Who uses the pot?|the adult|Pip alone|pot
0|4|What does Bea set out?|spoons|shoes|spoon
0|5|What happens to the soup?|It cools down.|It turns into ice immediately.|soup
0|6|What does the club do together?|eats|paints the stove|together
1|1|Who reads the plan with Bea?|an adult|a kitten|adult
1|2|What card does Nori find?|a potato|an apple|potato
1|3|How does the pot feel?|hot|cold|hot
1|4|What does Pip bring?|bowls|boots|bowl
1|5|Who says the soup is ready?|the adult|Pip without checking|adult
1|6|What does Nori tell during the meal?|a short story|a bus timetable|story
1|2|Which two picture ingredients are found?|carrot and potato|apple and cheese|carrot
2|1|What kind of recipe does the club choose for the story?|a pretend recipe|a rule to cook alone|soup
2|2|Where do they put the ingredient pictures?|beside the recipe|on the real hot stove|picture
2|3|What do the children stay back from?|the stove and sharp tools|the reading table|hot
2|4|What does the adult check before serving?|portions and food needs|the train tickets|food
2|5|What do the friends avoid tasting from?|a hot pot|their ready bowls|hot
2|6|Who handles heat in their kitchen page?|adults|children alone|adult
2|5|Why do the friends wait?|The soup needs to cool and be checked.|They want it hotter.|soup`,
'ch20-b': `
0|1|What does Pip have?|a shopping list|a ticket|list
0|2|What is the first clue?|a loaf|a wheel|bread
0|3|How does the next clue look?|red and round|blue and square|red
0|4|What is the last clue?|a yellow wedge|a purple circle|yellow
0|5|How many foods are in the basket?|three|six|three
0|6|Where does the club return?|home|the moon|home
1|1|How many clues are on the list?|three|two|three
1|2|What food does Pip find?|bread|rice|bread
1|3|What does Nori find?|the apple|the cheese|apple
1|4|What does Bea find?|the cheese|the carrot|cheese
1|5|Who pays at the shop?|the adult|the puppy|shop
1|6|What has been solved?|the shopping clues|a broken wheel|clue
1|4|Which food matches the yellow wedge?|cheese|bread|cheese
2|1|Who walks with the club through the market?|an adult|no one|market
2|2|What does Pip compare with the drawing?|the bread's shape|the weather|bread
2|3|What extra detail makes the apple clue clearer?|a little stem|a zipper|apple
2|4|What does the adult check?|the package and food requirements|the bus stop|food
2|5|What does Pip check before leaving?|the list again|the clouds|list
2|6|What does the market page connect?|written words, pictures, and foods|helmets and wheels|food
2|3|Why does the stem help?|It adds another clue to the red round shape.|It makes the apple a different color.|apple`
});
Object.assign(banks,{
'ch21-a': `
0|1|What does Nori find?|a clue|a cookie|clue
0|2|Where does Pip look first?|beside the clock|behind the clock|beside
0|3|Who looks behind the clock?|Bea|Nori|behind
0|4|How is the box at first?|closed|open|box
0|5|Who opens the box?|Nori|Pip|open
0|6|What goes into the Atlas?|the picture|the clock|picture
1|1|What place does the clue name?|behind the clock|under the bed|behind
1|2|What does Pip see beside the clock?|only a book|the box|book
1|3|What is behind the clock?|a small box|a large bike|box
1|4|What does Nori find to open it?|a paper key|a metal spoon|key
1|5|What is inside the box?|a picture|a kitten|inside
1|6|Did the clue lead to the picture?|Yes, it worked.|No, nothing was found.|clue
1|2|Which place did Pip search incorrectly?|beside the clock|behind the clock|beside
2|1|What kind of game is this?|a pretend treasure game|a real emergency|game
2|2|Which word does Nori point to when Pip needs help?|behind|beside|behind
2|3|What kind of clock is used in the game?|a lightweight prop on a low table|a heavy clock high on a wall|clock
2|4|What connects the paper key to the box?|the same leaf symbol|the same price|leaf
2|5|What does the picture show?|friends beside the reading tree|a ship at sea|tree
2|6|What difference does Pip draw?|beside and behind|morning and night|behind
2|4|Why does the leaf symbol help?|It matches the box's symbol.|It names the time.|leaf`,
'ch21-b': `
0|1|What does Pip open?|a map|a jar|map
0|2|Which way does the first arrow point?|left|right|left
0|3|What is ahead on the path?|two bushes|two buses|two
0|4|What is near the bench?|a sign|a whale|near
0|5|Which way does the next arrow point?|right|left|right
0|6|What is complete at the end?|the map|the soup|map
1|1|What marks the reading rock?|a star|a coin|star
1|2|Where does Nori turn left?|at the rock|at the gate|left
1|3|Where does the path go?|between the bushes|over the bushes|between
1|4|What is far away?|a blue flag|the nearby sign|far
1|5|What does the club find?|the story box|a lost puppy|box
1|6|What does Nori retell?|the turns|a recipe|turn
1|4|Which object is nearer to Bea?|the sign by the bench|the far blue flag|near
2|1|Who joins the pretend trail?|an adult|no grown-up|adult
2|2|How does Nori hold the map?|facing the same way as the path|upside down from the path|map
2|3|What do the explorers use instead of pushing through plants?|the marked path|a shortcut through the bushes|path
2|4|Where does Bea compare the distances from?|where she stands|an imaginary place in the sky|far
2|5|What does Pip check before opening the treasure?|the final symbol|the weather forecast|box
2|6|Which directions helped them arrive?|left, between, right|only straight ahead|between
2|3|What does between mean in this scene?|with one bush on each side|far above both bushes|between`,
'ch22-a': `
0|1|What does Pip have?|a morning chart|a shopping basket|morning
0|2|Which picture does Nori find?|breakfast|bedtime|breakfast
0|3|Which picture does Bea find?|bedtime|lunch|bedtime
0|4|What does Pip put first?|breakfast|bedtime|breakfast
0|5|What goes after dinner?|bedtime|breakfast|after
0|6|What does Pip start?|his morning|a nighttime walk|morning
1|1|What is wrong with the pictures?|They are mixed up.|They are all missing.|picture
1|2|When does breakfast belong in Pip's routine?|the morning|after bedtime|morning
1|3|Which picture should bedtime be near?|night|morning|night
1|4|What goes after breakfast?|school|bedtime|after
1|5|How does the chart look after reordering?|It makes sense.|It is still upside down.|chart
1|6|What does the chart help Pip know?|what comes next|the weather next year|next
1|3|Which activity belongs near night?|bedtime|leaving for school|bedtime
2|1|Which picture is wrongly at the start?|bedtime|breakfast|bedtime
2|2|What does Nori ask Pip to think about?|what comes before leaving home|what every family must do|before
2|3|Whose routine are they arranging?|Pip's|one fixed rule for every family|bedtime
2|4|What does Pip check the order against?|his routine with his grown-up|a stranger's timetable|before
2|5|What shows how to read the sequence?|an arrow|a price tag|after
2|6|Why do they keep blank cards?|other families can make different routines|everyone must copy Pip exactly|family
2|3|Does the chart claim every family's routine is identical?|No.|Yes.|night`,
'ch22-b': `
0|1|What does Nori want to do?|a lantern walk|a boat race|walk
0|2|What does Pip check?|the calendar|the soup|today
0|3|What sky does Bea draw?|an evening sky|a midday sky|evening
0|4|When does Pip arrive?|early|late|early
0|5|When do the friends meet?|the next evening|a year later|evening
0|6|What does Nori mark?|the calendar|the tree trunk|today
1|1|When is the planned walk?|tomorrow|yesterday|tomorrow
1|2|Which day does Pip point to first?|today|last week|today
1|3|When does the walk start?|in the evening|at breakfast|evening
1|4|Who waits with Pip?|the adult|no one|adult
1|5|What glows when the friends meet?|their lanterns|their shoes|light
1|6|What day is the walk on when Nori marks it afterward?|today|tomorrow still|today
1|4|Which word means Pip arrives before the group is ready?|early|late|early
2|1|What is the club doing today before the walk?|getting the lights ready|already finishing the walk|today
2|2|How far does Pip move on the calendar from today?|one square forward|a whole year forward|one
2|3|Who chooses the route and suitable time?|an adult|Pip alone|adult
2|4|When will the walk begin?|when the whole group is ready|as soon as Pip runs ahead|wait
2|5|How do they travel along the checked path?|together behind the adult|separately off the path|together
2|6|Why is tomorrow now called today?|The day of the adventure has arrived.|The calendar is broken.|tomorrow
2|4|What does arriving early let Pip do?|wait with the adult|start the walk alone|early`,
'ch23-a': `
0|1|What does Bea make?|a tiny boat|a house|boat
0|2|What happens to the first boat?|It sinks.|It flies.|sink
0|3|What does Nori remove?|one rock|the whole boat|one
0|4|What does Bea do again?|tests the boat|paints the map|test
0|5|What does Pip draw?|both tests|one kitten|test
0|6|What does the club deliver?|a tiny flag|a big piano|flag
1|1|Where is the virtual boat?|on a screen|in a real creek|boat
1|2|What goes down with the first boat?|its heavy load|a cloud|down
1|3|How does the boat change after removing a rock?|It is lighter.|It is heavier.|boat
1|4|What happens in the second test?|The boat floats.|The boat sinks again.|float
1|5|How do the two boats compare in the drawing?|one is up and one is down|both are flying|up
1|6|What carries the flag across?|the boat|a bird|boat
1|3|How many rocks are removed?|one|all of them|one
2|1|Why can they test without putting things in a creek?|It is a virtual model.|The creek has no water.|water
2|2|How does Pip treat the first result?|as an observation|as a reason to stop forever|test
2|3|Why do they change only one part?|to compare the next result|to hide what happened|change
2|4|Why does this boat stay at the surface now?|Its remaining load is small enough.|Every object always floats.|float
2|5|Which rule do the notes avoid claiming?|Every light object floats.|This model changed after a test.|float
2|6|What sequence is recorded?|test, change, test again|guess, hide, stop|test
2|5|What do the notes actually describe?|what happened in this model|all boats everywhere|test`,
'ch23-b': `
0|1|What does Pip have?|a tiny wagon|a real train|wagon
0|2|What does Nori try for the bridge?|thin paper|a glass jar|paper
0|3|What does Bea do to the paper?|folds it|eats it|paper
0|4|What does Pip test?|the wagon|a kite|test
0|5|What kind of road does Nori add?|smooth|rough|smooth
0|6|What does the bridge get?|a flag|a hat|flag
1|1|What does the wagon need?|a pretend bridge|a swimming pool|bridge
1|2|What happens to the thin paper?|It bends.|It turns into metal.|paper
1|3|How does the folded bridge feel?|stronger|softer than water|strong
1|4|What does the wagon do?|crosses the folded bridge|sinks in a creek|bridge
1|5|What rolls across the smooth road?|the wheels|the clouds|wheel
1|6|What do the friends draw?|their design|a dinner menu|draw
1|3|Which action changes the bridge?|folding the paper|coloring the wagon|paper
2|1|Where does the club build?|on a tabletop|over real water|table
2|2|Where does the toy stay while they check the bridge?|on the table|over a real river|table
2|3|What changes while the material stays the same?|the paper's shape|the paper into metal|shape
2|4|What part do the friends watch for bending?|the middle|the flag only|middle
2|5|What made the wagon harder to move before?|a rough scrap|the smooth road|rough
2|6|What do the notes show?|the folded shape and test result|a promise every bridge is safe|test
2|3|Do they need a new piece to make this change?|No, they fold the same piece.|Yes, the old paper disappears.|paper`,
'ch24-a': `
0|1|What instrument does Nori play?|a drum|a flute|drum
0|2|What does Bea tap?|a rhythm|a recipe|rhythm
0|3|When does Pip ring his bell by mistake?|during the rest|only at the start|bell
0|4|What does Bea point to?|a blank card|a full bowl|card
0|5|What do the friends do after the mistake?|try again|stop forever|again
0|6|What is ready at the end?|the welcome song|the soup|song
1|1|What does Pip ring?|a bell|a guitar|bell
1|2|What is the pattern?|tap, tap, rest|rest, rest, tap|rhythm
1|3|How does the changed pattern sound?|different|exactly the same|different
1|4|How long does everyone wait?|one beat|one hour|one
1|5|What returns to the song?|the quiet beat|a loud shout|quiet
1|6|How do the friends play the song?|together|one person alone|together
1|4|Which card marks the waiting space?|the blank card|a card full of notes|card
2|1|What event is the welcome song for?|the parade|a bus ride|parade
2|2|Is the quiet space a mistake?|No, it is part of the pattern.|Yes, all silence is wrong.|quiet
2|3|What does Pip check to find the rest?|Bea's cards|the calendar|card
2|4|How can Nori join silently?|move a hand|shout the beat|hand
2|5|What does the song have room for?|sound, silence, and different ways to join|only loud drums|song
2|6|How is the pattern shown on the music page?|two sound marks and an empty space|three sound marks|two
2|4|What is another gentle way Nori can follow?|tap softly|hit the drum as hard as possible|quiet`,
'ch24-b': `
0|1|What does Pip open?|the Atlas|a food jar|open
0|2|Which page does Bea show?|her creek page|a space page|creek
0|3|Which page does Nori show?|a friendship page|a weather report|friend
0|4|What is still empty?|one page|every page|empty
0|5|What does the explorer choose?|a story|a price|story
0|6|What begins?|the Story Parade|a storm|parade
1|1|What fills the Atlas pages?|pictures|only numbers|picture
1|2|What is on Bea's page?|a tail and a dam|a mitten and a glove|dam
1|3|How many game tokens are on Nori's page?|three|two|three
1|4|Who does the empty page belong to?|the new explorer|only Pip|new
1|5|Who helps add a picture?|Pip|the farmer|picture
1|6|What do the friends do together?|wave|hide|together
1|2|Which body part is on the creek page?|a tail|a wing|tail
2|1|Where have the Atlas pages come from?|explorers in each region|one shop selling identical pages|page
2|2|What difference does Bea explain?|lodges and dams have different jobs|lodges and dams are identical|lodge
2|3|What does Nori remember about the game?|an invitation made room for another player|a rule kept everyone out|friend
2|4|Who gets to choose the newest picture?|the new explorer|the club chooses for them|picture
2|5|Which way can the explorer share a memory?|speak, draw, or point to a favorite page|only write a long paragraph|draw
2|6|When can the explorer return?|whenever they want new discoveries|never after the parade|again
2|5|What does choosing a memory tell the club?|what mattered to the explorer|a score for school readiness|story`
});
export const authoredQuestions=Object.fromEntries(Object.entries(banks).map(([id,text])=>[id,text.trim().split('\n').map(row=>{const[t,p,prompt,answer,wrong,target]=row.split('|');return {tier:Number(t),page:Number(p)-1,prompt,answer,wrong,target};})]));
