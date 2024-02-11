import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import TabNavigator from './components/TabNavigator';
import Search from './pages/Search';
import Favourite from './pages/Favourite';
import SavedSongs from './pages/SavedSongs';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Languages from './pages/Languages';
import Edit from './pages/Edit';
import PlaySong from './components/PlaySong';
import CreatePlaylist from './pages/CreatePlaylist';
import Playlist from './pages/Playlist';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/search">
          <Search />  
        </Route>
        <Route exact path="/favourite">
          <Favourite />  
        </Route>
        <Route exact path="/saved">
          <SavedSongs />  
        </Route>
        <Route exact path="/profile">
          <Profile />  
        </Route>  
        <Route exact path="/settings">
          <Settings />
        </Route>
        <Route exact path="/languages">
          <Languages />
        </Route>
        <Route exact path="/edit">
          <Edit />
        </Route>
        <Route exact path="/playSong">
          <PlaySong />
        </Route>
        <Route exact path="/create-playlist">
          <CreatePlaylist />
        </Route>  
        <Route exact path="/playlist">
          <Playlist />
        </Route>
        <Route exact path="/">
          <Redirect to="/home" />  
        </Route>
      </IonRouterOutlet>
      <div className='absolute bottom-0'>
      <TabNavigator />
    </div>
    </IonReactRouter>  
  
  </IonApp>
);

export default App;
