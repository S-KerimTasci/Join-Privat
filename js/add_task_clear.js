/**
 * Clears the add task form 
 */
function clearForm() {
    document.getElementById('idInputTitleAddTaskOv').value = '';
    document.getElementById('idInputDescriptionAddTaskOv').value = '';
    document.getElementById('idInputAssignedToAddTaskDeskOv').value = '';
    document.getElementById('idInputAssignedToAddTaskOv').value = '';
    document.getElementById('idInputDueDateAddTaskOv').value = '';
    document.getElementById('idSelectCategoryAddTaskOv').value = '';

    clearSubtasks();

    clearSelectedContacts();

    removeHighlight();
}

/**
 * Clears the selected contacts in the add task form 
 */
function clearSelectedContacts() {
    let checkboxes = document.querySelectorAll('.chkHeight');
    checkboxes.forEach((checkbox) => {
        checkbox.checked = false;
    });

    task2.member = [];

    emptyContactHTML();

    hideContactList();
}

/**
 * Clears the subtask in the add task form 
 */
function clearSubtasks() {
    document.getElementById('idSubtaskAddTaskOv').value = '';
    document.getElementById('idRenderedSubtaskAddTaskOv').innerHTML = '';
    subtaskObj = [];
}
/**
 * Emptys the innerHTML of the div where the selcted contacts are displayed
 */
function emptyContactHTML() {
    let selectedUserAddTaskDeskOv = document.getElementById('idSelectedUserAddTaskDeskOv');
    let selectedUserAddTaskOv = document.getElementById('idSelectedUserAddTaskOv');
    let selectedUserAddTaskDesk = document.getElementById('idSelectedUserAddTaskDesk');
    let selectedUserAddTask = document.getElementById('idSelectedUserAddTask');

    if (selectedUserAddTaskDeskOv) {
        selectedUserAddTaskDeskOv.innerHTML = '';
    }

    if (selectedUserAddTaskOv) {
        selectedUserAddTaskOv.innerHTML = '';
    }

    if (selectedUserAddTaskDesk) {
        selectedUserAddTaskDesk.innerHTML = '';
    }

    if (selectedUserAddTask) {
        selectedUserAddTask.innerHTML = '';
    }
}

/**
 * Hides the list of contacts
 */
function hideContactList() {
    let conDesk = document.getElementById('idChkSelectMultUserOuterConDesk');
    let con = document.getElementById('idChkSelectMultUserOuterCon');
    let conDeskOv = document.getElementById('idChkSelectMultUserOuterConDeskOv');
    let conOv = document.getElementById('idChkSelectMultUserOuterConOv')
    let selectedUserAddTaskDeskOv = document.getElementById('idSelectedUserAddTaskDeskOv');
    let selectedUserAddTaskOv = document.getElementById('idSelectedUserAddTaskOv');
    let selectedUserAddTaskDesk = document.getElementById('idSelectedUserAddTaskDesk');
    let selectedUserAddTask = document.getElementById('idSelectedUserAddTask');

    if (conDesk) {
        conDesk.classList.add('d-none')
    }
    if (selectedUserAddTask) {
        selectedUserAddTaskDesk.classList.remove('d-none')
    }

    if (conOv) {
        conOv.classList.add('d-none')
    }
    if (selectedUserAddTaskOv) {
        selectedUserAddTaskOv.classList.remove('d-none')
    }

    if (con) {
        con.classList.add('d-none')
    }
    if (selectedUserAddTask) {
        selectedUserAddTask.classList.remove('d-none')
    }

    if (conDeskOv) {
        conDeskOv.classList.add('d-none')
    }
    if (selectedUserAddTaskDeskOv) {
        selectedUserAddTaskDeskOv.classList.remove('d-none')
    }
}