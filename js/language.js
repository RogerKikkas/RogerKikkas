let language = {
    ee: {
        setflag: "img/ee.png",
        menu: "Menüü",
        about: "Minust",
        portfolio: "Portfoolio",
        skills: "Oskused",
        contact: "Kontakt",
        heading: "Tere, mina olen Roger",
        leadin: "Noorem veebispetsialist",
        aboutme1: "Mind on lapsest saati huvitanud puslede/mõistatuste lahendamine ja mis on programmeerimine kui mitte suur hunnik väikeseid puslesi?",
        aboutme2: "Olen Tartu Kutsehariduskeskuse noorem tarkvaraarendaja/veebispetsialist eriala teise kursuse õpilane. Õpingute käigus olen omandanud oskusi järgmistes keeltes/tarkvarades: HTML&CSS, JavaScript, PHP, MySQL, Java, Photoshop ja WordPress.",
        skillsdescription: "Minu tarkvaraoskused 10 punkti süsteemis",
        contactme: "Kontakt",
        contactdescription: "Võta minuga ühendust emailil roger.kikkas@khk.ee",
        closemodal: " Välju",
        modal1heading: "Saemehed",
        modal1description: "Veebileht valminud koolis tiimiprojektina. Tiimis oli 3 inimest. Projektil ei olnud kindlaid rolle ja läbisime tööprotsessi üheskoos. Veebilehe tegemisel kasutasime WordPressi.",
        modal1date: "Kuupäev: november 2016",
        modal1client: "Klient: Aruks Invest OÜ",
        modal2heading: "RCM-Baltic",
        modal2description: "Esimene üksinda valminud kliendiprojekt. Veebilehe tegemisel kasutasin WordPressi.",
        modal2warning: "Veebileht ei ole enam minu haldamisel.",
        modal2date: "Kuupäev: jaanuar 2017",
        modal2client: "Klient: Vahendustehnika OÜ",
        modal3heading: "Veebiarenduse praktika Diara Infra OÜ-s",
        modal3description: "Veebilehtede haldamine. Veebilehed olid valmistatud PHP raamistiku<a href=\"https://github.com/henno/halo\" target=\"_blank\">Haloga</a>. Praktikal olles parandasin veebilehtedel esinenud vigu/buge ning sain ka paar lisafunktsiooni luua.",
        modal3date: "Kuupäev: aprill 2017 - juuni 2017",
        modal4heading: "2048",
        modal4description: "Hobi korras loodud 2048 mäng. Mängu loomisel kasutasin HTML&CSS, bootstrapi ning JavaScripti.",
        modal4date: "Kuupäev: jaanuar 2019 - veebruar 2019",
        modal5heading: "RSS Viewer",
        modal5description: "Testitöö raames tehtud RSS feedi lugeja. Valmistatud HTML&CSS, JavasScript ja PHP-ga. Ei kasutanud ühtegi CSS raamistikku.",
        modal5date: "Kuupäev: jaanuar 2019"

    },
};

if (window.location.hash) {
    if (location.hash.substring(1) === "eng") {
        window.location.href = window.location.toString().split(/[?#]/)[0];
    }
    else if (location.hash.substring(1) === "ee") {
        $("[data-language=setflag]").attr('src', language.ee.setflag);
        $("[data-language=menu]").text(language.ee.menu);
        $("[data-language=about]").text(language.ee.about);
        $("[data-language=portfolio]").text(language.ee.portfolio);
        $("[data-language=skills]").text(language.ee.skills);
        $("[data-language=contact]").text(language.ee.contact);
        $("[data-language=heading]").text(language.ee.heading);
        $("[data-language=leadin]").text(language.ee.leadin);
        $("[data-language=aboutme1]").text(language.ee.aboutme1);
        $("[data-language=aboutme2]").text(language.ee.aboutme2);
        $("[data-language=skillsdescription]").text(language.ee.skillsdescription);
        $("[data-language=contactme]").text(language.ee.contactme);
        $("[data-language=contactdescription]").text(language.ee.contactdescription);
        $("[data-language=closemodal]").text(language.ee.closemodal);
        $("[data-language=modal1heading]").text(language.ee.modal1heading);
        $("[data-language=modal1description]").text(language.ee.modal1description);
        $("[data-language=modal1date]").text(language.ee.modal1date);
        $("[data-language=modal1client]").text(language.ee.modal1client);
        $("[data-language=modal2heading]").text(language.ee.modal2heading);
        $("[data-language=modal2description]").text(language.ee.modal2description);
        $("[data-language=modal2warning]").text(language.ee.modal2warning);
        $("[data-language=modal2date]").text(language.ee.modal2date);
        $("[data-language=modal2client]").text(language.ee.modal2client);
        $("[data-language=modal3heading]").text(language.ee.modal3heading);
        $("[data-language=modal3description]").text(language.ee.modal3description);
        $("[data-language=modal3date]").text(language.ee.modal3date);
        $("[data-language=modal4heading]").text(language.ee.modal4heading);
        $("[data-language=modal4description]").text(language.ee.modal4description);
        $("[data-language=modal4date]").text(language.ee.modal4date);
        $("[data-language=modal5heading]").text(language.ee.modal5heading);
        $("[data-language=modal5description]").text(language.ee.modal5description);
        $("[data-language=modal5date]").text(language.ee.modal5date);
    }
}

$('[data-callLang]').on('click', function() {
    // Change flag
    $("[data-language=setflag]").attr('src', $(this).find('img').attr('src'));

    if ($(this).attr('data-callLang') === "eng") {
        window.location.href = window.location.toString().split(/[?#]/)[0];
        return false;
    }

    window.location.hash = $(this).attr('data-callLang');
    location.reload(true);
});