//  Initialize variable tasks to empty array
// Initialize variable sequence to 0

// Get add task button
// Add click event listener to add task button
  // Get value of task input
  // Call add task with task name

// Define add task function takes a task name
  // Create task object, passing in task name
  // Add task object to tasks array
  // Call create list item function
  // Add list item to bottom of todolist
  // Call create checkbox function
  // Add checkbox to list item
  // Call create span function with task name
  // Add value to list item

// Create define task function that takes a task name
  // Create and return object with
    // Id to be incremented as global count
    // Name key being the task name passed in and 
    // Complete key set to false

// Create an add list item function that takes task id
  // Create list item
  // Set list item id to task object id for reference

// Create add span item function
  // Create span
  // Set value of span to taskName
  // return span

// Create function for making checkbox input
  // Make input tag
  // Set the type of the input to checkbox
  // Set id to be task id + check box
  // Add click event for completing object to checkbox
    // Get the task with matching id of event target minus the checkbox
    // Complete becomes the opposite of itself
    // If complete is true
      // Add completed class to list item
    // Else 
      // Remove completed class from list item
    // Return checkbox
  