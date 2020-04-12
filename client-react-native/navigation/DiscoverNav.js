import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DiscoverPage from '../components/DiscoverPage';
import SearchPage from '../components/SearchPage';

const DiscoverNav = (props) => {
    return(
        <Stack.Navigator initialRouteName="Explore" headerMode="none">
            <Stack.Screen name="Explore" component={DiscoverPage} />
            <Stack.Screen name="Search" component={SearchPage} />
        </Stack.Navigator>
    )
    
}
const Stack = createStackNavigator();
export default DiscoverNav;