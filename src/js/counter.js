$(document).ready(function () {

    // Get fields
    const firstValue = $("#firstValue");
    const secondValue = $("#secondValue");
    const thirdValue = $("#thirdValue");
    const firstNameValue = $(".name:eq(0)");
    const secondNameValue = $(".name:eq(1)");
    const thirdNameValue = $(".name:eq(2)");

    //Set count down date
    const countDownDate = new Date("Aug 19, 2020 12:30:00").getTime();

    function reloadTime() {
        //Get current time in seconds
        const now = new Date().getTime();

        //Get seconds to lottery
        const diff = Math.floor((countDownDate - now) / 1000);

        //Check if more then one day to lottery
        if (diff > 60 * 60 * 24) {
            //Calc time
            const days = Math.floor(diff / (60 * 60 * 24));
            const hours = Math.floor((diff % (60 * 60 * 24)) / (60 * 60));
            const minutes = Math.floor(((diff % (60 * 60 * 24)) % (60 * 60)) / 60);

            //Change elements value
            firstValue.text(String(days));
            secondValue.text(String(hours));
            thirdValue.text(String(minutes));

            //Change labels
            firstNameValue.text('days');
            secondNameValue.text('hours');
            thirdNameValue.text('minutes');


        } else {

            //Calc time
            const hours = Math.floor(diff / (60 * 60));
            const minutes = Math.floor((diff % (60 * 60)) / 60);
            const seconds = Math.floor((diff % (60 * 60)) % 60);

            //Change elements value
            firstValue.text(String(hours));
            secondValue.text(String(minutes));
            thirdValue.text(String(seconds));

            //Change labels
            firstNameValue.text('hours');
            secondNameValue.text('minutes');
            thirdNameValue.text('seconds');
        }
    }

    //Run function
    setInterval(reloadTime, 1000);
    reloadTime();

});
