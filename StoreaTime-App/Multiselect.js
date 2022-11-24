import React, { useState } from 'react'
import { Text, View } from 'react-native'
import SelectBox from 'react-native-multi-selectbox'
import { xorBy } from 'lodash'

// Options data must contain 'item' & 'id' keys

const K_OPTIONS = [
  {
    item: 'Bulgogi',
    id: '1',
  },
  {
    item: 'Korean',
    id: '2',
  },
  {
    item: 'Family',
    id: '3',
  },
  {
    item: 'Angel',
    id: '4',
  },
  {
    item: 'Jianna',
    id: '5',
  },
  {
    item: 'Kaitlyn',
    id: '6',
  },
  {
    item: 'James',
    id: '7',
  },
  {
    item: 'Gatitio',
    id: '8',
  }
]

function App() {
  const [selectedTeam, setSelectedTeam] = useState({})
  const [selectedTeams, setSelectedTeams] = useState([])
  return (
    <View style={{ margin: 30 }}>
      <View style={{ height: 40 }} />
      <Text style={{ fontSize: 17, fontFamily: 'JakartaSansBold', color: 'white', right: 30}}>Tags (Optional)</Text>
      <SelectBox
        label=""
        options={K_OPTIONS}
        selectedValues={selectedTeams}
        onMultiSelect={onMultiChange()}
        onTapClose={onMultiChange()}
        isMulti
        inputPlaceholder={'e.g. “Bulgogi”, “Korean”'}
        searchIconColor={'white'}
        arrowIconColor={'#43009B'}
        toggleIconColor={'#43009B'}
        containerStyle={{backgroundColor: 'white', width: 358, height: 60, borderRadius: 60,
        right: 30, paddingLeft: 20, paddingBottom: 2, paddingTop: 15}}
        selectedItemStyle={{backgroundColor: 'red'}}
        optionsLabelStyle={{fontSize: 17, fontFamily: 'JakartaSansBold', color: 'white'}}
        multiOptionContainerStyle={{backgroundColor: '#43009B', width: 116, height: 32, marginLeft: 0, marginTop: 0}}
        multiOptionsLabelStyle={{color:'white', fontSize: 15, fontFamily: 'JakartaSans'}}
        inputFilterStyle={{fontFamily: 'JakartaSansBold', color: 'white', fontSize: 13}}
      />
    </View>
  )

  function onMultiChange() {
    return (item) => setSelectedTeams(xorBy(selectedTeams, [item], 'id'))
  }

  function onChange() {
    return (val) => setSelectedTeam(val)
  }
}

export default App