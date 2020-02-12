import {createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchSreen from './src/Screens/SearchScreen';
import ResultsShowScreen from './src/Screens/ResultsShowScreen';

const navigator= createStackNavigator({
    Search:SearchSreen,
    Show:ResultsShowScreen
  },
  {
    initialRouteNameL:'Search',
    defaultNavigationOptions:{
      title:'Business Search'
    }
    
  }
)

export default createAppContainer(navigator);