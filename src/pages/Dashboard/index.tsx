import React, {useContext} from 'react';
import { View, Text , Button } from 'react-native';

import { AuthContext } from '../../contexts/AuthContext';


export default function Dashboard(){

  const {signOut} = useContext (AuthContext)
  return(
    <View>
      <Text>Tela Dashboar</Text>

      <Button
      title='Deslogar'
      onPress={signOut}
      />
    </View>
  )
}