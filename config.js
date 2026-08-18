// --- WIKI CONFIGURATION ---
const BOT_NAME = "Macademia"; 

const WIKIS = {
    "hh-wiki": {
        name: "Horrific Housing Wiki",
        baseUrl: "https://housing.miraheze.org",
        apiEndpoint: "https://housing.miraheze.org/w/api.php",
        articlePath: "https://housing.miraheze.org/wiki/",
        prefix: "hh",
        emoji: "1539215118397739069"
    }
};

const DEFAULT_WIKI = "hh-wiki";

// Enable or disable slash commands. Disabled commands are not registered with Discord.
const COMMANDS = {
    speedrun: false,
    contribs: true,
    wiki: true,
    parse: true,
    user: true,
    random: true,
};

const CONTRIBSCORES_SCORE_EMOJI = "1539214681791537152";

const STATUS_INTERVAL_MS = 5 * 60 * 1000;

// --- DISCORD STATUSES ---
const STATUS_OPTIONS = [
    { type: 4, text: "just send [[a page]] or {{a page}}!" },
    { type: 4, text: "don't use fandom!" },
    { type: 0, text: "housing.miraheze.org" },
    { type: 4, text: "edit your message and my embed will too!" },
    { type: 4, text: "react with :wastebasket: on my messages & i'll delete!" },
];

module.exports = {
    BOT_NAME,
    WIKIS,
    // WIKI_MAP,
    DEFAULT_WIKI,
    COMMANDS,
    CONTRIBSCORES_SCORE_EMOJI,
    STATUS_INTERVAL_MS,
    STATUS_OPTIONS
};
