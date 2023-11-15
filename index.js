let isModalOpen = false;

function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false;
        document.body.classList.remove("dimmer")
        return document.body.classList.remove("modal--open")
    }
    isModalOpen = true;
    document.body.classList += " modal--open dimmer"
}

isContactOpen = false;

function toggleContact() {
    if (isContactOpen) {
        isContactOpen = false;
        document.body.classList.remove("dimmer")
        return document.body.classList.remove("contact--open")
    }
    isContactOpen = true;
    document.body.classList += " contact--open dimmer"
}

isScheduleOpen = false;

function toggleSchedule() {
    if (isScheduleOpen) {
        isScheduleOpen = false;
        document.body.classList.remove("dimmer")
        return document.body.classList.remove("schedule--open")
    }
    isScheduleOpen = true;
    document.body.classList += " schedule--open dimmer"
}
