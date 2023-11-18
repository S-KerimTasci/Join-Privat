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
    

    // Uncheck all checkboxes
    let checkboxes = document.querySelectorAll('.chkHeight');
    checkboxes.forEach((checkbox) => {
        checkbox.checked = false;
    });

    // Reset the task2.member array
    task2.member = [];

    let selectedUserAddTaskDeskOv = document.getElementById('idSelectedUserAddTaskDeskOv');
    if (selectedUserAddTaskDeskOv) {
        selectedUserAddTaskDeskOv.innerHTML = '';
    }

    let selectedUserAddTaskOv = document.getElementById('idSelectedUserAddTaskOv');
    if (selectedUserAddTaskOv) {
        selectedUserAddTaskOv.innerHTML = '';
    }

    let selectedUserAddTaskDesk = document.getElementById('idSelectedUserAddTaskDesk');
    if (selectedUserAddTaskDesk) {
        selectedUserAddTaskDesk.innerHTML = '';
    }

    let selectedUserAddTask = document.getElementById('idSelectedUserAddTask');
    if (selectedUserAddTask) {
        selectedUserAddTask.innerHTML = '';
    }

    let conDesk = document.getElementById('idChkSelectMultUserOuterConDesk');
    if (conDesk) {
        conDesk.classList.add('d-none') 
    }
    if (selectedUserAddTask) {
        selectedUserAddTaskDesk.classList.remove('d-none')
    }
    
    let xy = document.getElementById('idChkSelectMultUserOuterCon');
    if (xy) {
        xy.classList.add('d-none') 
    }
    if (selectedUserAddTask) {
        selectedUserAddTask.classList.remove('d-none')
    }

    let zit = document.getElementById('idChkSelectMultUserOuterConDeskOv')
    if (zit) {
        zit.classList.add('d-none')
    }
    if (selectedUserAddTaskDeskOv) {
        selectedUserAddTaskDeskOv.classList.remove('d-none')
    }
}

/**
 * Clears the subtask in the add task form 
 */
function clearSubtasks() {
    document.getElementById('idSubtaskAddTaskOv').value = '';
    document.getElementById('idRenderedSubtaskAddTaskOv').innerHTML = '';
    subtaskObj = [];
}