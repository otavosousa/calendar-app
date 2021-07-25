function FactoryColor(){

    const color = {}

    function getColors(){

        return [
      
            {code: '#3498DB', name: 'Ciano'},
            {code: '#C0392B', name: 'Vermelho'},
            {code: '#9B59B6', name: 'Roxo'},
            {code: '#1F618D', name: 'Azul petróleo'},
            {code: '#4CAF50', name: 'Verde'},
            {code: '#FFEE58', name: 'Amarelo'},
            {code: '#F1948A', name: 'Salmão'},
            {code: '#7F8C8D', name: 'Cinza'}
        ]
    }
    
    color.getColors = getColors

    return color
}

export default FactoryColor