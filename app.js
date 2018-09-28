//zodiac project: use an array of objects and attributes:
console.log("start here")
var zodiac = [
    {
        zodiacName: "aries",
        birthdayRange: "March 21 - April 19",
        attributes: "Karakteristik: aktif, inisiatif, suka memimpin, mandiri, agresif, tidak sabaran, energik, pemula, asertif dan terkadang naif",
        picture: "http://courtneysgamecoderocks.com/ZodiacProject/img/ariesSign.png"
    },
    {
        zodiacName: "cancer",
        birthdayRange: "June 21 - July 22",
        attributes: "Karakteristik: lembut, kolot, perasa, tertutup, keibuan, suka merenung",
        picture: "http://courtneysgamecoderocks.com/ZodiacProject/img/cancerSign.png"
    },
    {
        zodiacName: "taurus",
        birthdayRange: "April 20 - May 20",
        attributes: "Karakteristik: gigih, keras kepala, posesif, dermawan, sensual, manja, patuh.",
        picture: "http://courtneysgamecoderocks.com/ZodiacProject/img/taurusSign.png"
    },
    {
        zodiacName: "gemini",
        birthdayRange: "May 21 - June 20",
        attributes: "Karakteristik: banyak bicara, mudah beradaptasi, fleksibel, mudah berubah, bertanggung jawab, mudah bersosialisasi, hanya memandang sesuatu dari luarnya saja.",
        picture: "http://courtneysgamecoderocks.com/ZodiacProject/img/geminiSign.png"
    },
    {
        zodiacName: "capricorn",
        birthdayRange: "December 22 - January 19",
        attributes: "Karakteristik: kolot, bijaksana, berambisi, konstan, disiplin, berhati-hati.",
        picture: "http://courtneysgamecoderocks.com/ZodiacProject/img/capricornSign.png"
    },
    {
        zodiacName: "sagittarius",
        birthdayRange: "November 22 - December 21",
        attributes: "Karakteristik: optimis, antusias, jujur, pendiam, mandiri, bertanggungjawab, blak-blakan, petualang sejati.",
        picture: "http://courtneysgamecoderocks.com/ZodiacProject/img/saggitariusSign.png"
    },
    {
        zodiacName: "pisces",
        birthdayRange: "February 19 - March 20",
        attributes: "Karakteristik: memiliki intuisi yang tajam, simpatik, sensitif, lembut, mudah dipengaruhi.",
        picture: "http://courtneysgamecoderocks.com/ZodiacProject/img/piscesSign.png"
    },
    {
        zodiacName: "aquarius",
        birthdayRange: "January 20 - February 18",
        attributes: "Karakteristik: mandiri, opini keras, idealis, pendiam, ramah, cerdas.",
        picture: "http://courtneysgamecoderocks.com/ZodiacProject/img/aquariusSign.png"
    },
    {
        zodiacName: "scorpio",
        birthdayRange: "October 23 - November 21",
        attributes: "Karakteristik: penuh gairah, posesif, fokus, sangat menggebu-gebu, memiliki rasa ingin tahu yang besar.",
        picture: "http://courtneysgamecoderocks.com/ZodiacProject/img/scorpioSign.png"
    },
    {
        zodiacName: "virgo",
        birthdayRange: "August 23 - September 22",
        attributes: "Karakteristik: analitik, cerdas, kritis, suka menolong, teliti, pendiam.",
        picture: "http://courtneysgamecoderocks.com/ZodiacProject/img/virgoSign.png"
    },
    {
        zodiacName: "libra",
        birthdayRange: "September 23 - October 22",
        attributes: "Karakteristik: memiliki jiwa sosial yang tinggi, baik hati, mudah bergaul dan disukai, artistik, berwibawa, diplomatik.",
        picture: "http://courtneysgamecoderocks.com/ZodiacProject/img/libraSign.png"
    },
    {
        zodiacName: "leo",
        birthdayRange: "July 23 - August 22",
        attributes: "Karakteristik: murah hati, suka menolong, perhatian, aktif, hangat, terbuka dan suka memerintah.",
        picture: "http://courtneysgamecoderocks.com/ZodiacProject/img/leoSign.png"
    }
]

// write a function to call appropriate zodiacName:
function astSign() {
    console.log("working")

    var userInput = document.getElementById("your-sign").value.toLowerCase()

    var sign = document.getElementById("yourSign")
    var range = document.getElementById("birthdayRange")
    var attributes = document.getElementById("attributes")
    var img = document.getElementById("zodiacImage")

    for (i = 0; i < zodiac.length; i++) {
        if (userInput == zodiac[i].zodiacName) {
            sign.innerHTML = zodiac[i].zodiacName

            range.innerHTML = zodiac[i].birthdayRange
            attributes.innerHTML = zodiac[i].attributes
            img.src = zodiac[i].picture
            return
        } else {
            sign.innerHTML = "oops! That's not a sign. Try again"
            range.innerHTML = " "
            attributes.innerHTML = " "
            img.src = "http://courtneysgamecoderocks.com/ZodiacProject/img/wrong.png"
        }
    }
}