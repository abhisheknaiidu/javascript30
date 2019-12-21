import React,{ useState, useEffect} from 'react';
import './App.css';
import { Form,Card,Image, Icon } from 'semantic-ui-react';


function App() {
  const [name,setName] = useState('');
  const [userName, setuserName] =useState('');
  const  [following,setFollowing] = useState('');
  const [follower,setFollower] = useState('');
  const [repos, setRepos] = useState('');
  const [avatar, setAvatar] = useState('');
  const [bio, setBio] = useState('');
  const [userInput, setUserInput] = useState('');
  const [error, setError] = useState('');
  

  useEffect(() => {
     fetch('https://api.github.com/users/abhisheknaiidu')
         .then(res => res.json())
         .then(data => {
            console.log(data);
            setData(data);
         });
  },[]);

 const setData = ({name,login,follower,following,public_repos,avatar_url,bio, message}) =>
   {
     setName(name);
     setuserName(login);
     setFollower(follower);
     setFollowing(following);
     setRepos(public_repos);
     setAvatar(avatar_url);
     setBio(bio);
};

const handleInput = (event) => {
  
  console.log(event);
  setUserInput(event.target.value);

};


const handleSubmit = () => {
   fetch(`https://api.github.com/users/${userInput}`)
       .then(res => res.json())
       .then(data=> {
         if(data.message) {
           setError(data.message);
         } else {
           setData(data);
         }
       });
};


    return (
    <div className="App">
      <div className="navbar"><h3>Github Search Portal</h3></div>
      <div className="search">
      <Form onSubmit={handleSubmit}>
    <Form.Group>
    <Form.Input placeholder="Github user" name="github user" onChange={handleInput} />
    <Form.Button content="Search" />
    </Form.Group>
    </Form>
      </div>
      {error ? (<h1>{error}</h1>) : (<div className="card">
      <Card>
    <Image src={avatar} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{name}</Card.Header>
      <Card.Header>{userName}</Card.Header>
      <Card.Description>
        {bio}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        {follower} Followers
      </a>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        {repos} Repos
      </a>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        {following} Following
      </a>
    </Card.Content>
  </Card>
      </div>)}
      
    </div>
  );
}

export default App;
