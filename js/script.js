// The Backend has to be migrated to Firebase


//const STORAGE_TOKEN = 'JCBM19KHMDXFWN16VAJWOY8L41ZV33EX7L3HYKWY';
//const STORAGE_URL = 'https://remote-storage.developerakademie.org/item';

const KEY_for_JSON_TASKS = 'Join-KT_tasks';
const KEY_for_JSON_PW = 'Join-KT_pw';
const KEY_for_JSON_CONTACS = 'Join-KT_contacts';
const COLORS =['#FF7A00', '#FF5EB3','#6E52FF','#9327FF','#00BEE8','#1FD7C1','#FF745E','#FFA35E','#FC71FF','#FFC701','#0038FF','#C3FF2B','#FFE62B','#FF4646','#FFBB2B'];
let taskJson = [];
let contactJSON = {};
let loginJson = {};
let afterSetItemServerAnswer = {};

// /**
//  * This function saves Data into the backend.
//  * 
//  * @param {string} key - Takes a key for any sort of data.
//  * @param {string} value - Takes a value in form of JSON.
//  * @returns the stringifyed data.
//  */
// async function setItem(key, value) {
//     const payload = { key, value, token: STORAGE_TOKEN };
//     return fetch(STORAGE_URL, { method: 'POST', body: JSON.stringify(payload)})
//     .then(res => res.json());
// }

/**
 * This function saves Data into localStorage.
 * 
 * @param {string} key - Takes a key for any sort of data.
 * @param {string} value - Takes a value in form of JSON.
 * @returns Promise that resolves with the stored data
 */
async function setItem(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
        return { data: { value: JSON.stringify(value) } };
    } catch (error) {
        console.error('Error saving to localStorage:', error);
        throw error;
    }
}

// /**
//  * This function recieves and loads Data from the backend.
//  * 
//  * @param {string} key - Key of an data type e.g. an object 
//  * @returns parsed Data from the backend.
//  */
// async function getItem(key) {
//     const url = `${STORAGE_URL}?key=${key}&token=${STORAGE_TOKEN}`;
//     return fetch(url).then(res => res.json());
// }


/**
* This function receives and loads Data from localStorage.
* 
* @param {string} key - Key of an data type e.g. an object 
* @returns Promise that resolves with the loaded data
*/
async function getItem(key) {
   try {
       const value = localStorage.getItem(key);
       if (value === null) {
           // Return empty data structure similar to original backend response
           return { data: { value: JSON.stringify([]) } };
       }
       return { data: { value: value } };
   } catch (error) {
       console.error('Error loading from localStorage:', error);
       throw error;
   }
}

/**
 * This function returns the first letters of member name i.e. "John Doe"
 * used in headFootTemplate.js and board.js
 * 
 * @param {string} member - this ist the full name of the member
 * @returns initials of user i.e. "JD" in upper case
 */
function memberInitials(member){
    let initials = member.split(' ').map(name => name[0]).join('');
    return initials.toUpperCase();
}

/**
 * this funktion returns the JSON based on the key
 * 
 * 
 * @param {const} key - which data should be requested
 * @returns - JSON
 */
async function loadJSON(key) {
    let serverAnswer = await getItem(key);
    return JSON.parse(serverAnswer.data.value);
}

/**
 * This function prevents the onclick event of the parent, used in boardSigleTask.js and boardSingleTaskOverlay.js
 * 
 * @param {event} event - onclick event
 */
function innerClick(event) {
    event.stopPropagation(); 
  }

/**
   * Initializes demo data in localStorage if it doesn't exist
   */
async function initDemoData() {
    try {
      // Check if data already exists
      const existingTasks = localStorage.getItem(KEY_for_JSON_TASKS);
      const existingContacts = localStorage.getItem(KEY_for_JSON_CONTACS);
      const existingUsers = localStorage.getItem(KEY_for_JSON_PW);
  
      // Only set demo data if it doesn't exist
      if (!existingTasks) {
        await setItem(KEY_for_JSON_TASKS, DEMO_TASKS);
      }
      if (!existingContacts) {
        await setItem(KEY_for_JSON_CONTACS, DEMO_CONTACTS);
      }
      if (!existingUsers) {
        await setItem(KEY_for_JSON_PW, DEMO_USERS);
      }
    } catch (error) {
      console.error('Error initializing demo data:', error);
    }
  }
  
  // Call this function when your application starts
  document.addEventListener('DOMContentLoaded', initDemoData);


// Demo data
const DEMO_TASKS = [
    {
      "taskId": 1,
      "taskType": "User Story",
      "dueDate": 1734480000000, // December 18, 2024
      "status": "toDo",
      "headline": "Website Design Implementation",
      "description": "Create responsive website design following the provided mockups",
      "doneSubTasks": 2,
      "subTaskTotal": 4,
      "subTaskText": [
        { "label": "Header section", "checked": true },
        { "label": "Main navigation", "checked": true },
        { "label": "Responsive layout", "checked": false },
        { "label": "Footer design", "checked": false }
      ],
      "member": ["Anton Mayer", "Anja Schulz"],
      "urgency": "medium"
    },
    {
      "taskId": 2,
      "taskType": "Technical Task",
      "dueDate": 1732060800000, // November 20, 2024
      "status": "inProgress",
      "headline": "Database Schema Design",
      "description": "Design and implement database schema for user management",
      "doneSubTasks": 1,
      "subTaskTotal": 3,
      "subTaskText": [
        { "label": "User table design", "checked": true },
        { "label": "Relationships mapping", "checked": false },
        { "label": "Indexing strategy", "checked": false }
      ],
      "member": ["David Eisenberg"],
      "urgency": "urgent"
    }
  ];
  
  const DEMO_CONTACTS = [
    {
      "email": "anton@example.com",
      "initials": "AM",
      "name": "Anton Mayer",
      "bgColor": "#FF7A00",
      "phone": "+49 1111 111 11 1"
    },
    {
      "email": "anja.schulz@example.com",
      "initials": "AS",
      "name": "Anja Schulz",
      "bgColor": "#FF5EB3",
      "phone": "+49 2222 222 22 2"
    },
    {
      "email": "david.e@example.com",
      "initials": "DE",
      "name": "David Eisenberg",
      "bgColor": "#6E52FF",
      "phone": "+49 3333 333 33 3"
    }
  ];
  
  const DEMO_USERS = [
    {
      "name": "Guest User",
      "email": "guest@example.com",
      "password": "guest123",
      "initials": "GU"
    },
    {
      "name": "Anton Mayer",
      "email": "anton@example.com",
      "password": "anton123",
      "initials": "AM"
    }
  ];