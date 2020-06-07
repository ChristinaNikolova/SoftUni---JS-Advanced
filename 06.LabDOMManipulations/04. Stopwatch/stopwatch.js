function stopwatch() {
   
    let $startButton = document.getElementById("startBtn");
    $startButton.addEventListener("click", startMyWatch);

    let $stopButton = document.getElementById("stopBtn");
    $stopButton.addEventListener("click", stopMyWatch);

    let $timeInput = document.getElementById("time");
    let interval = "";

    function startMyWatch(){
        $startButton.disabled = true;
        $stopButton.disabled = false;
        $timeInput.textContent = "00:00";

        interval = setInterval(tick, 1000);

        let seconds = 0;

        function tick() {
            seconds++;
            let currentMinute = ('0' + Math.floor(seconds / 60)).slice(-2);
            let currentSecond = ('0' + seconds % 60).slice(-2);
            $timeInput.textContent = `${currentMinute}:${currentSecond}`;
        }
    }

    function stopMyWatch(){
        $startButton.disabled = false;
        $stopButton.disabled = true;
        clearInterval(interval);
    }
}