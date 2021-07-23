function FactoryMonth(){

    const month = {}

    function getName(){

        return new Date().toLocaleString('default', { month: 'long' })
    }

    function getDaysName(){

        return ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']
    }

    function getDaysNumber(){
        
        const qtdDaysMonth = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate();
        const firstDayWeek = new Date(new Date().getFullYear(), new Date().getMonth(), 1).getDay()

        let daysWeek = []
        let daysMonth = []
        let dayCount = 0

        // create weeks
        for (let week = 0; week <= 5; week ++){

            // days of week
            for (let day = 0; day <= 6; day ++) {

                if(week === 0 && day >= firstDayWeek) {

                    dayCount = dayCount + 1
                    daysWeek = [...daysWeek, dayCount]
                } else if(week > 0 && dayCount < qtdDaysMonth) {

                    dayCount = dayCount + 1
                    daysWeek = [...daysWeek, dayCount]
                } else {

                    daysWeek = [...daysWeek, '']
                }
                
            }
            daysMonth = [...daysMonth, daysWeek]
            daysWeek = []
        }

        return daysMonth
    }

    month.getDaysName = getDaysName
    month.getDaysNumber = getDaysNumber
    month.getName = getName

    return month
}

export default FactoryMonth