function FactoryWeek(){

    const week = {}

    function getNames(){

        return ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado']
    }

    week.getNames = getNames

    return week
}

export default FactoryWeek