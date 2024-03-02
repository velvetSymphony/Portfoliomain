document.addEventListener("DOMContentLoaded", updatePolls)

function updatePolls() {
    const poll = document.getElementById('poll')
    const leaderboard = document.getElementById('leaderboard')
    poll.addEventListener("submit", function trigger(event) {
            console.log('Event Object:', event)
       }
    )
}
