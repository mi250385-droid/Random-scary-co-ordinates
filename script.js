const locations = [
    {
        name: "Hoia-Baciu Forest",
        country: "Cluj-Napoca, Romania",
        category: "Unanswered Oddities",
        rating: 5,
        latitude: 46.77567,//67. Sorry, couldn't resist.
        longitude: 23.52096,
        storyTime: "In the depths of Transylvania (not your average-Edward-Cullen-type-Castle-forest variety) lies a forest, known for its strangely twisting trees and an unusual circular clearing, like someone bulldozed the area in a circle, this forest has appeared in countless reports of mysterious apparitions, UFO sightings(yay, aliens are invading!) and a missing person case of a girl who returned 5 years later in the same clothes she was last seen in."
    },
    {
        name: "The Bermuda Triangle",
        country: "North Atlantic Ocean",
        category: "Urban Folklore",
        rating: 5,
        latitude: 25.0000,
        longitude: -71.0000,
        storyTime: "This Cruella-style infamous area of ocean is the answer to questions of compeletly vanished ships, missing aircraft and unusual compass readings(No, this isn't secretly Narnia.) With a reputation to rival a disney villain, the Bermuda Triangle is where you send things you never want seen again."
    },
    {
        name: "Darvaza Gas Crater",
        country: "Karakum Desert, Turkmenistan",
        category: "Natural Mysteries",
        rating: 4,
        latitude: 40.2525,
        longitude: 58.4396,
        story: "Occupation? Burning ditch of fire. Nickname? the Door to Hell. Production by? underground gas-field collapse but not totally sure like an I-object-your-honour. Attraction? flames. Atleast to people."
    },
    {
        name: "Nazca Lines",
        country: "Nazca Desert, Peru",
        category: "Unanswered Oddities",
        rating: 4,
        latitude: -14.7390,
        longitude: -75.1300,
        storyTime: "Carved into the desert these, unlike graffiti, are actual historical landmarks of enormous drawings depicting animals, geometric symbols and mysteriously shaped figures. Credits: ancient nazca culture. Purpose: unknown."
    },
    {
        name: "Bhangrah Fort",
        country: "Rajasthan, India",
        category: "Urban Folklore",
        rating: 5,
        latitude: 27.0957,
        longitude: 76.2875,
        storyTime: "A historic fort full of stories rivaling shakespeare's writng like a...well, a rival; curses, forbidden love, a magician who supposedly doomed the entire settlement. What more could you possibly want?"
    },
    {
        name: "The Island of Dolls", //why oh why does that sound creepier than the rest?
        country: "Xochimilco, Mexico",
        category: "Urban Folklore",
        rating: 5,
        latitude: 19.2900,
        longitude: -99.0960,
        storyTime: "According to the local gossip mill, this CHEERY kindergarden is the courtesy of a caretaker who hung hundreds of old dolls across this island on the whim of an apparition of a young girl."
    },
    {
        name: "Racetrack Playa",
        country: "Death Valley, California, USA",
        category: "Natural Mysteries",
        rating: 4,
        latitude: 36.6814,
        longitude: -117.5625,
        storyTime: "Mysterious, unsanctioned movement of rocks was recorded across this dry lakebed, leaving long finger-like trails behind them without obvious human intervention."
    },
    {
        name: "Hashima Island",
        country: "Nagasaki, Japn",
        category: "Abandoned locations",
        rating: 4,
        latitude: 32.6278,
        longitude: 129.7381,
        storyTime: "Caved in during 1974, this tiny isalnd was abandoned by it's coal-mining settlement. Currently, it's crumbling concrete structures now gape at passer-bys as a reminder of an industrial past."
    },
    {
        name: "Houska Castle",
        country: "Liberic Region, Czech Republic",
        category: "Urban Folklore",
        rating: 4,
        latitude: 50.4886,
        longitude: 14.6247,
        storyTime: "A medieval castle (not Count Dracula's) draped with legends that claims to have been built to hide a pit of something sinister beneath it. It's creepy look as well as embellishments have helped in garnering quite a reputation."
    },
    {
        name: "The Mary Celeste",
        country: "Atlantic Ocean, Near the Azores",
        category: "Unanswered Oddities",
        rating: 5,
        latitude: 38.0000,
        longitude: -17.0000,
        storyTime: "Discovered in 1872, this lone ship was spotted steering erratically at sea with its crew MIA and no explanation for why or how. Theories today suggest murder by the crew of the captain and his family while others bring in curses, bad omens and ghostly apparitions. Which is true? Nobody knows, and the fate of its crew remains unsolved."
    },
    {
        name: "SS Ourang Medan",
        country: "Strait Of Malacca, Southeast Asia",
        category: "Unanswered Oddities",
        rating: 5,
        latitude: 2.5000,
        longitude: 101.0000,
        storyTime: "According to chilling maritime lore, the ship dent out a Morse code distress signal reporting its crew dead as well as ending the with an 'I die' from the captain before the vessel was discovered by a rescue team, reporting all crew members to be frozen in death with wide eyes as though frightened and without visible injuries."
    }

];
const discoveringbtn = document.getElementById("discoveringbtn");
const result = document.getElementById("result");
let previousIndex = -1;
let discoveries = 0;
discoveringbtn.addEventListener("click", function() {
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * locations.length);
    } while (randomIndex === previousIndex);
    previousIndex = randomIndex;
    const place = locations[randomIndex];
    discoveries++;
    document.getElementById("NameOfLocation").textContent =
    place.name;
    document.getElementById("country").textContent =
    place.country;
    document.getElementById("VillainBackstory").textContent =
    place.storyTime;
    document.getElementById("coOrdinates").textContent =
    `${place.latitude}°, ${place.longitude}°`;
    document.getElementById("category").textContent =
    place.category;
    document.getElementById("rating").textContent =
    "★".repeat(place.rating) +
    "☆".repeat(5 - place.rating);
    document.getElementById("entrynumber").textContent =
     `Entry Number ${String(discoveries).padStart(3, "0")}`;
    document.getElementById("maplink").href =
    `https://www.google.com/maps?q=${place.latitude},${place.longitude}`;
    result.style.display = "block";
    result.scrollIntoView({
        behaviour: "smooth",
        block: "center"
    });
});