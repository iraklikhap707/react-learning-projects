import { useState} from 'react'
import './App.css'
import {ChatInput} from './components/ChatInput.jsx';
import ChatMessages from './components/ChatMessages.jsx';


 function App(){
            const [chatMessages,setChatMessages] = useState( [{


            message: ' hello chatbot',
            sender: 'user',
            id:'id1'
          },{
               message: 'Hello! How can i help you',
            sender: 'robot',
            id:'id2'

          },
          { message: ' can you get me todays date?',
            sender: 'user',
            id:'id3'

          },
          { message: 'Today is 17 Octomber',
            sender: 'robot',
            id:'id4'

          }]);
          // const [chatMessages, setChatMessages] = array;
        //   const chatMessages = array[0];                ARRAY DESTRUCTING
        // const setChatMessages = array[1]

        

        return(
          <div className="app-container">
            
            
            <ChatMessages 
              chatMessages={chatMessages}
            />
            <ChatInput 
              chatMessages={chatMessages}
              setChatMessages={setChatMessages}
              />
           </div>
        );
      }
export default App
