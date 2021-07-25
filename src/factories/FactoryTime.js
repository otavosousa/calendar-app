function FactoryTime(){

    const time = {}

    function getHours(){

        let hours = []
        for (let h = 0; h <= 23; h ++){
            hours = [...hours, String(h)]
        }
        return hours
    }

    function getMinutes(){

        let minutes = []
        for (let m = 0; m <= 59; m ++){
            minutes = [...minutes, String(m)]
        }
        return minutes
    }

    time.getHours = getHours
    time.getMinutes = getMinutes

    return time
}

export default FactoryTime