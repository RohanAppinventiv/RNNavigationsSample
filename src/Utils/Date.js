
export default function getTodaysDate() {
const currentTimeStamp = Date.now();

// Create a new Date object using the timestamp
const currentDate = new Date(currentTimeStamp);

// Extract year, month, and day
const year = currentDate.getUTCFullYear();
const month = String(currentDate.getUTCMonth() + 1).padStart(2, '0'); // Months are zero-based, so add 1
const day = String(currentDate.getUTCDate()).padStart(2, '0');

// Create the desired date format (e.g., "2023-01-30")
return `${year}-${month}-${day}`;
}


export function getMinDate() {
    const currentTimeStamp = Date.now();
    
    // Create a new Date object using the timestamp
    const currentDate = new Date(currentTimeStamp);
    
    // Extract year, month, and day
    const year = currentDate.getUTCFullYear();
    const month = String(currentDate.getUTCMonth() + 1).padStart(2, '0'); // Months are zero-based, so add 1
    const day = String(currentDate.getUTCDate()).padStart(2, '0');
    
    // Create the desired date format (e.g., "2023-01-30")
    return `${year-18}-${month}-${day}`;
    
    }