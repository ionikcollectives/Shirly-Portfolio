/* ==========================================================================
   SITE CONTENT — edit this file to update the website.
   --------------------------------------------------------------------------
   • Keep the quotes "..." around text and the commas between items.
   • Save the file and refresh the browser to see your changes.
   • The numbers on the site (years, productions, episodes, awards) are
     counted automatically from this file, so they stay correct.
   • To add a still image to a work, put the file in assets/img/works/
     and write its path in that work's  still: ""  field, e.g.
       still: "assets/img/works/handawa.jpg"
     (A landscape image around 2400 × 1000 px works best.)
   • Awards are written as  ["won" or "nominated", "Category", "Ceremony", year]
   • Works are put in date order automatically (most recent first).
   • The laurels (opening screen and top of Recognition) come from  honours  below.
   • In the About text, wrap a key phrase in *stars* to give it a quiet underline.
   • An empty social link ("") is hidden automatically.
   ========================================================================== */

window.SITE = {
  /* The website's address once it is live, e.g. "https://shirlydelankawala.com".
     Search engines and link previews (WhatsApp, Facebook) use it. Leave it ""
     on Vercel and the address Vercel gives the site is used instead.         */
  siteUrl: "",

  name: { first: "Shirly P.", last: "Delankawala" },
  role: "Film and teledrama director and producer",
  position: "Board of Directors, Independent Television Network (ITN) Sri Lanka",
  careerStart: 1988,           // first year in drama (used for "years in drama")

  /* ---- Headline honours (the laurels) ------------------------------------
     The main awards, shown as laurels at the top of Recognition. The first
     heroHonours of them also appear on the opening screen, so put the most
     important first. Keep the list short: three to six reads best.
     "work" must match the title of a work below, spelled the same way.
     Set  honours: []  to let the site pick every win for direction or for
     the series itself automatically.                                        */
  heroHonours: 2,
  honours: [
    { award: "Best Director", ceremony: "State Television Awards", year: 2009, work: "Handawa" },
    { award: "Best TV Series", ceremony: "State Television Awards", year: 2009, work: "Handawa" },
    { award: "Jury's Special Award for Best Direction", ceremony: "Sumathi Awards", year: 2009, work: "Handawa" },
    { award: "Most Popular TV Series", ceremony: "Sumathi Awards", year: 2006, work: "Olu" },
    { award: "Most Popular TV Series", ceremony: "SLIM Awards", year: 2006, work: "Olu" },
    { award: "Most Popular TV Series", ceremony: "Sumathi Awards", year: 2004, work: "Chathurya" }
  ],

  /* The small notice above the name in the opening screen. Set to "" to hide. */
  latest: { label: "New in 2026", title: "Hanthanata Ahenwada" },

  /* ---- About ------------------------------------------------------------ */
  about: {
    paragraphs: [
      "Shirly P. Delankawala has spent *more than three decades* in Sri Lankan drama and television. He learned the craft as an assistant director on stage, television and film sets, and began directing in 2003 with Chathurya.",
      "His teledramas have won *State Television and Sumathi awards for direction*. He went on to manage drama and presentation at TV1 and Sirasa TV, and now serves on the *Board of Directors of the Independent Television Network*. In 2026 he made the feature film *Hanthanata Ahenwada*."
    ],
    quote:
      "The ultimate aim of my creative life is to add something useful to mankind, and to improve the way people think, while seeing how much they enjoy my creations."
  },

  /* ---- Work (slideshow + contact sheet). Sorted automatically, newest first.
     type: "Feature film" or "Teledrama"
     years: [start, end]  (end is only needed for a series that ran for years)
     art: illustrated poster used until a still is added. Options:
     ridge, dusk, ripples, facets, altar, bloom, between, plume, junction,
     seven, pages, monolith                                                 */
  works: [
    {
      title: "Hanthanata Ahenwada", type: "Feature film", years: [2026], channel: "", episodes: 0,
      note: "His newest work: a feature film made in 2026.",
      // Add details here when ready, e.g. "Starring … Released in cinemas islandwide on …"
      art: "ridge", still: "", isNew: true,
      awards: []
    },
    {
      title: "Hithuwakkaraya", type: "Teledrama", years: [2015, 2019], channel: "TV1", episodes: 160,
      note: "His longest series as director: 160 episodes, made during his years at TV1.",
      art: "monolith", still: "",
      awards: []
    },
    {
      title: "Potawatiya", type: "Teledrama", years: [2018], channel: "Rupavahini", episodes: 56,
      note: "A Rupavahini series, nominated at the Sumathi Awards 2018.",
      art: "pages", still: "",
      awards: [
        ["nominated", "Best Upcoming Actress", "Sumathi Awards", 2018]
      ]
    },
    {
      title: "Sathkulupawwa", type: "Teledrama", years: [2013], channel: "Swarnawahini", episodes: 54,
      note: "Best Supporting Actor and Best Supporting Actress at the Sumathi Awards 2013.",
      art: "seven", still: "",
      awards: [
        ["won", "Best Supporting Actor", "Sumathi Awards", 2013],
        ["won", "Best Supporting Actress", "Sumathi Awards", 2013]
      ]
    },
    {
      title: "Thunmanthenna", type: "Teledrama", years: [2012], channel: "Swarnawahini", episodes: 51,
      note: "Best Director of Photography at the Sumathi Awards 2012 and Best Make-up Artist at the Raigam Tele Awards 2012.",
      art: "junction", still: "",
      awards: [
        ["won", "Best Director of Photography", "Sumathi Awards", 2012],
        ["won", "Best Make-up Artist", "Raigam Tele Awards", 2012]
      ]
    },
    {
      title: "Rangira", type: "Teledrama", years: [2012], channel: "ITN", episodes: 94,
      note: "A 94-episode ITN series, nominated for Best Actress and Best Supporting Actress at the Raigam Tele Awards 2012.",
      art: "plume", still: "",
      awards: [
        ["nominated", "Best Actress", "Raigam Tele Awards", 2012],
        ["nominated", "Best Supporting Actress", "Raigam Tele Awards", 2012]
      ]
    },
    {
      title: "Degammadiyawa", type: "Teledrama", years: [2011], channel: "Swarnawahini", episodes: 39,
      note: "Eight Sumathi nominations in 2011, including Best Director and Best TV Series.",
      art: "between", still: "",
      awards: [
        ["nominated", "Best Director", "Sumathi Awards", 2011],
        ["nominated", "Best TV Series", "Sumathi Awards", 2011],
        ["nominated", "Best Screenplay", "Sumathi Awards", 2011],
        ["nominated", "Best Editor", "Sumathi Awards", 2011],
        ["nominated", "Best Director of Photography", "Sumathi Awards", 2011],
        ["nominated", "Best Art Director", "Sumathi Awards", 2011],
        ["nominated", "Best Make-up Artist", "Sumathi Awards", 2011],
        ["nominated", "Best Lighting Effects", "Sumathi Awards", 2011],
        ["won", "Special Achievement Award, Acting (Male)", "Sumathi Awards", 2011],
        ["won", "Special Achievement Award, Acting (Female)", "Sumathi Awards", 2011],
        ["won", "Best Make-up Artist", "Raigam Tele Awards", 2011],
        ["nominated", "Best Screenplay", "Raigam Tele Awards", 2011],
        ["nominated", "Best Editor", "Raigam Tele Awards", 2011],
        ["nominated", "Best Actress", "State Television Awards", 2011],
        ["nominated", "Best Supporting Actress", "State Television Awards", 2011],
        ["nominated", "Best Make-up Artist", "State Television Awards", 2011]
      ]
    },
    {
      title: "Kaneru", type: "Teledrama", years: [2010], channel: "ITN", episodes: 38,
      note: "Special Achievement Award for child acting and Best Upcoming Actress at the Sumathi Awards 2010.",
      art: "bloom", still: "",
      awards: [
        ["won", "Special Achievement Award, Acting (Child)", "Sumathi Awards", 2010],
        ["won", "Best Upcoming Actress", "Sumathi Awards", 2010]
      ]
    },
    {
      title: "Handawa", type: "Teledrama", years: [2009], channel: "Swarnawahini", episodes: 39,
      note: "Best Director and Best TV Series at the State Television Awards 2009, and the Jury's Special Award for Best Direction at the Sumathi Awards 2009.",
      art: "dusk", still: "",
      awards: [
        ["won", "Best Director", "State Television Awards", 2009],
        ["won", "Best TV Series", "State Television Awards", 2009],
        ["won", "Best Actress", "State Television Awards", 2009],
        ["won", "Best Supporting Actor", "State Television Awards", 2009],
        ["nominated", "Best Director of Photography", "State Television Awards", 2009],
        ["nominated", "Best Screenplay", "State Television Awards", 2009],
        ["nominated", "Best Editor", "State Television Awards", 2009],
        ["won", "Best Director, Jury's Special Award", "Sumathi Awards", 2009],
        ["won", "Best Supporting Actor", "Sumathi Awards", 2009],
        ["won", "Best Supporting Actress", "Sumathi Awards", 2009],
        ["won", "Best Actress", "Raigam Tele Awards", 2009]
      ]
    },
    {
      title: "Poojasanaya", type: "Teledrama", years: [2008], channel: "Swarnawahini", episodes: 32,
      note: "Best Director of Photography and a Special Achievement Award for acting at the OCIC Awards 2008.",
      art: "altar", still: "",
      awards: [
        ["won", "Best Director of Photography", "OCIC Awards", 2008],
        ["won", "Special Achievement Award, Acting (Female)", "OCIC Awards", 2008]
      ]
    },
    {
      title: "Olu", type: "Teledrama", years: [2006], channel: "Swarnawahini", episodes: 69,
      note: "Thirteen awards in 2006, including Most Popular TV Series at the Sumathi and SLIM Awards, and a Best Director nomination at the Raigam Tele Awards.",
      art: "ripples", still: "",
      awards: [
        ["won", "Most Popular TV Series", "Sumathi Awards", 2006],
        ["won", "Most Popular Actress", "Sumathi Awards", 2006],
        ["won", "Upcoming Actress", "Sumathi Awards", 2006],
        ["won", "Best Director of Photography", "Sumathi Awards", 2006],
        ["won", "Best Editor", "Raigam Tele Awards", 2006],
        ["won", "Best Supporting Actress", "Raigam Tele Awards", 2006],
        ["won", "Best Lighting Effects", "Raigam Tele Awards", 2006],
        ["won", "Most Popular Actor", "Raigam Tele Awards", 2006],
        ["won", "Most Popular Actress", "Raigam Tele Awards", 2006],
        ["won", "Jury Special Achievement Award, Acting (Female)", "Raigam Tele Awards", 2006],
        ["nominated", "Best Director", "Raigam Tele Awards", 2006],
        ["nominated", "Best TV Series", "Raigam Tele Awards", 2006],
        ["won", "Most Popular TV Series", "SLIM Awards", 2006],
        ["won", "Most Popular Actor", "SLIM Awards", 2006],
        ["won", "Most Popular Actress", "SLIM Awards", 2006]
      ]
    },
    {
      title: "Chathurya", type: "Teledrama", years: [2004], channel: "Swarnawahini", episodes: 60,
      note: "His debut as a director. Most Popular TV Series and Most Popular Actress at the Sumathi Awards 2004.",
      art: "facets", still: "",
      awards: [
        ["won", "Most Popular TV Series", "Sumathi Awards", 2004],
        ["won", "Most Popular Actress", "Sumathi Awards", 2004]
      ]
    }
  ],

  /* ---- Career (film strip). "end": "" means present. -------------------
     icon options: stage, camera, clapper, screen, broadcast, board, film   */
  career: [
    { start: 1988, end: 2003, role: "Assistant director", place: "Stage, television and film",
      text: "Fifteen years under veteran directors, including Sirasa TV from 1998 to 2001 on Damini and Nonawaruni Mahathwaruni.", icon: "stage" },
    { start: 2003, end: 2015, role: "Director and producer", place: "Independent",
      text: "From his debut Chathurya to Olu, Handawa, Degammadiyawa and Rangira.", icon: "clapper" },
    { start: 2015, end: 2019, role: "Assistant manager, drama and presentation", place: "TV1, Capital Maharaja Group",
      text: "Directed Hithuwakkaraya. Executive producer of live and weekend programmes.", icon: "screen" },
    { start: 2020, end: 2022, role: "Manager, drama and presentation", place: "Sirasa TV, Capital Maharaja Group",
      text: "Local drama programming, programme trailers and presentation.", icon: "broadcast" },
    { start: 2022, end: "", role: "Director and producer", place: "Independent",
      text: "His own productions, including the 2026 feature film Hanthanata Ahenwada.", icon: "film" },
    { start: 2024, end: "", role: "Board of Directors", place: "Independent Television Network",
      text: "Helping shape Sri Lanka's national television.", icon: "board" }
  ],

  /* ---- Television (the programme titles and the small monitor). Newest first.
     live: true shows a small "Live" mark                                    */
  television: {
    intro: "Beyond drama: the live and weekend programmes he produced at TV1, and the long-running series he worked on as an assistant director.",
    groups: [
      { role: "Executive producer", place: "TV1", years: "2015–2019", programmes: [
        { title: "Res Vihidena Jeewithe", format: "Morning show", when: "Weekdays", live: true },
        { title: "Danga Rella", format: "Request show", when: "Weekdays", live: true },
        { title: "Raba Eve", format: "Request show", when: "Weekdays", live: true },
        { title: "Ada Mehemai", format: "Celebrity show", when: "Weekends", live: true },
        { title: "Potawe Isakkaluwa", format: "Discussion", when: "Weekends" },
        { title: "Reality Penahati", format: "Stand-up comedy", when: "Weekends" },
        { title: "TV Eke Art Eka", format: "Magazine", when: "" },
        { title: "Sudam Sabhawa", format: "Discussion", when: "Poya days" },
        { title: "Yugasana Kavi Bana", format: "Kavi bana", when: "Poya days" }
      ]},
      { role: "Assistant director", place: "Sirasa TV", years: "1998–2001", programmes: [
        { title: "Damini", format: "Teledrama", when: "500 episodes" },
        { title: "Nonawaruni Mahathwaruni", format: "Teledrama", when: "200 episodes" }
      ]}
    ]
  },

  /* ---- Acknowledgements (Recognition, under the full record) ------------- */
  acknowledgements: [
    { years: "2014", title: "State Institutions Drama Festival and Prathibha Drama Festival", role: "Panel of judges" },
    { years: "2006–2009", title: "Wedikawen Mahapolowata Drama Festival, University of Sri Jayewardenepura", role: "Panel of judges" }
  ],

  /* ---- End credits: memberships and education ---------------------------- */
  credits: [
    { group: "Memberships", items: [
      ["Member", "Tele Makers Guild"],
      ["National Artiste, film and drama director", "Ministry of Cultural Affairs"],
      ["Accredited media", "Department of Government Information, 2017–2024"]
    ]},
    { group: "Education", items: [
      ["Diploma in Writership and Communication", "University of Sri Jayewardenepura, 2007"],
      ["Television Programme Production Technology, NVQ Level 5", "Tertiary and Vocational Education Commission"]
    ]}
  ],

  /* ---- Contact ---------------------------------------------------------- */
  contact: {
    heading: "Have a story worth telling?",
    sub: "For productions, collaborations and partnerships. Based in Colombo, Sri Lanka.",
    email: "shirly.film@gmail.com",
    whatsapp: "94707124539",            // country code + number, digits only
    whatsappDisplay: "+94 70 712 4539",
    // Optional: paste a Formspree (formspree.io) or similar form URL here so
    // the form sends messages directly instead of opening the email app.
    formEndpoint: ""
  },

  /* ---- Footer: social links and the website credit ---------------------- */
  social: [
    { label: "Facebook",  url: "https://www.facebook.com/ShirlyP.Delankawala" },
    { label: "Instagram", url: "https://www.instagram.com/shirlypdel/" },
    { label: "LinkedIn",  url: "https://www.linkedin.com/in/shirly-p-delankawala-64173052/" },
    { label: "YouTube",   url: "" }
  ],
  madeBy: { label: "IONIK Collectives", url: "https://www.ionikcollectives.com/" }   // the last line of the page
};
