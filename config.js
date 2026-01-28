// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    // Your Valentine's name that will appear in the title
    // Example: "Jade", "Sarah", "Mike"
    valentineName: "Aarna",

    // The title that appears in the browser tab
    // You can use emojis! 💝 💖 💗 💓 💞 💕
    pageTitle: "Dear meri jaan",

    // Floating emojis that appear in the background
    // Find more emojis at: https://emojipedia.org
    floatingEmojis: {
        hearts: ['❤️','💙','💗','💖','💓','💚',💝','🩷','🤍'],
        faces: ['😉','😜','😝','😈']
    },

    // Questions and answers
    // Customize each question and its possible responses
    questions: {
        first: {
            text: "Dear Aarna Rana...",                                    // First interaction
            yesBtn: "Haan bata",                                             // Text for "Yes" button
            noBtn: "Mujhe pata hai tu kya pochne vala hai nikal",
            secretAnswer: "Theek hai banunga apki valentine🙄🙄"           // Secret hover message// Text for "No" button
        },
        second: {
            text: "guess how much i ishq you",                          // For the love meter
            startText: "mujhe pata hai",                                   // Text before the percentage
            nextBtn: "chal"                                         // Text for the next button
        },
        third: {
            text: "kya ap iss saal ki वेलेंटाइन्स ap meri वेलेंटाइन्स bana chahte ho...?", // The big question!
            yesBtn: "theek hai🙄🙄",                                             // Text for "Yes" button
            noBtn: "nahi🤪🤪"                                                 // Text for "No" button
        }
    },

    // Love meter messages
    // They show up depending on how far they slide the meter
    loveMessages: {
        extreme: "OH MAH GOD I ALSO LOVE YOU THIS MUCH (thodu more tho non-competitively😈😈",  // Shows when they go past 5000%
        high: "I LOVE YOU MORE AND FOREVER LOVE YOU MORE",              // Shows when they go past 1000%
        normal: "agar ap sochte ho mei apko itna hi pyar hai mei apko aur bhi pyar karunga jabtak iska sau guna na ho jaye"                           // Shows when they go past 100%
    },

    // Messages that appear after they say "Yes!"
    celebration: {
        title: "YYEEEEAAAAAAHHHHHHHH",
        message: "YOU MAH BESTEST BABI MY ONLY JAAN I KISSI YOU HOLD YOU FOREVER YOU MAH FOREVER BESTEST VALENTINE I LOVE YOU FOREVER",
        emojis: "😜 💚 🤍 😈 💓 💙 😉 🩷 💝 😝 💖 ❤️ 💗"  // These will bounce around
    },

    // Color scheme for the website
    // Use https://colorhunt.co or https://coolors.co to find beautiful color combinations
    colors: {
        backgroundStart: "#fae8eb",      // Gradient start (try pastel colors for a soft look)
        backgroundEnd: "#f6caca",        // Gradient end (should complement backgroundStart)
        buttonBackground: "#7fc2c6",     // Button color (should stand out against the background)
        buttonHover: "#cd9fcc",          // Button hover color (slightly lighter than buttonBackground)
        textColor: "#030014"             // Text color (make sure it's readable!)
    },

    // Animation settings
    // Adjust these if you want faster/slower animations
    animations: {
        floatDuration: "15s",           // How long it takes hearts to float up (10-20s recommended)
        floatDistance: "50px",          // How far hearts move sideways (30-70px recommended)
        bounceSpeed: "0.5s",            // Speed of bouncing animations (0.3-0.7s recommended)
        heartExplosionSize: 1.5         // Size of heart explosion effect (1.2-2.0 recommended)
    },

    // Background Music (Optional)
    // Add your own music URL after getting proper licenses
    music: {
        enabled: true,                     // Music feature is enabled
        autoplay: true,                    // Try to autoplay (note: some browsers may block this)
        musicUrl: "https://res.cloudinary.com/dncywqfpb/video/upload/v1738399057/music_qrhjvy.mp3", // Music streaming URL
        startText: "🎵 Play Music",        // Button text to start music
        stopText: "🔇 Stop Music",         // Button text to stop music
        volume: 0.5                        // Volume level (0.0 to 1.0)
    }
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG; 
