// =========================
// HOME PAGE
// =========================

const createBtn = document.getElementById("createBtn");

if (createBtn) {

    createBtn.addEventListener("click", function () {

        window.location.href = "event.html";

    });

}// =========================
// EVENT PAGE
// =========================

const eventCards =
    document.querySelectorAll(".event-card");


eventCards.forEach(function(card) {

    card.addEventListener("click", function() {

        const eventType =
            card.getAttribute("data-event");


        // Save selected event

        localStorage.setItem(
            "eventType",
            eventType
        );


        // Go to information page

        window.location.href =
            "information.html";

    });

});


// =========================
// BACK TO HOME
// =========================

function goHome() {

    window.location.href =
        "index.html";

}// =========================
// INFORMATION PAGE
// =========================

const formContainer =
    document.getElementById("formContainer");

const selectedEventText =
    document.getElementById("selectedEvent");

const eventIcon =
    document.getElementById("eventIcon");

const pageTitle =
    document.getElementById("pageTitle");

const pageDescription =
    document.getElementById("pageDescription");


const selectedEvent =
    localStorage.getItem("eventType");


// =========================
// EVENT INFORMATION
// =========================

const eventData = {

    Birthday: {

        icon: "🎂",

        title: "Tell us about your birthday",

        description:
            "Create a special invitation for your birthday.",

        fields: [

            {
                id: "eventTitle",
                label: "Birthday Title",
                placeholder:
                    "e.g. Su Su's 20th Birthday"
            },

            {
                id: "hostName",
                label: "Birthday Person",
                placeholder:
                    "e.g. Su Su"
            },

            {
                id: "age",
                label: "Age",
                placeholder:
                    "e.g. 20"
            },

            {
                id: "eventDate",
                label: "Date",
                type: "date"
            },

            {
                id: "eventTime",
                label: "Time",
                type: "time"
            },

            {
                id: "eventLocation",
                label: "Location",
                placeholder:
                    "e.g. ABC Café"
            },

            {
                id: "eventMessage",
                label: "Message",
                type: "textarea",
                placeholder:
                    "Write a birthday message for your guests..."
            }

        ]

    },


    Wedding: {

        icon: "💍",

        title: "Tell us about your wedding",

        description:
            "Create a beautiful wedding invitation.",

        fields: [

            {
                id: "eventTitle",
                label: "Wedding Title",
                placeholder:
                    "e.g. Su Su & Mg Mg's Wedding"
            },

            {
                id: "hostName",
                label: "Bride & Groom",
                placeholder:
                    "e.g. Su Su & Mg Mg"
            },

            {
                id: "eventDate",
                label: "Wedding Date",
                type: "date"
            },

            {
                id: "eventTime",
                label: "Ceremony Time",
                type: "time"
            },

            {
                id: "eventLocation",
                label: "Wedding Venue",
                placeholder:
                    "e.g. Grand Ballroom"
            },

            {
                id: "eventMessage",
                label: "Message",
                type: "textarea",
                placeholder:
                    "Write a message for your wedding guests..."
            }

        ]

    },


    Graduation: {

        icon: "🎓",

        title: "Tell us about your graduation",

        description:
            "Celebrate your achievement with a special invitation.",

        fields: [

            {
                id: "eventTitle",
                label: "Graduation Title",
                placeholder:
                    "e.g. Su Su's Graduation"
            },

            {
                id: "hostName",
                label: "Graduate Name",
                placeholder:
                    "e.g. Su Su"
            },

            {
                id: "program",
                label: "Degree / Program",
                placeholder:
                    "e.g. Bachelor of Computer Science"
            },

            {
                id: "eventDate",
                label: "Graduation Date",
                type: "date"
            },{
                id: "eventTime",
                label: "Time",
                type: "time"
            },

            {
                id: "eventLocation",
                label: "Venue",
                placeholder:
                    "e.g. University Hall"
            },

            {
                id: "eventMessage",
                label: "Message",
                type: "textarea",
                placeholder:
                    "Write a message for your graduation guests..."
            }

        ]

    },


    Anniversary: {

        icon: "💐",

        title: "Tell us about your anniversary",

        description:
            "Celebrate your journey together.",

        fields: [

            {
                id: "eventTitle",
                label: "Anniversary Title",
                placeholder:
                    "e.g. Our 5th Anniversary"
            },

            {
                id: "hostName",
                label: "Couple Name",
                placeholder:
                    "e.g. Su Su & Mg Mg"
            },

            {
                id: "years",
                label: "Years Together",
                placeholder:
                    "e.g. 5"
            },

            {
                id: "eventDate",
                label: "Date",
                type: "date"
            },

            {
                id: "eventTime",
                label: "Time",
                type: "time"
            },

            {
                id: "eventLocation",
                label: "Location",
                placeholder:
                    "e.g. Rose Garden Restaurant"
            },

            {
                id: "eventMessage",
                label: "Message",
                type: "textarea",
                placeholder:
                    "Write a lovely message for your guests..."
            }

        ]

    },


    Party: {

        icon: "🎉",

        title: "Tell us about your party",

        description:
            "Let's create a fun invitation.",

        fields: [

            {
                id: "eventTitle",
                label: "Party Name",
                placeholder:
                    "e.g. Summer Night Party"
            },

            {
                id: "hostName",
                label: "Host Name",
                placeholder:
                    "e.g. Su Su"
            },

            {
                id: "eventDate",
                label: "Date",
                type: "date"
            },

            {
                id: "eventTime",
                label: "Time",
                type: "time"
            },

            {
                id: "eventLocation",
                label: "Party Location",
                placeholder:
                    "e.g. ABC Rooftop"
            },

            {
                id: "eventMessage",
                label: "Message",
                type: "textarea",
                placeholder:
                    "Write a fun message for your guests..."
            }

        ]

    },


    "Baby Shower": {

        icon: "👶",

        title: "Tell us about the baby shower",

        description:
            "Celebrate the arrival of your little one.",

        fields: [

            {
                id: "eventTitle",
                label: "Baby Shower Title",
                placeholder:
                    "e.g. Welcome Baby Celebration"
            },

            {
                id: "hostName",
                label: "Parents' Name",
                placeholder:
                    "e.g. Su Su & Mg Mg"
            },

            {
                id: "babyName",
                label: "Baby Name",
                placeholder:
                    "e.g. Baby Lily"
            },

            {
                id: "eventDate",
                label: "Date",
                type: "date"
            },

            {
                id: "eventTime",
                label: "Time",
                type: "time"
            },{
                id: "eventLocation",
                label: "Location",
                placeholder:
                    "e.g. Rose Garden Restaurant"
            },

            {
                id: "eventMessage",
                label: "Message",
                type: "textarea",
                placeholder:
                    "Write a sweet message for your guests..."
            }

        ]

    }

};


// =========================
// CREATE FORM
// =========================

if (
    formContainer &&
    selectedEvent &&
    eventData[selectedEvent]
) {

    const data =
        eventData[selectedEvent];


    eventIcon.textContent =
        data.icon;


    selectedEventText.textContent =
        selectedEvent;


    pageTitle.textContent =
        data.title;


    pageDescription.textContent =
        data.description;


    data.fields.forEach(function(field) {

        const group =
            document.createElement("div");

        group.className =
            "form-group";


        const label =
            document.createElement("label");

        label.textContent =
            field.label;


        let input;


        if (field.type === "textarea") {

            input =
                document.createElement("textarea");

            input.rows = 4;

        } else {

            input =
                document.createElement("input");

            input.type =
                field.type || "text";

        }


        input.id =
            field.id;


        input.placeholder =
            field.placeholder || "";


        group.appendChild(label);

        group.appendChild(input);

        formContainer.appendChild(group);

    });

}


// =========================
// SAVE INFORMATION
// =========================

function saveEventInformation() {

    const inputs =
        formContainer.querySelectorAll(
            "input, textarea"
        );


    let allFilled = true;


    inputs.forEach(function(input) {

        if (input.value.trim() === "") {

            allFilled = false;

        }

    });


    if (!allFilled) {

        alert(
            "Please fill in all the information! ⚠️"
        );

        return;

    }


    inputs.forEach(function(input) {

        localStorage.setItem(
            input.id,
            input.value
        );

    });


    window.location.href =
        "template.html";

}


// =========================
// BACK TO EVENT
// =========================

function goBackToEvent() {

    window.location.href =
        "event.html";

}// =========================
// TEMPLATE PAGE
// =========================

const invitationCard =
    document.getElementById("invitationCard");

if (invitationCard) {

    const eventType =
        localStorage.getItem("eventType");

    const eventTitle =
        localStorage.getItem("eventTitle");

    const hostName =
        localStorage.getItem("hostName");

    const eventDate =
        localStorage.getItem("eventDate");

    const eventTime =
        localStorage.getItem("eventTime");

    const eventLocation =
        localStorage.getItem("eventLocation");

    const eventMessage =
        localStorage.getItem("eventMessage");


    // SHOW INFORMATION

    document.getElementById(
        "previewTitle"
    ).textContent =
        eventTitle || "Your Event";


    document.getElementById(
        "previewHost"
    ).textContent =
        hostName || "Your Name";


    document.getElementById(
        "previewDate"
    ).textContent =
        eventDate || "Date";


    document.getElementById(
        "previewTime"
    ).textContent =
        eventTime || "Time";


    document.getElementById(
        "previewLocation"
    ).textContent =
        eventLocation || "Location";


    document.getElementById(
        "previewMessage"
    ).textContent =
        eventMessage ||
        "Your special message will appear here.";


    // EVENT ICON

    const icons = {

        Birthday: "🎂",

        Wedding: "💍",

        Graduation: "🎓",

        Anniversary: "💐",

        Party: "🎉",

        "Baby Shower": "👶"

    };


    document.getElementById(
        "previewIcon"
    ).textContent =
        icons[eventType] || "🎉";


    // TEMPLATE SELECTION

    const templateOptions =
        document.querySelectorAll(
            ".template-option"
        );


    templateOptions.forEach(function(option) {

        option.addEventListener(
            "click",
            function() {

                templateOptions.forEach(
                    function(item) {

                        item.classList.remove(
                            "active"
                        );

                    }
                );


                option.classList.add(
                    "active"
                );


                const template =
                    option.getAttribute(
                        "data-template"
                    );


                invitationCard.classList.remove(
                    "floral",
                    "elegant",
                    "cute",
                    "modern",
                    "minimal"
                );


                invitationCard.classList.add(
                    template
                );


                localStorage.setItem(
                    "selectedTemplate",
                    template
                );

            }
        );

    });

}


// =========================
// BACK TO INFORMATION
// =========================

function backToInformation() {

    window.location.href =
        "information.html";

}


// =========================
// CONTINUE TO CUSTOMIZE
// =========================

function continueToCustomize() {

    window.location.href =
        "customize.html";

}// =========================
// CUSTOMIZE PAGE
// =========================

const customInvitation =
    document.getElementById("customInvitation");


if (customInvitation) {


    // =========================
    // GET SAVED INFORMATION
    // =========================

    const eventType =
        localStorage.getItem("eventType");

    const eventTitle =
        localStorage.getItem("eventTitle");

    const hostName =
        localStorage.getItem("hostName");

    const eventDate =
        localStorage.getItem("eventDate");

    const eventTime =
        localStorage.getItem("eventTime");

    const eventLocation =
        localStorage.getItem("eventLocation");

    const eventMessage =
        localStorage.getItem("eventMessage");


    // =========================
    // SHOW INFORMATION
    // =========================

    document.getElementById(
        "customTitle"
    ).textContent =
        eventTitle || "Your Event";


    document.getElementById(
        "customHost"
    ).textContent =
        hostName || "Your Name";


    document.getElementById(
        "customDate"
    ).textContent =
        eventDate || "Date";


    document.getElementById(
        "customTime"
    ).textContent =
        eventTime || "Time";


    document.getElementById(
        "customLocation"
    ).textContent =
        eventLocation || "Location";


    document.getElementById(
        "customMessage"
    ).textContent =
        eventMessage ||
        "Your special message will appear here.";


    // =========================
    // EVENT ICON
    // =========================

    const icons = {

        Birthday: "🎂",

        Wedding: "💍",

        Graduation: "🎓",

        Anniversary: "💐",

        Party: "🎉",

        "Baby Shower": "👶"

    };


    document.getElementById(
        "customIcon"
    ).textContent =
        icons[eventType] || "🎉";


    // =========================
    // PHOTO
    // =========================

    const photoInput =
        document.getElementById("photoInput");

    const customPhoto =
        document.getElementById("customPhoto");


    photoInput.addEventListener(
        "change",
        function() {

            const file =
                photoInput.files[0];


            if (!file) {
                return;
            }


            const reader =
                new FileReader();


            reader.onload =
                function(event) {

                    customPhoto.src =
                        event.target.result;

                    customPhoto.style.display =
                        "block";


                    localStorage.setItem(
                        "invitationPhoto",
                        event.target.result
                    );

                };


            reader.readAsDataURL(file);

        }
    );


    // =========================
    // BACKGROUND COLOR
    // =========================

    const backgroundColor =
        document.getElementById(
            "backgroundColor"
        );


    backgroundColor.addEventListener(
        "input",
        function() {

            customInvitation.style.backgroundColor =
                backgroundColor.value;


            localStorage.setItem(
                "backgroundColor",
                backgroundColor.value
            );

        }
    );


    // =========================
    // TEXT COLOR
    // =========================

    const textColor =
        document.getElementById(
            "textColor"
        );


    textColor.addEventListener(
        "input",
        function() {

            customInvitation.style.color =
                textColor.value;


            localStorage.setItem(
                "textColor",
                textColor.value
            );

        }
    );


    // =========================
    // FONT SIZE
    // =========================

    const fontSize =
        document.getElementById(
            "fontSize"
        );


    fontSize.addEventListener(
        "input",
        function() {document.getElementById(
                "customTitle"
            ).style.fontSize =
                fontSize.value + "px";


            localStorage.setItem(
                "fontSize",
                fontSize.value
            );

        }
    );


    // =========================
    // LOAD SAVED PHOTO
    // =========================

    const savedPhoto =
        localStorage.getItem(
            "invitationPhoto"
        );


    if (savedPhoto) {

        customPhoto.src =
            savedPhoto;

        customPhoto.style.display =
            "block";

    }


    // =========================
    // LOAD SAVED COLORS
    // =========================

    const savedBackground =
        localStorage.getItem(
            "backgroundColor"
        );


    if (savedBackground) {

        customInvitation.style.backgroundColor =
            savedBackground;

        backgroundColor.value =
            savedBackground;

    }


    const savedTextColor =
        localStorage.getItem(
            "textColor"
        );


    if (savedTextColor) {

        customInvitation.style.color =
            savedTextColor;

        textColor.value =
            savedTextColor;

    }


    const savedFontSize =
        localStorage.getItem(
            "fontSize"
        );


    if (savedFontSize) {

        document.getElementById(
            "customTitle"
        ).style.fontSize =
            savedFontSize + "px";

        fontSize.value =
            savedFontSize;

    }

}


// =========================
// BACK TO TEMPLATE
// =========================

function backToTemplate() {

    window.location.href =
        "template.html";

}


// =========================
// GO TO FINAL PREVIEW
// =========================

function goToPreview() {

    window.location.href =
        "preview.html";

}// =========================
// FINAL PREVIEW
// =========================

const finalInvitation =
    document.getElementById("finalInvitation");


if (finalInvitation) {


    // =========================
    // GET INFORMATION
    // =========================

    const eventType =
        localStorage.getItem("eventType");

    const eventTitle =
        localStorage.getItem("eventTitle");

    const hostName =
        localStorage.getItem("hostName");

    const eventDate =
        localStorage.getItem("eventDate");

    const eventTime =
        localStorage.getItem("eventTime");

    const eventLocation =
        localStorage.getItem("eventLocation");

    const eventMessage =
        localStorage.getItem("eventMessage");


    // =========================
    // SHOW INFORMATION
    // =========================

    document.getElementById(
        "finalTitle"
    ).textContent =
        eventTitle || "Your Event";


    document.getElementById(
        "finalHost"
    ).textContent =
        hostName || "Your Name";


    document.getElementById(
        "finalDate"
    ).textContent =
        eventDate || "Date";


    document.getElementById(
        "finalTime"
    ).textContent =
        eventTime || "Time";


    document.getElementById(
        "finalLocation"
    ).textContent =
        eventLocation || "Location";


    document.getElementById(
        "finalMessage"
    ).textContent =
        eventMessage ||
        "Your special message will appear here.";


    // =========================
    // EVENT ICON
    // =========================

    const icons = {

        Birthday: "🎂",

        Wedding: "💍",

        Graduation: "🎓",

        Anniversary: "💐",

        Party: "🎉",

        "Baby Shower": "👶"

    };


    document.getElementById(
        "finalIcon"
    ).textContent =
        icons[eventType] || "🎉";


    // =========================
    // PHOTO
    // =========================

    const savedPhoto =
        localStorage.getItem(
            "invitationPhoto"
        );


    const finalPhoto =
        document.getElementById(
            "finalPhoto"
        );


    if (savedPhoto) {

        finalPhoto.src =
            savedPhoto;

        finalPhoto.style.display =
            "block";

    }


    // =========================
    // BACKGROUND
    // =========================

    const savedBackground =
        localStorage.getItem(
            "backgroundColor"
        );


    if (savedBackground) {

        finalInvitation.style.backgroundColor =
            savedBackground;

    }


    // =========================
    // TEXT COLOR
    // =========================

    const savedTextColor =
        localStorage.getItem(
            "textColor"
        );


    if (savedTextColor) {

        finalInvitation.style.color =
            savedTextColor;

    }


    // =========================
    // FONT SIZE
    // =========================

    const savedFontSize =
        localStorage.getItem(
            "fontSize"
        );


    if (savedFontSize) {

        document.getElementById(
            "finalTitle"
        ).style.fontSize =
            savedFontSize + "px";

    }

}


// =========================
// BACK TO CUSTOMIZE
// =========================

function backToCustomize() {

    window.location.href =
        "customize.html";

}


// =========================
// GO TO SHARE
// =========================

function goToShare() {

    window.location.href =
        "share.html";

}// =========================
// SHARE PAGE
// =========================

const shareLink =
    document.getElementById("shareLink");


if (shareLink) {

    /*
       Create a link for the current invitation.
       For now, this uses the current website address.
    */

    const invitationLink =
        window.location.origin +
        window.location.pathname.replace(
            "share.html",
            "preview.html"
        );

    shareLink.value =
        invitationLink;

}


// =========================
// COPY INVITATION LINK
// =========================

function copyInvitationLink() {

    const link =
        document.getElementById(
            "shareLink"
        );

    const message =
        document.getElementById(
            "copyMessage"
        );


    navigator.clipboard.writeText(
        link.value
    )
    .then(function() {

        message.textContent =
            "✅ Invitation link copied!";

    })
    .catch(function() {

        link.select();

        document.execCommand("copy");

        message.textContent =
            "✅ Invitation link copied!";

    });

}


// =========================
// BACK TO PREVIEW
// =========================

function backToPreview() {

    window.location.href =
        "preview.html";

}


// =========================
// GO HOME
// =========================

function goHome() {

    window.location.href =
        "index.html";

}