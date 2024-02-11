import { IonContent, IonHeader, IonInput, IonItem, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import SearchIcon from '../icons/SearchIcon';
import RecentlyPlayedImg from '../images/recentlyPlayedImg.png'
import { useState } from 'react';
import SearchHistoryContainer from '../components/SearchHistoryContainer';


 const Search: React.FC = () => {

  const [isInputFocused, setIsInputFocused] = useState(false);
  const [showSearchHistoryContainer, setShowSearchHistoryContainer] = useState(false);


  const genres = ['made for you', 'new releases', 'hindi', 'punjabi', 'tamil', 'telugu', 'charts', 'pop', 'indie', 'trending', 'love', 'discover', 'radio', 'mood', 'party', 'devotional', 'decades', 'hip-hop', 'dance/electronic', 'student', 'chill', 'gaming'];

  return (
    <IonPage>
      <IonHeader>  
        <IonToolbar >
          <IonTitle  >
          <div className='flex items-center gap-x-3'>
              <SearchIcon className='' width="24px" height="24px" />
              <IonInput
        className={`font-urbanist text-base font-medium leading-[18px] ${isInputFocused ? 'text-[#060307]' : 'text-[#99989A]'}`}
        placeholder="What do you want to listen to?"
        onFocus={() => {
          setIsInputFocused(true);
          setShowSearchHistoryContainer(true);
        }}
        onBlur={() => {
          setIsInputFocused(false);  
          setShowSearchHistoryContainer(false);
        }}
      />  
            </div>  
          </IonTitle>      
        </IonToolbar>    
      </IonHeader>
      <IonContent fullscreen>
        <div className='px-5 mt-7 mb-7'>

          {
            showSearchHistoryContainer ? (
              <SearchHistoryContainer />
            ) : (
              <div>
            <p className='text-[#060307] font-urbanist text-base font-semibold leading-normal'>Browse All</p>
            <div className='mt-4 grid grid-cols-2 gap-4'>
              {  
                genres?.map((title, i) => (
                  <div key={i} className='p-2.5 flex items-center gap-x-3 flex-shrink-0 rounded-[10px] bg-[#EDEDED]'>
                    <img className='w-11 h-11 rounded-xl' src={RecentlyPlayedImg} alt="-" />
                    <p className='text-[#060307] font-urbanist text-xs font-semibold leading-normal capitalize'>{title}</p>
                  </div>  
                ))
              }
              
            </div>
          </div>
            )
          }
            

          
          
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Search;
