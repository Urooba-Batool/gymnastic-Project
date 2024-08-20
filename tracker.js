document.getElementById('workout-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const workout = document.getElementById('workout').value;
    const startDate = document.getElementById('start-date').value;
    const endDate = document.getElementById('end-date').value;
    const completedReps = parseInt(document.getElementById('completed-reps').value);
    const totalReps = parseInt(document.getElementById('total-reps').value);

    // Calculate progress percentage
    const progress = ((completedReps / totalReps) * 100).toFixed(2);

    // Calculate remaining reps
    const remainingReps = totalReps - completedReps;

    // Display progress
    document.getElementById('workout-summary').textContent = `Workout: ${workout} (From: ${startDate} To: ${endDate})`;
    document.getElementById('progress-percentage').textContent = `Progress: ${progress}% completed`;
    document.getElementById('remaining-reps').textContent = `Remaining Reps: ${remainingReps}`;
    
    // Show the progress report section
    document.getElementById('progress-display').style.display = 'block';
});