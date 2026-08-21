// =====================================================
// INVITEME - DIGITAL INVITATION PLATFORM
// =====================================================


// =====================================================
// HOME PAGE
// =====================================================

const createBtn = document.getElementById("createBtn");

if (createBtn) {

    createBtn.addEventListener("click", function () {

        window.location.href = "event.html";

    });

}


// =====================================================
// GO HOME
// =====================================================

function goHome() {

    window.location.href = "index.html";

}


// =====================================================
// EVENT PAGE
// =====================================================

const eventCards =
    document.querySelectorAll(".event-card");

eventCards.forEach(function (card) {

    card.addEventListener("click", function () {

        const eventType =
            card.getAttribute("data-event");

        localStorage.setItem(
            "eventType",
            eventType
        );

        window.location.href =
            "information.html";

    });

});


// =====================================================
// BACK TO EVENT
// =====================================================

function goBackToEvent() {

    window.location.href =
        "event.html";

}


// =====================================================
// INFORMATION PAGE
// =====================================================

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


// =====================================================
// EVENT DATA
// =====================================================

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
                placeholder: "e.g. Su Su's 20th Birthday"
            },

            {
                id: "hostName",
                label: "Birthday Person",
                placeholder: "e.g. Su Su"
            },

            {
                id: "age",
                label: "Age",
                placeholder: "e.g. 20"
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
                placeholder: "e.g. ABC Café"
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
            },

            {
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
            "Celebrate your beautiful journey together.",

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
                    "Write a sweet message for your guests..."
            }

        ]

    }

};


// =====================================================
// CREATE INFORMATION FORM
// =====================================================

if (
    formContainer &&
    selectedEvent &&
    eventData[selectedEvent]
) {

    const data =
        eventData[selectedEvent];


    if (eventIcon) {
        eventIcon.textContent =
            data.icon;
    }


    if (selectedEventText) {
        selectedEventText.textContent =
            selectedEvent;
    }


    if (pageTitle) {
        pageTitle.textContent =
            data.title;
    }


    if (pageDescription) {
        pageDescription.textContent =
            data.description;
    }


    // Clear old fields
    formContainer.innerHTML = "";


    data.fields.forEach(function (field) {

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

        input.name =
            field.id;

        input.placeholder =
            field.placeholder || "";


        group.appendChild(label);

        group.appendChild(input);

        formContainer.appendChild(group);

    });

}


// =====================================================
// SAVE INFORMATION
// =====================================================

function saveEventInformation() {

    if (!formContainer) {
        return;
    }


    const inputs =
        formContainer.querySelectorAll(
            "input, textarea"
        );


    let allFilled = true;


    inputs.forEach(function (input) {

        if (input.value.trim() === "") {

            allFilled = false;

            input.style.border =
                "2px solid #e74c3c";

        } else {

            input.style.border = "";

        }

    });


    if (!allFilled) {

        alert(
            "Please fill in all the information! ⚠️"
        );

        return;

    }


    inputs.forEach(function (input) {

        localStorage.setItem(
            input.id,
            input.value
        );

    });


    window.location.href =
        "template.html";

}


// =====================================================
// TEMPLATE PAGE
// =====================================================

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


    const titleElement =
        document.getElementById("previewTitle");

    const hostElement =
        document.getElementById("previewHost");

    const dateElement =
        document.getElementById("previewDate");

    const timeElement =
        document.getElementById("previewTime");

    const locationElement =
        document.getElementById("previewLocation");

    const messageElement =
        document.getElementById("previewMessage");

    const iconElement =
        document.getElementById("previewIcon");


    if (titleElement) {
        titleElement.textContent =
            eventTitle || "Your Event";
    }


    if (hostElement) {
        hostElement.textContent =
            hostName || "Your Name";
    }


    if (dateElement) {
        dateElement.textContent =
            eventDate || "Date";
    }


    if (timeElement) {
        timeElement.textContent =
            eventTime || "Time";
    }


    if (locationElement) {
        locationElement.textContent =
            eventLocation || "Location";
    }


    if (messageElement) {
        messageElement.textContent =
            eventMessage ||
            "Your special message will appear here.";
    }


    const icons = {

        Birthday: "🎂",
        Wedding: "💍",
        Graduation: "🎓",
        Anniversary: "💐",
        Party: "🎉",
        "Baby Shower": "👶"

    };


    if (iconElement) {

        iconElement.textContent =
            icons[eventType] || "🎉";

    }


    // =================================================
    // TEMPLATE SELECTION
    // =================================================

    const templateOptions =
        document.querySelectorAll(
            ".template-option"
        );


    templateOptions.forEach(function (option) {

        option.addEventListener(
            "click",
            function () {

                templateOptions.forEach(
                    function (item) {

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


    // =================================================
    // LOAD SAVED TEMPLATE
    // =================================================

    const savedTemplate =
        localStorage.getItem(
            "selectedTemplate"
        );


    if (savedTemplate) {

        invitationCard.classList.remove(
            "floral",
            "elegant",
            "cute",
            "modern",
            "minimal"
        );


        invitationCard.classList.add(
            savedTemplate
        );


        templateOptions.forEach(
            function (option) {

                if (
                    option.getAttribute(
                        "data-template"
                    ) === savedTemplate
                ) {

                    option.classList.add(
                        "active"
                    );

                }

            }
        );

    }

}


// =====================================================
// BACK TO INFORMATION
// =====================================================

function backToInformation() {

    window.location.href =
        "information.html";

}


// =====================================================
// CONTINUE TO CUSTOMIZE
// =====================================================

function continueToCustomize() {

    window.location.href =
        "customize.html";

}


// =====================================================
// CUSTOMIZE PAGE
// =====================================================

const customInvitation =
    document.getElementById(
        "customInvitation"
    );


if (customInvitation) {

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


    const customTitle =
        document.getElementById(
            "customTitle"
        );

    const customHost =
        document.getElementById(
            "customHost"
        );

    const customDate =
        document.getElementById(
            "customDate"
        );

    const customTime =
        document.getElementById(
            "customTime"
        );

    const customLocation =
        document.getElementById(
            "customLocation"
        );

    const customMessage =
        document.getElementById(
            "customMessage"
        );

    const customIcon =
        document.getElementById(
            "customIcon"
        );


    if (customTitle) {
        customTitle.textContent =
            eventTitle || "Your Event";
    }


    if (customHost) {
        customHost.textContent =
            hostName || "Your Name";
    }


    if (customDate) {
        customDate.textContent =
            eventDate || "Date";
    }


    if (customTime) {
        customTime.textContent =
            eventTime || "Time";
    }


    if (customLocation) {
        customLocation.textContent =
            eventLocation || "Location";
    }


    if (customMessage) {
        customMessage.textContent =
            eventMessage ||
            "Your special message will appear here.";
    }


    const icons = {

        Birthday: "🎂",
        Wedding: "💍",
        Graduation: "🎓",
        Anniversary: "💐",
        Party: "🎉",
        "Baby Shower": "👶"

    };


    if (customIcon) {

        customIcon.textContent =
            icons[eventType] || "🎉";

    }


    // =================================================
    // PHOTO
    // =================================================

    const photoInput =
        document.getElementById(
            "photoInput"
        );

    const customPhoto =
        document.getElementById(
            "customPhoto"
        );


    if (photoInput && customPhoto) {

        photoInput.addEventListener(
            "change",
            function () {

                const file =
                    photoInput.files[0];


                if (!file) {
                    return;
                }


                const reader =
                    new FileReader();


                reader.onload =
                    function (event) {

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

    }


    // =================================================
    // BACKGROUND COLOR
    // =================================================

    const backgroundColor =
        document.getElementById(
            "backgroundColor"
        );


    if (backgroundColor) {

        backgroundColor.addEventListener(
            "input",
            function () {

                customInvitation.style.backgroundColor =
                    backgroundColor.value;

                localStorage.setItem(
                    "backgroundColor",
                    backgroundColor.value
                );

            }
        );


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

    }


    // =================================================
    // TEXT COLOR
    // =================================================

    const textColor =
        document.getElementById(
            "textColor"
        );


    if (textColor) {

        textColor.addEventListener(
            "input",
            function () {

                customInvitation.style.color =
                    textColor.value;

                localStorage.setItem(
                    "textColor",
                    textColor.value
                );

            }
        );


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

    }


    // =================================================
    // FONT SIZE
    // =================================================

    const fontSize =
        document.getElementById(
            "fontSize"
        );


    if (fontSize && customTitle) {

        fontSize.addEventListener(
            "input",
            function () {

                customTitle.style.fontSize =
                    fontSize.value + "px";

                localStorage.setItem(
                    "fontSize",
                    fontSize.value
                );

            }
        );


        const savedFontSize =
            localStorage.getItem(
                "fontSize"
            );


        if (savedFontSize) {

            customTitle.style.fontSize =
                savedFontSize + "px";

            fontSize.value =
                savedFontSize;

        }

    }

}


// =====================================================
// CONTINUE FROM CUSTOMIZE TO FINAL PREVIEW
// =====================================================

function continueToPreview() {

    window.location.href =
        "preview.html";

}


// =====================================================
// PREVIEW PAGE
// =====================================================

const finalCard =
    document.getElementById(
        "finalCard"
    );


// =====================================================
// GET DATA FROM URL OR LOCAL STORAGE
// =====================================================

function getInvitationData() {

    const params =
        new URLSearchParams(
            window.location.search
        );


    return {

        eventType:
            params.get("eventType") ||
            localStorage.getItem("eventType") ||
            "",

        eventTitle:
            params.get("eventTitle") ||
            localStorage.getItem("eventTitle") ||
            "Your Event",

        hostName:
            params.get("hostName") ||
            localStorage.getItem("hostName") ||
            "Your Name",

        eventDate:
            params.get("eventDate") ||
            localStorage.getItem("eventDate") ||
            "Date",

        eventTime:
            params.get("eventTime") ||
            localStorage.getItem("eventTime") ||
            "Time",

        eventLocation:
            params.get("eventLocation") ||
            localStorage.getItem("eventLocation") ||
            "Location",

        eventMessage:
            params.get("eventMessage") ||
            localStorage.getItem("eventMessage") ||
            "Your special message will appear here.",

        selectedTemplate:
            params.get("template") ||
            localStorage.getItem("selectedTemplate") ||
            "floral"

    };

}


// =====================================================
// SHOW FINAL INVITATION
// =====================================================

if (finalCard) {

    const data =
        getInvitationData();


    const previewTitle =
        document.getElementById(
            "previewTitle"
        );

    const previewHost =
        document.getElementById(
            "previewHost"
        );

    const previewDate =
        document.getElementById(
            "previewDate"
        );

    const previewTime =
        document.getElementById(
            "previewTime"
        );

    const previewLocation =
        document.getElementById(
            "previewLocation"
        );

    const previewMessage =
        document.getElementById(
            "previewMessage"
        );

    const previewIcon =
        document.getElementById(
            "previewIcon"
        );


    if (previewTitle) {

        previewTitle.textContent =
            data.eventTitle;

    }


    if (previewHost) {

        previewHost.textContent =
            data.hostName;

    }


    if (previewDate) {

        previewDate.textContent =
            data.eventDate;

    }


    if (previewTime) {

        previewTime.textContent =
            data.eventTime;

    }


    if (previewLocation) {

        previewLocation.textContent =
            data.eventLocation;

    }


    if (previewMessage) {

        previewMessage.textContent =
            data.eventMessage;

    }


    const icons = {

        Birthday: "🎂",
        Wedding: "💍",
        Graduation: "🎓",
        Anniversary: "💐",
        Party: "🎉",
        "Baby Shower": "👶"

    };


    if (previewIcon) {

        previewIcon.textContent =
            icons[data.eventType] || "🎉";

    }


    finalCard.classList.add(
        data.selectedTemplate
    );


    // =================================================
    // IF SHARED LINK
    // =================================================

    if (window.location.search) {

        const backButton =
            document.getElementById(
                "backButton"
            );

        const shareButton =
            document.getElementById(
                "shareButton"
            );

        if (backButton) {

            backButton.style.display =
                "none";

        }

        if (shareButton) {

            shareButton.style.display =
                "none";

        }

    }

}


// =====================================================
// BACK FROM PREVIEW
// =====================================================

function backToCustomize() {

    window.location.href =
        "customize.html";

}


// =====================================================
// SHARE INVITATION
// =====================================================

function shareInvitation() {

    const eventType =
        localStorage.getItem(
            "eventType"
        ) || "";

    const eventTitle =
        localStorage.getItem(
            "eventTitle"
        ) || "";

    const hostName =
        localStorage.getItem(
            "hostName"
        ) || "";

    const eventDate =
        localStorage.getItem(
            "eventDate"
        ) || "";

    const eventTime =
        localStorage.getItem(
            "eventTime"
        ) || "";

    const eventLocation =
        localStorage.getItem(
            "eventLocation"
        ) || "";

    const eventMessage =
        localStorage.getItem(
            "eventMessage"
        ) || "";

    const selectedTemplate =
        localStorage.getItem(
            "selectedTemplate"
        ) || "floral";


    // =================================================
    // CREATE SHARE URL
    // =================================================

    const shareURL =
        new URL(
            "preview.html",
            window.location.href
        );


    shareURL.searchParams.set(
        "eventType",
        eventType
    );

    shareURL.searchParams.set(
        "eventTitle",
        eventTitle
    );

    shareURL.searchParams.set(
        "hostName",
        hostName
    );

    shareURL.searchParams.set(
        "eventDate",
        eventDate
    );

    shareURL.searchParams.set(
        "eventTime",
        eventTime
    );

    shareURL.searchParams.set(
        "eventLocation",
        eventLocation
    );

    shareURL.searchParams.set(
        "eventMessage",
        eventMessage
    );

    shareURL.searchParams.set(
        "template",
        selectedTemplate
    );


    // =================================================
    // COPY LINK
    // =================================================

    navigator.clipboard.writeText(
        shareURL.href
    )
    .then(function () {

        alert(
            "Invitation link copied! 🔗"
        );

    })
    .catch(function () {

        prompt(
            "Copy your invitation link:",
            shareURL.href
        );

    });

}
// =========================
// CUSTOMIZE PAGE NAVIGATION
// =========================

function goToPreview() {
    window.location.href = "preview.html";
}

function backToTemplate() {
    window.location.href = "template.html";
}
